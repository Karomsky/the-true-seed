import React from 'react';

export interface QuizQuestion {
  question: React.ReactNode;
  options: React.ReactNode[];
  correctIndex: number;
  explanation: React.ReactNode;
}

export interface Quiz {
  title: string;
  questions: QuizQuestion[];
}

export interface Lesson {
  id: number;
  category: string;
  title: string;
  titleTl: string;
  icon: any;
  searchKeywords?: string;
  searchKeywordsTl?: string;
  searchContent?: string;
  searchContentTl?: string;
  content: React.ReactNode;
  quiz?: Quiz;
  pdfUrl?: string;
}
