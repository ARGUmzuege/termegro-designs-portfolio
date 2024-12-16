import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'az', name: 'AZ', flag: '🇦🇿' }
  ];

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative inline-block text-white">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-tertiary rounded-lg hover:bg-primary transition-colors duration-300"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-tertiary rounded-lg shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-primary transition-colors duration-300 ${
                language === lang.code ? 'bg-primary/50' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 