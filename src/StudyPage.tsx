import React, { useState, useEffect, useRef } from 'react';
import {
  Book,
  Scroll,
  PenTool,
  ShieldCheck,
  Compass,
  Zap,
  Globe,
  History,
  Search,
  ArrowLeft,
  X,
  ChevronRight,
  Clock,
  CheckCircle2,
  Scale,
  Users,
  Flame,
  Eye,
  Infinity,
  Heart,
  Tag,
  Droplets,
  Presentation,
  ExternalLink,
  FileText,
  Star,
  Bookmark,
  PlayCircle,
  Cloud
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScriptureLink } from './scriptureData';

import { Helmet } from 'react-helmet-async';
import { Lesson, Quiz } from './types/study';
import QuizComponent from './components/QuizComponent';
import { getLessons } from './data/lessons';
import { useAppStore } from './store/useAppStore';
import { t, getLocalizedField } from './translations';
import { generateCertificate } from './utils/certificate';
import { Award, Trophy, Medal } from 'lucide-react';
import RealityCheckPage from './components/RealityCheckPage';

export default function StudyPage({
  onBack,
  lang,
  initialCategory = 'all',
  initialLessonId,
  onHover,
  openPdf,
  userEmail,
  onOpenAuth,
  fromSection
}: {
  onBack: (targetId?: string) => void,
  lang: 'en' | 'tl' | 'es',
  initialCategory?: string,
  initialLessonId?: number,
  onHover: (verse: string | null, x: number, y: number) => void,
  openPdf?: (url: string, title?: string) => void,
  userEmail?: string,
  onOpenAuth: () => void,
  fromSection?: string
}) {
  const categories = [
    { id: 'all', name: t('All Modules', lang), icon: Globe, color: 'bg-brand-blue' },
    { id: 'bible', name: t('The Bible', lang), icon: Book, color: 'bg-brand-blue', pdfUrl: '/The_Bible_Study_Guide.pdf', videoUrl: 'https://youtu.be/inJU4ez8YaI' },
    { id: 'god', name: t('The True God', lang), icon: Flame, color: 'bg-brand-gold', pdfUrl: '/The_True_God_Study_Guide.pdf', videoUrl: 'https://youtu.be/_qcsvXb0kqs' },
    { id: 'christ', name: t('Jesus Christ', lang), icon: Users, color: 'bg-brand-dark', pdfUrl: '/Jesus_Christ_Study_Guide.pdf', videoUrl: 'https://youtu.be/wpeUJVNQmh0' },
    { id: 'messenger', name: t('The Messenger', lang), icon: Scroll, color: 'bg-brand-blue', 
      pdfUrl: lang === 'es' 
        ? 'https://drive.google.com/file/d/1wNFpyMFZl-IWiUd4DYZWaMLOqALiJvjK/preview?usp=drive_link' 
        : 'https://drive.google.com/file/d/15bTsdOPXg7jEo8U6si_f4kQtmBAh2TdS/preview?usp=drive_link', 
      videoUrl: lang === 'es' ? 'https://youtu.be/8dkIediXSPo' : 'https://youtu.be/arCAdJ2AAIg' 
    },
    { id: 'salvation', name: t('Salvation', lang), icon: Heart, color: 'bg-brand-blue', pdfUrl: '/Salvation_Study_Guide.pdf', videoUrl: 'https://youtu.be/8ZIEesJT9Jg' },
    { id: 'judgement', name: t('Judgement Day', lang), icon: Scale, color: 'bg-brand-gold', pdfUrl: 'https://drive.google.com/file/d/1dF5xqOW7rYPnKSTAOmWX5X17N5InFv_e/preview?usp=drive_link', videoUrl: 'https://youtu.be/inLrUSzKd7U' },
    { id: 'false-churches', name: t('False Churches', lang), icon: ShieldCheck, color: 'bg-brand-dark', pdfUrl: 'https://drive.google.com/file/d/1pK88Pn0vd3ek02eiTYcpjPI58VBKMuky/preview?usp=drive_link', videoUrl: 'https://youtu.be/X-OUhcCBzOY' },
    { id: 'true-church', name: t('The True Church', lang), icon: ShieldCheck, color: 'bg-brand-blue', pdfUrl: 'https://drive.google.com/file/d/1NUjMDRGObk6eooyYw7Nb13NvE90vO337/preview?usp=drive_link', videoUrl: 'https://youtu.be/NrLZjwyCabU' },
    { id: 'eternal-covenant', name: t('Eternal Covenant', lang), icon: Infinity, color: 'bg-brand-blue', pdfUrl: 'https://drive.google.com/file/d/1v875zO-MiNUiTiXGAY3NcJoPHdAM0laQ/preview?usp=drive_link', videoUrl: 'https://youtu.be/_42LiWGjFrk' },
    { id: 'election', name: t('Election', lang), icon: Star, color: 'bg-brand-gold', pdfUrl: '/Election_Study_Guide.pdf', videoUrl: 'https://youtu.be/JBq2SKDtSmk' },
    { id: 'one-new-man', name: t('One New Man', lang), icon: Presentation, color: 'bg-brand-blue', pdfUrl: 'https://drive.google.com/file/d/1guh3f-Ys164VYTsOgE3g89qWMBD_3zcF/preview?usp=drive_link', videoUrl: 'https://youtu.be/7g3BRtlJHj0?si=MPzIY__sTAGnJAMn' },
    { id: 'bookmarks', name: t('Bookmarks', lang), icon: Bookmark, color: 'bg-brand-dark' },
  ];

  const lessons = getLessons(lang, onHover);
  const contentRef = useRef<HTMLElement>(null);


  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeLesson, setActiveLesson] = useState(initialLessonId || 1);
  const { completedLessons, markLessonComplete, bookmarkedLessons, toggleBookmark, fullName, setFullName } = useAppStore();
  const [hasReadCurrent, setHasReadCurrent] = useState(false);
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showRealityCheck, setShowRealityCheck] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [nameModalMode, setNameModalMode] = useState<'certificate' | 'challenge'>('certificate');

  const getCategoryStatus = (categoryId: string) => {
    const categoryLessons = lessons.filter(l => l.category === categoryId);
    if (categoryLessons.length === 0) return 0;
    const completedInCategory = categoryLessons.filter(l => completedLessons.includes(l.id));
    return (completedInCategory.length / categoryLessons.length);
  };

  const handleDownloadCertificate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!fullName.trim()) return;

    setIsNameModalOpen(false);

    if (nameModalMode === 'challenge') {
      setShowRealityCheck(true);
      return;
    }

    // Otherwise proceed with certificate generation
    setIsGeneratingCertificate(true);
    try {
      const date = new Date().toLocaleDateString(lang === 'en' ? 'en-US' : (lang === 'es' ? 'es-ES' : 'en-PH'), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      await generateCertificate(fullName, date, lang);
    } catch (err) {
      console.error('Certificate generation failed:', err);
    } finally {
      setIsGeneratingCertificate(false);
    }
  };

  useEffect(() => {
    if (initialLessonId) {
      setActiveLesson(initialLessonId);
      // Auto-scroll on mobile when arriving from an external section link
      if (window.innerWidth < 1024 && contentRef.current) {
        setTimeout(() => {
          contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Small delay to ensure render is stable
      }
    }
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory, initialLessonId]);

  // Reset reading state when lesson changes
  useEffect(() => {
    setHasReadCurrent(false);
    setShowQuizPrompt(false);
    setIsQuizActive(false);
  }, [activeLesson]);

  const handleMarkAsRead = () => {
    setHasReadCurrent(true);
    markLessonComplete(activeLesson);
    const currentLesson = lessons.find(l => l.id === activeLesson);
    if (currentLesson?.quiz) {
      setShowQuizPrompt(true);
    }
  };

  const filteredLessons = lessons.filter(l => {
    // Bookmarks virtual category
    if (selectedCategory === 'bookmarks') {
      return bookmarkedLessons.includes(l.id);
    }

    return selectedCategory === 'all' || l.category === selectedCategory;
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // We no longer clear search query automatically to allow filtering search results by category
    const firstLessonOfCategory = lessons.find(l => l.category === categoryId);
    if (firstLessonOfCategory && categoryId !== 'all') {
      setActiveLesson(firstLessonOfCategory.id);
    }
  };

  const activeLessonData = lessons.find(l => l.id === activeLesson) || lessons[0];
  const lessonTitle = getLocalizedField(activeLessonData, 'title', lang);
  const lessonDesc = getLocalizedField(activeLessonData, 'searchContent', lang);

  if (showRealityCheck) {
    return <RealityCheckPage onBack={() => setShowRealityCheck(false)} lang={lang} userName={fullName} userEmail={userEmail} />;
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-serif">
      <Helmet>
        <title>{lessonTitle} - Study Center | The True Seed</title>
        <meta name="description" content={lessonDesc || (t('Explore our library of biblical lessons.', lang))} />
      </Helmet>
      {/* Header */}
      <header className="bg-brand-dark text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onBack()}
              aria-label={t('Back to Home', lang)}
              className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
              <span className="uppercase tracking-widest text-[10px] sm:text-xs font-bold font-sans">{lang === 'es' ? 'Volver a Inicio' : 'Back to Home'}</span>
            </button>

            {fromSection === 'authority' && (
              <button
                onClick={() => onBack('authority')}
                className="flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-dark transition-all text-[10px] sm:text-xs font-bold uppercase tracking-widest btn-glow shadow-lg shadow-brand-gold/10"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                {t('Return to Authority', lang)}
              </button>
            )}
          </div>

          <div className="hidden md:block">
            <h1 className="text-xl font-bold tracking-widest uppercase font-serif text-brand-gold">
              {t('Study Center', lang)}
            </h1>
          </div>
        </div>
      </header>



      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {!userEmail && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-8 bg-gradient-to-r from-brand-blue to-brand-dark rounded-[2rem] p-6 shadow-xl border-l-4 border-brand-gold flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Cloud size={100} className="text-white" />
            </div>
            <div className="flex items-center gap-5 relative z-10 text-center md:text-left">
              <div className="p-3 bg-white/10 rounded-2xl border border-white/20">
                <Cloud className="h-8 w-8 text-brand-gold animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif">{t('Sync Your Progress', lang)}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{t('Save your milestones in the cloud to access them on any device.', lang)}</p>
              </div>
            </div>
            <button
              onClick={onOpenAuth}
              className="bg-brand-gold text-brand-dark px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-yellow-400 transition-all shadow-lg active:scale-95 whitespace-nowrap btn-glow"
            >
              {t('Sign In to Sync', lang)}
            </button>
          </motion.div>
        )}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-2 font-serif">
                {t('What would you like to learn today?', lang)}
              </h2>
              <p className="text-gray-500 text-sm">
                {t('Explore our library of biblical lessons and prophecies.', lang)}
              </p>
            </div>

            <div className="overflow-x-auto pb-2 custom-scrollbar">
              <div className="flex justify-center gap-3 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all border-2 ${selectedCategory === cat.id
                      ? `border-brand-gold ${cat.color} text-white shadow-md scale-105`
                      : 'border-gray-100 bg-white text-gray-500 hover:border-brand-blue/30'
                      }`}
                  >
                    <cat.icon className={`h-4 w-4 ${selectedCategory === cat.id ? 'text-brand-gold' : 'text-gray-400'}`} />
                    <span className="font-bold font-sans uppercase tracking-widest text-[10px]">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Resources Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 mb-12 flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => setShowAchievements(!showAchievements)}
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-sm ${showAchievements ? 'bg-brand-gold text-brand-dark hover:bg-yellow-400' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                <Trophy className="h-4 w-4" />
                {showAchievements ? t('Hide Progress', lang) : t('View Progress', lang)}
              </button>
              {categories.find(c => c.id === selectedCategory)?.videoUrl && (
                <a
                  href={categories.find(c => c.id === selectedCategory)?.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/10 text-red-600 border border-red-500/30 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm"
                >
                  <PlayCircle className="h-4 w-4" />
                  {t('Watch Video', lang)}
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              )}
              {categories.find(c => c.id === selectedCategory)?.pdfUrl && (
                <button
                  onClick={(e) => {
                      e.preventDefault();
                      const category = categories.find(c => c.id === selectedCategory);
                      const url = category?.pdfUrl;
                      const title = category?.name;
                      if (url && openPdf) openPdf(url, title);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-brand-blue/10 text-brand-blue border border-brand-blue/30 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-sm cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  {t('View Study Guide', lang)}
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </button>
              )}
            </motion.div>

            {/* Progress Section */}
            <AnimatePresence>
              {showAchievements && (
                <motion.div
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  className="w-full"
                >
                  <div className="max-w-md mx-auto mb-8 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-gold/10 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">
                    {t('Your Progress', lang)}
                  </div>
                  <div className="text-sm font-bold text-brand-blue font-sans">
                    {completedLessons.length} / {lessons.length} <span className="text-gray-400 font-normal ml-1">{t('Lessons', lang)}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <div className="text-[10px] font-bold text-brand-gold font-sans">
                  {Math.round((completedLessons.length / lessons.length) * 100)}%
                </div>
                <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
                    className="h-full bg-brand-gold"
                  />
                </div>
                {import.meta.env.DEV && (
                   <button 
                     onClick={() => lessons.forEach(l => markLessonComplete(l.id))}
                     className="mt-2 text-[9px] bg-red-500/10 text-red-500 px-2 py-1 rounded-full border border-red-500/20 hover:bg-red-500 hover:text-white transition-all font-bold uppercase tracking-tighter"
                   >
                     Dev: Mark All Complete
                   </button>
                )}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-0 px-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="h-4 w-4 text-brand-gold" />
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 font-sans">
                  {t('Your Achievements', lang)}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.filter(c => c.id !== 'all').map((cat) => {
                  const progress = getCategoryStatus(cat.id);
                  const isDone = progress === 1;
                  const hasStarted = progress > 0;
                  const Icon = cat.icon;
                  return (
                    <motion.div
                      key={cat.id}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className={`relative group flex flex-col items-center p-3 rounded-2xl border-2 transition-all duration-300 cursor-default
                        ${isDone 
                          ? 'bg-white border-brand-gold shadow-lg shadow-brand-gold/20' 
                          : hasStarted
                            ? 'bg-white border-brand-blue/30 shadow-sm'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      title={`${cat.name}: ${Math.round(progress * 100)}%`}
                    >
                      <div className={`p-3 rounded-full mb-2 transition-colors ${
                        isDone 
                          ? 'bg-brand-gold text-brand-dark' 
                          : hasStarted
                            ? 'bg-brand-blue/10 text-brand-blue'
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className={`text-[9px] uppercase tracking-tighter font-bold text-center max-w-[70px] leading-tight ${
                        isDone ? 'text-brand-dark' : hasStarted ? 'text-brand-blue' : 'text-gray-400'
                      }`}>
                        {cat.name}
                      </div>
                      {/* Progress mini-bar */}
                      {!isDone && (
                        <div className="w-12 h-1 bg-gray-200 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className="h-full bg-brand-blue/50 rounded-full transition-all"
                            style={{ width: `${Math.round(progress * 100)}%` }}
                          />
                        </div>
                      )}
                      {isDone && (
                        <div className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark rounded-full p-0.5 border-2 border-white shadow-md">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                      )}
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                        {isDone ? (t('Module Mastered!', lang)) : `${Math.round(progress * 100)}% Complete`}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {completedLessons.length >= lessons.length && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-6 bg-gradient-to-br from-brand-blue to-brand-dark rounded-3xl text-center border-b-4 border-brand-gold relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 opacity-10">
                    <Trophy className="h-40 w-40 text-brand-gold" />
                  </div>
                  <div className="relative z-10">
                    <Medal className="h-10 w-10 text-brand-gold mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2 font-serif">
                      {t('Congratulations, Graduate!', lang)}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
                      {t('You have completed all theological modules...', lang)}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <button
                        onClick={() => {
                          setNameModalMode('certificate');
                          setIsNameModalOpen(true);
                        }}
                        className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all flex items-center gap-2 active:scale-95 shadow-xl"
                      >
                        <FileText className="h-4 w-4" />
                        {t('Download Official Certificate', lang)}
                      </button>

                      <button
                        onClick={() => {
                          if (!fullName.trim()) {
                            setNameModalMode('challenge');
                            setIsNameModalOpen(true);
                          } else {
                            setShowRealityCheck(true);
                          }
                        }}
                        className="bg-white text-brand-blue border-2 border-brand-blue/30 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-all flex items-center gap-2 active:scale-95 shadow-xl"
                      >
                        <Compass className="h-4 w-4" />
                        {t('Next Challenge: Reality Check', lang)}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 lg:h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-2">
              <div className="px-4 py-2 flex items-center justify-between">
                <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 font-sans">
                  {t('Module Selection', lang)}
                </h2>
              </div>
              {filteredLessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setActiveLesson(lesson.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group ${activeLesson === lesson.id
                    ? 'bg-white shadow-md border-l-4 border-brand-gold'
                    : 'hover:bg-white/50'
                    }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${activeLesson === lesson.id ? 'bg-brand-blue text-brand-gold' : 'bg-gray-200 text-gray-500 group-hover:bg-brand-gold/20'
                    }`}>
                    {completedLessons.includes(lesson.id) ? <CheckCircle2 className="h-5 w-5" /> : <lesson.icon className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold font-sans text-sm ${activeLesson === lesson.id ? 'text-brand-blue' : 'text-gray-600'}`}>
                      {getLocalizedField(lesson, 'title', lang)}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400">Lesson {lesson.id < 10 ? `0${lesson.id}` : lesson.id}</div>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeLesson === lesson.id ? 'text-brand-gold translate-x-1' : 'text-gray-300'}`} />
                </button>
              ))}
              {filteredLessons.length === 0 && (
                <div className="text-center py-12 px-4 bg-white/30 rounded-2xl border-2 border-dashed border-gray-200">
                  {selectedCategory === 'bookmarks' ? (
                    <>
                      <Bookmark className="h-8 w-8 text-gray-300 mx-auto mb-3" />
                      <div className="text-gray-500 font-bold text-sm mb-1">
                        {t('No bookmarks yet', lang)}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {lang === 'tl'
                          ? "Buksan ang anumang aralin at i-tap ang bookmark icon upang i-save ito dito."
                          : (lang === 'es' 
                            ? "Abre cualquier lección y toca el icono de marcador para guardarla aquí." 
                            : "Open any lesson and tap the bookmark icon to save it here.")}
                      </div>
                    </>
                  ) : (
                    <>
                      <Search className="h-8 w-8 text-gray-300 mx-auto mb-3 opacity-50" />
                      <div className="text-gray-500 font-bold text-sm mb-1">
                        {t('No matches found', lang)}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {lang === 'tl'
                          ? "Subukang maghanap ng ibang mga keyword o paksa."
                          : (lang === 'es'
                            ? "Intenta buscar diferentes palabras clave o temas."
                            : "Try searching for different keywords or topics.")}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </aside>

          {/* Content Area */}
          <section className="lg:col-span-9" ref={contentRef}>
            <AnimatePresence mode="wait">
              {(() => {
                const currentLesson = lessons.find(l => l.id === activeLesson) || lessons[0];
                return (
                  <motion.div
                    key={activeLesson}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-[2rem] shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden"
                  >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      {currentLesson?.icon && React.createElement(currentLesson.icon, { size: 120 })}
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div className="text-brand-gold font-bold font-sans text-xs uppercase tracking-[0.3em]">
                          Module {activeLesson < 10 ? `0${activeLesson}` : activeLesson}
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Bookmark button */}
                          <motion.button
                            onClick={() => toggleBookmark(activeLesson)}
                            whileTap={{ scale: 0.85 }}
                            title={bookmarkedLessons.includes(activeLesson)
                              ? (t('Remove Bookmark', lang))
                              : (t('Bookmark this Lesson', lang))}
                            aria-label={bookmarkedLessons.includes(activeLesson)
                              ? (t('Remove Bookmark', lang))
                              : (t('Bookmark this Lesson', lang))}
                            className={`p-2 rounded-xl border-2 transition-all ${
                              bookmarkedLessons.includes(activeLesson)
                                ? 'bg-brand-gold border-brand-gold text-brand-dark shadow-md'
                                : 'border-gray-200 text-gray-400 hover:border-brand-gold hover:text-brand-gold'
                            }`}
                          >
                            <Bookmark className={`h-4 w-4 ${bookmarkedLessons.includes(activeLesson) ? 'fill-current' : ''}`} />
                          </motion.button>

                          {categories.find(c => c.id === currentLesson?.category)?.videoUrl && (
                            <a
                              href={categories.find(c => c.id === currentLesson?.category)?.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm"
                            >
                              <PlayCircle className="h-3.5 w-3.5" />
                              {t('Watch Video', lang)}
                              <ExternalLink className="h-3 w-3 opacity-50" />
                            </a>
                          )}
                          {categories.find(c => c.id === currentLesson?.category)?.pdfUrl && (
                            <button
                              onClick={(e) => {
                                  e.preventDefault();
                                  const category = categories.find(c => c.id === currentLesson?.category);
                                  const url = category?.pdfUrl;
                                  const title = category?.name;
                                  if (url && openPdf) openPdf(url, title);
                              }}
                              className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all shadow-sm cursor-pointer"
                            >
                              <FileText className="h-3.5 w-3.5" />
                              {t('Study Guide', lang)}
                              <ExternalLink className="h-3 w-3 opacity-50" />
                            </button>
                          )}
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8 border-b border-gray-100 pb-6 font-serif">
                        {currentLesson ? getLocalizedField(currentLesson, 'title', lang) : ''}
                      </h2>

                      <div className="prose prose-base prose-p:leading-snug prose-p:my-3 prose-headings:mb-3 prose-li:my-1 max-w-none text-gray-800 font-sans">
                        {currentLesson?.content}
                      </div>

                      <div className="mt-8">
                        {!hasReadCurrent ? (
                          <button
                            onClick={handleMarkAsRead}
                            className="w-full py-4 bg-brand-blue/10 text-brand-blue border-2 border-dashed border-brand-blue/30 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-blue/20 transition-all group"
                          >
                            <CheckCircle2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
                            {t('I have finished reading this lesson', lang)}
                          </button>
                        ) : (
                          <div className="space-y-8">
                            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center gap-3 text-emerald-700 font-bold text-sm">
                              <CheckCircle2 className="h-5 w-5" />
                              {t('Lesson Completed', lang)}
                            </div>
                            {!userEmail && (
                              <p className="text-[10px] text-gray-400 mt-2 italic px-1">
                                {lang === 'en' 
                                  ? "💡 Tip: Log in to save this milestone forever in the cloud." 
                                  : (lang === 'es' 
                                    ? "💡 Consejo: Inicia sesión para guardar este logro para siempre en la nube." 
                                    : "💡 Tip: Mag-log in para i-save ang tagumpay na ito nang permanente sa cloud.") 
                                }
                              </p>
                            )}

                            {showQuizPrompt && currentLesson?.quiz && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-brand-gold/10 border-2 border-brand-gold/30 rounded-2xl p-8 text-center"
                              >
                                <Zap className="h-10 w-10 text-brand-gold mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-brand-blue mb-2">
                                  {t('Test Your Knowledge?', lang)}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                  {t('quizPromptDetails', lang)}
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                  <button
                                    onClick={() => {
                                      setIsQuizActive(true);
                                      setShowQuizPrompt(false);
                                    }}
                                    className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors shadow-lg"
                                  >
                                    {t('Yes, take quiz', lang)}
                                  </button>
                                  <button
                                    onClick={() => setShowQuizPrompt(false)}
                                    className="bg-white text-gray-500 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors border border-gray-200"
                                  >
                                    {t('Maybe later', lang)}
                                  </button>
                                </div>
                              </motion.div>
                            )}

                            {isQuizActive && currentLesson?.quiz && (
                              <QuizComponent quiz={currentLesson.quiz} lang={lang} onHover={onHover} />
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                        <div className="flex gap-4">
                            <button
                              onClick={() => {
                                const availableLessons = lessons.filter(l => l.category === selectedCategory);
                                const currentIndex = availableLessons.findIndex(l => l.id === activeLesson);
                                const prevIndex = currentIndex > 0 ? currentIndex - 1 : availableLessons.length - 1;
                                setActiveLesson(availableLessons[prevIndex].id);
                              }}
                              className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full font-bold font-sans text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                              <ChevronRight className="h-4 w-4 rotate-180" />
                              {t('Previous', lang)}
                            </button>
                            <button
                              onClick={() => {
                                const availableLessons = lessons.filter(l => l.category === selectedCategory || selectedCategory === 'all');
                                const currentIndex = availableLessons.findIndex(l => l.id === activeLesson);
                                const nextIndex = currentIndex < availableLessons.length - 1 ? currentIndex + 1 : 0;
                                setActiveLesson(availableLessons[nextIndex].id);
                              }}
                              className="bg-brand-blue text-white px-6 py-2 rounded-full font-bold font-sans text-sm hover:bg-brand-dark transition-colors flex items-center gap-2 btn-glow"
                            >
                              {t('Next Lesson', lang)}
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-12">
        <div className="w-full px-4 text-center">
          <p className="text-gray-400 text-sm italic font-sans">
            "The grass withereth, the flower fadeth: but the word of our God shall stand for ever." — <ScriptureLink verse="Isaiah 40:8" onHover={onHover}>Isaiah 40:8</ScriptureLink>
          </p>
        </div>
      </footer>
      {/* Certificate Name Modal */}
      <AnimatePresence>
        {isNameModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl border border-brand-gold/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={180} className="text-brand-gold" />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PenTool className="h-10 w-10 text-brand-gold" />
                </div>
                
                <h3 className="text-3xl font-bold text-brand-blue mb-4 font-serif">
                  {t('Enter your Full Name', lang)}
                </h3>
                <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
                  {t('Full name for certificate', lang)}
                </p>

                <form onSubmit={handleDownloadCertificate} className="space-y-6">
                  <div className="relative">
                    <input
                      autoFocus
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={lang === 'en' ? 'John Doe' : (lang === 'es' ? 'Juan Pérez' : 'Juan dela Cruz')}
                      className="w-full px-8 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none font-serif text-2xl text-center text-brand-blue transition-all"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsNameModalOpen(false)}
                      className="flex-1 py-4 px-6 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition-all text-sm uppercase tracking-widest"
                    >
                      {t('Cancel', lang)}
                    </button>
                    <button
                      type="submit"
                      disabled={isGeneratingCertificate || !fullName.trim()}
                      className="flex-[2] py-4 px-6 bg-brand-gold text-brand-dark rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-3"
                    >
                      {isGeneratingCertificate ? (
                        <div className="h-5 w-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></div>
                      ) : (
                        <CheckCircle2 className="h-5 w-5" />
                      )}
                      {t('Confirm & Download', lang)}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

