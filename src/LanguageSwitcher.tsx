import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-3 border-l border-ink/20 pl-4 md:pl-6 ml-4 md:ml-6 notranslate">
      <button onClick={() => switchLang('en')} className="hover:scale-110 hover:-translate-y-1 transition-all" title="English">
        <img src="https://flagcdn.com/w40/us.png" className="w-5 h-5 rounded-full object-cover shadow-[0_0_10px_rgba(255,255,255,0.2)]" alt="EN" />
      </button>
      <button onClick={() => switchLang('es')} className="hover:scale-110 hover:-translate-y-1 transition-all" title="Español">
        <img src="https://flagcdn.com/w40/es.png" className="w-5 h-5 rounded-full object-cover shadow-[0_0_10px_rgba(255,255,255,0.2)]" alt="ES" />
      </button>
      <button onClick={() => switchLang('fr')} className="hover:scale-110 hover:-translate-y-1 transition-all" title="Français">
        <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5 rounded-full object-cover shadow-[0_0_10px_rgba(255,255,255,0.2)]" alt="FR" />
      </button>
      <button onClick={() => switchLang('pt')} className="hover:scale-110 hover:-translate-y-1 transition-all" title="Português">
        <img src="https://flagcdn.com/w40/br.png" className="w-5 h-5 rounded-full object-cover shadow-[0_0_10px_rgba(255,255,255,0.2)]" alt="PT" />
      </button>
    </div>
  );
}
