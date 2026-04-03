import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yvyryoitegqscavrplib.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eXJ5b2l0ZWdxc2NhdnJwbGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNDQxMTQsImV4cCI6MjA4MTcyMDExNH0.pPr4X-TNcHceL-vqgufMpDgiWTfQ1871O3jys3r7Tq8";
const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export { supabase as s };
