import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ES } from './es';

type Language = 'ru' | 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Prefixes an internal path with the active language (/en…, /es…) so links stay in-language. */
  localePath: (path: string) => string;
  /** Translate. Russian is canonical; `es` falls back to English when omitted. */
  t: (ru: string, en: string, es?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  localePath: (p) => p,
  t: (ru: string) => ru,
});

// URL prefix ↔ language. Russian is the default (no prefix, served at root).
const PREFIXES: { prefix: string; lang: Language }[] = [
  { prefix: '/en', lang: 'en' },
  { prefix: '/es', lang: 'es' },
];

const langFromPath = (pathname: string): Language => {
  for (const { prefix, lang } of PREFIXES) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) return lang;
  }
  return 'ru';
};

// Remove the language prefix to get the canonical (Russian) path.
const stripPrefix = (pathname: string): string => {
  for (const { prefix } of PREFIXES) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) {
      return pathname.slice(prefix.length) || '/';
    }
  }
  return pathname;
};

// Add the prefix for a target language to a canonical path.
const addPrefix = (lang: Language, unprefixed: string): string => {
  const entry = PREFIXES.find((e) => e.lang === lang);
  if (!entry) return unprefixed; // ru → no prefix
  return unprefixed === '/' ? entry.prefix : entry.prefix + unprefixed;
};

/**
 * The active language is derived from the URL prefix — the single source of
 * truth. Each language has its own crawlable URL, so the server prerender and
 * the client hydrate to the same value from the same path: no hydration
 * mismatch and no post-hydration flip. Switching language is a navigation,
 * which keeps the URL and the rendered content in sync (required for hreflang).
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = langFromPath(location.pathname);
  const unprefixed = stripPrefix(location.pathname);

  const setLang = (newLang: Language) => {
    try {
      localStorage.setItem('app_lang', newLang);
    } catch {
      // ignore storage errors (private mode etc.)
    }
    if (newLang === lang) return;
    navigate(addPrefix(newLang, unprefixed) + location.hash);
  };

  const localePath = (path: string) => addPrefix(lang, path);

  // Returning visitors who previously chose a language get sent to it when they
  // land on the bare root. Runs once, browser-only — bots have no localStorage,
  // so they never redirect and each URL is crawled as requested (SEO-safe).
  const redirected = useRef(false);
  useEffect(() => {
    if (redirected.current) return;
    redirected.current = true;
    if (location.pathname !== '/') return;
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('app_lang');
    } catch {
      // ignore
    }
    if (saved === 'en' || saved === 'es') {
      navigate(addPrefix(saved, '/') + location.hash, { replace: true });
    }
  }, [location.pathname, location.hash, navigate]);

  // Spanish resolves to: explicit `es` arg → es dictionary (keyed by the Russian
  // source) → English fallback. Lets most strings be translated in one place
  // (es.ts) without editing every call site.
  const t = (ru: string, en: string, es?: string) =>
    lang === 'ru' ? ru : lang === 'es' ? es ?? ES[ru] ?? en : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, localePath, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
