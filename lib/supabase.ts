import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key, so it can insert
 * rows even with Row Level Security enabled and no public policies.
 * Never import this from a client component — the service role key must
 * stay server-side.
 */
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
