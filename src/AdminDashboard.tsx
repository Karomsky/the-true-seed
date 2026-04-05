import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, Trash2, Mail, User, Clock, ShieldCheck, LogIn, AlertCircle, RefreshCw, Globe } from 'lucide-react';

interface Inquiry {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
}

interface Stats {
    totalInquiries: number;
    totalUsers: number;
    totalVisits: number;
    languageStats: { language: string, count: number }[];
    recentVisits: any[];
    userProgress: { email: string, full_name: string, completedCount: number }[];
}

export default function AdminDashboard({ onBack }: { onBack: () => void }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'inquiries' | 'stats'>('stats');
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState<number | null>(null);

    // Check if already authenticated via session storage
    useEffect(() => {
        const token = sessionStorage.getItem('admin_token');
        if (token) {
            setIsAuthenticated(true);
            fetchAllData(token);
        }
    }, [activeTab]);

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
                fetchAllData(data.token);
            } else {
                setError('Invalid admin password');
            }
        } catch (err) {
            setError('Connection error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchAllData = (token: string) => {
        if (activeTab === 'inquiries') fetchInquiries(token);
        else fetchStats(token);
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
                handleLogout();
            }
        } catch (err) {
            console.error('Failed to fetch inquiries:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchStats = async (token: string) => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/stats', {
                headers: { 'x-admin-key': token }
            });

            if (res.ok) {
                const data = await res.json();
                setStats(data);
            } else if (res.status === 401) {
                handleLogout();
            }
        } catch (err) {
            console.error('Failed to fetch stats:', err);
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
        setStats(null);
        setPassword('');
    };

    const refreshData = () => {
        const token = sessionStorage.getItem('admin_token');
        if (token) fetchAllData(token);
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
                    <p className="text-gray-500 text-center text-sm mb-6">Enter your password to manage your mission.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                autoFocus
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
                <title>Mission Dashboard | The True Seed</title>
            </Helmet>

            {/* Header */}
            <header className="bg-brand-dark text-white pt-6 shadow-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-4">
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
                                Mission Dashboard
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

                    {/* Tabs */}
                    <div className="flex gap-8 relative">
                        <button
                            onClick={() => setActiveTab('stats')}
                            className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'stats' ? 'text-brand-gold' : 'text-white/40 hover:text-white/60'}`}
                        >
                            Analytics & Stats
                            {activeTab === 'stats' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold rounded-t-full" />}
                        </button>
                        <button
                            onClick={() => setActiveTab('inquiries')}
                            className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'inquiries' ? 'text-brand-gold' : 'text-white/40 hover:text-white/60'}`}
                        >
                            Inquiries Inbox
                            {activeTab === 'inquiries' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold rounded-t-full" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'stats' ? (
                    <div className="space-y-8">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Total Visits', value: stats?.totalVisits || 0, icon: RefreshCw, color: 'text-blue-500' },
                                { label: 'Registered Students', value: stats?.totalUsers || 0, icon: User, color: 'text-green-500' },
                                { label: 'Inquiries Received', value: stats?.totalInquiries || 0, icon: Mail, color: 'text-brand-gold' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center ${stat.color}`}>
                                        <stat.icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-3xl font-bold text-brand-blue">{stat.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* User Progress List */}
                            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                                    <h2 className="font-bold text-brand-blue flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-brand-gold" />
                                        Student Progress
                                    </h2>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global Activity</span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-[10px] uppercase tracking-widest text-gray-400 border-b border-gray-50">
                                                <th className="px-6 py-4 font-bold">Student</th>
                                                <th className="px-6 py-4 font-bold">Progress</th>
                                                <th className="px-6 py-4 font-bold">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {stats?.userProgress.map((up, i) => (
                                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="font-bold text-sm text-brand-blue">{up.full_name || 'Anonymous Student'}</div>
                                                        <div className="text-xs text-gray-400">{up.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[100px]">
                                                                <div className="h-full bg-brand-gold" style={{ width: `${Math.min(100, (up.completedCount / 39) * 100)}%` }} />
                                                            </div>
                                                            <span className="text-xs font-bold text-gray-600">{up.completedCount}/39</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {up.completedCount >= 39 ? (
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[10px] font-bold uppercase tracking-wider">Graduate</span>
                                                        ) : (
                                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-[10px] font-bold uppercase tracking-wider">Active</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            {(!stats?.userProgress || stats.userProgress.length === 0) && (
                                                <tr>
                                                    <td colSpan={3} className="px-6 py-12 text-center text-gray-400 italic text-sm">No registered students yet.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Language Distribution */}
                            <div className="lg:col-span-4 space-y-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h2 className="font-bold text-brand-blue mb-6 flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-brand-gold" />
                                        Language Reach
                                    </h2>
                                    <div className="space-y-4">
                                        {['en', 'tl', 'es'].map((l) => {
                                            const count = stats?.languageStats.find(s => s.language === l)?.count || 0;
                                            const total = stats?.totalVisits || 1;
                                            const pct = Math.round((count / total) * 100);
                                            return (
                                                <div key={l} className="space-y-1">
                                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest leading-none mb-2">
                                                        <span className="text-gray-500">{l === 'en' ? 'English' : l === 'es' ? 'Spanish' : 'Tagalog'}</span>
                                                        <span className="text-brand-blue">{pct}%</span>
                                                    </div>
                                                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${pct}%` }}
                                                            className={`h-full ${l === 'en' ? 'bg-blue-400' : l === 'tl' ? 'bg-brand-gold' : 'bg-red-400'}`}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="bg-brand-dark p-6 rounded-2xl shadow-xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-45 transition-transform">
                                        <ShieldCheck size={100} className="text-white" />
                                    </div>
                                    <h3 className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-2 relative z-10">Mission Health</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed relative z-10">All systems operational. Inquiries are being stored locally and synced with backup protocols.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <h2 className="font-bold text-brand-blue text-lg">Recent Inquiries</h2>
                            <span className="bg-brand-gold/20 text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {inquiries.length} {inquiries.length === 1 ? 'Message' : 'Messages'}
                            </span>
                        </div>

                        {inquiries.length === 0 ? (
                            <div className="p-12 text-center text-gray-500">
                                <Mail className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                <p className="font-medium text-lg">No inquiries yet.</p>
                                <p className="text-sm text-gray-400 mt-2">When someone fills out the contact form, it will appear here.</p>
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

                                            <div className="flex-1 bg-white border border-gray-100 p-4 rounded-xl shadow-sm shadow-gray-100/50 relative group">
                                                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">{inquiry.message}</p>

                                                <button
                                                    onClick={() => handleDelete(inquiry.id)}
                                                    disabled={isDeleting === inquiry.id}
                                                    className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
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
                )}
            </main>
        </div>
    );
}


