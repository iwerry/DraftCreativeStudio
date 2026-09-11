import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Clapperboard,
  Film,
  Video,
  Layers,
  Sparkles,
  Camera,
  Eye,
  MessageSquare,
  Cpu,
  Binary,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/ui/ContactModal';
import PageTransition from './PageTransition';

interface ServicesPageProps {
  onOpenContact?: () => void;
}

export const DRAFT_SERVICES_LIST = [
  {
    id: "consultoria-audiovisual",
    title: "Consultoria em Audiovisual",
    badge: "CATEGORIA PRINCIPAL",
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    icon: <Clapperboard className="w-7 h-7 text-cyan-400" />,
    shortDesc: "Planejamento estratégico de mídia, curadoria de estética corporativa e direção de cena para marcas de alta relevância.",
    tags: ["Direção Criativa", "Curadoria Visual", "Estratégia 360°"]
  },
  {
    id: "producao-cinematografica",
    title: "Produção Audiovisual & Captação Cinematográfica",
    badge: "CINEMA & COMERCIAL",
    badgeColor: "border-purple-400/40 text-purple-300 bg-purple-950/40",
    icon: <Film className="w-7 h-7 text-purple-400" />,
    shortDesc: "Captação cinematográfica em altíssima resolução para comerciais, vídeos institucionais, webseries e documentários.",
    tags: ["Comerciais", "Vídeo Institucional", "Documentários"]
  },
  {
    id: "edicao-motion",
    title: "Edição de Vídeo Sênior & Motion Design",
    badge: "PÓS-PRODUÇÃO HIGH-END",
    badgeColor: "border-emerald-400/40 text-emerald-300 bg-emerald-950/40",
    icon: <Video className="w-7 h-7 text-emerald-400" />,
    shortDesc: "Ritmo cirúrgico de corte, color grading cinematográfico, sound design imersivo e animações gráficas de padrão internacional.",
    tags: ["Color Grading", "Sound Design", "VFX & Motion"]
  },
  {
    id: "concept-design",
    title: "Concept Design, Branding & Identidade",
    badge: "DESIGN ESTRATÉGICO",
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    icon: <Layers className="w-7 h-7 text-cyan-400" />,
    shortDesc: "Construção de identidades visuais memoráveis, logotipos de alto impacto, tipografia autoral e diretrizes de marca completas.",
    tags: ["Identidade Visual", "Logotipos", "Design System"]
  },
  {
    id: "social-media",
    title: "Criação de Conteúdo & Social Media",
    badge: "ALTA RETENÇÃO",
    badgeColor: "border-pink-400/40 text-pink-300 bg-pink-950/40",
    icon: <Sparkles className="w-7 h-7 text-pink-400" />,
    shortDesc: "Estratégia visual para redes sociais: Reels magnéticos, TikToks dinâmicos, carrosséis de autoridade e cronograma de publicação.",
    tags: ["Reels & TikTok", "Carrosséis", "Growth Orgânico"]
  },
  {
    id: "fotografia-corporativa",
    title: "Fotografia Corporativa & Eventos",
    badge: "EXECUTIVO & CONGRESSOS",
    badgeColor: "border-amber-400/40 text-amber-300 bg-amber-950/40",
    icon: <Camera className="w-7 h-7 text-amber-400" />,
    shortDesc: "Cobertura de eventos de alta cúpula, congressos executivos e retratos corporativos para diretores e líderes de mercado.",
    tags: ["Retratos Executivos", "Eventos Corporativos", "Diretoria"]
  },
  {
    id: "fotojornalismo",
    title: "Fotojornalismo & Cobertura Institucional",
    badge: "DOCUMENTAL & MEMÓRIA",
    badgeColor: "border-blue-400/40 text-blue-300 bg-blue-950/40",
    icon: <Eye className="w-7 h-7 text-blue-400" />,
    shortDesc: "Registro factual em campo com olhar jornalístico apurado, memória histórica institucional e ensaios documentais de verdade.",
    tags: ["Fotojornalismo", "Arquivo Institucional", "Rigor Factual"]
  },
  {
    id: "roteiros-master-scenes",
    title: "Roteiros Cinematográficos & Master Scenes",
    badge: "STORYTELLING & SCRIPT",
    badgeColor: "border-violet-400/40 text-violet-300 bg-violet-950/40",
    icon: <MessageSquare className="w-7 h-7 text-violet-400" />,
    shortDesc: "Roteiros cirúrgicos e magnéticos estruturados cena a cena para prender a atenção e gerar conexões emocionais duradouras.",
    tags: ["Master Scenes", "Storytelling", "Copy Cinematográfica"]
  },
  {
    id: "pos-producao-web",
    title: "Pós-Produção & Motion para Web",
    badge: "PERFORMANCE DIGITAL",
    badgeColor: "border-teal-400/40 text-teal-300 bg-teal-950/40",
    icon: <Cpu className="w-7 h-7 text-teal-400" />,
    shortDesc: "Animações leves e vídeos otimizados para landing pages, websites interativos, banners de alto impacto e criativos verticais.",
    tags: ["Web Video", "Landing Pages", "Criativos de Anúncio"]
  },
  {
    id: "ia-audiovisual",
    title: "Consultoria em IA para Audiovisual",
    badge: "INTELIGÊNCIA & INOVAÇÃO",
    badgeColor: "border-indigo-400/40 text-indigo-300 bg-indigo-950/40",
    icon: <Binary className="w-7 h-7 text-indigo-400" />,
    shortDesc: "Implementação de ferramentas de IA generativa em pipelines criativos para acelerar o concept design e automatizar processos visuais.",
    tags: ["IA Generativa", "Workflows Ágeis", "Upscaling & Áudio"]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function ServicesPage() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenContactWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#05070c] text-white flex flex-col justify-between selection:bg-cyan-500/30">
        {/* Unified Navbar */}
        <Navbar onOpenContact={() => setIsModalOpen(true)} />

        {/* Contact Popup Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialService={selectedService}
        />

        {/* Ambient Top Glow */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-900/15 rounded-full blur-[140px]" />
        </div>

        {/* Main Content */}
        <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto w-full flex-1">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DRAFT CREATIVE STUDIO // SERVICES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white font-bold">
              {t("services.title", "Our")} <span className="text-cyan-400">{t("services.titleHighlight", "Services")}</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg font-sans font-light leading-relaxed">
              {t("services.subtitle", "Structured enterprise services designed to elevate your company's visual authority, brand positioning, and conversions.")}
            </p>
          </motion.div>

          {/* Services Grid (Clean 10 services - No OSINT duplicate, No 3D deconstruction) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {DRAFT_SERVICES_LIST.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all shadow-md">
                      {service.icon}
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold font-display uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-zinc-300 text-sm leading-relaxed mt-2.5 font-sans font-light">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-zinc-950/80 border border-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Request CTA triggers Contact Popup */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenContactWithService(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{t("services.request", "Request Quote")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/556198905720?text=${encodeURIComponent(`Olá Daniel! Gostaria de conversar sobre o serviço de: ${service.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-950 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setIsModalOpen(true)} />
      </div>
    </PageTransition>
  );
}
