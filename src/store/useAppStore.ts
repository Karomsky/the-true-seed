import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
    id: number;
    email: string;
}

interface AppState {
    lang: 'en' | 'tl' | 'es';
    setLang: (lang: 'en' | 'tl' | 'es') => void;
    completedLessons: number[];
    markLessonComplete: (id: number) => void;
    setCompletedLessons: (lessons: number[]) => void;
    resetProgress: () => void;
    bookmarkedLessons: number[];
    toggleBookmark: (id: number) => void;
    user: UserProfile | null;
    token: string | null;
    setUserSession: (user: UserProfile | null, token: string | null) => void;
    syncProgress: () => Promise<void>;
}

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            lang: 'en',
            setLang: (lang) => set({ lang }),
            completedLessons: [],
            bookmarkedLessons: [],
            toggleBookmark: (id) => {
                const state = get();
                const isBookmarked = state.bookmarkedLessons.includes(id);
                set({
                    bookmarkedLessons: isBookmarked
                        ? state.bookmarkedLessons.filter(b => b !== id)
                        : [...state.bookmarkedLessons, id]
                });
            },
            user: null,
            token: null,
            setUserSession: (user, token) => set({ user, token }),
            setCompletedLessons: (lessons) => set({ completedLessons: lessons }),
            markLessonComplete: async (id) => {
                const state = get();
                if (!state.completedLessons.includes(id)) {
                    const newLessons = [...state.completedLessons, id];
                    set({ completedLessons: newLessons });

                    if (state.token) {
                        fetch('/api/user/progress', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${state.token}`
                            },
                            body: JSON.stringify({ completed_lessons: newLessons })
                        }).catch(console.error);
                    }
                }
            },
            resetProgress: () => set({ completedLessons: [] }),
            syncProgress: async () => {
                const state = get();
                if (state.token) {
                    try {
                        const res = await fetch('/api/user/progress', {
                            headers: { 'Authorization': `Bearer ${state.token}` }
                        });
                        if (res.ok) {
                            const data = await res.json();
                            if (data.completed_lessons) {
                                const merged = Array.from(new Set([...state.completedLessons, ...data.completed_lessons]));
                                set({ completedLessons: merged });

                                if (merged.length > data.completed_lessons.length) {
                                    fetch('/api/user/progress', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Authorization': `Bearer ${state.token}`
                                        },
                                        body: JSON.stringify({ completed_lessons: merged })
                                    }).catch(console.error);
                                }
                            }
                        } else if (res.status === 401 || res.status === 403) {
                            set({ user: null, token: null });
                        }
                    } catch (e) {
                        console.error('Progress sync failed', e);
                    }
                }
            }
        }),
        {
            name: 'the-true-seed-storage',
        }
    )
);
