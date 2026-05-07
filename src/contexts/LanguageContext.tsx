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
  const [lang, setLang] = useState<Language>('ru');

  useEffect(() => {
    const detectLanguage = async () => {
      // Try local storage first
      const savedLang = localStorage.getItem('app_lang');
      if (savedLang === 'ru' || savedLang === 'en') {
        setLang(savedLang);
        return;
      }

      // Synchronous fallback based on browser language
      let initialLang: Language = 'en';
      const navLang = navigator.language.toLowerCase();
      if (['ru', 'be', 'uk', 'kk', 'ky', 'uz', 'tg', 'tk', 'hy', 'az', 'mo'].some(l => navLang.startsWith(l))) {
        initialLang = 'ru';
      }
      setLang(initialLang);

      // Async precision via IP
      try {
        const countryCode = await fetchGeoData();
        if (countryCode) {
          const cisCountries = ['RU', 'BY', 'KZ', 'KG', 'AM', 'AZ', 'MD', 'TJ', 'UZ', 'TM', 'UA'];
          if (cisCountries.includes(countryCode)) {
            setLang('ru');
            localStorage.setItem('app_lang', 'ru');
          } else {
            setLang('en');
            localStorage.setItem('app_lang', 'en');
          }
        }
      } catch (e) {
        // Suppress error to avoid console pollution if all detection methods fail
      }
    };
    
    detectLanguage();
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const t = (ru: string, en: string) => lang === 'ru' ? ru : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
