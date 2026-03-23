import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, Trash2, Mail, User, Clock, ShieldCheck, LogIn, AlertCircle, RefreshCw } from 'lucide-react';

interface Inquiry {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

export default function AdminDashboard({ onBack }: { onBack: () => void }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState<number | null>(null);

    // Check if already authenticated via session storage
    useEffect(() => {
        const token = sessionStorage.getItem('admin_token');
        if (token) {
            setIsAuthenticated(true);
            fetchInquiries(token);
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            if (res.ok) {
                const data = await res.json();
                sessionStorage.setItem('admin_token', data.token);
                setIsAuthenticated(true);
                fetchInquiries(data.token);
            } else {
                setError('Invalid admin password');
            }
        } catch (err) {
            setError('Connection error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchInquiries = async (token: string) => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/inquiries', {
                headers: { 'x-admin-key': token }
            });

            if (res.ok) {
                const data = await res.json();
                setInquiries(data);
            } else if (res.status === 401) {
                // Token expired or invalid
                handleLogout();
            }
        } catch (err) {
            console.error('Failed to fetch inquiries:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this inquiry?')) return;

        setIsDeleting(id);
        const token = sessionStorage.getItem('admin_token');

        try {
            const res = await fetch(`/api/admin/inquiries/${id}`, {
                method: 'DELETE',
                headers: { 'x-admin-key': token || '' }
            });

            if (res.ok) {
                setInquiries(inquiries.filter(inq => inq.id !== id));
            } else {
                alert('Failed to delete inquiry.');
            }
        } catch (err) {
            console.error('Delete error:', err);
            alert('Network error while deleting.');
        } finally {
            setIsDeleting(null);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin_token');
        setIsAuthenticated(false);
        setInquiries([]);
        setPassword('');
    };

    const refreshData = () => {
        const token = sessionStorage.getItem('admin_token');
        if (token) fetchInquiries(token);
    };

    // Login View
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-brand-light flex flex-col justify-center items-center p-4">
                <Helmet>
                    <title>Admin Login | The True Seed</title>
                </Helmet>
                <button
                    onClick={onBack}
                    className="absolute top-8 left-8 flex items-center gap-2 text-brand-blue hover:text-brand-gold transition-colors font-bold uppercase tracking-widest text-xs"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-100"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center">
                            <ShieldCheck className="h-8 w-8 text-brand-gold" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-brand-dark mb-2 font-serif">Admin Portal</h2>
                    <p className="text-gray-500 text-center text-sm mb-6">Enter your password to manage inquiries.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Admin Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-brand-gold outline-none transition-all"
                                required
                            />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-brand-blue text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-dark transition-all disabled:opacity-70 flex justify-center items-center gap-2 btn-glow"
                        >
                            {isLoading ? 'Verifying...' : (
                                <>
                                    <LogIn className="h-4 w-4" /> Access Dashboard
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // Dashboard View
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Helmet>
                <title>Inquiries Dashboard | The True Seed</title>
            </Helmet>

            {/* Header */}
            <header className="bg-brand-dark text-white py-6 shadow-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={onBack}
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            title="Back to Home"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <h1 className="text-xl font-bold tracking-widest uppercase font-serif flex items-center gap-3">
                            <ShieldCheck className="h-6 w-6 text-brand-gold" />
                            Inquiries Inbox
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={refreshData}
                            disabled={isLoading}
                            className="flex items-center gap-2 text-sm font-bold border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50"
                        >
                            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                        <button
                            onClick={handleLogout}
                            className="text-sm font-bold text-red-300 hover:text-red-200 transition-colors"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <h2 className="font-bold text-brand-blue text-lg">Recent Messages</h2>
                        <span className="bg-brand-gold/20 text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {inquiries.length} {inquiries.length === 1 ? 'Message' : 'Messages'}
                        </span>
                    </div>

                    {inquiries.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            <Mail className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p className="font-medium text-lg">No inquiries yet.</p>
                            <p className="text-sm">When someone fills out the contact form, it will appear here.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {inquiries.map((inquiry) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={inquiry.id}
                                    className="p-6 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Metadata Sidebar */}
                                        <div className="md:w-64 flex-shrink-0 space-y-3">
                                            <div className="flex items-start gap-3 text-sm">
                                                <User className="h-4 w-4 text-brand-gold mt-0.5" />
                                                <span className="font-bold text-brand-blue truncate" title={inquiry.name}>{inquiry.name}</span>
                                            </div>
                                            <div className="flex items-start gap-3 text-sm text-gray-600">
                                                <Mail className="h-4 w-4 text-brand-gold mt-0.5" />
                                                <a href={`mailto:${inquiry.email}`} className="hover:text-brand-blue underline truncate" title={inquiry.email}>
                                                    {inquiry.email}
                                                </a>
                                            </div>
                                            <div className="flex items-start gap-3 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                                <Clock className="h-4 w-4 shrink-0" />
                                                {new Date(inquiry.created_at).toLocaleString('en-US', {
                                                    month: 'short', day: 'numeric', year: 'numeric',
                                                    hour: 'numeric', minute: '2-digit'
                                                })}
                                            </div>
                                        </div>

                                        {/* Message Content */}
                                        <div className="flex-1 bg-white border border-gray-100 p-4 rounded-xl shadow-sm shadow-gray-100/50 relative group">
                                            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">{inquiry.message}</p>

                                            <button
                                                onClick={() => handleDelete(inquiry.id)}
                                                disabled={isDeleting === inquiry.id}
                                                className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 md:opacity-100 focus:opacity-100"
                                                title="Delete message"
                                            >
                                                {isDeleting === inquiry.id ? (
                                                    <RefreshCw className="h-4 w-4 animate-spin text-red-500" />
                                                ) : (
                                                    <Trash2 className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
