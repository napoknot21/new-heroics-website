import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang); // Ensure the language is applied from localStorage
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change the language dynamically
    localStorage.setItem('language', lang); // Save language to localStorage
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 ${
          i18n.language === 'en' ? 'text-blue-600 font-bold' : 'text-gray-500'
        }`}
      >
        En
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-4 py-2 ${
          i18n.language === 'fr' ? 'text-blue-600 font-bold' : 'text-gray-500'
        }`}
      >
        Fr
      </button>
    </div>
  );
}

export default LanguageSwitcher;
