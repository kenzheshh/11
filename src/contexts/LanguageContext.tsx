import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (ru: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  t: (ru: string, en: string) => ru,
});

// The site is prerendered (SSG) in its canonical Russian version so the static
// HTML matches <html lang="ru"> and the Russian SEO meta. The client must hydrate
// with this same value to avoid a mismatch, then switch after hydration.
const CANONICAL_LANG: Language = 'ru';

// Real client-side language detection. Only safe to call in the browser, so it is
// run from an effect (post-hydration), never during render on the server.
const detectClientLang = (): Language => {
  try {
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang === 'ru' || savedLang === 'en') {
      return savedLang;
    }
  } catch (e) {
    // Ignore localStorage access errors
  }

  try {
    const navLangs = navigator.languages || [navigator.language];
    for (const navLang of navLangs) {
      const lowerLang = navLang.toLowerCase();
      if (['ru', 'be', 'uk', 'kk', 'ky', 'uz', 'tg', 'tk', 'hy', 'az', 'mo'].some(l => lowerLang.startsWith(l))) {
        return 'ru';
      }
      if (lowerLang.startsWith('en')) {
        return 'en';
      }
    }
  } catch (e) {
    // Fallback if navigator is undefined
  }

  return 'en';
};

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  /** Forces the initial language during prerender (SSR). Omit on the client. */
  initialLang?: Language;
}> = ({ children, initialLang }) => {
  // Deterministic seed: explicit prerender language, otherwise the canonical RU
  // so the first client render matches the prerendered HTML.
  const [lang, setLang] = useState<Language>(() => initialLang ?? CANONICAL_LANG);

  // After hydration, detect the visitor's real language and switch if it differs.
  // Skipped when an explicit initialLang is provided (prerender path).
  useEffect(() => {
    if (initialLang) return;
    const detected = detectClientLang();
    setLang(prev => (prev === detected ? prev : detected));
  }, [initialLang]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('app_lang', newLang);
    } catch(e) {}
  };

  const t = (ru: string, en: string) => lang === 'ru' ? ru : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
