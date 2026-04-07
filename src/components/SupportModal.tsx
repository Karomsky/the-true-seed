import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Copy, Check, Info, Landmark } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'tl' | 'es';
}

const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  
  // REPLACE THESE WITH YOUR ACTUAL BANK DETAILS
  const bankDetails = {
    bankName: "YOUR BANK NAME",
    accountHolder: "YOUR NAME / ORGANIZATION",
    accountNumber: "0000 0000 0000",
    iban: "optional-iban-here"
  };

  const t = (en: string, tl: string, es: string) => {
    if (lang === 'es') return es;
    if (lang === 'tl') return tl;
    return en;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-2xl border border-brand-gold/20 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Heart size={200} className="text-brand-gold" />
            </div>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-brand-blue transition-colors z-20"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-brand-gold animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-2 font-serif">
                  {t('Support the Mission', 'Suportahan ang Misyon', 'Apoyar la Misión')}
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  {t(
                    'Your contribution specifically funds the global hosting and translation of these studies.',
                    'Ang iyong kontribusyon ay direktang tumutulong sa global hosting at pagsasalin ng mga aralin.',
                    'Tu contribución financia específicamente el alojamiento global y la traducción de estos estudios.'
                  )}
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8 shadow-inner">
                <div className="flex items-center gap-3 mb-6 text-brand-blue border-b border-gray-200 pb-3">
                  <Landmark className="h-5 w-5 text-brand-gold" />
                  <span className="font-bold text-sm tracking-widest uppercase">
                    {t('Bank Transfer Details', 'Detalye ng Bank Transfer', 'Detalles de Transferencia Bancaria')}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      {t('Bank Name', 'Pangalan ng Bangko', 'Nombre del Banco')}
                    </label>
                    <div className="text-brand-blue font-bold">{bankDetails.bankName}</div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      {t('Account Holder', 'May-ari ng Account', 'Titular de la Cuenta')}
                    </label>
                    <div className="text-brand-blue font-bold">{bankDetails.accountHolder}</div>
                  </div>

                  <div className="relative">
                    <label className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">
                      {t('Account Number', 'Numero ng Account', 'Número de Cuenta')}
                    </label>
                    <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-gray-200 mt-1 hover:border-brand-gold transition-colors group">
                      <code className="text-brand-blue font-bold tracking-widest">{bankDetails.accountNumber}</code>
                      <button 
                        onClick={handleCopy}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-all active:scale-90"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-brand-gold group-hover:scale-110" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 px-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Info className="h-4 w-4 text-blue-500" />
                </div>
                <p className="text-[10px] text-gray-400 font-sans italic leading-relaxed">
                  {t(
                    '*Please include "True Seed Support" as the reference for your transfer. Every contribution enables 24/7 access to theological study for seekers worldwide.',
                    '*Pakilagay ang "True Seed Support" bilang reference sa iyong transfer. Ang bawat kontribusyon ay nagbibigay-daan sa 24/7 na access sa teolohikong pag-aaral.',
                    '*Por favor incluya "True Seed Support" como referencia para su transferencia. Cada contribución permite el acceso 24/7 al estudio teológico.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SupportModal;
