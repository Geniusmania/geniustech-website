import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fuptjtehltclrgnzukbj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1cHRqdGVobHRjbHJnbnp1a2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjQxOTksImV4cCI6MjA1MjM0MDE5OX0.c90iTHl5luB0YN19CWEhV2qoGXF-nirGohu-f_2IKQY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
