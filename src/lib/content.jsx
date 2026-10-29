import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultContent from "../content/defaultContent";
import { supabase, CONTENT_TABLE, CONTENT_ROW_ID, MEDIA_BUCKET } from "./supabase";

// Older saves stored bundler-only image paths (/src/assets/... locally, /assets/name-hash.ext
// in a build) that break on the live site. Map them to the stable files in public/images.
const LEGACY_IMAGES = {
  "Profile-picture": "/images/profile.jpg",
  "profile-about": "/images/profile-about.jpg",
  "Population-Index-1": "/images/population-index.jpg",
  "Hoo-Bank": "/images/hoo-bank.jpg",
  GPT_3: "/images/gpt-3.jpg",
  image: "/images/restaurant.jpg",
};

// The first public/images files were PNGs; lighter JPEG copies now sit beside them.
const PNG_TO_JPG = new Set(["profile", "profile-about", "gpt-3", "population-index", "restaurant"]);

export const fixImagePath = (url) => {
  if (typeof url !== "string") return url;
  const png = url.match(/^\/images\/([a-z0-9-]+)\.png$/);
  if (png && PNG_TO_JPG.has(png[1])) return `/images/${png[1]}.jpg`;
  const m = url.match(/\/(?:src\/)?assets\/([^/?#]+?)(?:-[A-Za-z0-9_]{8})?\.(?:png|jpe?g|webp|svg)(?:[?#].*)?$/);
  if (!m || /^https?:\/\/(?!localhost)/.test(url)) return url;
  return LEGACY_IMAGES[m[1]] || url;
};

const fixImages = (c) => ({
  ...c,
  profile: c.profile && {
    ...c.profile,
    photoUrl: fixImagePath(c.profile.photoUrl),
    aboutPhotoUrl: fixImagePath(c.profile.aboutPhotoUrl),
  },
  devProjects: (c.devProjects || []).map((p) => ({ ...p, image: fixImagePath(p.image) })),
});

// Saved content is merged over the defaults so sections added later still render.
export const mergeContent = (saved) => fixImages({ ...defaultContent, ...(saved || {}) });

// Last content loaded from Supabase, kept on the device so the installed app works offline.
const CACHE_KEY = "portfolio-content-cache";
const FETCH_TIMEOUT_MS = 4000;

const readCached = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const writeCached = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* storage full or blocked: offline copy just isn't kept */
  }
};

const fallback = (reason) => {
  const cached = readCached();
  if (reason) console.warn(`Using ${cached ? "last saved" : "built-in"} content:`, reason);
  return cached ? { content: mergeContent(cached), source: "cache" } : { content: defaultContent, source: "default" };
};

export async function fetchContent() {
  if (!supabase) return { content: defaultContent, source: "default" };
  // supabase-js retries network errors, so offline it would keep the page waiting.
  if (typeof navigator !== "undefined" && navigator.onLine === false) return fallback("offline");
  try {
    const request = supabase.from(CONTENT_TABLE).select("data").eq("id", CONTENT_ROW_ID).maybeSingle();
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timed out")), FETCH_TIMEOUT_MS));
    const { data, error } = await Promise.race([request, timeout]);
    if (error) throw error;
    if (!data) return { content: defaultContent, source: "default" };
    writeCached(data.data);
    return { content: mergeContent(data.data), source: "supabase" };
  } catch (err) {
    return fallback(err.message);
  }
}

export async function saveContent(content) {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error } = await supabase
    .from(CONTENT_TABLE)
    .upsert({ id: CONTENT_ROW_ID, data: content, updated_at: new Date().toISOString() });
  if (error) throw error;
}

export async function uploadMedia(file) {
  if (!supabase) throw new Error("Supabase is not configured.");
  const ext = file.name.split(".").pop();
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  return supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path).data.publicUrl;
}

const ContentContext = createContext({ content: defaultContent, loading: false, source: "default" });

export const ContentProvider = ({ children }) => {
  // Only wait when there is a database to wait for; otherwise render defaults right away.
  const [state, setState] = useState({ content: defaultContent, loading: Boolean(supabase), source: "default" });

  useEffect(() => {
    let active = true;
    fetchContent().then(({ content, source }) => {
      if (active) setState({ content, source, loading: false });
    });
    return () => {
      active = false;
    };
  }, []);

  return <ContentContext.Provider value={state}>{children}</ContentContext.Provider>;
};

ContentProvider.propTypes = { children: PropTypes.node.isRequired };

export const useContent = () => useContext(ContentContext);
