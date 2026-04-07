import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  MapPin, 
  User, 
  Camera, 
  CheckCircle2, 
  Send,
  Building2,
  Image as ImageIcon,
  Loader2,
  Globe,
  X
} from 'lucide-react';
import { t, Language } from '../translations';
import { supabase } from '../lib/supabase';

interface RealityCheckPageProps {
  onBack: () => void;
  lang: Language;
  userName?: string;
  userEmail?: string;
}

export default function RealityCheckPage({ onBack, lang, userName, userEmail }: RealityCheckPageProps) {
  const [formData, setFormData] = useState({
    congregation: '',
    location: '',
    minister: '',
    country: '',
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // Auto-detect country on mount for seamless conditional email logic
  React.useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_name) {
          setFormData(prev => ({ ...prev, country: data.country_name }));
        }
      } catch (err) {
        console.warn('Failed to auto-detect country, will use default logic.', err);
      }
    };
    detectCountry();
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let photoUrl = '';
      
      // 1. Upload Photo to Supabase Storage
      if (photo) {
        const fileExt = photo.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `challenges/${fileName}`;

        const { error: uploadError, data } = await supabase.storage
          .from('reality-check-photos')
          .upload(filePath, photo);

        if (uploadError) throw uploadError;

        // 2. Get Public URL
        const { data: { publicUrl } } = supabase.storage
          .from('reality-check-photos')
          .getPublicUrl(filePath);
        
        photoUrl = publicUrl;
      }

      // 3. Insert Record into Database
      const { error: dbError } = await supabase
        .from('reality_checks')
        .insert([
          {
            full_name: userName,
            congregation: formData.congregation,
            location_url: formData.location,
            minister_name: formData.minister,
            photo_url: photoUrl
          }
        ]);

      if (dbError) throw dbError;

      // 4. Notify Admin via Email
      try {
        await fetch('/api/admin/reality-check-notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: userName,
            congregation: formData.congregation,
            location_url: formData.location,
            minister_name: formData.minister,
            country: formData.country,
            photo_url: photoUrl,
            student_email: userEmail
          })
        });
      } catch (err) {
        console.warn('Failed to send admin notification email', err);
        // Don't fail the whole submission if email fails
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center p-6 text-white font-serif">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8 p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            >
              <CheckCircle2 className="h-12 w-12 text-brand-dark" />
            </motion.div>
            <div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full -z-10 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-serif text-brand-gold">
              {t('Challenge Completed!', lang)}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t('realityCheckSuccess', lang)}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="w-full py-4 bg-brand-gold text-brand-dark rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft className="h-5 w-5" />
            {t('Back to Study', lang)}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed] font-serif text-brand-dark">
      {/* Header */}
      <header className="bg-brand-dark text-white py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold font-sans">{t('Back to Study', lang)}</span>
          </motion.button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-brand-gold font-sans text-xs uppercase tracking-[0.4em] font-bold mb-3"
              >
                {t('The Final Step', lang)}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold font-serif"
              >
                {t('Reality Check', lang)}
                {userName && <span className="text-brand-gold opacity-50 block md:inline md:ml-4 text-2xl md:text-4xl font-serif italic text-white/40">for {userName}</span>}
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
            >
              <div className="flex items-center gap-4 text-sm font-sans">
                <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-brand-dark">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-white/60 text-[10px] uppercase font-bold tracking-widest">{t('Objective', lang)}</div>
                  <div className="font-bold text-brand-gold">{t('Visit a House of Worship', lang)}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Instructions */}
          <div className="lg:col-span-5 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-brand-blue font-serif capitalize">
                {t('Beyond Theory', lang)}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {userName && <span className="block font-bold text-brand-blue mb-2 italic">Now, {userName}, it's time to put your faith into action.</span>}
                {t('realityCheckConvince', lang)}
              </p>
            </section>

            <section className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
              <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-brand-gold">
                {t('Proof of Success', lang)}
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Building2, text: t('Local Congregation Name', lang) },
                  { icon: MapPin, text: t('Location (Google Maps Link)', lang) },
                  { icon: User, text: t('Resident Minister Name', lang) },
                  { icon: Camera, text: t('Photo with Resident Minister', lang) }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3 text-sm text-gray-500 font-sans"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-blue">
                      <item.icon className="h-4 w-4" />
                    </div>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
              <div className="pt-4 p-4 bg-brand-gold/5 rounded-xl border border-brand-gold/10">
                <p className="text-[11px] text-gray-600 font-sans leading-relaxed italic">
                  <strong>Requirement:</strong> {t('Photo Requirements', lang)}
                </p>
              </div>
            </section>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 space-y-8"
            >
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-sans flex items-center gap-3"
                >
                  <X className="h-5 w-5 flex-shrink-0" />
                  {error}
                </motion.div>
              )}
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-2 px-1">
                    {t('Local Congregation Name', lang)}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-gold transition-colors">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <input 
                      required
                      type="text"
                      value={formData.congregation}
                      onChange={e => setFormData({...formData, congregation: e.target.value})}
                      placeholder="e.g. Locale of Temple Central"
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-brand-gold transition-all font-sans text-brand-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-2 px-1">
                    {t('Location (Google Maps Link)', lang)}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-gold transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <input 
                      required
                      type="url"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                      placeholder="https://goo.gl/maps/..."
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-brand-gold transition-all font-sans text-brand-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-2 px-1">
                    {t('Resident Minister Name', lang)}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-gold transition-colors">
                      <User className="h-5 w-5" />
                    </div>
                    <input 
                      required
                      type="text"
                      value={formData.minister}
                      onChange={e => setFormData({...formData, minister: e.target.value})}
                      placeholder="Full Name of the Minister"
                      className="w-full pl-14 pr-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-brand-gold transition-all font-sans text-brand-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-2 px-1">
                    {t('Photo with Resident Minister', lang)}
                  </label>
                  <div className="group">
                    <label className="cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handlePhotoChange}
                        required={!photo}
                      />
                      <div className={`relative h-64 rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 text-center ${
                        photoPreview 
                          ? 'border-brand-gold bg-white overflow-hidden' 
                          : 'border-gray-200 bg-gray-50 hover:border-brand-gold hover:bg-brand-gold/5'
                      }`}>
                        {photoPreview ? (
                          <>
                            <img src={photoPreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-brand-dark/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="bg-brand-gold text-brand-dark px-4 py-2 rounded-full font-bold text-xs uppercase">{t('Change Photo', lang)}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-brand-gold border border-gray-100">
                              <ImageIcon className="h-8 w-8" />
                            </div>
                            <span className="font-bold text-gray-600 block mb-1">{t('Select Photo', lang)}</span>
                            <span className="text-xs text-gray-400 max-w-[200px]">{t('Photo Requirements', lang)}</span>
                          </>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {userName && (
                <div className="text-center mb-1 text-[10px] font-sans font-bold uppercase tracking-widest text-brand-blue/30 italic">
                  Submitting as: <span className="text-brand-blue/60">{userName}</span>
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#D4AF37' }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-dark text-brand-gold rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {t('Submit Challenge', lang)}
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </main>
    </div>
  );
}
