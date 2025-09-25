import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ztxvtbcicercmazayamw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eHZ0YmNpY2VyY21hemF5YW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODI5MDQsImV4cCI6MjA2Mzc1ODkwNH0.RLizrjYz_5ooWMyDys_fBw_JGICR3o7ZNZHyG1bbOtI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
