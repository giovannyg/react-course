import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://txkglfnbsycxtxuzdntk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4a2dsZm5ic3ljeHR4dXpkbnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzMDA0NjksImV4cCI6MjA0MDg3NjQ2OX0.Nx2cmaSy0Qz4zZ-uxiy36w5RtsMegMOmX8YatCXFsNU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
