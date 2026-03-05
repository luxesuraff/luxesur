import { createClient } from "@supabase/supabase-js";

/*
  SERVER-ONLY SUPABASE CLIENT
  --------------------------------
  Uses SERVICE ROLE key.
  NEVER import this in client components.
  Only use in Astro frontmatter or API routes.
*/

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing PUBLIC_SUPABASE_URL in environment variables.");
}

if (!serviceRoleKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in environment variables.");
}

/*
  Prevent accidental client usage.
  This will throw if somehow bundled to browser.
*/
if (typeof window !== "undefined") {
  throw new Error("supabaseAdmin should never run in the browser.");
}

export const supabaseAdmin = createClient(
  supabaseUrl,
  serviceRoleKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
);