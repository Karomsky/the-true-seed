import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateCertificate = async (userName: string, date: string, lang: 'en' | 'tl') => {
  const element = document.createElement('div');
  element.style.width = '800px';
  element.style.height = '600px';
  element.style.padding = '40px';
  element.style.background = '#fcfaf7';
  element.style.border = '15px solid #c5a059';
  element.style.fontFamily = 'serif';
  element.style.color = '#1a1a1a';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.justifyContent = 'center';
  element.style.textAlign = 'center';

  const title = lang === 'en' ? 'Certificate of Completion' : 'Katibayan ng Pagtatapos';
  const subtitle = lang === 'en' ? 'This is to certify that' : 'Ito ay nagpapatunay na si';
  const message = lang === 'en' 
    ? 'has successfully completed all 38 modules of the Biblical Study Series' 
    : 'ay matagumpay na nakatapos ng lahat ng 38 modyul ng Biblical Study Series';
  const platform = 'The True Seed';

  element.innerHTML = `
    <div style="border: 2px solid #c5a059; padding: 20px; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
      <div style="position: absolute; top: 10px; right: 10px; opacity: 0.1;">
         <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#c5a059" stroke-width="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      
      <h1 style="font-size: 48px; margin: 0; color: #1a365d; text-transform: uppercase; letter-spacing: 4px;">${title}</h1>
      <div style="width: 100px; height: 3px; background: #c5a059; margin: 20px 0;"></div>
      
      <p style="font-size: 20px; font-style: italic; margin-bottom: 30px;">${subtitle}</p>
      
      <h2 style="font-size: 40px; margin: 0; color: #1a1a1a; font-family: sans-serif; border-bottom: 2px solid #1a1a1a; padding-bottom: 5px; min-width: 400px;">${userName}</h2>
      
      <p style="font-size: 20px; margin-top: 30px; max-width: 500px; line-height: 1.5;">${message}</p>
      
      <div style="margin-top: 50px; display: flex; justify-content: space-between; width: 100%; padding: 0 40px;">
        <div style="text-align: center;">
          <div style="width: 200px; border-top: 1px solid #1a1a1a; margin-top: 40px;"></div>
          <p style="font-size: 14px; margin-top: 5px;">Date: ${date}</p>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="width: 80px; height: 80px; background: #c5a059; border-radius: 50%; display: flex; items-center; justify-center; color: white; font-weight: bold; font-size: 10px; text-transform: uppercase; text-align: center; padding: 10px; box-shadow: 0 0 0 5px #fcfaf7, 0 0 0 7px #c5a059;">
             The True Seed Official
          </div>
          <p style="font-size: 14px; margin-top: 10px; font-weight: bold; color: #1a365d;">${platform}</p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(element);

  const canvas = await html2canvas(element, { scale: 3, backgroundColor: '#fcfaf7' });
  const imgData = canvas.toDataURL('image/png');
  
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [800, 600]
  });

  pdf.addImage(imgData, 'PNG', 0, 0, 800, 600);
  pdf.save(`Certificate_of_Completion_${userName.replace(/[^a-z0-9]/gi, '_')}.pdf`);

  document.body.removeChild(element);
};
