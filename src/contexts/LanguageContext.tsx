import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'ru' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Prefixes an internal path with the active language (/en…) so links stay in-language. */
  localePath: (path: string) => string;
  t: (ru: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  localePath: (p) => p,
  t: (ru: string) => ru,
});

const isEnPath = (pathname: string) => pathname === '/en' || pathname.startsWith('/en/');

// Map a path between languages by adding/removing the /en prefix.
const toLangPath = (target: Language, unprefixed: string) =>
  target === 'en' ? (unprefixed === '/' ? '/en' : '/en' + unprefixed) : unprefixed;

/**
 * The active language is derived from the URL prefix (/en) — the single source of
 * truth. Each language has its own crawlable URL, so the server prerender and the
 * client hydrate to the same value from the same path: no hydration mismatch and
 * no post-hydration language flip. Switching language is a navigation, which keeps
 * the URL and the rendered content in sync (required for correct hreflang/SEO).
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Language = isEnPath(location.pathname) ? 'en' : 'ru';
  const unprefixed = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/';

  const setLang = (newLang: Language) => {
    try {
      localStorage.setItem('app_lang', newLang);
    } catch {
      // ignore storage errors (private mode etc.)
    }
    if (newLang === lang) return;
    navigate(toLangPath(newLang, unprefixed) + location.hash);
  };

  const localePath = (path: string) => toLangPath(lang, path);

  // Returning visitors who previously chose English get sent to /en when they land
  // on the bare root. Runs once, browser-only — bots have no localStorage, so they
  // never redirect and each URL is crawled as requested (SEO-safe).
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
    if (saved === 'en') navigate('/en' + location.hash, { replace: true });
  }, [location.pathname, location.hash, navigate]);

  const t = (ru: string, en: string) => (lang === 'ru' ? ru : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, localePath, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
