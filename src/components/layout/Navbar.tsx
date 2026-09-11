import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../LanguageSwitcher';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070c]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group cursor-pointer flex items-center gap-3">
          <div className="p-1 rounded-xl group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-all">
            <img
              src="/draftlogo.svg"
              alt="Draft Creative Studio Logo"
              className="h-8 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="hidden lg:flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-bold uppercase">
              Creative Studio Ltda.
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              {t("nav.slogan", "Audiovisual & Intelligence")}
            </span>
          </div>
        </Link>

        {/* Desktop Links (Unified, Clean, No Daniel page, No 3D menu) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-zinc-300">
          <Link
            to="/servicos"
            className={`transition-colors py-2 ${isActive('/servicos') ? 'text-cyan-400 font-bold border-b border-cyan-400' : 'hover:text-cyan-400'}`}
          >
            {t("nav.services", "Services")}
          </Link>

          {/* Always in English as requested by user */}
          <Link
            to="/investigative-journalism"
            className={`transition-colors py-2 flex items-center gap-1.5 ${isActive('/investigative-journalism') ? 'text-emerald-400 font-bold border-b border-emerald-400' : 'hover:text-emerald-400'}`}
          >
            <span className="text-emerald-400">&gt;_</span>
            <span>Investigative Journalism</span>
          </Link>

          <Link
            to="/projetos"
            className={`transition-colors py-2 ${isActive('/projetos') ? 'text-cyan-400 font-bold border-b border-cyan-400' : 'hover:text-cyan-400'}`}
          >
            {t("nav.projects", "Projects")}
          </Link>

          {/* Contact triggers popup modal */}
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-white transition-colors py-2 cursor-pointer uppercase"
          >
            {t("nav.contact", "Contact")}
          </button>

          {/* Direct CTA Button triggers popup modal */}
          <button
            type="button"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-400/50 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-400 hover:text-black font-bold tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] cursor-pointer uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("nav.letsTalk", "Let's Talk")}</span>
          </button>

          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            aria-label="Abrir menu"
            className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05070c]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden px-6">
          <Link
            to="/servicos"
            className="font-display text-2xl uppercase tracking-wider text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.services", "Services")}
          </Link>

          <Link
            to="/investigative-journalism"
            className="font-display text-2xl uppercase tracking-wider text-emerald-400 hover:text-white transition-colors text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Investigative Journalism
          </Link>

          <Link
            to="/projetos"
            className="font-display text-2xl uppercase tracking-wider text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.projects", "Projects")}
          </Link>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              onOpenContact?.();
            }}
            className="font-display text-2xl uppercase tracking-wider text-white hover:text-cyan-400 transition-colors"
          >
            {t("nav.contact", "Contact")}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              onOpenContact?.();
            }}
            className="mt-4 w-full py-4 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold uppercase tracking-widest text-sm shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            {t("nav.letsTalk", "Let's Talk")}
          </button>
        </div>
      )}
    </nav>
  );
};
