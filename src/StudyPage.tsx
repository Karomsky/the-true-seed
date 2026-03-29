import React, { useState, useEffect } from 'react';
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
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScriptureLink } from './scriptureData';

import { Helmet } from 'react-helmet-async';
import { Lesson, Quiz } from './types/study';
import QuizComponent from './components/QuizComponent';
import { getLessons } from './data/lessons';
import { useAppStore } from './store/useAppStore';
import { generateCertificate } from './utils/certificate';
import { Award, Trophy, Medal } from 'lucide-react';

export default function StudyPage({
  onBack,
  lang,
  initialCategory = 'all',
  initialLessonId,
  onHover
}: {
  onBack: (scrollToContact?: boolean) => void,
  lang: 'en' | 'tl',
  initialCategory?: string,
  initialLessonId?: number,
  onHover: (verse: string | null, x: number, y: number) => void
}) {
  const categories = [
    { id: 'all', name: lang === 'en' ? 'All Modules' : 'Lahat ng Modyul', icon: Globe, color: 'bg-brand-blue' },
    { id: 'bible', name: lang === 'en' ? 'The Bible' : 'Ang Biblia', icon: Book, color: 'bg-brand-blue', pdfUrl: '/The_Bible_Study_Guide.pdf' },
    { id: 'god', name: lang === 'en' ? 'The True God' : 'Ang Tunay na Diyos', icon: Flame, color: 'bg-brand-gold', pdfUrl: '/The_True_God_Study_Guide.pdf' },
    { id: 'christ', name: lang === 'en' ? 'Jesus Christ' : 'Jesucristo', icon: Users, color: 'bg-brand-dark', pdfUrl: '/Jesus_Christ_Study_Guide.pdf' },
    { id: 'messenger', name: lang === 'en' ? 'The Messenger' : 'Ang Sugo', icon: Scroll, color: 'bg-brand-blue', pdfUrl: '/The_Messenger_Study_Guide.pdf' },
    { id: 'salvation', name: lang === 'en' ? 'Salvation' : 'Kaligtasan', icon: Heart, color: 'bg-brand-blue', pdfUrl: '/Salvation_Study_Guide.pdf' },
    { id: 'judgement', name: lang === 'en' ? 'Judgement Day' : 'Araw ng Paghuhukom', icon: Scale, color: 'bg-brand-gold', pdfUrl: '/Judgement_Day_Study_Guide.pdf' },
    { id: 'false-churches', name: lang === 'en' ? 'False Churches' : 'Ibang Iglesia', icon: ShieldCheck, color: 'bg-brand-dark', pdfUrl: '/False_Church_Study_Guide.pdf' },
    { id: 'true-church', name: lang === 'en' ? 'The True Church' : 'Ang Tunay na Iglesia', icon: ShieldCheck, color: 'bg-brand-blue', pdfUrl: '/The_True_Church_Study_Guide.pdf' },
    { id: 'eternal-covenant', name: lang === 'en' ? 'Eternal Covenant' : 'Walang Hanggang Tipan', icon: Infinity, color: 'bg-brand-blue', pdfUrl: '/Eternal_Covenant_Study_Guide.pdf' },
  ];

  const lessons = getLessons(lang, onHover);


  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeLesson, setActiveLesson] = useState(initialLessonId || 1);
  const [searchQuery, setSearchQuery] = useState('');
  const { completedLessons, markLessonComplete } = useAppStore();
  const [hasReadCurrent, setHasReadCurrent] = useState(false);
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isGeneratingCertificate, setIsGeneratingCertificate] = useState(false);

  const getCategoryStatus = (categoryId: string) => {
    const categoryLessons = lessons.filter(l => l.category === categoryId);
    if (categoryLessons.length === 0) return 0;
    const completedInCategory = categoryLessons.filter(l => completedLessons.includes(l.id));
    return (completedInCategory.length / categoryLessons.length);
  };

  const handleDownloadCertificate = async () => {
    setIsGeneratingCertificate(true);
    try {
      const { user } = useAppStore.getState();
      const userName = user?.email.split('@')[0] || 'Faithful Student';
      const date = new Date().toLocaleDateString();
      await generateCertificate(userName, date, lang);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGeneratingCertificate(false);
    }
  };

  useEffect(() => {
    if (initialLessonId) {
      setActiveLesson(initialLessonId);
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
    const query = searchQuery.toLowerCase().trim();

    // Category filtering logic
    const matchesCategory = selectedCategory === 'all' || l.category === selectedCategory;

    if (query === '') return matchesCategory;

    const matchesTitle = l.title.toLowerCase().includes(query) ||
      l.titleTl.toLowerCase().includes(query);

    const matchesKeywords = (l.searchKeywords?.toLowerCase().includes(query)) ||
      (l.searchKeywordsTl?.toLowerCase().includes(query));

    const matchesContent = (l.searchContent?.toLowerCase().includes(query)) ||
      (l.searchContentTl?.toLowerCase().includes(query));

    // Search in quiz questions and explanations
    const matchesQuiz = l.quiz?.questions.some(q => {
      const qText = typeof q.question === 'string' ? q.question.toLowerCase() : '';
      const expText = typeof q.explanation === 'string' ? q.explanation.toLowerCase() : '';
      const optionsText = q.options.some(o => typeof o === 'string' ? o.toLowerCase().includes(query) : false);

      return qText.includes(query) || expText.includes(query) || optionsText;
    });

    const matchesSearch = matchesTitle || matchesKeywords || matchesContent || matchesQuiz;

    // Combine category filter with search query
    return matchesCategory && matchesSearch;
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
  const lessonTitle = lang === 'en' ? activeLessonData.title : activeLessonData.titleTl;
  const lessonDesc = lang === 'en' ? activeLessonData.searchContent : activeLessonData.searchContentTl;

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-serif">
      <Helmet>
        <title>{lessonTitle} - Study Center | The True Seed</title>
        <meta name="description" content={lessonDesc || (lang === 'en' ? 'Explore our library of biblical lessons.' : 'Galugarin ang aming koleksyon ng mga aralin sa Biblia.')} />
      </Helmet>
      {/* Header */}
      <header className="bg-brand-dark text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between">
          <button
            onClick={() => onBack()}
            aria-label={lang === 'en' ? "Back to Home" : "Bumalik sa Home"}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest text-xs font-bold font-sans">Back to Home</span>
          </button>

          <div className="hidden md:block">
            <h1 className="text-xl font-bold tracking-widest uppercase font-serif text-brand-gold">
              {lang === 'en' ? "Study Center" : "Sentro ng Pag-aaral"}
            </h1>
          </div>
        </div>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-2 font-serif">
                {lang === 'en' ? "What would you like to learn today?" : "Ano ang nais mong pag-aralan ngayon?"}
              </h2>
              <p className="text-gray-500 text-sm">
                {lang === 'en' ? "Explore our library of biblical lessons and prophecies." : "Galugarin ang aming koleksyon ng mga aralin sa Biblia at mga hula."}
              </p>
            </div>

            {/* Progress Section */}
            <div className="max-w-md mx-auto mb-8 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-gold/10 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">
                    {lang === 'en' ? "Your Progress" : "Iyong Pag-unlad"}
                  </div>
                  <div className="text-sm font-bold text-brand-blue font-sans">
                    {completedLessons.length} / {lessons.length} <span className="text-gray-400 font-normal ml-1">{lang === 'en' ? "Lessons" : "Aralin"}</span>
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
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-10 px-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="h-4 w-4 text-brand-gold" />
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 font-sans">
                  {lang === 'en' ? "Your Achievements" : "Iyong mga Tagumpay"}
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
                        {isDone ? (lang === 'en' ? '🏆 Module Mastered!' : '🏆 Masterado na!') : `${Math.round(progress * 100)}% Complete`}
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
                      {lang === 'en' ? "Congratulations, Graduate!" : "Pagbati, Nagtapos!"}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
                      {lang === 'en' 
                        ? "You have completed all theological modules. You are now eligible for your Certificate of Completion." 
                        : "Natapos mo na ang lahat ng mga teolohikong modyul. Karapat-dapat ka na para sa iyong Katibayan ng Pagtatapos."}
                    </p>
                    <button
                      onClick={handleDownloadCertificate}
                      disabled={isGeneratingCertificate}
                      className="bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-yellow-400 transition-all flex items-center gap-2 mx-auto active:scale-95 shadow-xl disabled:opacity-50"
                    >
                      {isGeneratingCertificate ? (
                        <div className="h-4 w-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></div>
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                      {lang === 'en' ? "Download Official Certificate" : "I-download ang Opisyal na Katibayan"}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mb-8 group"
            >
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-brand-gold group-focus-within:text-brand-blue transition-colors" />
              </div>
              <input
                type="text"
                aria-label={lang === 'en' ? "Search for a lesson topic" : "Maghanap ng paksa ng aralin"}
                placeholder={lang === 'en' ? "Search for a lesson topic..." : "Maghanap ng paksa ng aralin..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-32 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none font-sans text-lg transition-all placeholder:text-gray-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-2">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-2 text-gray-400 hover:text-brand-blue transition-colors"
                    title={lang === 'en' ? "Clear search" : "Linisin ang paghahanap"}
                    aria-label={lang === 'en' ? "Clear search" : "Linisin ang paghahanap"}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-brand-blue text-white p-2.5 rounded-xl font-bold text-sm hover:bg-brand-dark transition-all shadow-md active:scale-95 flex items-center justify-center"
                  title={lang === 'en' ? "Search" : "Hanapin"}
                  aria-label={lang === 'en' ? "Search" : "Hanapin"}
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

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

            {/* Category Slide Deck Button */}
            {categories.find(c => c.id === selectedCategory)?.pdfUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex justify-center"
              >
                <a
                  href={categories.find(c => c.id === selectedCategory)?.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-brand-blue/10 text-brand-blue border border-brand-blue/30 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-sm"
                >
                  <FileText className="h-4 w-4" />
                  {lang === 'en' ? "View Study Guide (PDF)" : "Tingnan ang Gabay sa Pag-aaral (PDF)"}
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </motion.div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 lg:h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-2">
              <div className="px-4 py-2 flex items-center justify-between">
                <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 font-sans">
                  {searchQuery
                    ? (lang === 'en' ? "Search Results" : "Mga Resulta ng Paghahanap")
                    : (lang === 'en' ? "Module Selection" : "Pagpili ng Modyul")}
                </h2>
                {searchQuery && (
                  <span className="text-[9px] bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-full font-bold animate-pulse">
                    {lang === 'en' ? "Global Search Active" : "Aktibo ang Pandaigdigang Paghahanap"}
                  </span>
                )}
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
                      {lang === 'en' ? lesson.title : lesson.titleTl}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400">Lesson {lesson.id < 10 ? `0${lesson.id}` : lesson.id}</div>
                      {searchQuery && (
                        <div className="text-[9px] uppercase tracking-tighter px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded font-bold">
                          {categories.find(c => c.id === lesson.category)?.name}
                        </div>
                      )}
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeLesson === lesson.id ? 'text-brand-gold translate-x-1' : 'text-gray-300'}`} />
                </button>
              ))}
              {filteredLessons.length === 0 && (
                <div className="text-center py-12 px-4 bg-white/30 rounded-2xl border-2 border-dashed border-gray-200">
                  <Search className="h-8 w-8 text-gray-300 mx-auto mb-3 opacity-50" />
                  <div className="text-gray-500 font-bold text-sm mb-1">
                    {lang === 'en' ? "No matches found" : "Walang nahanap na tugma"}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {lang === 'en'
                      ? "Try searching for different keywords or topics."
                      : "Subukang maghanap ng ibang mga keyword o paksa."}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Content Area */}
          <section className="lg:col-span-9">
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
                        {currentLesson?.pdfUrl && (
                          <a
                            href={currentLesson.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            {lang === 'en' ? "Study Guide (PDF)" : "Gabay sa Pag-aaral (PDF)"}
                            <ExternalLink className="h-3 w-3 opacity-50" />
                          </a>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8 border-b border-gray-100 pb-6 font-serif">
                        {lang === 'en' ? currentLesson?.title : currentLesson?.titleTl}
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
                            {lang === 'en' ? "I have finished reading this lesson" : "Tapos ko na basahin ang araling ito"}
                          </button>
                        ) : (
                          <div className="space-y-8">
                            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center gap-3 text-emerald-700 font-bold text-sm">
                              <CheckCircle2 className="h-5 w-5" />
                              {lang === 'en' ? "Lesson Completed" : "Tapos na ang Aralin"}
                            </div>

                            {showQuizPrompt && currentLesson?.quiz && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-brand-gold/10 border-2 border-brand-gold/30 rounded-2xl p-8 text-center"
                              >
                                <Zap className="h-10 w-10 text-brand-gold mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-brand-blue mb-2">
                                  {lang === 'en' ? "Test Your Knowledge?" : "Subukan ang Iyong Kaalaman?"}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                  {lang === 'en'
                                    ? "Great job! Would you like to take a quick quiz to reinforce what you've learned?"
                                    : "Magaling! Gusto mo bang kumuha ng maikling pagsusulit para mapagtibay ang iyong natutunan?"}
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                  <button
                                    onClick={() => {
                                      setIsQuizActive(true);
                                      setShowQuizPrompt(false);
                                    }}
                                    className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors shadow-lg"
                                  >
                                    {lang === 'en' ? "Yes, take quiz" : "Oo, kumuha ng pagsusulit"}
                                  </button>
                                  <button
                                    onClick={() => setShowQuizPrompt(false)}
                                    className="bg-white text-gray-500 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors border border-gray-200"
                                  >
                                    {lang === 'en' ? "Maybe later" : "Mamaya na lang"}
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

                      <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-sans uppercase tracking-widest">
                          <Book className="h-4 w-4" />
                          Study Resource
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                          <button
                            onClick={() => onBack(true)}
                            className="bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-bold font-sans text-sm hover:bg-yellow-400 transition-colors btn-glow"
                          >
                            {lang === 'en' ? "Contact a Minister" : "Makipag-ugnayan sa Ministro"}
                          </button>

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
                              {lang === 'en' ? "Previous" : "Nakaraan"}
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
                              {lang === 'en' ? "Next Lesson" : "Susunod"}
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
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
    </div>
  );
}

