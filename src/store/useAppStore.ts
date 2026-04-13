import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
    id: number;
    email: string;
    full_name?: string;
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
    fullName: string;
    setFullName: (name: string) => void;
    user: UserProfile | null;
    token: string | null;
    setUserSession: (user: UserProfile | null, token: string | null) => void;
    syncProgress: () => Promise<void>;
}

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            lang: (() => {
                if (typeof window !== 'undefined') {
                    const path = window.location.pathname;
                    if (path.startsWith('/es')) return 'es';
                    if (path.startsWith('/tl')) return 'tl';
                    if (path.startsWith('/en')) return 'en';
                }
                return 'en';
            })(),
            setLang: (lang) => {
                if (typeof window !== 'undefined') {
                    const currentPath = window.location.pathname;
                    const hash = window.location.hash;
                    const search = window.location.search;
                    
                    let newPath = currentPath;
                    if (currentPath.match(/^\/(en|es|tl)(\/|$)/)) {
                        newPath = currentPath.replace(/^\/(en|es|tl)/, `/${lang}`);
                    } else if (lang !== 'en') {
                        // Assuming root path, prepend language
                        newPath = `/${lang}${currentPath === '/' ? '' : currentPath}`;
                    } else if (lang === 'en' && currentPath !== '/') {
                        // For 'en', we can either use /en or just root. Let's use /en for consistency 
                        // if they switch, or keep root. Let's just use /en.
                        newPath = `/en${currentPath === '/' ? '' : currentPath}`;
                    } else if (lang === 'en' && currentPath === '/') {
                        newPath = '/en';
                    }

                    // Only push if it's different to prevent loops
                    if (newPath !== currentPath) {
                        window.history.pushState({}, '', `${newPath}${search}${hash}`);
                    }
                }
                set({ lang });
            },
            completedLessons: [],
            bookmarkedLessons: [],
            fullName: localStorage.getItem('graduate_name') || '',
            setFullName: (name) => {
                set({ fullName: name });
                localStorage.setItem('graduate_name', name);
                
                const state = get();
                if (state.token) {
                    // Sync name to profile
                    fetch('/api/user/profile', {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${state.token}`
                        },
                        body: JSON.stringify({ full_name: name })
                    }).catch(console.error);
                }
            },
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
                            
                            // Also sync profile name if backend has it and local doesn't
                            if (data.full_name && !state.fullName) {
                                set({ fullName: data.full_name });
                                localStorage.setItem('graduate_name', data.full_name);
                            } else if (state.fullName && !data.full_name) {
                                // Push local name to backend if missing
                                fetch('/api/user/profile', {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${state.token}`
                                    },
                                    body: JSON.stringify({ full_name: state.fullName })
                                }).catch(console.error);
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
