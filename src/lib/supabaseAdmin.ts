import { createClient } from "@supabase/supabase-js";

/*
  SERVER-ONLY SUPABASE ADMIN CLIENT
  ---------------------------------
  Uses SERVICE ROLE key.
  Only safe in server environments:
  - Astro frontmatter
  - API routes
  - getStaticPaths
  NEVER import inside client components.
*/

const supabaseUrl =
  import.meta.env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;

const serviceRoleKey =
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing PUBLIC_SUPABASE_URL environment variable.");
}

if (!serviceRoleKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable.");
}

/*
  Prevent accidental client execution
*/
if (typeof window !== "undefined") {
  throw new Error("supabaseAdmin must never run in the browser.");
}

/*
  Create Supabase admin client
*/

export const supabaseAdmin = createClient(
  supabaseUrl,
  serviceRoleKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    },
    global: {
      headers: {
        "X-Client-Info": "luxesur-server"
      }
    }
  }
);