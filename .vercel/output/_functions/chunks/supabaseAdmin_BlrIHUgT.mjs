import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yvyryoitegqscavrplib.supabase.co";
const serviceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eXJ5b2l0ZWdxc2NhdnJwbGliIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjE0NDExNCwiZXhwIjoyMDgxNzIwMTE0fQ.61B24ah33vykUzVeK4Eos1jKMTb64_j0sJYKVCd4bng";
if (typeof window !== "undefined") {
  throw new Error("supabaseAdmin must never run in the browser.");
}
const supabaseAdmin = createClient(
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

export { supabaseAdmin as s };
