import React from 'react';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface PDFViewerPageProps {
  pdfUrl: string;
  title?: string;
  lang: 'en' | 'tl' | 'es';
  onBack: () => void;
}

const PDFViewerPage: React.FC<PDFViewerPageProps> = ({ pdfUrl, title, lang, onBack }) => {
  const t = (en: string, tl: string, es: string) => {
    if (lang === 'es') return es;
    if (lang === 'tl') return tl;
    return en;
  };

  const fileName = pdfUrl.split('/').pop() || 'Study Guide';
  const cleanTitle = title || fileName.replace(/_/g, ' ').replace('.pdf', '');

  return (
    <div className="fixed inset-0 z-[100] bg-brand-light flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-brand-dark px-4 h-16 flex items-center justify-between border-b border-brand-gold/30 shadow-lg shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-gold hover:text-yellow-400 transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('Back to Study', 'Balik sa Pag-aaral', 'Volver al Estudio')}
        </button>
        
        <div className="flex flex-col items-center">
            <h1 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">{cleanTitle}</h1>
            <div className="text-brand-gold/60 text-[8px] uppercase tracking-tighter hidden sm:block">Mission Study Center</div>
        </div>

        <div className="flex items-center gap-2">
            <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-brand-gold text-brand-dark rounded-full hover:bg-yellow-400 transition-all font-bold text-[10px] sm:text-xs uppercase tracking-widest shadow-lg"
            >
                <span className="hidden xs:inline">{t('Open Fullscreen', 'Buksan sa Fullscreen', 'Abrir Pantalla Completa')}</span>
                <ExternalLink className="h-4 w-4" />
            </a>
        </div>
      </header>

      {/* PDF View Area */}
      <main className="flex-1 w-full bg-gray-200 relative">
        <iframe
          src={pdfUrl.startsWith('http') ? pdfUrl : `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + pdfUrl)}&embedded=true`}
          className="w-full h-full border-none"
          title="PDF Viewer"
        />
        
        {/* Mobile helper overlay - subtle */}
        <div className="absolute bottom-6 right-6 pointer-events-none md:hidden">
            <div className="bg-brand-dark/80 backdrop-blur-md text-white text-[9px] px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-2xl">
                <FileText className="h-3 w-3 text-brand-gold" />
                Pinch to Zoom
            </div>
        </div>
      </main>
    </div>
  );
};

export default PDFViewerPage;
