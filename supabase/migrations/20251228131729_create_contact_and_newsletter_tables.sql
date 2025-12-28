/*
  # Create Contact and Newsletter Tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
    - `newsletter_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Public read/write access for form submissions (no auth required)
    - Prevent duplicate newsletter signups
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can signup for newsletter"
  ON newsletter_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view newsletter signups"
  ON newsletter_signups
  FOR SELECT
  TO anon
  USING (true);
