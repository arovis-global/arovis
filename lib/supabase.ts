import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitContactForm(name: string, email: string, message: string) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([{ name, email, message }]);

  if (error) throw new Error(error.message);
  return true;
}

export async function signupNewsletter(email: string) {
  const { error } = await supabase
    .from('newsletter_signups')
    .insert([{ email }]);

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already subscribed');
    }
    throw new Error(error.message);
  }
  return true;
}
