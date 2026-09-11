import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';

// Default 100% to English on initial load for global & high-tier presence
// Only switches language if the user explicitly clicked a flag in the navbar
const getInitialLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';

  const userChosen = localStorage.getItem('draft_user_lang');
  if (userChosen && ['en', 'pt', 'es', 'fr'].includes(userChosen)) {
    return userChosen;
  }

  return 'en'; // Strict 100% English initial load
};

const initialLang = getInitialLanguage();

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang;
}

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

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
});

export default i18n;
