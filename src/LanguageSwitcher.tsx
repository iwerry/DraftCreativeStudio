import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('draft_user_lang', lang);
    localStorage.setItem('draft_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const currentLang = i18n.language ? i18n.language.slice(0, 2) : 'en';

  return (
    <div className="flex items-center gap-2.5 border-l border-white/10 pl-3 md:pl-5 ml-3 md:ml-5 notranslate">
      <button
        type="button"
        onClick={() => switchLang('en')}
        className={`relative transition-all p-0.5 rounded-full ${currentLang === 'en' ? 'ring-2 ring-cyan-400 scale-110 shadow-[0_0_12px_rgba(0,240,255,0.6)]' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
        title="English (US/Global)"
      >
        <img src="https://flagcdn.com/w40/us.png" className="w-5 h-5 rounded-full object-cover" alt="EN" />
      </button>
      <button
        type="button"
        onClick={() => switchLang('pt')}
        className={`relative transition-all p-0.5 rounded-full ${currentLang === 'pt' ? 'ring-2 ring-emerald-400 scale-110 shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
        title="Português (Brasil)"
      >
        <img src="https://flagcdn.com/w40/br.png" className="w-5 h-5 rounded-full object-cover" alt="PT" />
      </button>
      <button
        type="button"
        onClick={() => switchLang('es')}
        className={`relative transition-all p-0.5 rounded-full ${currentLang === 'es' ? 'ring-2 ring-amber-400 scale-110 shadow-[0_0_12px_rgba(245,158,11,0.6)]' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
        title="Español"
      >
        <img src="https://flagcdn.com/w40/es.png" className="w-5 h-5 rounded-full object-cover" alt="ES" />
      </button>
      <button
        type="button"
        onClick={() => switchLang('fr')}
        className={`relative transition-all p-0.5 rounded-full ${currentLang === 'fr' ? 'ring-2 ring-blue-400 scale-110 shadow-[0_0_12px_rgba(59,130,246,0.6)]' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
        title="Français"
      >
        <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5 rounded-full object-cover" alt="FR" />
      </button>
    </div>
  );
}
