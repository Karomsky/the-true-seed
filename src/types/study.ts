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
  titleEs?: string;
  icon: any;
  searchKeywords?: string;
  searchKeywordsTl?: string;
  searchKeywordsEs?: string;
  searchContent?: string;
  searchContentTl?: string;
  searchContentEs?: string;
  content: React.ReactNode;
  quiz?: Quiz;
  pdfUrl?: string;
}
