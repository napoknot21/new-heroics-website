import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Define the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

// Initialize i18next with saved language or default to 'en'
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // Set default language from localStorage or fallback to 'en'
    fallbackLng: 'en', // Fallback to English if the selected language is not available
    interpolation: {
      escapeValue: false // React already escapes values by default
    }
  });

export default i18n;
