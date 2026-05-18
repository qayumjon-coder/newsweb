import { createClient } from '@supabase/supabase-js';

// .env.local faylidan kalitlarni o'qib olish
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);