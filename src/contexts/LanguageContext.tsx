import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchGeoData } from '../lib/geo';

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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    // Try local storage first
    try {
      const savedLang = localStorage.getItem('app_lang');
      if (savedLang === 'ru' || savedLang === 'en') {
        return savedLang;
      }
    } catch (e) {
      // Ignore localStorage access errors
    }

    // Synchronous fallback based on browser language
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
  });

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
