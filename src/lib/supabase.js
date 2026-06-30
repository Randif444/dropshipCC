import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

console.log("Cek URL Supabase di Browser:", supabaseUrl);
console.log(
  "Cek Key Supabase di Browser:",
  supabaseKey ? "Key Terbaca" : "KOSONG!",
);

export const supabase = createClient(supabaseUrl, supabaseKey);
