<div align="center">
  <img width="800" alt="The True Seed Banner" src="https://images.unsplash.com/photo-1544411136-1eef3db81d6f?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3" />
  <h1 align="center">The True Seed</h1>
  <p align="center">A Progressive Web App (PWA) exploring the theological timeline and biblical harmony of the Iglesia Ni Cristo.</p>
</div>

---

## 📖 Overview

**The True Seed** is a full-stack web application designed to present profound biblical studies, historical prophecies, and interactive modules. Built with a heavy emphasis on dynamic UI interactions, the app provides a highly responsive, mobile-first approach to engaging with deeply rooted theological concepts.

### ✨ Key Features
* **Bilingual Support:** Complete UI and lesson content translation targeting English and Tagalog audiences.
* **Offline First (PWA):** Installs natively on Android, iOS, and desktop. Leverages Vite PWA plugins and service workers to aggressively cache PDF Study Guides and content, enabling fully offline study mode.
* **Full-Stack Admin & SQLite Backend:** Includes an Express.js backend API and `better-sqlite3` database tailored to handle user tracking and administrative inquiries.
* **Cloud Progress Sync:** Users can securely Register and Sign in to synchronize their reading progress and quiz modules between devices seamlessly.
* **Interactive Quizzes:** End-of-lesson assessment checks utilizing dynamic Zustand application state tracking.
* **Fully Audited & Tested:** Extensive End-to-End browser simulation testing provided by Microsoft Playwright, alongside complete W3C ARIA Accessible UI development.

---

## 🚀 Technology Stack
* **Frontend:** React 18, Vite, Tailwind CSS styles, Framer Motion animations, Lucide React icons.
* **State Management:** Zustand with Session/Local Storage persistence.
* **Backend:** Express.js + Node.js
* **Database:** `better-sqlite3` (SQLite3)
* **Security & Auth:** `bcryptjs` and `jsonwebtoken` (JWT).
* **Testing:** Playwright for E2E testing, Vitest for unit testing.

---

## 🏗️ Folder Structure

```text
the-true-seed/
├── src/
│   ├── components/       # Reusable UI components (AuthModal, Quizzes, UI buttons)
│   ├── content/          # Markdown and localized text content for lesson modules
│   ├── data/             # Lesson structural definitions and data exports
│   ├── store/            # Zustand global state management (useAppStore.ts)
│   ├── types/            # TypeScript interfaces
│   ├── AdminDashboard.tsx# The authenticated portal to view db inquiries
│   ├── App.tsx           # React Application Router and root layout
│   ├── BaptismPage.tsx   # Informational secondary page
│   ├── StudyPage.tsx     # The primary Study Center listing all modules
│   └── main.tsx          # Initial entry point
├── server.ts             # Express REST API, SQLite driver, and Auth Middleware
├── vite.config.ts        # Vite build configurations and PWA manifest setups
├── inquiries.db          # Auto-generated SQLite local database
├── package.json          # Node scripts and dependencies
└── playwright.config.ts  # End-to-End testing configuration
```

---

## 💻 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)

### Installation
1. Clone the repository and navigate inside the folder.
2. Install the application dependencies:
   ```bash
   npm install
   ```

### Running Locally (Development Mode)
To spin up both the Express Backend and the proxy Vite React frontend concurrently:
```bash
npm run start
```
The application will launch on `http://localhost:3000`.

### Production Build
When you are ready to prepare for deployment or run the compiled output:
1. Build the frontend architecture and PWA service workers:
   ```bash
   npm run build
   ```
2. Once the `dist/` directory generates successfully, boot the Express backend which seamlessly serves the compiled static payload:
   ```bash
   npm run start
   ```

---

## 🧪 Testing
The True Seed utilizes robust testing measures to ensure the integrity of the application.

* **Playwright End-to-End Tests**: Simulates a real user browser to click through navigation, submit inquiries, and validate contact forms.
  ```bash
  npx playwright test
  ```
  *To view the final HTML report, run `npx playwright show-report`*

* **Vitest Unit Testing**: Validates individual React components and logic scripts.
  ```bash
  npm run test
  ```

---

## 🛡️ License
Proprietary layout. Content belongs exclusively to the Iglesia Ni Cristo repository of doctrines. All Rights Reserved.
