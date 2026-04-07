// V2.0.1 - Internal PDF Viewer Patch
import React, { useState, useEffect, useRef } from 'react';
import {
  Sun,
  Menu,
  X,
  ArrowDown,
  Leaf,
  Globe,
  User,
  Scale,
  Users,
  Check,
  BookOpen,
  Droplets,
  MapPin,
  Mail,
  ChevronRight,
  ShieldCheck,
  PenTool,
  Flame,
  Heart,
  Key,
  Cloud,
  ArrowRight,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Helmet } from 'react-helmet-async';
import { useAppStore } from './store/useAppStore';
import StudyPage from './StudyPage';
import BaptismPage from './BaptismPage';
import AdminDashboard from './AdminDashboard';
import AuthModal from './components/AuthModal';
import PDFViewerPage from './components/PDFViewerPage';
import { supabase } from './lib/supabase';
import { scriptures, ScriptureLink } from './scriptureData';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { getLessons } from './data/lessons';


const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    nav_support: "Support",
    nav_theology: "Theology",
    nav_solution: "Legal Solution",
    nav_history: "History",
    nav_membership: "Membership",
    nav_mission: "Mission",
    nav_study: "Study Center",
    nav_join: "Join Us",
    nav_contact: "Contact",
    nav_authority: "Authority",
    hero_subtitle: "The Divine Journey of the Church of Christ",
    hero_title_1: "Escaping the Lake of Fire:",
    hero_title_2: "Finding Your Name in the Book of Life",
    hero_desc: "All have sinned, and the wages of sin is death (Romans 6:23)—the lake of fire. Redemption is solely found for those whose names are written in the Book of Life, secured within the Bayan ng Diyos (Nation of God), the Church of Christ.",
    hero_cta: "Learn the Lineage of the Promise",
    theology_title: "The Journey of the True Seed",
    stages_title: "The Five Stages of Creation",
    solution_title: "The One New Man",
    solution_paradox: "The Law of Individual Responsibility",
    solution_paradox_desc: "The law states that each person must be put to death for their own sin (Deut. 24:16). No one can pay for another's debt. How then can Christ save mankind without violating God's justice?",
    solution_perfect: "The Legal Union",
    solution_perfect_desc: "Christ created the 'One New Man' (Eph. 2:15) by joining Himself as the Head to the Church as His Body. Because they form one single legal entity, Christ could legally suffer for His body, the Church, satisfying the law for all its members.",
    history_title: "Apostasy and the Remnant",
    membership_title: "Being Born Again",
    mission_title: "The Sower of the Word",
    redemption_title: "The Path to Redemption",
    redemption_subtitle: "A Divine Journey from Sin to Salvation",
    path_step_1_title: "The Seed",
    path_step_1_desc: "Hearing the True Word of God which is the spiritual seed that initiates faith.",
    path_step_2_title: "The Recognition",
    path_step_2_desc: "Acknowledging that the wages of sin is death and the lake of fire.",
    path_step_3_title: "The Solution",
    path_step_3_desc: "Understanding the Legal Union of Christ and His Church as the One New Man.",
    path_step_4_title: "The Entry",
    path_step_4_desc: "Entering the Church of Christ to be covered by the redemption of His blood.",
    path_step_5_title: "The Seal",
    path_step_5_desc: "Baptism into the Body, securing your name in the Book of Life.",
    path_step_6_title: "The Promise",
    path_step_6_desc: "Inheriting the Holy City and escaping the second death.",
    contact_title: "Become Good Ground",
    contact_desc: "Are you seeking to hear the True Word? Connect with us to begin your journey towards the promise, finding your name written in the Book of Life.",
    contact_btn: "Send Inquiry",
    footer_desc: "Dedicated to illuminating the Divine Journey of the Church of Christ. May the true word guide you to redemption."
  },
  tl: {
    nav_support: "Suporta",
    nav_theology: "Teolohiya",
    nav_solution: "Legal na Solusyon",
    nav_history: "Kasaysayan",
    nav_membership: "Kaanib",
    nav_mission: "Misyon",
    nav_study: "Sentro ng Pag-aaral",
    nav_join: "Sapi Na",
    nav_contact: "Kontak",
    nav_authority: "Karapatan",
    hero_subtitle: "Ang Banal na Paglalakbay ng Iglesia ni Cristo",
    hero_title_1: "Pagtakas sa Dagat-dagatang Apoy:",
    hero_title_2: "Pagkakasulat ng Pangalan sa Aklat ng Buhay",
    hero_desc: "Ang lahat ay nangagkasala, at ang kabayaran ng kasalanan ay kamatayan (Roma 6:23)—ang dagat-dagatang apoy. Ang katubusan ay matatagpuan lamang ng mga may pangalan sa Aklat ng Buhay, na nasisiguro sa loob ng Bayan ng Diyos, ang Iglesia ni Cristo.",
    hero_cta: "Alamin ang Pinagmulan ng Pangako",
    theology_title: "Ang Paglalakbay ng Tunay na Binhi",
    stages_title: "Ang Limang Yugto ng Paglalang",
    solution_title: "Ang Isang Taong Bago",
    solution_paradox: "Ang Batas ng Pananagutang Pansarili",
    solution_paradox_desc: "Sinasabi ng batas na bawat tao ay dapat mamatay para sa sariling kasalanan (Deut. 24:16). Walang sinuman ang makapagbabayad para sa utang ng iba. Paano maililigtas ni Cristo ang tao nang hindi nilalabag ang katarungan ng Diyos?",
    solution_perfect: "Ang Legal na Pag-uugnay",
    solution_perfect_desc: "Nilalang ni Cristo ang 'Isang Taong Bago' (Efe. 2:15) sa pamamagitan ng pag-uugnay sa Kaniyang sarili bilang Ulo sa Iglesia bilang Kaniyang Katawan. Dahil sila ay bumubuo ng isang legal na pagkatao, legal na makapagdudusa si Cristo para sa Kaniyang katawan.",
    history_title: "Ang Pagtalikod at ang Nalabi",
    membership_title: "Ang Pagkapanganak na Muli",
    mission_title: "Ang Manghahasik ng Salita",
    redemption_title: "Ang Landas Patungo sa Katubusan",
    redemption_subtitle: "Isang Banal na Paglalakbay mula sa Kasalanan patungo sa Kaligtasan",
    path_step_1_title: "Ang Binhi",
    path_step_1_desc: "Pagdinig sa Tunay na Salita ng Diyos na siyang espirituwal na binhing nagpapasimula ng pananampalataya.",
    path_step_2_title: "Ang Pagkilala",
    path_step_2_desc: "Pagkilala na ang kabayaran ng kasalanan ay kamatayan at ang dagat-dagatang apoy.",
    path_step_3_title: "Ang Solusyon",
    path_step_3_desc: "Pag-unawa sa Legal na Pag-uugnay ni Cristo at ng Kaniyang Iglesia bilang Isang Taong Bago.",
    path_step_4_title: "Ang Pagpasok",
    path_step_4_desc: "Pagpasok sa Iglesia ni Cristo upang masakop ng katubusan ng Kaniyang dugo.",
    path_step_5_title: "Ang Tatak",
    path_step_5_desc: "Bautismo sa loob ng Katawan, na nagsisiguro ng iyong pangalan sa Aklat ng Buhay.",
    path_step_6_title: "Ang Pangako",
    path_step_6_desc: "Pagmamana ng Banal na Lungsod at pagtakas sa ikalawang kamatayan.",
    contact_title: "Maging Mabuting Lupa",
    contact_desc: "Naghahanap ka ba na makarinig ng Tunay na Salita? Makipag-ugnayan sa amin upang simulan ang iyong paglalakbay patungo sa pangako.",
    contact_btn: "Ipadala ang Inquiry",
    footer_desc: "Inilaan upang itanghal ang Banal na Paglalakbay ng Iglesia ni Cristo. Nawa'y gabayan ka ng tunay na salita patungo sa katubusan."
  },
  es: {
    nav_support: "Apoyo",
    nav_theology: "Teología",
    nav_solution: "Solución Legal",
    nav_history: "Historia",
    nav_membership: "Membresía",
    nav_mission: "Misión",
    nav_study: "Centro de Estudios",
    nav_join: "Únete a Nosotros",
    nav_contact: "Contacto",
    nav_authority: "Autoridad",
    hero_subtitle: "El Viaje Divino de la Iglesia de Cristo",
    hero_title_1: "Escapando del Lago de Fuego:",
    hero_title_2: "Encontrando Tu Nombre en el Libro de la Vida",
    hero_desc: "Todos han pecado, y la paga del pecado es muerte (Romanos 6:23)—el lago de fuego. La redención se encuentra únicamente para aquellos cuyos nombres están escritos en el Libro de la Vida, asegurados dentro de la Nación de Dios, la Iglesia de Cristo.",
    hero_cta: "Aprende el Linaje de la Promesa",
    theology_title: "El Viaje de la Verdadera Semilla",
    stages_title: "Las Cinco Etapas de la Creación",
    solution_title: "El Nuevo Hombre",
    solution_paradox: "La Ley de Responsabilidad Individual",
    solution_paradox_desc: "La ley establece que cada persona debe morir por su propio pecado (Deut. 24:16). Nadie puede pagar la deuda de otro. ¿Cómo entonces puede Cristo salvar a la humanidad sin violar la justicia de Dios?",
    solution_perfect: "La Unión Legal",
    solution_perfect_desc: "Cristo creó el 'Un Solo y Nuevo Hombre' (Efesios 2:15) uniéndose a Sí mismo como la Cabeza a la Iglesia como Su Cuerpo. Al formar una sola entidad legal, Cristo pudo sufrir legalmente por Su cuerpo, satisfaciendo la ley para todos sus miembros.",
    history_title: "Apostasía y el Remanente",
    membership_title: "Nacer de Nuevo",
    mission_title: "El Sembrador de la Palabra",
    redemption_title: "El Camino a la Redención",
    redemption_subtitle: "Un Viaje Divino del Pecado a la Salvación",
    path_step_1_title: "La Semilla",
    path_step_1_desc: "Escuchar la Verdadera Palabra de Dios, que es la semilla espiritual que inicia la fe.",
    path_step_2_title: "El Reconocimiento",
    path_step_2_desc: "Reconocer que la paga del pecado es muerte y el lago de fuego.",
    path_step_3_title: "La Solución",
    path_step_3_desc: "Entender la Unión Legal de Cristo y Su Iglesia como un Solo y Nuevo Hombre.",
    path_step_4_title: "La Entrada",
    path_step_4_desc: "Entrar a la Iglesia de Cristo para ser cubierto por la redención de Su sangre.",
    path_step_5_title: "El Sello",
    path_step_5_desc: "El bautismo dentro del Cuerpo, asegurando tu nombre en el Libro de la Vida.",
    path_step_6_title: "La Promesa",
    path_step_6_desc: "Heredar la Ciudad Santa y escapar de la segunda muerte.",
    contact_title: "Conviértete en Buena Tierra",
    contact_desc: "¿Buscas escuchar la Verdadera Palabra? Conéctate con nosotros para comenzar tu viaje hacia la promesa.",
    contact_btn: "Enviar Consulta",
    footer_desc: "Dedicado a iluminar el Viaje Divino de la Iglesia de Cristo. Que la verdadera palabra te guíe hacia la redención."
  }
};

// --- Components ---

interface TimelineItem {
  title: string;
  date: string;
  content: string;
}

const getTimelineData = (lang: 'en' | 'tl' | 'es'): TimelineItem[] => {
  if (lang === 'tl') {
    return [
      {
        title: "Pagbagsak at Apostasya ng Israel",
        date: "Sinaunang Panahon",
        content: "Ang pisikal na bansa ng Israel, na orihinal na pinili, ay nabigong manatiling tapat. Sila ay nahulog sa matinding apostasya, na nagresulta sa pagkabahagi ng kaharian at pagkawala ng Sampung Tribo."
      },
      {
        title: "Ang Iglesia sa Unang Siglo",
        date: "A.D. 33",
        content: "Itinatag ni Cristo ang Kaniyang Iglesia sa Jerusalem, ang espirituwal na katuparan ng Binhi. Gayunpaman, ipinahayag ng hula na pagkatapos ng panahon ng mga Apostol, papasok ang mababangis na lobo sa kawan."
      },
      {
        title: "Ang Dakilang Pagtalikod",
        date: "Panahong Post-Apostolic",
        content: "Sa pamamagitan ng matinding pag-uusig at paglitaw ng mga maling turo, ang Iglesia sa unang siglo ay nailayo sa mga tunay na doktrina. Ang tunay na organisasyon ay nawala sa lupa."
      },
      {
        title: "Ang Nalabing Binhi",
        date: "Hulyo 27, 1914",
        content: "Ayon sa hula ng Biblia tungkol sa 'ibang mga tupa' mula sa 'Malayong Silangan', ang Iglesia ni Cristo ay muling lumitaw sa Pilipinas kasabay ng Unang Digmaang Pandaigdig."
      }
    ];
  }
  if (lang === 'es') {
    return [
      {
        title: "La Caída y Apostasía de Israel",
        date: "Era Antigua",
        content: "La nación física de Israel, inicialmente elegida, no permaneció fiel. Cayó en una profunda apostasía, lo que resultó en la división del reino y la pérdida eventual de las Diez Tribus."
      },
      {
        title: "La Iglesia del Siglo Primero",
        date: "33 d.C.",
        content: "Cristo estableció Su Iglesia en Jerusalén, el cumplimiento espiritual de la Simiente. Sin embargo, la profecía predijo que después de la era de los Apóstoles, entrarían lobos rapaces en el rebaño."
      },
      {
        title: "La Gran Apostasía",
        date: "Era Post-Apostólica",
        content: "A causa de la severa persecución y el surgimiento de falsas enseñanzas, la Iglesia del siglo primero fue apartada de las verdaderas doctrinas. La verdadera organización desapareció de la tierra."
      },
      {
        title: "El Remanente (Nalabing Binhi)",
        date: "27 de julio de 1914",
        content: "Según la profecía bíblica sobre las 'otras ovejas' del 'Lejano Oriente', la Iglesia de Cristo resurgió en Filipinas al mismo tiempo que la Primera Guerra Mundial."
      }
    ];
  }
  return [
    {
      title: "Israel's Fall and Apostasy",
      date: "Ancient Era",
      content: "The physical nation of Israel, initially chosen, failed to remain faithful. They fell into deep apostasy, resulting in the division of the kingdom and the eventual loss of the Ten Tribes. This demonstrated that a fleshly lineage was insufficient to maintain God's covenant."
    },
    {
      title: "The First-Century Church",
      date: "A.D. 33",
      content: "Christ established His Church in Jerusalem, the spiritual fulfillment of the Seed. However, prophecy foretold that after the era of the Apostles, ravenous wolves would enter the flock, introducing heretical doctrines."
    },
    {
      title: "The Great Apostasy",
      date: "Post-Apostolic Era",
      content: "Through severe persecution and the rise of false teachings, the first-century Church was led away from the true doctrines. The true organization disappeared from the earth, fulfilling prophecies of a great falling away."
    },
    {
      title: "The Nalabing Binhi (Remnant Seed)",
      date: "July 27, 1914",
      content: "According to biblical prophecy regarding the 'other sheep' from the 'Far East', the Church of Christ re-emerged in the Philippines concurrent with the First World War. This is the 'nalabing binhi', continuing the lineage of the Promise today."
    }
  ];
};

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address format" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function App() {
  const { lang, setLang, completedLessons, user, token, setUserSession, syncProgress, fullName } = useAppStore();
  const lessons = getLessons(lang, () => {});
  const timelineData = getTimelineData(lang);
  const [view, setView] = useState<'home' | 'study' | 'baptism' | 'admin' | 'pdf'>('home');
  const [activePdf, setActivePdf] = useState<{ url: string; title?: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [tooltip, setTooltip] = useState<{ verse: string | null; x: number; y: number }>({ verse: null, x: 0, y: 0 });
  const [studyConfig, setStudyConfig] = useState<{ category?: string; lessonId?: number }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [scrolled, setScrolled] = useState(false);

  // PWA update notification
  const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW({
    onRegistered(r) { console.log('SW registered:', r); },
    onRegisterError(e) { console.log('SW registration error:', e); }
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: '', email: '', message: '' }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Analytics: Log site visit
    const logVisit = async () => {
      let sessionId = sessionStorage.getItem('ts_session_id');
      if (!sessionId) {
        sessionId = 'sess_' + Math.random().toString(36).substring(2, 11);
        sessionStorage.setItem('ts_session_id', sessionId);
      }

      try {
        await fetch('/api/analytics/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sessionId,
            language: lang,
            path: window.location.hash || '#home'
          })
        });
      } catch (e) {
        // Silent fail for analytics
      }
    };

    logVisit();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  useEffect(() => {
    if (user && token) {
      syncProgress();
    }
  }, [user, token, syncProgress]);

  const hpT = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleHover = (verse: string | null, x: number, y: number) => {
    setTooltip({ verse, x, y });
  };

  const onSubmit = async (data: InquiryFormValues) => {
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to send inquiry');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }
  };

  const openStudy = (category?: string, lessonId?: number) => {
    setStudyConfig({ category, lessonId });
    setView('study');
    window.scrollTo(0, 0);
  };

  const openPdf = (pdfUrl: string, title?: string) => {
    setActivePdf({ url: pdfUrl, title });
    setView('pdf');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = (scrollToContact?: boolean) => {
    setView('home');
    if (scrollToContact) {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-brand-light text-slate-800 antialiased selection:bg-brand-gold selection:text-brand-dark min-h-screen">

      {/* PWA Update Banner */}
      <AnimatePresence>
        {needRefresh && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[9999] bg-brand-gold text-brand-dark px-4 py-3 flex items-center justify-between shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="bg-brand-dark/10 rounded-full p-1.5">
                <ArrowDown className="h-4 w-4 rotate-180" />
              </div>
              <span className="font-bold text-sm font-sans">
                {lang === 'en' ? '✨ New content is available!' : '✨ Mayroong bagong nilalaman!'}
              </span>
            </div>
            <button
              onClick={() => updateServiceWorker(true)}
              className="bg-brand-dark text-white px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-colors active:scale-95 ml-4 whitespace-nowrap"
            >
              {lang === 'en' ? 'Refresh Now' : 'I-refresh Ngayon'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Helmet>
        <title>{lang === 'tl' ? 'Ang Tunay na Binhi | Iglesia ni Cristo' : (lang === 'es' ? 'La Verdadera Semilla | Iglesia de Cristo' : 'The True Seed | Church of Christ')}</title>
        <meta name="description" content={hpT.hero_subtitle} />
        <meta property="og:title" content="The True Seed | Church of Christ" />
        <meta property="og:description" content={hpT.hero_subtitle} />
        <meta property="og:url" content="https://www.r510.org/" />
        <meta property="og:image" content="https://www.r510.org/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.r510.org/og-image.png" />
        <html lang={lang} />
      </Helmet>

      {/* Global Scripture Tooltip */}
      <AnimatePresence>
        {tooltip.verse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed z-50 bg-white p-5 rounded-lg shadow-2xl border-l-4 border-brand-gold max-w-sm pointer-events-none transform -translate-x-1/2 -translate-y-full mt-[-10px]"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <h4 className="font-bold text-brand-blue mb-2 border-b border-gray-100 pb-1">{tooltip.verse}</h4>
            <p className="text-sm text-gray-600 leading-relaxed italic">"{scriptures[tooltip.verse]}"</p>
          </motion.div>
        )}
      </AnimatePresence>

      {view === 'pdf' ? (
        <PDFViewerPage
          pdfUrl={activePdf?.url || ''}
          title={activePdf?.title}
          lang={lang}
          onBack={() => setView('study')}
        />
      ) : view === 'study' ? (
        <StudyPage
          lang={lang}
          onBack={handleBackToHome}
          openPdf={openPdf}
          initialCategory={studyConfig.category}
          initialLessonId={studyConfig.lessonId}
          onHover={handleHover}
          userEmail={user?.email}
          onOpenAuth={() => setIsAuthModalOpen(true)}
        />
      ) : view === 'baptism' ? (
        <BaptismPage lang={lang} onBack={handleBackToHome} onHover={handleHover} />
      ) : view === 'admin' ? (
        <AdminDashboard onBack={handleBackToHome} />
      ) : (
        <>
          {/* Navigation */}
          <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-lg h-16 border-b border-brand-gold/30 shadow-lg' : 'bg-transparent h-24'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center">
                  <a href="#home" className="text-brand-gold font-bold text-xl tracking-wider uppercase flex items-center gap-2 group">
                    <Sun className={`text-brand-gold transition-transform duration-500 ${scrolled ? 'h-5 w-5' : 'h-7 w-7 rotate-12 group-hover:rotate-45'}`} />
                    <span className={`transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'}`}>The True Seed</span>
                  </a>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  {['theology', 'solution', 'history', 'authority', 'membership', 'mission'].map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      className="text-white/80 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest relative group"
                    >
                      {hpT[`nav_${item}` as keyof typeof hpT]}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ))}
                   <button
                    onClick={() => openStudy()}
                    className="flex items-center gap-2 bg-brand-gold text-brand-dark px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 btn-glow"
                  >
                    <span>{hpT.nav_study}</span>
                    {completedLessons.length > 0 && (
                      <span className="bg-brand-dark text-brand-gold px-2 py-0.5 rounded-full text-[10px]">
                        {completedLessons.length}/{lessons.length}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => setView('baptism')}
                    className="text-white/80 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    {hpT.nav_join}
                  </button>
                  <div className="flex items-center gap-3 ml-4">
                    <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg border border-white/20">
                      <button
                        onClick={() => setLang('en')}
                        aria-label="Switch to English"
                        aria-pressed={lang === 'en'}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${lang === 'en' ? 'bg-brand-gold text-brand-dark' : 'text-white hover:text-brand-gold'}`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLang('tl')}
                        aria-label="Switch to Tagalog"
                        aria-pressed={lang === 'tl'}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${lang === 'tl' ? 'bg-brand-gold text-brand-dark' : 'text-white hover:text-brand-gold'}`}
                      >
                        TL
                      </button>
                      <button
                        onClick={() => setLang('es')}
                        aria-label="Switch to Spanish"
                        aria-pressed={lang === 'es'}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${lang === 'es' ? 'bg-brand-gold text-brand-dark' : 'text-white hover:text-brand-gold'}`}
                      >
                        ES
                      </button>
                    </div>
                    <button
                      onClick={() => user ? setUserSession(null, null) : setIsAuthModalOpen(true)}
                      className="text-white hover:text-brand-gold p-1.5 bg-brand-blue/20 rounded-lg border border-white/20 transition-colors flex items-center gap-2"
                      title={user ? "Logout" : "Log in to Sync"}
                      aria-label={user ? "Logout from your account" : "Log in to your account"}
                    >
                      <User className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    className="text-brand-gold hover:text-white focus:outline-none"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden bg-brand-dark border-t border-brand-gold/20 overflow-hidden"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {['theology', 'solution', 'history', 'authority', 'membership', 'mission'].map((item) => (
                      <a
                        key={item}
                        href={`#${item}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-white hover:text-brand-gold text-base font-medium"
                      >
                        {hpT[`nav_${item}` as keyof typeof hpT] || item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                      </a>
                    ))}
                     <button
                      onClick={() => {
                        openStudy();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left block px-3 py-2 text-brand-gold hover:text-white text-base font-medium"
                    >
                      {hpT.nav_study}
                    </button>
                    <button
                      onClick={() => {
                        setView('baptism');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left block px-3 py-2 text-white hover:text-brand-gold text-base font-medium"
                    >
                      {hpT.nav_join}
                    </button>
                    <div className="flex flex-wrap items-center gap-2 px-3 py-4 mt-2 border-t border-white/10">
                      <button
                        onClick={() => setLang('en')}
                        className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${lang === 'en' ? 'bg-brand-gold text-brand-dark' : 'text-white border border-white/20'}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLang('es')}
                        className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${lang === 'es' ? 'bg-brand-gold text-brand-dark' : 'text-white border border-white/20'}`}
                      >
                        Español
                      </button>
                      <button
                        onClick={() => setLang('tl')}
                        className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${lang === 'tl' ? 'bg-brand-gold text-brand-dark' : 'text-white border border-white/20'}`}
                      >
                        Tagalog
                      </button>
                    </div>
                    <div className="px-3 pt-2 pb-4">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          if (user) {
                            setUserSession(null, null);
                          } else {
                            setIsAuthModalOpen(true);
                          }
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-brand-blue/20 text-brand-gold border border-brand-blue/30 py-3 rounded-xl font-bold text-sm hover:bg-brand-blue/30 transition-colors"
                      >
                        <User className="h-5 w-5" />
                        {user ? (lang === 'tl' ? 'Mag-Sign Out' : (lang === 'es' ? 'Cerrar Sesión' : 'Sign Out')) : (lang === 'tl' ? 'Mag-Sign In' : (lang === 'es' ? 'Iniciar Sesión / Registro' : 'Sign In / Register'))}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Hero Section */}
          <header id="home" className="relative bg-brand-dark min-h-screen flex items-center overflow-hidden pt-20">
            <div className="spire-bg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-gold font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base border-b border-brand-gold/30 pb-2"
              >
                {hpT.hero_subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-5xl font-serif"
              >
                {hpT.hero_title_1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 italic font-normal">
                  {hpT.hero_title_2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
              >
                {lang === 'tl' ? (
                  <>
                    Ang lahat ay nangagkasala, at ang kabayaran ng kasalanan ay kamatayan (<ScriptureLink verse="Roma 6:23" onHover={handleHover}>Roma 6:23</ScriptureLink>)—ang dagat-dagatang apoy. Ang katubusan ay matatagpuan lamang ng mga may pangalan sa Aklat ng Buhay, na nasisiguro sa loob ng Bayan ng Diyos, ang Iglesia ni Cristo.
                  </>
                ) : lang === 'es' ? (
                  <>
                    Todos han pecado, y la paga del pecado es muerte (<ScriptureLink verse="Romans 6:23" onHover={handleHover}>Romanos 6:23</ScriptureLink>)—el lago de fuego. La redención se encuentra únicamente para aquellos cuyos nombres están escritos en el Libro de la Vida, asegurados dentro de la Nación de Dios, la Iglesia de Cristo.
                  </>
                ) : (
                  <>
                    All have sinned, and the wages of sin is death (<ScriptureLink verse="Romans 6:23" onHover={handleHover}>Romans 6:23</ScriptureLink>)—the lake of fire. Redemption is solely found for those whose names are written in the Book of Life, secured within the Bayan ng Diyos (Nation of God), the Church of Christ.
                  </>
                )}
              </motion.p>

              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="#theology"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-brand-dark bg-brand-gold hover:bg-yellow-400 rounded-full shadow-gold transition-all transform hover:-translate-y-1 uppercase tracking-widest btn-glow"
              >
                {hpT.hero_cta}
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </motion.a>
            </div>
          </header>

          {/* Theology Section */}
          <section id="theology" className="py-24 bg-brand-light relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-2">{hpT.nav_theology}</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">{hpT.theology_title}</h3>
                <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    icon: Leaf,
                    title: lang === 'tl' ? "Ang Pundasyon sa Eden" : (lang === 'es' ? "El Fundamento del Edén" : "The Eden Foundation"),
                    content: lang === 'tl' ? (
                      <>Ang banal na plano ay unang inihayag sa Eden. Ipinangako ng Diyos ang "Binhi ng babae" (<ScriptureLink verse="Genesis 3:15" onHover={handleHover}>Genesis 3:15</ScriptureLink>), na nagpopropesiya sa orihinal na pangako ng isang manunubos.</>
                    ) : lang === 'es' ? (
                      <>El plan divino se reveló por primera vez en el Edén. Dios prometió la "Simiente de la mujer" (<ScriptureLink verse="Genesis 3:15" onHover={handleHover}>Génesis 3:15</ScriptureLink>), profetizando la promesa original de un redentor que eventualmente aplastaría al enemigo.</>
                    ) : (
                      <>The divine plan was first revealed in Eden. God promised the "Seed of the woman" (<ScriptureLink verse="Genesis 3:15" onHover={handleHover}>Genesis 3:15</ScriptureLink>), prophesying the original promise of a redeemer who would eventually crush the enemy.</>
                    )
                  },
                  {
                    icon: Globe,
                    title: lang === 'tl' ? "Ang Tipan kay Abraham" : (lang === 'es' ? "El Pacto Abrahámico" : "The Abrahamic Covenant"),
                    content: lang === 'tl' ? (
                      <>Ang pangako ay pinatunayan kay Abraham. Nagtatag ang Diyos ng isang "walang hanggang tipan" (<ScriptureLink verse="Genesis 17:7" onHover={handleHover}>Genesis 17:7</ScriptureLink>) sa kaniya, na nagpapahayag na sa pamamagitan ng kaniyang lahi, lilitaw ang ipinangakong binhi.</>
                    ) : lang === 'es' ? (
                      <>La promesa fue refinada a través de Abraham. Dios estableció un "pacto perpetuo" (<ScriptureLink verse="Genesis 17:7" onHover={handleHover}>Génesis 17:7</ScriptureLink>) con él, declarando que a través de su linaje, surgiría la simiente prometida para traer salvación.</>
                    ) : (
                      <>The promise was refined through Abraham. God established an "everlasting covenant" (<ScriptureLink verse="Genesis 17:7" onHover={handleHover}>Genesis 17:7</ScriptureLink>) with him, declaring that through his lineage, the promised seed would emerge to bring salvation.</>
                    )
                  },
                  {
                    icon: User,
                    title: lang === 'tl' ? "Ang Iisang Binhi" : (lang === 'es' ? "La Simiente Singular" : "The Singular Seed"),
                    content: lang === 'tl' ? (
                      <>Ang pangako ay hindi para sa maraming "binhi," kundi para sa isa lamang: si Jesucristo (<ScriptureLink verse="Galacia 3:16" onHover={handleHover}>Galacia 3:16</ScriptureLink>). Siya ang Tunay na Binhi.</>
                    ) : lang === 'es' ? (
                      <>La promesa no era para muchas "simientes," sino específicamente para una: Jesucristo (<ScriptureLink verse="Galatians 3:16" onHover={handleHover}>Gálatas 3:16</ScriptureLink>). Él es la Verdadera Simiente que cumple la antigua palabra pronunciada en el Edén.</>
                    ) : (
                      <>The promise was not meant for many "seeds," but specifically for one: Jesus Christ (<ScriptureLink verse="Galatians 3:16" onHover={handleHover}>Galatians 3:16</ScriptureLink>). He is the True Seed who fulfills the ancient word spoken in Eden.</>
                    )
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-brand-gold hover:shadow-2xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="text-brand-blue h-7 w-7" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-blue mb-4">{item.title}</h4>
                    <div className="text-gray-600 leading-relaxed">{item.content}</div>
                  </motion.div>
                ))}
              </div>

              {/* Five Stages of Creation Integration */}
              <div className="mt-24">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{hpT.stages_title}</h3>
                  <p className="text-gray-600 mb-8">
                    {lang === 'tl'
                      ? "Ang landas patungo sa 'Isang Taong Bago' ay ang huling yugto ng paglalang ng Diyos sa sangkatauhan."
                      : (lang === 'es' 
                        ? "El camino al 'Un Solo y Nuevo Hombre' es la etapa final de la obra creadora de Dios con la humanidad."
                        : "The path to the 'One New Man' is the final stage of God's creative work with humanity.")}
                  </p>
                  <div className="w-16 h-1 bg-brand-gold/50 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {[
                    { stage: 1, name: lang === 'tl' ? "Adan" : (lang === 'es' ? "Adán" : "Adam"), desc: lang === 'tl' ? "Mula sa alabok ng lupa" : (lang === 'es' ? "Del polvo de la tierra" : "From the dust of the ground") },
                    { stage: 2, name: lang === 'tl' ? "Eva" : (lang === 'es' ? "Eva" : "Eve"), desc: lang === 'tl' ? "Mula sa tadyang ni Adan" : (lang === 'es' ? "De la costilla de Adán" : "From the rib of Adam") },
                    { stage: 3, name: lang === 'tl' ? "Sangkatauhan" : (lang === 'es' ? "Humanidad" : "Humanity"), desc: lang === 'tl' ? "Natural na kapanganakan" : (lang === 'es' ? "Nacimiento natural (Matrimonio)" : "Natural birth (Marriage)") },
                    { stage: 4, name: lang === 'tl' ? "Cristo" : (lang === 'es' ? "Cristo" : "Christ"), desc: lang === 'tl' ? "Espiritu Santo kay Maria" : (lang === 'es' ? "Espíritu Santo en María" : "Holy Spirit in Mary") },
                    { stage: 5, name: lang === 'tl' ? "Bagong Tao" : (lang === 'es' ? "Nuevo Hombre" : "New Man"), desc: lang === 'tl' ? "Muling Pagsilang (Tubig at Espiritu)" : (lang === 'es' ? "Nacido de Nuevo (Agua y Espíritu)" : "Born Again (Water & Spirit)") }
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center group hover:border-brand-gold transition-colors"
                    >
                      <div className="text-brand-gold font-bold text-xs mb-2 uppercase tracking-widest">{lang === 'es' ? 'Etapa' : 'Stage'} {s.stage}</div>
                      <div className="text-brand-blue font-bold text-lg mb-1">{s.name}</div>
                      <div className="text-gray-500 text-xs leading-tight">{s.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Legal Solution Section */}
          <section id="solution" className="py-24 bg-brand-blue text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#D4AF37" d="M100 0 L200 200 L0 200 Z" />
                <path fill="#ffffff" d="M100 50 L150 200 L50 200 Z" opacity="0.5" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2">{hpT.nav_solution}</h2>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 font-serif">{hpT.solution_title}</h3>
                  <div className="w-24 h-1 bg-brand-gold mb-8"></div>

                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="glass-panel p-6 rounded-xl"
                    >
                      <h4 className="text-xl font-bold text-brand-gold mb-2 flex items-center gap-2">
                        <Scale className="h-5 w-5" /> {hpT.solution_paradox}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {lang === 'tl'
                          ? <>Sinasabi ng batas na bawat tao ay dapat mamatay para sa sariling kasalanan (<ScriptureLink verse="Deuteronomy 24:16" onHover={handleHover}>Deut. 24:16</ScriptureLink>). Walang sinuman ang makapagbabayad para sa utang ng iba.</>
                          : (lang === 'es'
                            ? <>La ley establece que cada persona debe morir por su propio pecado (<ScriptureLink verse="Deuteronomy 24:16" onHover={handleHover}>Deut. 24:16</ScriptureLink>). Nadie puede pagar la deuda de otro. ¿Cómo entonces puede Cristo salvar a la humanidad sin violar la justicia de Dios?</>
                            : <>The law states that each person must be put to death for their own sin (<ScriptureLink verse="Deuteronomy 24:16" onHover={handleHover}>Deut. 24:16</ScriptureLink>). No one can pay for another's debt. How then can Christ save mankind without violating God's justice?</>)}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="glass-panel p-6 rounded-xl border-l-4 border-l-brand-gold"
                    >
                      <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <Users className="h-5 w-5 text-brand-gold" /> {hpT.solution_perfect}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {lang === 'tl'
                          ? <>Nilalang ni Cristo ang 'Isang Taong Bago' (<ScriptureLink verse="Ephesians 2:15" onHover={handleHover}>Efe. 2:15</ScriptureLink>) sa pamamagitan ng pag-uugnay sa Kaniyang sarili bilang Ulo sa Iglesia bilang Kaniyang Katawan.</>
                          : (lang === 'es'
                            ? <>Cristo creó el 'Un Solo y Nuevo Hombre' (<ScriptureLink verse="Ephesians 2:15" onHover={handleHover}>Efesios 2:15</ScriptureLink>) uniéndose a Sí mismo como la Cabeza a la Iglesia como Su Cuerpo. Al formar una sola entidad legal, Cristo pudo sufrir legalmente por Su cuerpo, satisfaciendo la ley para todos sus miembros.</>
                            : <>Christ created the 'One New Man' (<ScriptureLink verse="Ephesians 2:15" onHover={handleHover}>Eph. 2:15</ScriptureLink>) by joining Himself as the Head to the Church as His Body. Because they form one single legal entity, Christ could legally suffer for His body, the Church, satisfying the law for all its members.</>)}
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-brand-gold/20 flex items-center justify-center p-8"
                  >
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-gold animate-[spin_60s_linear_infinite]">
                      <defs>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <path d="M100 20 C140 20, 180 50, 180 100 C180 150, 140 180, 100 180 C60 180, 20 150, 20 100 C20 50, 60 20, 100 20" fill="none" stroke="currentColor" strokeWidth="4" filter="url(#glow)" />
                      <path d="M100 30 C130 30, 170 60, 170 100 C170 140, 130 170, 100 170 C70 170, 30 140, 30 100 C30 60, 70 30, 100 30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                      <path d="M100 10 C150 10, 190 40, 190 100 C190 160, 150 190, 100 190 C50 190, 10 160, 10 100 C10 40, 50 10, 100 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                      <path d="M100 20 L105 5 M140 32 L152 15 M172 65 L188 55 M180 100 L198 100 M172 135 L188 145 M140 168 L152 185 M100 180 L105 195 M60 168 L48 185 M28 135 L12 145 M20 100 L2 100 M28 65 L12 55 M60 32 L48 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <path d="M80 25 L75 12 M120 25 L125 12 M160 45 L170 35 M175 80 L190 75 M175 120 L190 125 M160 155 L170 165 M120 175 L125 188 M80 175 L75 188 M40 155 L30 165 M25 120 L10 125 M25 80 L10 75 M40 45 L30 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-white font-bold text-xl block">Christ</span>
                      <span className="text-brand-gold text-sm block border-t border-brand-gold/50 pt-1 mt-1 w-16 mx-auto uppercase">Head</span>
                      <div className="h-8 w-px bg-brand-gold/50 my-2"></div>
                      <span className="text-white font-bold text-xl block">Church</span>
                      <span className="text-brand-gold text-sm block border-t border-brand-gold/50 pt-1 mt-1 w-16 mx-auto uppercase">Body</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* History Section (Timeline) */}
          <section id="history" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-2">{hpT.nav_history}</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">{hpT.history_title}</h3>
                <p className="text-gray-600">
                  {lang === 'tl'
                    ? "Sundan ang makasaysayang paglalakbay ng bayan ng Diyos mula sa sinaunang pinagmulan nito hanggang sa muling paglitaw nito."
                    : (lang === 'es'
                      ? "Traza el viaje histórico de la nación de Dios desde sus orígenes antiguos hasta su resurgimiento en la era moderna."
                      : "Trace the historical journey of God's nation from its ancient origins to its re-emergence in the modern era.")}
                </p>
              </div>

              <div className="max-w-6xl mx-auto relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-[29px] top-4 bottom-4 w-1 bg-gray-200 rounded-full">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-brand-gold rounded-full origin-top"
                    animate={{ height: `${(activeTimelineIndex / (timelineData.length - 1)) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                  />
                </div>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      date: lang === 'tl' ? "Sinaunang Panahon" : (lang === 'es' ? "Era Antigua" : "Ancient Era"),
                      title: lang === 'tl' ? "Ang Pagbagsak ng Israel" : (lang === 'es' ? "La Caída de Israel" : "Israel's Fall and Apostasy"),
                      content: lang === 'tl' ? (
                        <>Ang pisikal na bansa ng Israel ay naghimagsik (<ScriptureLink verse="Isaias 63:10" onHover={handleHover}>Isa. 63:10</ScriptureLink>) at tuluyang tumalikod sa Diyos.</>
                      ) : lang === 'es' ? (
                        <>La nación física de Israel se rebeló (<ScriptureLink verse="Isaiah 63:10" onHover={handleHover}>Isa. 63:10</ScriptureLink>) y cayó en profunda apostasía. Esto demostró que un linaje carnal era insuficiente para mantener el pacto de Dios.</>
                      ) : (
                        <>The physical nation of Israel rebelled (<ScriptureLink verse="Isaiah 63:10" onHover={handleHover}>Isa. 63:10</ScriptureLink>) and fell into deep apostasy. This demonstrated that a fleshly lineage was insufficient to maintain God's covenant.</>
                      )
                    },
                    {
                      date: "A.D. 33",
                      title: lang === 'tl' ? "Ang Iglesia sa Unang Siglo" : (lang === 'es' ? "La Iglesia del Primer Siglo" : "The First-Century Church"),
                      content: lang === 'tl' ? (
                        <>Itinatag ni Cristo ang Kaniyang Iglesia sa Jerusalem (<ScriptureLink verse="Mateo 16:18" onHover={handleHover}>Mat. 16:18</ScriptureLink>).</>
                      ) : lang === 'es' ? (
                        <>Cristo estableció Su Iglesia en Jerusalén (<ScriptureLink verse="Matthew 16:18" onHover={handleHover}>Mat. 16:18</ScriptureLink>), el cumplimiento espiritual de la Simiente. Sin embargo, la profecía predijo que después de la era de los Apóstoles, lobos rapaces entrarían en el rebaño (<ScriptureLink verse="Acts 20:29" onHover={handleHover}>Hechos 20:29</ScriptureLink>).</>
                      ) : (
                        <>Christ established His Church in Jerusalem (<ScriptureLink verse="Matthew 16:18" onHover={handleHover}>Matt. 16:18</ScriptureLink>), the spiritual fulfillment of the Seed. However, prophecy foretold that after the era of the Apostles, ravenous wolves would enter the flock (<ScriptureLink verse="Acts 20:29" onHover={handleHover}>Acts 20:29</ScriptureLink>).</>
                      )
                    },
                    {
                      date: lang === 'tl' ? "Pagkatapos ng mga Apostol" : (lang === 'es' ? "Post-Apostólico" : "Post-Apostolic"),
                      title: lang === 'tl' ? "Ang Malawakang Pagtalikod" : (lang === 'es' ? "La Gran Apostasía" : "The Great Apostasy"),
                      content: lang === 'tl' ? (
                        <>Sa pamamagitan ng pag-uusig at maling aral, ang Iglesia sa unang siglo ay natalikod (<ScriptureLink verse="1 Timoteo 4:1" onHover={handleHover}>1 Tim. 4:1</ScriptureLink>).</>
                      ) : lang === 'es' ? (
                        <>A través de severas persecuciones y falsas enseñanzas, la Iglesia del primer siglo fue desviada de las verdaderas doctrinas (<ScriptureLink verse="1 Timothy 4:1" onHover={handleHover}>1 Tim. 4:1</ScriptureLink>).</>
                      ) : (
                        <>Through severe persecution and false teachings, the first-century Church was led away from the true doctrines (<ScriptureLink verse="1 Timothy 4:1" onHover={handleHover}>1 Tim. 4:1</ScriptureLink>).</>
                      )
                    },
                    {
                      date: "July 27, 1914",
                      title: lang === 'tl' ? "Ang Nalabing Binhi" : (lang === 'es' ? "La Simiente Remanente" : "The Nalabing Binhi"),
                      content: lang === 'tl' ? (
                        <>Ang Iglesia ni Cristo ay muling lumitaw sa Pilipinas kasabay ng Unang Digmaang Pandaigdig (<ScriptureLink verse="Mateo 24:6" onHover={handleHover}>Mat. 24:6-7</ScriptureLink>).</>
                      ) : lang === 'es' ? (
                        <>La Iglesia de Cristo resurgió en Filipinas simultáneamente con la Primera Guerra Mundial (<ScriptureLink verse="Matthew 24:6" onHover={handleHover}>Mat. 24:6-7</ScriptureLink>). Esta es la 'simiente remanente' (<ScriptureLink verse="Isaiah 43:5" onHover={handleHover}>Isa. 43:5-6</ScriptureLink>) que continúa el linaje de la Promesa hoy.</>
                      ) : (
                        <>The Church of Christ re-emerged in the Philippines concurrent with the First World War (<ScriptureLink verse="Matthew 24:6" onHover={handleHover}>Mat. 24:6-7</ScriptureLink>). This is the 'remnant seed' (<ScriptureLink verse="Isaiah 43:5" onHover={handleHover}>Isa. 43:5-6</ScriptureLink>) continuing the lineage of the Promise today.</>
                      )
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group relative z-10">
                      {/* Dot Control */}
                      <button
                        onClick={() => setActiveTimelineIndex(idx)}
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-white border-4 transition-all duration-300 outline-none cursor-pointer ${idx <= activeTimelineIndex ? 'border-brand-gold bg-brand-gold shadow-[0_0_0_4px_rgba(212,175,55,0.2)]' : 'border-gray-300'}`}
                      />

                      {/* Content Container */}
                      <div className="ml-6 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12 flex-1">
                        {/* Label Area */}
                        <div
                          onClick={() => setActiveTimelineIndex(idx)}
                          className="cursor-pointer lg:w-64 flex-shrink-0 pt-1"
                        >
                          <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors duration-300 ${idx <= activeTimelineIndex ? 'text-brand-gold' : 'text-gray-400'}`}>
                            {item.date}
                          </span>
                          <span className={`block text-base font-bold transition-colors duration-300 ${idx <= activeTimelineIndex ? 'text-brand-blue' : 'text-gray-500'}`}>
                            {item.title}
                          </span>
                        </div>

                        {/* Description Area (Appears to the right when active) */}
                        <div className="flex-1 min-h-[20px]">
                          <AnimatePresence mode="wait">
                            {idx === activeTimelineIndex && (
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm relative"
                              >
                                {/* Decorative arrow for the content box */}
                                <div className="hidden lg:block absolute left-0 top-6 -translate-x-1/2 rotate-45 w-3 h-3 bg-gray-50 border-l border-b border-gray-100"></div>

                                <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                                  {item.content}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Authority Section */}
          <section id="authority" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-2">{hpT.nav_authority}</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {lang === 'tl' ? "Ang Banal na Komisyon" : (lang === 'es' ? "La Comisión Divina" : "The Divine Commission")}
                </h3>
                <p className="text-gray-600">
                  {lang === 'tl'
                    ? "Ang Tunay na Sugo ay humuhugot ng kaniyang karapatan nang direkta mula sa Diyos. Siya ay binigyan ng kaalamang nakatago sa hiwaga."
                    : (lang === 'es'
                      ? "El Verdadero Mensajero deriva su autoridad directamente de Dios. Se le dio el conocimiento oculto en el misterio."
                      : "The True Messenger derives his authority directly from God. He was given the knowledge hidden in mystery.")}
                </p>
                <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: lang === 'tl' ? "Banal na Komisyon" : (lang === 'es' ? "Comisión Divina" : "Divine Commission"),
                    desc: lang === 'tl' ? "Ang karapatan ay itinatatag sa pamamagitan ng pagiging 'sinugo' ng Diyos." : (lang === 'es' ? "La autoridad se establece al ser 'enviado' por Dios, distinguiendo a los verdaderos mensajeros de los falsos profetas." : "Authority is established by being 'sent' by God, distinguishing true messengers from false prophets."),
                    lessonId: 17,
                    category: 'messenger'
                  },
                  {
                    title: lang === 'tl' ? "Eksklusibong Pahayag" : (lang === 'es' ? "Revelación Exclusiva" : "Exclusive Revelation"),
                    desc: lang === 'tl' ? "Ang 'lihim na kaalaman' ay inihahayag lamang sa mga pinili ng Diyos na suguin." : (lang === 'es' ? "El 'conocimiento secreto' se revela solo a aquellos que Dios elige enviar, un misterio guardado desde que el mundo comenzó." : "The 'secret knowledge' is revealed only to those God chooses to send, a mystery kept since the world began."),
                    lessonId: 18,
                    category: 'messenger'
                  },
                  {
                    title: lang === 'tl' ? "Ang Isang Taong Bago" : (lang === 'es' ? "El Un Solo y Nuevo Hombre" : "The One New Man"),
                    desc: lang === 'tl' ? "Isang natatanging pag-unawa sa lohika ng kaligtasan: si Cristo bilang Ulo at ang Iglesia bilang Kaniyang Katawan." : (lang === 'es' ? "Una comprensión única de la lógica de la salvación: Cristo como la Cabeza y la Iglesia como Su Cuerpo." : "A unique understanding of the logic of salvation: Christ as the Head and the Church as His Body."),
                    lessonId: 46,
                    category: 'one-new-man'
                  },
                  {
                    title: lang === 'tl' ? "Katuparan ng Hula" : (lang === 'es' ? "Cumplimiento Profético" : "Prophetic Fulfillment"),
                    desc: lang === 'tl' ? "Pagpapatunay sa pamamagitan ng pag-ayon sa hula ng Biblia, gaya ng 'anghel' na umaakyat mula sa silangan." : (lang === 'es' ? "Validación mediante la alineación con la profecía bíblica, como el 'ángel' que asciende del este." : "Validation through alignment with biblical prophecy, such as the 'angel' ascending from the east."),
                    lessonId: 16,
                    category: 'messenger'
                  },
                  {
                    title: lang === 'tl' ? "Kasangkapan sa Kaligtasan" : (lang === 'es' ? "Herramienta para la Salvación" : "Tool for Salvation"),
                    desc: lang === 'tl' ? "Nasasandatahan ng 'tatak' upang gabayan ang mga tao pabalik sa kanilang orihinal na layunin." : (lang === 'es' ? "Equipado con el 'sello' para guiar a las personas de regreso a su propósito original: temer a Dios y guardar Sus mandamientos." : "Equipped with the 'seal' to guide people back to their original purpose: fearing God and keeping His commandments."),
                    lessonId: 19,
                    category: 'salvation'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-gold transition-all group flex flex-col"
                  >
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <ShieldCheck className="text-brand-blue h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-brand-blue mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{item.desc}</p>
                    <button
                      onClick={() => openStudy(item.category, item.lessonId)}
                      className="text-xs font-bold text-brand-gold uppercase tracking-widest flex items-center gap-1 hover:text-brand-blue transition-colors"
                    >
                      {lang === 'tl' ? "Basahin ang Aralin" : (lang === 'es' ? "Leer Lección Completa" : "Read Full Lesson")}
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Analogy Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-dark text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center rotate-3 shadow-lg">
                      <PenTool className="text-brand-dark h-10 w-10" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-gold mb-4">
                      {lang === 'tl' ? "Ang Blueprints ng Punong Arkitekto" : (lang === 'es' ? "Los Planos del Arquitecto Maestro" : "The Master Architect's Blueprints")}
                    </h4>
                    <p className="text-gray-300 leading-relaxed italic">
                      {lang === 'tl'
                        ? "Habang ang sinuman ay maaaring tumingin sa isang natapos na gusali, ang piniling foreman lamang ng arkitekto ang binibigyan ng 'nakatagong' teknikal na blueprints. Ang mga blueprints na ito ang nagbibigay ng eksklusibong karapatan at kaalaman."
                        : (lang === 'es'
                          ? "Mientras que cualquiera puede mirar un edificio terminado, solo al capataz elegido por el arquitecto se le dan los planos técnicos 'ocultos'. Estos planos proporcionan la autoridad exclusiva y el conocimiento necesarios para liderar adecuadamente la construcción y garantizar que la estructura cumpla su propósito previsto; sin ellos, cualquier intento de construir no estaría autorizado."
                          : "While anyone can look at a finished building, only the architect's chosen foreman is given the 'hidden' technical blueprints. These blueprints provide the exclusive authority and knowledge needed to properly lead the construction and ensure the structure fulfills its intended purpose; without them, any attempt to build would be unauthorized.")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Membership Section */}
          <section id="membership" className="py-24 bg-brand-light relative border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-brand-gold/30"></div>

                  <div className="space-y-10 relative">
                    {[
                      { title: lang === 'tl' ? "Ang Transformasyon" : (lang === 'es' ? "La Transformación" : "The Transformation"), content: lang === 'tl' ? <>Ang pisikal na kapanganakan ay hindi sapat. Dapat sumailalim sa muling pagsilang (<ScriptureLink verse="Juan 3:5" onHover={handleHover}>Juan 3:5</ScriptureLink>).</> : (lang === 'es' ? <>El nacimiento físico es insuficiente para la salvación. Uno debe experimentar una transformación completa, "naciendo de nuevo" del agua y del Espíritu (<ScriptureLink verse="John 3:5" onHover={handleHover}>Juan 3:5</ScriptureLink>).</> : <>Physical birth is insufficient for salvation. One must undergo a complete transformation, being "Born Again" of water and the Spirit (<ScriptureLink verse="John 3:5" onHover={handleHover}>John 3:5</ScriptureLink>).</>) },
                      { title: lang === 'tl' ? "Ang Proseso" : (lang === 'es' ? "El Proceso" : "The Process"), content: lang === 'tl' ? <>Ang pagbabagong ito ay nangangailangan ng tunay na Bautismo sa Iglesia ni Cristo (<ScriptureLink verse="Matthew 16:18" onHover={handleHover}>Mat. 16:18</ScriptureLink>).</> : (lang === 'es' ? <>Esta renovación requiere el verdadero Bautismo en la Iglesia de Cristo (<ScriptureLink verse="Matthew 16:18" onHover={handleHover}>Mat. 16:18</ScriptureLink>), que significa la muerte del viejo yo y el surgimiento de una "nueva creación".</> : <>This renewal requires true Baptism into the Church of Christ (<ScriptureLink verse="Matthew 16:18" onHover={handleHover}>Matt. 16:18</ScriptureLink>), signifying the death of the old self and the emergence of a "new creation."</>) },
                      { title: lang === 'tl' ? "Ang Resulta" : (lang === 'es' ? "El Resultado" : "The Result"), content: lang === 'tl' ? <>Sa pagpasok sa tunay na Iglesia, ang indibidwal ay legal na nagiging "binhi ni Abraham at mga tagapagmana ayon sa pangako" (<ScriptureLink verse="Galatians 3:29" onHover={handleHover}>Galacia 3:29</ScriptureLink>).</> : (lang === 'es' ? <>Al ingresar a la verdadera Iglesia, el individuo se convierte legalmente en "linaje de Abraham y herederos según la promesa" (<ScriptureLink verse="Galatians 3:29" onHover={handleHover}>Gálatas 3:29</ScriptureLink>).</> : <>By entering the true Church, the individual legally becomes "Abraham's seed and heirs according to the promise" (<ScriptureLink verse="Galatians 3:29" onHover={handleHover}>Galatians 3:29</ScriptureLink>).</>) }
                    ].map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-brand-gold flex items-center justify-center relative z-10 shadow-md ${idx === 2 ? 'bg-brand-gold' : ''}`}>
                          {idx === 2 ? <Check className="text-brand-dark h-8 w-8" /> : <span className="text-brand-blue font-bold text-xl">{idx + 1}</span>}
                        </div>
                        <div className="ml-6 pt-2">
                          <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                          <div className="mt-2 text-gray-600">{step.content}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h2 className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-2">{hpT.nav_membership}</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">{hpT.membership_title}</h3>
                  <div className="w-24 h-1 bg-brand-gold mb-8"></div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {lang === 'tl' ? "Ang pagpasok sa Aklat ng Buhay ay hindi nakabatay sa pisikal na lahi o merito sa mundo. Ito ay nangangailangan ng malalim na espirituwal na muling pagsilang." : (lang === 'es' ? "Ingresar al Libro de la Vida no está determinado por linaje humano o mérito terrenal. Requiere un renacimiento espiritual profundo." : "Entering the Book of Life is not determined by human lineage or earthly merit. It requires a profound spiritual rebirth.")}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {lang === 'tl' ? "Upang maangkin ang pangakong ibinigay sa Eden at pinagtibay kay Abraham, ang isa ay dapat makiisa sa Iisang Binhi, na si Jesucristo, sa pamamagitan ng pagiging kinikilalang kasapi ng Kaniyang katawan. Tinitiyak nito na ang parusa ng dagat-dagatang apoy ay maiiwasan sa pamamagitan ng Kaniyang perpektong sakripisyo." : (lang === 'es' ? "Para reclamar la promesa dada en el Edén y afirmada a Abraham, uno debe unirse con la Simiente Singular, Jesucristo, convirtiéndose en un miembro reconocido de Su cuerpo. Esto asegura que el castigo del lago de fuego sea evitado a través de Su sacrificio final." : "To claim the promise given in Eden and affirmed to Abraham, one must unite with the Singular Seed, Jesus Christ, by becoming a recognized member of His body. This ensures that the punishment of the lake of fire is averted through His ultimate sacrifice.")}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setView('baptism')}
                      className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-brand-dark transition-colors btn-glow"
                    >
                      {lang === 'tl' ? "Alamin ang Tungkol sa Bautismo" : (lang === 'es' ? "Aprende Sobre el Bautismo" : "Learn About Baptism")}
                      <ChevronRight className="h-5 w-5" />
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-white border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-full font-bold uppercase tracking-widest shadow-md hover:bg-gray-50 transition-colors btn-glow"
                    >
                      {lang === 'tl' ? "Makipag-ugnayan sa Ministro" : (lang === 'es' ? "Contactar a un Ministro" : "Contact a Minister")}
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Path to Redemption Section */}
          <section id="redemption-path" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-brand-gold rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-2">{hpT.redemption_title}</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 font-serif">{hpT.redemption_subtitle}</h3>
                <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
              </div>

              <div className="relative">
                {/* Vertical Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold via-brand-blue to-brand-gold/20 transform -translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-0">
                  {[
                    { icon: <Leaf className="h-6 w-6" />, title: hpT.path_step_1_title, desc: hpT.path_step_1_desc, scripture: "Luke 8:11" },
                    { icon: <Flame className="h-6 w-6" />, title: hpT.path_step_2_title, desc: hpT.path_step_2_desc, scripture: "Romans 6:23" },
                    { icon: <Scale className="h-6 w-6" />, title: hpT.path_step_3_title, desc: hpT.path_step_3_desc, scripture: "Ephesians 2:15" },
                    { icon: <Users className="h-6 w-6" />, title: hpT.path_step_4_title, desc: hpT.path_step_4_desc, scripture: "Colossians 1:18" },
                    { icon: <Droplets className="h-6 w-6" />, title: hpT.path_step_5_title, desc: hpT.path_step_5_desc, scripture: "Galatians 3:27" },
                    { icon: <Cloud className="h-6 w-6" />, title: hpT.path_step_6_title, desc: hpT.path_step_6_desc, scripture: "Revelation 21:1-4" }
                  ].map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:py-12`}>
                      {/* Step Marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-brand-gold shadow-xl">
                        <span className="text-brand-blue font-bold">{index + 1}</span>
                      </div>

                      {/* Content Card */}
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`w-full md:w-[45%] p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                      >
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          <div className="p-3 bg-brand-gold/10 rounded-lg text-brand-gold">
                            {step.icon}
                          </div>
                          <h4 className="text-2xl font-bold text-brand-blue">{step.title}</h4>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {step.desc}
                        </p>
                        <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                          <span className="text-xs font-bold font-mono text-brand-gold bg-brand-gold/5 px-3 py-1 rounded-full border border-brand-gold/20">
                            <ScriptureLink verse={step.scripture} onHover={handleHover}>{step.scripture}</ScriptureLink>
                          </span>
                        </div>
                      </motion.div>

                      {/* Spacer for mobile */}
                      <div className="md:hidden h-8"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView('baptism')}
                  className="px-10 py-4 bg-brand-blue text-white rounded-full font-bold uppercase tracking-widest shadow-xl hover:bg-brand-dark transition-all flex items-center gap-3 mx-auto btn-glow"
                >
                  {lang === 'tl' ? "Simulan ang Iyong Paglalakbay" : (lang === 'es' ? "Comienza Tu Viaje" : "Begin Your Journey")}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="py-24 bg-brand-dark text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-2">{hpT.nav_mission}</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{hpT.mission_title}</h3>
                <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-blue/30 border border-brand-gold/20 p-8 rounded-xl backdrop-blur-sm"
                >
                  <BookOpen className="text-brand-gold h-10 w-10 mb-6" />
                  <h4 className="text-xl font-bold mb-3">{lang === 'tl' ? "Paghahasik ng Salita" : (lang === 'es' ? "Sembrando la Palabra" : "Sowing the Word")}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {lang === 'tl' ? (
                      <>Ang misyon ay nagpapatuloy sa paghahasik ng Salita ng Diyos—ang espirituwal na Binhi (<ScriptureLink verse="Lucas 8:11" onHover={handleHover}>Luc. 8:11</ScriptureLink>).</>
                    ) : (lang === 'es' ? (
                      <>La misión continúa hoy mientras los Ministros propagan activamente el evangelio, sembrando la Palabra de Dios—la Simiente espiritual (<ScriptureLink verse="Luke 8:11" onHover={handleHover}>Lucas 8:11</ScriptureLink>)—en todo el mundo.</>
                    ) : (
                      <>The mission continues today as Ministers actively propagate the gospel, sowing the Word of God—the spiritual Seed (<ScriptureLink verse="Luke 8:11" onHover={handleHover}>Luke 8:11</ScriptureLink>)—across the world.</>
                    ))}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1.05 }}
                  viewport={{ once: true }}
                  className="bg-brand-blue/50 border border-brand-gold p-8 rounded-xl backdrop-blur-sm relative shadow-2xl"
                >
                  <div className="absolute -top-5 right-5 bg-brand-gold text-brand-dark font-bold px-4 py-1 rounded-full text-sm">
                    {lang === 'tl' ? "Mabuting Lupa" : (lang === 'es' ? "Buena Tierra" : "Good Ground")}
                    {fullName && <span className="ml-2 opacity-80 border-l border-brand-dark/20 pl-2">{fullName}</span>}
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24 rounded-full border-8 border-gray-700 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0" style={{ background: 'conic-gradient(#D4AF37 0% 25%, transparent 25% 100%)' }}></div>
                      <span className="relative z-10 font-bold text-xl text-white drop-shadow-md">25%</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center text-brand-gold">{lang === 'tl' ? "Ang 25% na Probabilidad" : (lang === 'es' ? "La Probabilidad del 25%" : "The 25% Probability")}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {lang === 'tl' ? "Sa Talinghaga ng Manghahasik, 1 lamang sa 4 na uri ng lupa ang kumakatawan sa \"mabuting lupa.\" Bahagi lamang ng mga nakikinig ang magtitiyaga, mananampalataya, at mababautismuhan." : (lang === 'es' ? "En la Parábola del Sembrador, solo 1 de los 4 tipos de tierra representa la \"buena tierra\". Solo una parte de los que escuchan perseverará, creerá y será bautizada." : "In the Parable of the Sower, only 1 in 4 types of soil represents \"good ground.\" Only a portion of those who hear will persevere, believe, and undergo baptism.")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-blue/30 border border-brand-gold/20 p-8 rounded-xl backdrop-blur-sm"
                >
                  <Droplets className="text-brand-gold h-10 w-10 mb-6" />
                  <h4 className="text-xl font-bold mb-3">{lang === 'tl' ? "Mga Tungkulin ng Kaanib" : (lang === 'es' ? "Deberes de los Miembros" : "Member Duties")}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {lang === 'tl' ? "Ang mga nasa loob ng Iglesia ay may tungkuling tumulong na 'diligin' ang mga binhing ito. Natutupad ito sa pamamagitan ng espirituwal na patnubay, paghahandog upang suportahan ang Ministeryo, at pagtatayo ng mga mariringal na Gusaling Sambahan." : (lang === 'es' ? "Aquellos en la Iglesia tienen el deber de ayudar a 'regar' estas semillas. Esto se cumple mediante guía espiritual, ofrendas para apoyar al Ministerio y la construcción de magníficas Casas de Adoración." : "Those in the Church possess the duty to help \"water\" these seeds. This is fulfilled through spiritual guidance, offerings to support the Ministry, and the construction of magnificent Houses of Worship.")}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-brand-blue text-white p-12 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                      <Mail className="w-64 h-64" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-4">{hpT.contact_title}</h3>
                      <p className="text-gray-300 mb-8">
                        {hpT.contact_desc}
                      </p>
                      <div className="flex items-center gap-4 text-brand-gold">
                        <MapPin className="h-5 w-5" />
                        <span>{lang === 'tl' ? "Hanapin ang lokal na kongregasyon" : (lang === 'es' ? "Encontrar una congregación local" : "Find a local congregation")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 p-12">
                    {submitStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center space-y-4"
                      >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                          <Check className="h-8 w-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900">
                          {lang === 'tl' ? "Salamat Po" : (lang === 'es' ? "Gracias" : "Thank You")}
                        </h4>
                        <p className="text-gray-600">
                          {lang === 'tl'
                            ? "Natanggap na ang iyong inquiry. Isang ministro ang makikipag-ugnayan sa iyo sa lalong madaling panahon."
                            : (lang === 'es'
                              ? "Su consulta ha sido recibida. Un ministro se pondrá en contacto en breve."
                              : "Your inquiry has been received. A minister will be in contact shortly.")}
                        </p>
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="text-brand-blue font-bold uppercase tracking-widest text-xs hover:underline mt-4"
                        >
                          {lang === 'tl' ? "Magpadala ng isa pang mensahe" : (lang === 'es' ? "Enviar otro mensaje" : "Send another message")}
                        </button>
                      </motion.div>
                    ) : (
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        {submitStatus === 'error' && (
                          <div className="p-4 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                            {lang === 'tl'
                              ? "Nagkaroon ng error sa pagpapadala. Pakisubukang muli mamaya."
                              : (lang === 'es'
                                ? "Hubo un error al enviar su consulta. Por favor inténtelo de nuevo más tarde."
                                : "There was an error sending your inquiry. Please try again later.")}
                          </div>
                        )}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">{lang === 'tl' ? "Buong Pangalan" : (lang === 'es' ? "Nombre Completo" : "Full Name")}</label>
                          <input
                            type="text"
                            id="name"
                            disabled={isSubmitting}
                            {...register('name')}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-gray-50 focus:ring-brand-gold focus:border-brand-gold border disabled:opacity-50 ${errors.name ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">{lang === 'tl' ? "Email Address" : (lang === 'es' ? "Correo Electrónico" : "Email Address")}</label>
                          <input
                            type="email"
                            id="email"
                            disabled={isSubmitting}
                            {...register('email')}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-gray-50 focus:ring-brand-gold focus:border-brand-gold border disabled:opacity-50 ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">{lang === 'tl' ? "Iyong Mensahe" : (lang === 'es' ? "Tu Mensaje" : "Your Message")}</label>
                          <textarea
                            id="message"
                            rows={4}
                            disabled={isSubmitting}
                            {...register('message')}
                            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-gray-50 focus:ring-brand-gold focus:border-brand-gold border disabled:opacity-50 ${errors.message ? 'border-red-500 bg-red-50' : ''}`}
                          ></textarea>
                          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold uppercase tracking-wider text-brand-dark bg-brand-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-glow"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></div>
                              {lang === 'tl' ? "Ipinapadala..." : (lang === 'es' ? "Enviando..." : "Sending...")}
                            </span>
                          ) : hpT.contact_btn}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-brand-dark text-white py-16 border-t border-brand-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Sun className="text-brand-gold h-8 w-8" />
                    <span className="text-2xl font-bold tracking-wider uppercase">The True Seed</span>
                  </div>
                  <p className="text-gray-400 max-w-md leading-relaxed">
                    {hpT.footer_desc}
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6">{lang === 'tl' ? "Mabilis na Links" : (lang === 'es' ? "Enlaces Rápidos" : "Quick Links")}</h4>
                  <ul className="space-y-4 text-sm text-gray-400">
                    {['theology', 'solution', 'history', 'authority', 'membership', 'mission'].map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} className="hover:text-brand-gold transition-colors">{hpT[`nav_${item}` as keyof typeof hpT]}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6">{lang === 'tl' ? "Mga Sanggunian" : (lang === 'es' ? "Recursos" : "Resources")}</h4>
                  <ul className="space-y-4 text-sm text-gray-400">
                    <li><button onClick={() => openStudy()} className="hover:text-brand-gold transition-colors">{hpT.nav_study}</button></li>
                    <li><button onClick={() => setView('baptism')} className="hover:text-brand-gold transition-colors">{hpT.nav_join}</button></li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Iglesia ni Cristo - The True Seed. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <Globe className="h-4 w-4 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                  <MapPin className="h-4 w-4 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                  <button
                    onClick={() => { setView('admin'); window.scrollTo(0, 0); }}
                    className="text-gray-500 hover:text-brand-gold transition-colors ml-4"
                    title="Admin Access"
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </footer>

          <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 bg-brand-gold text-brand-dark rounded-full shadow-2xl hover:bg-yellow-400 transition-all hover:scale-110 active:scale-90 btn-glow"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowDown className="h-6 w-6 transform rotate-180" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'The True Seed',
                text: 'Explore the Divine Journey of the Church of Christ.',
                url: window.location.href,
              }).catch(console.error);
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            }
          }}
          className="p-3 bg-brand-blue text-white rounded-full shadow-2xl hover:bg-brand-dark transition-all btn-glow"
          title="Share Website"
          aria-label="Share this website"
        >
          <Share2 className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  );
}
