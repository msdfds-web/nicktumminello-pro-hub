CREATE POLICY "Anyone can insert submissions"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);