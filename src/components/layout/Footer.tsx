import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Camera, Mail, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-[#04060a] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/draftlogo.svg"
                alt="Draft Creative Studio"
                className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="text-sm font-mono font-bold text-white uppercase">
                  Draft Creative Studio Ltda.
                </span>
                <span className="text-[10px] font-mono text-cyan-400">
                  Daniel Rodrigues • Global Operations
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light max-w-sm leading-relaxed">
              Audiovisual production, strategic concept design, high-retention social media, and investigative OSINT intelligence.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono text-zinc-400">
              <Link to="/servicos" className="hover:text-cyan-400 transition-colors">
                {t("nav.services", "Services")}
              </Link>
              <Link to="/investigative-journalism" className="hover:text-emerald-400 transition-colors">
                Investigative Journalism
              </Link>
              <Link to="/projetos" className="hover:text-cyan-400 transition-colors">
                {t("nav.projects", "Projects")}
              </Link>
              <button
                type="button"
                onClick={onOpenContact}
                className="text-left hover:text-white transition-colors cursor-pointer uppercase"
              >
                {t("nav.contact", "Contact")}
              </button>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
              Direct Inquiries
            </span>
            <div className="space-y-2 text-xs font-mono">
              <a
                href="mailto:draftcs21@gmail.com"
                className="flex items-center gap-2 text-zinc-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>draftcs21@gmail.com</span>
              </a>
              <a
                href="https://wa.me/556198905720?text=Ol%C3%A1%20Daniel,%20vim%20pelo%20site%20da%20Draft%20Creative%20Studio!"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>+55 61 98905-720</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 Draft Creative Studio Ltda. {t("footer.rights", "All rights reserved.")}</p>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/draftcreativestudio/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" /> Instagram
            </a>
            <a
              href="https://www.instagram.com/danielrodrigues.photography"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              <Camera className="w-3.5 h-3.5" /> Daniel Rodrigues
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
