import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const translations = {
  en: {
    title: 'Certificate of Completion',
    subtitle: 'This is to certify that',
    message: 'has successfully completed all theological modules of The True Seed Study Series. By demonstrating dedication to the understanding of Divine Prophecy and Biblical Truth, the recipient is recognized for their commitment to the journey of faith.',
    dateLabel: 'Given this day',
    signatureLabel: 'Authorized Signature'
  },
  tl: {
    title: 'Katibayan ng Pagtatapos',
    subtitle: 'Ito ay nagpapatunay na si',
    message: 'ay matagumpay na nakatapos ng lahat ng mga teolohikong modyul ng The True Seed Study Series. Sa pamamagitan ng pagpapakita ng dedikasyon sa pag-unawa sa Banal na Hula at Katotohanan sa Biblia, ang tumatanggap ay kinikilala sa kaniyang komitment sa paglalakbay ng pananampalataya.',
    dateLabel: 'Iginawad ngayong araw',
    signatureLabel: 'Lagda ng May-pahintulot'
  },
  es: {
    title: 'Certificado de Finalización',
    subtitle: 'Esto certifica que',
    message: 'ha completado con éxito todos los módulos teológicos de la Serie de Estudio de The True Seed. Al demostrar dedicación a la comprensión de la Profecía Divina y la Verdad Bíblica, el destinatario es reconocido por su compromiso con el camino de la fe.',
    dateLabel: 'Dado este día',
    signatureLabel: 'Firma Autorizada'
  }
};

export const generateCertificate = async (userName: string, date: string, lang: 'en' | 'tl' | 'es') => {
  // Create an iframe to isolate the certificate generation
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '1050px';
  iframe.style.height = '800px';
  iframe.style.border = 'none';
  iframe.style.pointerEvents = 'none';
  iframe.style.opacity = '0';
  iframe.style.zIndex = '-1000';
  
  document.body.appendChild(iframe);
  
  const iframeDoc = iframe.contentWindow?.document;
  if (!iframeDoc) return;

  const t = translations[lang] || translations.en;
  
  const certificateHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lora:ital,wght@0,400;0,700;1,400&family=UnifrakturMaguntia&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; padding: 0; background: #ffffff; }
        .cert-container {
          width: 1000px;
          height: 750px;
          padding: 40px 60px;
          box-sizing: border-box;
          border: 20px solid #1a365d;
          background: radial-gradient(circle, #fffaf0 0%, #ffffff 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          color: #2d3748;
          font-family: 'Lora', serif;
          gap: 12px;
        }
        
        .inner-border {
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          bottom: 15px;
          border: 2px solid #c5a059;
          pointer-events: none;
        }

        .corner-decoration {
          position: absolute;
          width: 70px;
          height: 70px;
          border: 4px solid #c5a059;
        }
        .top-left { top: 30px; left: 30px; border-right: none; border-bottom: none; }
        .top-right { top: 30px; right: 30px; border-left: none; border-bottom: none; }
        .bottom-left { bottom: 30px; left: 30px; border-right: none; border-top: none; }
        .bottom-right { bottom: 30px; right: 30px; border-left: none; border-top: none; }

        .header { margin-bottom: 5px; }
        .logo-box {
          width: 130px;
          height: 130px;
          margin: 0 auto 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img { max-width: 100%; max-height: 100%; object-fit: contain; }

        h1 {
          font-family: 'Cinzel', serif;
          font-size: 46px;
          color: #1a365d;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .separator {
          width: 180px;
          height: 3px;
          background: linear-gradient(to right, transparent, #c5a059, transparent);
          margin: 10px auto;
        }

        .subtitle { font-size: 18px; font-style: italic; color: #718096; margin-bottom: 5px; }
        .user-name {
          font-family: 'Cinzel', serif;
          font-size: 42px;
          color: #1a365d;
          margin: 0;
          display: inline-block;
          padding: 0 40px 5px;
        }

        .message { font-size: 15px; max-width: 660px; line-height: 1.6; margin: 10px auto 10px; color: #4a5568; }
        
        .footer-section { 
          width: 100%; 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          margin-top: 5px;
        }
        
        .authority-box {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px; /* Clear vertical gap between elements */
        }

        .fraktur-signature {
          font-family: 'UnifrakturMaguntia', cursive;
          font-size: 50px;
          color: #1a365d;
          line-height: 1;
          margin-bottom: 10px; /* Specific gap below signature to prevent touching date */
          margin-top: 10px;    /* Tightened top gap */
        }

        .date-line {
          width: 360px;
          border-top: 2px solid #c5a059;
          padding-top: 6px;
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          color: #718096;
          letter-spacing: 2px;
        }
        
        .date-value {
          font-family: 'Lora', serif;
          font-size: 19px;
          color: #1a365d;
          margin-bottom: 2px; /* Tight gap to line */
          font-weight: bold;
        }

        .seal {
          position: absolute;
          bottom: 40px;
          right: 50px;
          width: 90px;
          height: 90px;
          background: #fdf5e6;
          border: 2px dashed #c5a059;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Cinzel', serif;
          font-size: 8px;
          color: #c5a059;
          transform: rotate(-15deg);
        }
      </style>
    </head>
    <body>
      <div id="capture-area" class="cert-container">
        <div class="inner-border"></div>
        <div class="corner-decoration top-left"></div>
        <div class="corner-decoration top-right"></div>
        <div class="corner-decoration bottom-left"></div>
        <div class="corner-decoration bottom-right"></div>
        
        <div class="header">
          <div class="logo-box">
            <img src="/logo.png" class="logo-img" />
          </div>
          <h1>${t.title}</h1>
          <div class="separator"></div>
        </div>

        <div class="content">
          <p class="subtitle">${t.subtitle}</p>
          <h2 class="user-name">${userName}</h2>
          <p class="message">${t.message}</p>
        </div>

        <div class="footer-section">
          <div class="authority-box">
            <div class="fraktur-signature">𝔉𝔤𝔩𝔢𝔰𝔦𝔞 𝔑𝔦 ℭ𝔯𝔦𝔰𝔱𝔬</div>
            <div class="date-value">${date}</div>
            <div class="date-line">${t.dateLabel}</div>
          </div>
        </div>
        
        <div class="seal">
          <div style="font-weight: bold;">OFFICIAL</div>
          <div>TRUE SEED</div>
          <div>SERIES</div>
        </div>
      </div>
    </body>
    </html>
  `;

  iframeDoc.open();
  iframeDoc.write(certificateHtml);
  iframeDoc.close();

  // Wait for images and fonts to load
  await new Promise(resolve => {
    iframe.onload = () => setTimeout(resolve, 1500);
    setTimeout(resolve, 3000); // Robust fallback
  });

  try {
    const captureArea = iframeDoc.getElementById('capture-area');
    if (!captureArea) throw new Error('Capture area not found');

    const canvas = await html2canvas(captureArea, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1000, 750]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, 1000, 750);
    pdf.save(`The_True_Seed_Certificate_${userName.replace(/[^a-z0-9]/gi, '_')}.pdf`);
  } catch (err) {
    console.error('Certificate generation failed:', err);
  } finally {
    document.body.removeChild(iframe);
  }
};
