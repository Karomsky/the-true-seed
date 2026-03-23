import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, LogIn, UserPlus, AlertCircle, Loader } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { setUserSession, syncProgress, lang } = useAppStore();

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok && data.token) {
                setUserSession(data.user, data.token);
                await syncProgress();
                onClose();
                setEmail('');
                setPassword('');
            } else {
                setError(data.error || 'Authentication failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-brand-blue mb-2 font-serif">
                                {isLogin
                                    ? (lang === 'en' ? 'Welcome Back' : 'Maligayang Pagbabalik')
                                    : (lang === 'en' ? 'Create Account' : 'Gumawa ng Account')}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {isLogin
                                    ? (lang === 'en' ? 'Sign in to sync your study progress.' : 'Mag-sign in upang i-sync ang iyong pag-aaral.')
                                    : (lang === 'en' ? 'Sign up to securely save your progress in the cloud.' : 'Mag-sign up upang i-save ang iyong pag-aaral sa cloud.')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                                    <AlertCircle className="h-4 w-4 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    placeholder={lang === 'en' ? "Email address" : "Email address"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-brand-gold outline-none transition-all"
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    placeholder={lang === 'en' ? "Password" : "Password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-brand-gold outline-none transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-brand-blue text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark transition-all disabled:opacity-70 flex justify-center items-center gap-2 btn-glow"
                            >
                                {isLoading ? (
                                    <Loader className="h-5 w-5 animate-spin" />
                                ) : isLogin ? (
                                    <><LogIn className="h-5 w-5" /> {lang === 'en' ? 'Sign In' : 'Mag-Sign In'}</>
                                ) : (
                                    <><UserPlus className="h-5 w-5" /> {lang === 'en' ? 'Create Account' : 'Gumawa ng Account'}</>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-gray-500">
                            {isLogin ? (
                                <>
                                    {lang === 'en' ? "Don't have an account? " : "Wala pang account? "}
                                    <button onClick={() => setIsLogin(false)} className="text-brand-gold font-bold hover:underline">
                                        {lang === 'en' ? 'Sign up' : 'Mag-sign up'}
                                    </button>
                                </>
                            ) : (
                                <>
                                    {lang === 'en' ? "Already have an account? " : "May account na? "}
                                    <button onClick={() => setIsLogin(true)} className="text-brand-gold font-bold hover:underline">
                                        {lang === 'en' ? 'Sign in' : 'Mag-sign in'}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
