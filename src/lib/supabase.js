import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// null when the env vars are missing: the site then runs on built-in content.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;

export const CONTENT_TABLE = "site_content";
export const CONTENT_ROW_ID = "main";
export const MEDIA_BUCKET = "portfolio-media";
