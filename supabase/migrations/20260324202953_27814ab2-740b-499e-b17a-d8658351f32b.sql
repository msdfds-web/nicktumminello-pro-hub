CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  reason TEXT NOT NULL,
  frequency TEXT NOT NULL,
  availability TEXT NOT NULL,
  injuries TEXT NOT NULL,
  current_workouts TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert submissions"
  ON public.contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read submissions"
  ON public.contact_submissions
  FOR SELECT
  TO service_role
  USING (true);