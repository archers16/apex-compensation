-- Run this in your Supabase SQL Editor to set up the contact form table

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT,
  service_interest TEXT,
  team_size TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new' -- new, contacted, closed
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow service role to read (your server can read, not anonymous browsers)
CREATE POLICY "Service role can do everything"
  ON contact_submissions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Index for faster lookups by email
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
