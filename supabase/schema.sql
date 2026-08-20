-- Run this in Supabase Studio -> SQL Editor.
-- Creates the applications table used by app/api/apply/route.ts.

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz not null default now(),

  -- about you
  name text not null,
  email text not null,
  phone text not null,
  whatsapp text,
  college text not null,
  current_year text not null,
  degree text,
  branch text,
  grad_year text,
  campus text,

  -- domain
  primary_domain text not null,
  secondary_domain text,

  -- experience
  has_experience text,
  exp_org text,
  exp_role text,
  exp_duration text,
  exp_owned text,
  exp_contribution text,
  exp_outcome text,
  proud_project text,

  -- mindset
  why text not null,
  unique_contribution text,
  ownership_story text,
  failure_story text,
  team_role text,
  commitment text not null,

  -- scenario
  scenario text,

  -- availability
  availability_full_year text,
  meeting_pref text,
  cross_campus text,
  preferred_days text,

  -- final
  build_idea text,

  -- dynamic multi-links, e.g. [{ "platform": "GitHub", "url": "https://..." }]
  links jsonb not null default '[]'::jsonb
);

-- Row Level Security is enabled and NO policies are added on purpose:
-- the app only ever writes to this table from the server using the
-- service role key (see lib/supabase.ts), which bypasses RLS. This keeps
-- the table completely inaccessible to the public/anon key.
alter table public.applications enable row level security;

-- Optional: an index if you expect to query/filter by domain often.
create index if not exists applications_primary_domain_idx
  on public.applications (primary_domain);
