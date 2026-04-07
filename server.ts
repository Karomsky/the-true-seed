import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import Database from "better-sqlite3";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database(process.env.DB_PATH || "inquiries.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER PRIMARY KEY,
    completed_lessons TEXT DEFAULT '[]',
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS profiles (
    user_id INTEGER PRIMARY KEY,
    full_name TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT,
    language TEXT,
    path TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export async function createServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  app.use(express.json());

  app.post("/api/inquiry", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // 1. Save to Database
      const stmt = db.prepare("INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)");
      stmt.run(name, email, message);

      // 2. Attempt to send Email
      const recipient = process.env.INQUIRY_RECIPIENT || "rova2k723@gmail.com";
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: false, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"The True Seed Inquiry" <${smtpUser}>`,
          to: recipient,
          subject: `New Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <h3>New Inquiry Received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });

        res.json({ success: true, message: "Inquiry saved and email sent." });
      } else {
        // If no SMTP config, we still saved to DB
        console.warn("SMTP credentials missing. Inquiry saved to database only.");
        res.json({
          success: true,
          message: "Inquiry saved to database. (Email not sent: SMTP credentials missing in settings)",
          dbOnly: true
        });
      }
    } catch (error) {
      console.error("Error handling inquiry:", error);
      res.status(500).json({ error: "Failed to process inquiry" });
    }
  });

  // Admin Authentication Middleware
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "trueseed-admin";
  const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const key = req.headers["x-admin-key"];
    if (key === ADMIN_PASSWORD) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  };

  // User Authentication & Progress Synchronization
  const JWT_SECRET = process.env.JWT_SECRET || "trueseed-super-secret-key-2024";

  const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Access denied" });

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) return res.status(403).json({ error: "Invalid token" });
      (req as any).user = user;
      next();
    });
  };

  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      res.json({ success: true, token: ADMIN_PASSWORD });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  });

  app.get("/api/admin/inquiries", requireAdmin, (req, res) => {
    try {
      const rows = db.prepare("SELECT * FROM inquiries ORDER BY created_at DESC").all();
      res.json(rows);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  app.get("/api/admin/stats", requireAdmin, (req, res) => {
    try {
      const stats = {
        totalInquiries: db.prepare("SELECT COUNT(*) as count FROM inquiries").get().count,
        totalUsers: db.prepare("SELECT COUNT(*) as count FROM users").get().count,
        totalVisits: db.prepare("SELECT COUNT(*) as count FROM analytics").get().count,
        languageStats: db.prepare("SELECT language, COUNT(*) as count FROM analytics GROUP BY language").all(),
        recentVisits: db.prepare("SELECT * FROM analytics ORDER BY created_at DESC LIMIT 100").all(),
        userProgress: db.prepare(`
          SELECT u.email, p.full_name, pr.completed_lessons 
          FROM users u 
          LEFT JOIN profiles p ON u.id = p.user_id
          LEFT JOIN progress pr ON u.id = pr.user_id
        `).all().map((row: any) => ({
          ...row,
          completedCount: JSON.parse(row.completed_lessons || '[]').length
        }))
      };
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  app.post("/api/analytics/visit", (req, res) => {
    const { session_id, language, path } = req.body;
    try {
      db.prepare("INSERT INTO analytics (session_id, language, path) VALUES (?, ?, ?)").run(session_id, language, path);
      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ error: "Failed to log visit" });
    }
  });

  app.patch("/api/user/profile", authenticateToken, (req, res) => {
    const userId = (req as any).user.id;
    const { full_name } = req.body;
    try {
      db.prepare("INSERT INTO profiles (user_id, full_name) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET full_name = ?").run(userId, full_name, full_name);
      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ error: "Failed to update profile" });
    }
  });

  app.delete("/api/admin/inquiries/:id", requireAdmin, (req, res) => {
    const { id } = req.params;
    try {
      const result = db.prepare("DELETE FROM inquiries WHERE id = ?").run(id);
      if (result.changes > 0) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: "Inquiry not found" });
      }
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      res.status(500).json({ error: "Failed to delete inquiry" });
    }
  });

  app.post("/api/admin/reality-check-notify", async (req, res) => {
    const { full_name, congregation, location_url, minister_name, photo_url, student_email, country } = req.body;
    const recipient = process.env.INQUIRY_RECIPIENT || "rova2k723@gmail.com";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: false,
          auth: { user: smtpUser, pass: smtpPass },
        });

        // 1. Send Notification to Admin
        await transporter.sendMail({
          from: `"True Seed Reality Check" <${smtpUser}>`,
          to: recipient,
          subject: `✨ Reality Check Submitted: ${full_name || 'Anonymous Student'}`,
          html: `
            <div style="font-family: serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 40px; border-radius: 20px;">
              <h2 style="color: #D4AF37; text-align: center; font-size: 24px;">New Reality Check Submission</h2>
              <div style="background: #fdfbf7; padding: 25px; border-radius: 15px; margin: 30px 0;">
                <p><strong>Student Name:</strong> ${full_name || 'Anonymous'}</p>
                <p><strong>Student Email:</strong> ${student_email || 'Not Provided'}</p>
                <p><strong>Country:</strong> ${country || 'Not Provided'}</p>
                <p><strong>Congregation:</strong> ${congregation}</p>
                <p><strong>Location:</strong> <a href="${location_url}" style="color: #D4AF37;">View on Google Maps</a></p>
                <p><strong>Minister:</strong> ${minister_name}</p>
              </div>
              ${photo_url ? `<div style="text-align: center; margin: 30px 0;"><img src="${photo_url}" style="max-width: 100%; border-radius: 15px;" /></div>` : ''}
            </div>
          `,
        });

        // 2. Send "Thank You" Email to Student (if email provided)
        if (student_email) {
          const isOutsidePH = country && !['philippines', 'ph', 'pilipinas'].includes(country.toLowerCase().trim());
          
          await transporter.sendMail({
            from: `"The True Seed" <${smtpUser}>`,
            to: student_email,
            subject: `Congratulations on your Reality Check, ${full_name || 'Student'}!`,
            html: `
              <div style="font-family: serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 40px; border-radius: 20px;">
                <h2 style="color: #D4AF37; text-align: center;">Mission Accomplished!</h2>
                <p>Dear ${full_name || 'Student'},</p>
                <p>Congratulations on completing your <strong>Reality Check</strong> challenge. Your dedication to seeking the truth is a blessing.</p>
                
                ${isOutsidePH ? `
                  <p>If you feel moved to support our efforts in translation and hosting, you may do so via bank transfer:</p>
                  
                  <div style="background: #f8f9fa; border: 1px solid #e9ecef; padding: 25px; border-radius: 15px; margin: 30px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0; font-size: 16px; text-transform: uppercase;">Bank Transfer Details</h3>
                    <p style="margin: 5px 0;"><strong>Bank Name:</strong> BDO Unibank (USD Account)</p>
                    <p style="margin: 5px 0;"><strong>Account Holder:</strong> ROMEO V ALVAREZ</p>
                    <p style="margin: 5px 0;"><strong>Account Number:</strong> 1089 4004 7724</p>
                    <p style="margin: 5px 0;"><strong>SWIFT Code:</strong> BNORPHMM</p>
                    <p style="font-size: 12px; color: #666; margin-top: 15px;"><em>Please use "True Seed Support" as the reference.</em></p>
                  </div>

                  <p style="font-size: 14px; line-height: 1.6; color: #444;">
                    Every contribution, no matter the size, ensures that the True Word continues to reach seekers across the ends of the earth.
                  </p>
                ` : ''}
                
                <p style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; font-size: 12px; color: #999; text-align: center;">
                  The True Seed Administration
                </p>
              </div>
            `,
          });
        }

        res.json({ success: true });
      } catch (error) {
        console.error("Reality check notification failed:", error);
        res.status(500).json({ error: "Failed to send notification" });
      }
    } else {
      res.json({ success: true, message: "SMTP not configured" });
    }
  });

  app.post("/api/auth/register", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing fields" });

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const stmt = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");
      const info = stmt.run(email, hashedPassword);

      db.prepare("INSERT INTO progress (user_id) VALUES (?)").run(info.lastInsertRowid);

      const token = jwt.sign({ id: info.lastInsertRowid, email }, JWT_SECRET);
      res.json({ token, user: { id: info.lastInsertRowid, email } });
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        res.status(400).json({ error: "Email already exists" });
      } else {
        res.status(500).json({ error: "Registration failed" });
      }
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email) as any;
      if (!user) return res.status(400).json({ error: "User not found" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).json({ error: "Invalid password" });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
      res.json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  app.get("/api/user/progress", authenticateToken, (req, res) => {
    const userId = (req as any).user.id;
    try {
      const progress = db.prepare("SELECT completed_lessons FROM progress WHERE user_id = ?").get(userId) as any;
      res.json({ completed_lessons: progress ? JSON.parse(progress.completed_lessons) : [] });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch progress" });
    }
  });

  app.post("/api/user/progress", authenticateToken, (req, res) => {
    const userId = (req as any).user.id;
    const { completed_lessons } = req.body;

    try {
      db.prepare("UPDATE progress SET completed_lessons = ? WHERE user_id = ?").run(JSON.stringify(completed_lessons), userId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update progress" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        fs: { strict: false }
      },
      appType: "spa",
      root: process.cwd(),
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

  return app;
}

if (process.env.NODE_ENV !== 'test') {
  createServer();
}
