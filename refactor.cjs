const fs = require('fs');
const path = require('path');

const studyPagePath = path.join(__dirname, 'src', 'StudyPage.tsx');
const typesPath = path.join(__dirname, 'src', 'types', 'study.ts');
const quizComponentPath = path.join(__dirname, 'src', 'components', 'QuizComponent.tsx');
const dataPath = path.join(__dirname, 'src', 'data', 'lessons.tsx');

let content = fs.readFileSync(studyPagePath, 'utf8');
const lines = content.split('\n');

// Find boundaries
const typesStart = lines.findIndex(l => l.includes('interface QuizQuestion'));
const quizComponentStart = lines.findIndex(l => l.includes('function QuizComponent'));
const studyPageStart = lines.findIndex(l => l.includes('export default function StudyPage'));
const lessonsStart = lines.findIndex(l => l.includes('const lessons: Lesson[] = ['));
const lessonsEnd = lines.findIndex((l, i) => i > lessonsStart && l.includes('];') && lines[i+2] && lines[i+2].includes('const [selectedCategory'));

if (typesStart === -1 || quizComponentStart === -1 || studyPageStart === -1 || lessonsStart === -1 || lessonsEnd === -1) {
    console.error('Boundaries not found');
    process.exit(1);
}

// 1. Extract types
const typesContent = lines.slice(typesStart, quizComponentStart).join('\n');
fs.mkdirSync(path.join(__dirname, 'src', 'types'), { recursive: true });
fs.writeFileSync(typesPath, `import React from 'react';\n\n${typesContent}`);

// 2. Extract QuizComponent
const quizContentLines = lines.slice(quizComponentStart, studyPageStart);
// Import needed stuff
const quizImports = `import React, { useState } from 'react';\nimport { CheckCircle2, X, ChevronRight } from 'lucide-react';\nimport { motion, AnimatePresence } from 'motion/react';\nimport { Quiz } from '../types/study';\n\n`;
fs.mkdirSync(path.join(__dirname, 'src', 'components'), { recursive: true });
fs.writeFileSync(quizComponentPath, quizImports + quizContentLines.join('\n').replace(/function QuizComponent/, 'export default function QuizComponent'));

// 3. Extract Lessons
const lessonsArrayContentLines = lines.slice(lessonsStart, lessonsEnd + 1);
const lessonsString = lessonsArrayContentLines.join('\n');
const lessonsWrapStart = `import React from 'react';\nimport { \n  Book, \n  Scroll, \n  PenTool, \n  ShieldCheck, \n  Compass, \n  Zap, \n  Globe, \n  History, \n  Search, \n  ArrowLeft,\n  X,\n  ChevronRight,\n  Clock,\n  CheckCircle2,\n  Scale,\n  Users,\n  Flame,\n  Eye,\n  Infinity,\n  Heart,\n  Tag,\n  Droplets,\n  Presentation,\n  ExternalLink,\n  FileText,\n  Star\n} from 'lucide-react';\nimport { ScriptureLink } from '../scriptureData';\nimport { Lesson } from '../types/study';\n\nexport const getLessons = (lang: 'en' | 'tl', onHover: (verse: string | null, x: number, y: number) => void): Lesson[] => {\n  return ` + lessonsString.replace('const lessons: Lesson[] = [', '[\n') + `\n};\n`;
fs.mkdirSync(path.join(__dirname, 'src', 'data'), { recursive: true });
fs.writeFileSync(dataPath, lessonsWrapStart);

// 4. Transform StudyPage.tsx
const studyPageTopLines = lines.slice(0, typesStart); // imports
const studyPageFuncLinesStart = lines.slice(studyPageStart, lessonsStart);
const studyPageFuncLinesEnd = lines.slice(lessonsEnd + 1);

let newStudyPageContent = studyPageTopLines.join('\n') + `
import { Lesson, Quiz } from './types/study';
import QuizComponent from './components/QuizComponent';
import { getLessons } from './data/lessons';
\n` + studyPageFuncLinesStart.join('\n') + `\n  const lessons = getLessons(lang, onHover);\n\n` + studyPageFuncLinesEnd.join('\n');

fs.writeFileSync(studyPagePath, newStudyPageContent);

console.log('Refactoring complete!');
