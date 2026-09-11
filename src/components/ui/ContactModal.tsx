import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageSquare, Mail, Phone, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const AVAILABLE_SERVICES = [
  "Consultoria em Audiovisual & Direção Criativa",
  "Produção Audiovisual & Captação Cinematográfica",
  "Edição de Vídeo Sênior & Motion Design",
  "Concept Design, Branding & Identidade Visual",
  "Criação de Conteúdo & Social Media",
  "Fotografia Corporativa & Cobertura de Eventos",
  "Fotojornalismo & Cobertura Institucional",
  "Criação de Roteiros Cinematográficos & Master Scenes",
  "Pós-Produção & Motion para Web",
  "Consultoria em Inteligência Artificial para Audiovisual",
  "Investigative Journalism & OSINT Consulting",
  "Projeto 360 Completo (Audiovisual + Design + Redes)"
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const { t } = useTranslation();
  const [service, setService] = useState(initialService || AVAILABLE_SERVICES[0]);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Lock body scroll on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#080b12] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(0,240,255,0.25)] text-white isolate z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 mb-8 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DRAFT CREATIVE STUDIO // BRIEFING DIRETO</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-white font-bold">
              {t("contact.title", "Vamos Criar")} <span className="text-cyan-400">{t("contact.titleHighlight", "Juntos?")}</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light">
              Envie sua mensagem direta para <strong className="text-cyan-300">draftcs21@gmail.com</strong> ou fale com Daniel Rodrigues.
            </p>
          </div>

          {/* Quick WhatsApp Bar */}
          <div className="mb-8 p-4 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                  Prefere WhatsApp Imediato?
                </span>
                <span className="text-sm font-bold text-white font-mono">
                  +55 61 98905-720
                </span>
              </div>
            </div>
            <a
              href="https://wa.me/556198905720?text=Ol%C3%A1%20Daniel,%20vim%20pelo%20site%20da%20Draft%20Creative%20Studio!"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              Chamar
            </a>
          </div>

          {/* Form sending to draftcs21@gmail.com */}
          <form
            action="https://formsubmit.co/draftcs21@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value={`Novo Lead Draft: [${service}]`}
            />
            <input type="hidden" name="Servico_Selecionado" value={service} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Recebemos sua mensagem na Draft Creative Studio! Daniel Rodrigues entrará em contato em breve."
            />
            <input
              type="hidden"
              name="_next"
              value={typeof window !== 'undefined' ? window.location.href : 'https://draftcreative.com.br'}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                  {t("contact.formName", "Seu Nome *")}
                </label>
                <input
                  type="text"
                  name="Nome"
                  required
                  placeholder="Seu nome completo"
                  className="w-full p-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                  {t("contact.formEmail", "Seu E-mail Corporativo *")}
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="contato@empresa.com"
                  className="w-full p-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                WhatsApp / Telefone (com DDD) *
              </label>
              <input
                type="tel"
                name="Telefone_WhatsApp"
                required
                placeholder="(61) 98905-5720"
                className="w-full p-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                {t("contact.formService", "Serviço de Interesse *")}
              </label>
              <select
                name="Servico_Desejado"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full p-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white focus:border-cyan-400 outline-none transition-colors font-mono text-xs sm:text-sm"
              >
                {AVAILABLE_SERVICES.map((serv, idx) => (
                  <option key={idx} value={serv}>
                    {serv}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                {t("contact.formMessage", "Mensagem / Desafio da sua Empresa *")}
              </label>
              <textarea
                name="Mensagem"
                required
                rows={3}
                placeholder="Conte sobre seus objetivos, prazos ou necessidades..."
                className="w-full p-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-xs sm:text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-mono font-bold uppercase tracking-widest text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t("contact.formSubmit", "Enviar Solicitação")} (draftcs21@gmail.com)</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
