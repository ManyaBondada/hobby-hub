import { createClient } from '@supabase/supabase-js'
const URL = 'https://jaeznyodarjgovycxfem.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZXpueW9kYXJqZ292eWN4ZmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMDQ3ODAsImV4cCI6MTk5Nzc4MDc4MH0.V18sHhWuCBjIRwmUQvxqyEts5s0M3351tRjFMF1NE10';
export const supabase = createClient(URL, API_KEY);