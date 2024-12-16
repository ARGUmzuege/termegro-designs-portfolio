import React, { createContext, useState, useContext } from 'react';
import { en } from '../locales/en';
import { de } from '../locales/de';
import { ru } from '../locales/ru';
import { tr } from '../locales/tr';
import { az } from '../locales/az';

const translations = {
  en,
  de,
  ru,
  tr,
  az
};

const LanguageContext = createContext();

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de'); // Default language

  const t = (key) => {
    if (!key) return '';
    
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
      if (!translation || translation[k] === undefined) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
      translation = translation[k];
    }
    
    return translation;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, useLanguage }; 