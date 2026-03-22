import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
    lang: 'en' | 'tl';
    setLang: (lang: 'en' | 'tl') => void;
    completedLessons: number[];
    markLessonComplete: (id: number) => void;
    resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            lang: 'en',
            setLang: (lang) => set({ lang }),
            completedLessons: [],
            markLessonComplete: (id) =>
                set((state) => ({
                    completedLessons: state.completedLessons.includes(id)
                        ? state.completedLessons
                        : [...state.completedLessons, id]
                })),
            resetProgress: () => set({ completedLessons: [] }),
        }),
        {
            name: 'the-true-seed-storage', // name of the item in the storage (must be unique)
        }
    )
);
