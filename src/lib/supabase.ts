import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safe dummy client to prevent crashes when config is missing
const dummySupabase = {
  from: () => ({
    insert: async () => ({ error: new Error('Supabase not configured.') }),
    select: async () => ({ data: null, error: new Error('Supabase not configured.') }),
    update: async () => ({ error: new Error('Supabase not configured.') }),
    delete: async () => ({ error: new Error('Supabase not configured.') }),
    upsert: async () => ({ error: new Error('Supabase not configured.') }),
  }),
  storage: {
    from: () => ({
      upload: async () => ({ data: null, error: new Error('Supabase not configured.') }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
    }),
  },
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  }
} as any;

let supabaseInstance = dummySupabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase configuration in environment variables. Using dummy client.');
} else {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
}

export const supabase = supabaseInstance;
