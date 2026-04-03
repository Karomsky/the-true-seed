import React, { useState } from 'react';
import { CheckCircle2, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Quiz } from '../types/study';

export default function QuizComponent({ quiz, lang, onHover }: { quiz: Quiz, lang: 'en' | 'tl' | 'es', onHover: (verse: string | null, x: number, y: number) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);
    if (index === quiz.questions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-blue/5 border-2 border-brand-blue/20 rounded-2xl p-8 text-center"
      >
        <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle2 className="text-brand-dark h-10 w-10" />
        </div>
        <h3 className="text-2xl font-bold text-brand-blue mb-2">Quiz Complete!</h3>
        <p className="text-lg text-gray-600 mb-6">
          You scored <span className="font-bold text-brand-blue">{score}</span> out of <span className="font-bold text-brand-blue">{quiz.questions.length}</span>
        </p>
        <button 
          onClick={resetQuiz}
          className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors"
        >
          Retake Quiz
        </button>
      </motion.div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-brand-blue">Lesson Quiz: {quiz.title}</h3>
        <span className="text-sm font-bold text-gray-400">Question {currentQuestion + 1} of {quiz.questions.length}</span>
      </div>

      <div className="mb-8">
        <div className="text-lg font-medium text-gray-800 mb-6">{question.question}</div>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let bgColor = "bg-white hover:border-brand-blue/50";
            let borderColor = "border-gray-200";
            let icon = null;

            if (showFeedback) {
              if (index === question.correctIndex) {
                bgColor = "bg-emerald-50";
                borderColor = "border-emerald-500";
                icon = <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
              } else if (index === selectedOption) {
                bgColor = "bg-rose-50";
                borderColor = "border-rose-500";
                icon = <X className="h-5 w-5 text-rose-500" />;
              }
            } else if (selectedOption === index) {
              borderColor = "border-brand-blue";
              bgColor = "bg-brand-blue/5";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${bgColor} ${borderColor}`}
              >
                <span className="font-medium">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-8 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-brand-blue">Explanation:</span> {question.explanation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showFeedback && (
        <div className="flex justify-end">
          <button 
            onClick={nextQuestion}
            className="bg-brand-blue text-white px-8 py-2 rounded-full font-bold hover:bg-brand-dark transition-colors flex items-center gap-2"
          >
            {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
