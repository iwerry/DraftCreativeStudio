import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

// Detect stored language or browser language, fallback to 'en'
const getInitialLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('draft_lang');
  if (stored && ['en', 'pt', 'es', 'fr'].includes(stored)) {
    return stored;
  }

  // Browser language detection
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  if (['pt', 'es', 'fr'].includes(browserLang)) {
    return browserLang;
  }

  return 'en'; // Default English as requested
};

const initialLang = getInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      fr: { translation: fr }
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
