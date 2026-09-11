/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Draft Creative Studio Ltda - Daniel Rodrigues
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Film,
  Video,
  Sparkles,
  Shield,
  Terminal,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Send,
  Clapperboard,
  Layers,
  Search,
  MessageSquare,
  Binary,
  Eye,
  Award,
  Hexagon,
  ExternalLink
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import PageTransition from "./PageTransition";
import { Hero3D } from "./components/ui/Hero3D";
import { OsintTerminal } from "./components/ui/OsintTerminal";
import { PROJECTS } from "./projectsData";

// Serviços Oficiais verificados (Google Meu Negócio + Especialidades da Draft Creative Studio)
const DRAFT_SERVICES = [
  {
    id: "consultoria-audiovisual",
    title: "Consultoria em Audiovisual",
    badge: "CATEGORIA PRINCIPAL",
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    icon: <Clapperboard className="w-7 h-7 text-cyan-400" />,
    shortDesc: "Planejamento estratégico de mídia, curadoria de estética corporativa e direção de cena para marcas de alta relevância.",
    fullDesc: "Diagnóstico completo de comunicação visual, orientação sobre equipamentos, iluminação, roteiro e posicionamento de autoridade no mercado.",
    tags: ["Direção Criativa", "Curadoria Visual", "Estratégia 360°"]
  },
  {
    id: "producao-cinematografica",
    title: "Produção Audiovisual & Captação 6K",
    badge: "CINEMA & COMERCIAL",
    badgeColor: "border-purple-400/40 text-purple-300 bg-purple-950/40",
    icon: <Film className="w-7 h-7 text-purple-400" />,
    shortDesc: "Captação cinematográfica em altíssima resolução para comerciais, vídeos institucionais, webseries e documentários.",
    fullDesc: "Câmeras e lentes de cinema, iluminação dramática, captação de som direto cristalino e direção de atores e porta-vozes corporativos.",
    tags: ["Comerciais", "Vídeo Institucional", "Documentários"]
  },
  {
    id: "edicao-motion",
    title: "Edição de Vídeo Sênior & Motion Design",
    badge: "PÓS-PRODUÇÃO HIGH-END",
    badgeColor: "border-emerald-400/40 text-emerald-300 bg-emerald-950/40",
    icon: <Video className="w-7 h-7 text-emerald-400" />,
    shortDesc: "Ritmo cirúrgico de corte, color grading cinematográfico, sound design imersivo e animações gráficas de padrão internacional.",
    fullDesc: "Edição avançada projetada para reter a atenção do espectador do primeiro ao último segundo, reforçando a mensagem da sua marca.",
    tags: ["Color Grading", "Sound Design", "VFX & Motion"]
  },
  {
    id: "concept-design",
    title: "Concept Design, Branding & Identidade",
    badge: "DESIGN ESTRATÉGICO",
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    icon: <Layers className="w-7 h-7 text-cyan-400" />,
    shortDesc: "Construção de identidades visuais memoráveis, logotipos de alto impacto, tipografia autoral e diretrizes de marca completas.",
    fullDesc: "Da concepção filosófica ao manual técnico de aplicação corporativa: criamos sistemas visuais que se destacam e perpetuam marcas.",
    tags: ["Identidade Visual", "Logotipos", "Design System"]
  },
  {
    id: "social-media",
    title: "Criação de Conteúdo & Social Media",
    badge: "ALTA RETENÇÃO",
    badgeColor: "border-pink-400/40 text-pink-300 bg-pink-950/40",
    icon: <Sparkles className="w-7 h-7 text-pink-400" />,
    shortDesc: "Estratégia visual para redes sociais: Reels magnéticos, TikToks dinâmicos, carrosséis de autoridade e cronograma de publicação.",
    fullDesc: "Conteúdo desenhado para gerar engajamento qualificado e transformar seguidores em clientes e admiradores da sua marca.",
    tags: ["Reels & TikTok", "Carrosséis", "Growth Orgânico"]
  },
  {
    id: "fotografia-corporativa",
    title: "Fotografia Corporativa & Eventos",
    badge: "EXECUTIVO & CONGRESSOS",
    badgeColor: "border-amber-400/40 text-amber-300 bg-amber-950/40",
    icon: <Camera className="w-7 h-7 text-amber-400" />,
    shortDesc: "Cobertura de eventos de alta cúpula, congressos executivos e retratos corporativos para diretores e líderes de mercado.",
    fullDesc: "Direção fotográfica com iluminação precisa de estúdio ou locação, transmitindo credibilidade, liderança e sofisticação imediata.",
    tags: ["Retratos Executivos", "Eventos Corporativos", "Diretoria"]
  },
  {
    id: "fotojornalismo",
    title: "Fotojornalismo & Cobertura Institucional",
    badge: "DOCUMENTAL & MEMÓRIA",
    badgeColor: "border-blue-400/40 text-blue-300 bg-blue-950/40",
    icon: <Eye className="w-7 h-7 text-blue-400" />,
    shortDesc: "Registro factual em campo com olhar jornalístico apurado, memória histórica institucional e ensaios documentais de verdade.",
    fullDesc: "Documentação ética, precisa e sensível de projetos sociais, ações governamentais, causas humanitárias e transformações urbanas.",
    tags: ["Fotojornalismo", "Arquivo Institucional", "Rigor Factual"]
  },
  {
    id: "roteiros-master-scenes",
    title: "Roteiros Cinematográficos & Master Scenes",
    badge: "STORYTELLING & SCRIPT",
    badgeColor: "border-violet-400/40 text-violet-300 bg-violet-950/40",
    icon: <MessageSquare className="w-7 h-7 text-violet-400" />,
    shortDesc: "Roteiros cirúrgicos e magnéticos estruturados cena a cena para prender a atenção e gerar conexões emocionais duradouras.",
    fullDesc: "Formato Master Scenes utilizado no cinema tradicional, adaptado para documentários, publicidade e vídeos de vendas na internet.",
    tags: ["Master Scenes", "Storytelling", "Copy Cinematográfica"]
  },
  {
    id: "pos-producao-web",
    title: "Pós-Produção & Motion para Web",
    badge: "PERFORMANCE DIGITAL",
    badgeColor: "border-teal-400/40 text-teal-300 bg-teal-950/40",
    icon: <Cpu className="w-7 h-7 text-teal-400" />,
    shortDesc: "Animações leves e vídeos otimizados para landing pages, websites interativos, banners de alto impacto e criativos verticais.",
    fullDesc: "Compressão inteligente sem perda de qualidade visual, fluidez em 60fps e integração com a identidade digital da empresa.",
    tags: ["Web Video", "Landing Pages", "Criativos de Anúncio"]
  },
  {
    id: "ia-audiovisual",
    title: "Consultoria em IA para Audiovisual",
    badge: "INTELIGÊNCIA & INOVAÇÃO",
    badgeColor: "border-indigo-400/40 text-indigo-300 bg-indigo-950/40",
    icon: <Binary className="w-7 h-7 text-indigo-400" />,
    shortDesc: "Implementação de ferramentas de IA generativa em pipelines criativos para acelerar o concept design e automatizar processos visuais.",
    fullDesc: "Treinamento de modelos, geração de storyboards assistidos por IA, upscaling inteligente de imagens e tratamento de áudio avançado.",
    tags: ["IA Generativa", "Workflows Ágeis", "Upscaling & Áudio"]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppLink = (serviceName?: string) => {
    const base = "https://wa.me/556198905720?text=";
    if (serviceName) {
      return `${base}${encodeURIComponent(`Olá Daniel, vi o site da Draft Creative Studio e gostaria de solicitar um orçamento para o serviço de: ${serviceName}`)}`;
    }
    return `${base}${encodeURIComponent("Olá Daniel! Conheci a Draft Creative Studio e gostaria de conversar sobre um projeto.")}`;
  };

  return (
    <PageTransition>
      {/* Schema.org Microdata for Search Engines and AI Crawlers */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
          "name": "Draft Creative Studio Ltda",
          "alternateName": "Draft Creative Studio",
          "founder": {
            "@type": "Person",
            "name": "Daniel Rodrigues",
            "jobTitle": "Jornalista Investigativo (DRT) e Arquiteto de Software",
            "sameAs": [
              "https://www.instagram.com/danielrodrigues.photography",
              "https://draftcreative.com.br"
            ]
          },
          "url": "https://draftcreative.com.br",
          "logo": "https://draftcreative.com.br/draftlogo.svg",
          "telephone": "+55-61-98905-720",
          "email": "draftcs21@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Brasília",
            "addressRegion": "DF",
            "addressCountry": "BR"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Oficiais Draft Creative Studio",
            "itemListElement": DRAFT_SERVICES.map((s, idx) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.shortDesc
              },
              "position": idx + 1
            }))
          }
        })}
      </script>

      {/* Global Futuristic Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-900/15 via-purple-950/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[130px]" />
        <div className="absolute top-[75%] -left-40 w-[650px] h-[650px] bg-purple-950/20 rounded-full blur-[140px]" />
      </div>

      {/* Modern Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07090e]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group cursor-pointer flex items-center gap-3"
          >
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
                Audiovisual & Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Links (Single Brand - No Lab/Academy Dropdowns!) */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-zinc-300">
            <a
              href="#servicos"
              className="hover:text-cyan-400 transition-colors py-2"
            >
              {t("nav.services", "Serviços")}
            </a>
            <a
              href="#osint"
              className="hover:text-purple-400 transition-colors py-2 flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              {t("nav.osint", "Investigação & OSINT")}
            </a>
            <a
              href="#projetos"
              className="hover:text-cyan-400 transition-colors py-2"
            >
              {t("nav.projects", "Projetos")}
            </a>
            <a
              href="#sobre-daniel"
              className="hover:text-emerald-400 transition-colors py-2"
            >
              {t("nav.founder", "Sobre Daniel")}
            </a>
            <a
              href="#contato"
              className="hover:text-white transition-colors py-2"
            >
              {t("nav.contact", "Contato")}
            </a>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-400/50 bg-cyan-950/30 text-cyan-300 hover:bg-cyan-400 hover:text-black font-bold tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("nav.letsTalk", "Vamos Conversar")}</span>
            </a>

            <LanguageSwitcher />
          </div>

          {/* Mobile Actions */}
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
      </nav>

      {/* Mobile Fullscreen Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#07090e]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden px-6"
          >
            {[
              { label: "Nossos Serviços", href: "#servicos" },
              { label: "Investigação & OSINT", href: "#osint" },
              { label: "Projetos", href: "#projetos" },
              { label: "Sobre Daniel Rodrigues", href: "#sobre-daniel" },
              { label: "Contato & Orçamento", href: "#contato" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-2xl uppercase tracking-wider text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full py-4 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold uppercase tracking-widest text-sm shadow-[0_0_25px_rgba(0,240,255,0.4)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: INTERACTIVE 3D PRISM + FUTURISTIC TYPOGRAPHY           */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen pt-36 pb-24 px-6 w-full flex items-center justify-center overflow-hidden bg-[#07090e]">
        {/* Real 3D Optical Canvas */}
        <Hero3D />

        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-8 max-w-5xl mx-auto"
          >
            {/* Authority Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.2)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-zinc-400 uppercase tracking-widest">Enterprise Media Tech //</span>
                <span className="font-bold text-white tracking-wider">Draft Creative Studio Ltda</span>
              </div>
            </motion.div>

            {/* Giant Futuristic Headline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="font-display text-[13vw] sm:text-[11vw] lg:text-[7.5rem] leading-[0.88] tracking-tighter uppercase font-bold text-white select-none">
                <span className="block">DRAFT</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  CREATIVE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-cyan-400">
                  STUDIO<span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]">.</span>
                </span>
              </h1>
            </motion.div>

            {/* Subheadline (Concept Design, Video, Social Media, Marketing, OSINT) */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-3xl mx-auto font-light"
            >
              Concepção de Arte de Alto Padrão, Produção Audiovisual 6K, Estratégia para Redes Sociais e Inteligência Investigativa OSINT. Conectamos narrativa cinematográfica e soberania de dados para transformar marcas em referências indiscutíveis.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#servicos"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-400 text-white font-mono font-bold text-sm flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(0,240,255,0.35)] transition-all cursor-pointer group"
              >
                <span>Explorar Serviços</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/15 hover:border-cyan-400/50 font-mono text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Authority Telemetry Strip */}
            <motion.div
              variants={fadeInUp}
              className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-left"
            >
              {[
                { label: "AUDIOVISUAL", value: "Cinema 6K & Lentes", sub: "Captação de Alto Padrão" },
                { label: "CONCEPT DESIGN", value: "Branding & Presença", sub: "Identidades Marcantes" },
                { label: "SOCIAL MEDIA", value: "Reels & Retenção", sub: "Estratégia & Crescimento" },
                { label: "INVESTIGAÇÃO & TI", value: "OSINT & Linux", sub: "Checagem Forense de Dados" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 group shadow-lg"
                >
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider font-bold uppercase block">
                    {item.label}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white font-mono mt-1 group-hover:text-cyan-300 transition-colors">
                    {item.value}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 mt-0.5 block">
                    {item.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cyber Marquee Ticker */}
      <div className="bg-gradient-to-r from-cyan-950 via-zinc-900 to-purple-950 text-cyan-300 py-3.5 overflow-hidden whitespace-nowrap border-y border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
        <div className="flex animate-marquee gap-8 items-center font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>DRAFT CREATIVE STUDIO</span>
              <span className="text-purple-400">•</span>
              <span>PRODUÇÃO AUDIOVISUAL 6K</span>
              <span className="text-cyan-400">•</span>
              <span>CONCEPT DESIGN & BRANDING</span>
              <span className="text-emerald-400">•</span>
              <span>SOCIAL MEDIA & REELS</span>
              <span className="text-amber-400">•</span>
              <span>JORNALISMO INVESTIGATIVO OSINT</span>
              <span className="text-purple-400">•</span>
              <span>MOTION DESIGN AVANÇADO</span>
              <span className="text-cyan-400">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. NOSSOS SERVIÇOS: AS 10 CATEGORIAS REAIS DO GOOGLE MEU NEGÓCIO         */}
      {/* ========================================================================= */}
      <section id="servicos" className="py-32 px-6 max-w-7xl mx-auto relative scroll-mt-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SOLUÇÕES COMPLETAS // DRAFT SERVICES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white">
            Nossos <span className="text-cyan-400">Serviços</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-sans leading-relaxed font-light">
            Não são apenas habilidades soltas: são serviços estruturados e executados com maestria para solucionar as necessidades de imagem, autoridade e vendas da sua empresa.
          </p>
        </motion.div>

        {/* Services Grid (All 10 Real Google Verified Services) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DRAFT_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden"
            >
              {/* Subtle neon corner highlight */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="space-y-5">
                {/* Header with Icon and Badge */}
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
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mt-2.5 font-sans font-light">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Service Tags */}
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

              {/* Direct Request CTA */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 group-hover:text-white transition-colors"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DANIEL RODRIGUES: JORNALISMO INVESTIGATIVO, OSINT & LINUX              */}
      {/* ========================================================================= */}
      <section id="osint" className="py-32 bg-[#05070c] px-6 relative overflow-hidden border-y border-white/10 scroll-mt-24">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>INVESTIGATIVE JOURNALISM & CYBER FORENSICS // DANIEL RODRIGUES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white">
              A Fusão Entre <span className="text-cyan-400">Jornalismo Investigativo</span> & Tecnologia
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-sans leading-relaxed font-light">
              Daniel Rodrigues reúne dois universos complementares: o rigor da apuração documental do jornalismo com a soberania técnica de sistemas Linux e inteligência de fontes abertas (OSINT).
            </p>
          </motion.div>

          {/* Dual Grid: Daniel Profile & The Live OSINT Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Daniel Rodrigues Overview & Credentials */}
            <motion.div
              id="sobre-daniel"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-8 shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center font-display font-bold text-2xl text-cyan-300">
                      DR
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Daniel Rodrigues
                    </h3>
                    <p className="text-xs font-mono text-emerald-400">
                      Jornalista Investigativo (DRT) • Arquiteto de Software • OSINT Specialist
                    </p>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                  "Na Draft Creative Studio, não fazemos apenas publicidade visual. Aplicamos a disciplina investigativa na apuração de marcas, na criação de narrativas sem falhas e na extração forense de dados com sistemas Linux e ferramentas OSINT. Da câmera de cinema ao terminal, cada detalhe é comprovado e factual."
                </p>

                {/* Pillar Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { title: "OSINT Forensics", desc: "Verificação de metadados, análise de imagens e fontes abertas." },
                    { title: "Rigor Jornalístico (DRT)", desc: "Apuração ética de fatos, entrevistas e apuração documental." },
                    { title: "Sistemas Linux", desc: "Ambiente soberano, automações em shell e infraestrutura segura." },
                    { title: "Direção de Fotografia", desc: "Sensibilidade visual aliada ao olhar crítico investigativo." }
                  ].map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1"
                    >
                      <div className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {pillar.title}
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social and WhatsApp Links */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.instagram.com/danielrodrigues.photography"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@danielrodrigues.photography</span>
                </a>

                <a
                  href={getWhatsAppLink("Consultoria de OSINT e TI")}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-400 hover:text-black text-xs font-mono font-bold transition-all"
                >
                  Falar com Daniel
                </a>
              </div>
            </motion.div>

            {/* Right Column: Interactive OSINT Terminal Animation */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <OsintTerminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROJETOS SELECIONADOS: CASOS REAIS DE SUCESSO                          */}
      {/* ========================================================================= */}
      <section id="projetos" className="py-32 px-6 max-w-7xl mx-auto relative scroll-mt-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
              <Film className="w-3.5 h-3.5 text-purple-400" />
              <span>SELECTED WORK // ARQUIVO DE IMPACTO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white">
              Projetos <span className="text-purple-400">Selecionados</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-sans max-w-lg mt-2 font-light">
              Uma amostra da simbiose entre estética cinematográfica, inteligência digital e resultados reais.
            </p>
          </div>

          <Link
            to="/projetos"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-widest transition-all"
          >
            Ver Arquivo Completo
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-cyan-400/50 transition-all duration-500 shadow-xl flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed font-sans mt-2 whitespace-pre-line font-light line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>Acessar Projeto</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VAMOS CONVERSAR & CONTATO: CONVERSÃO DIRETA                            */}
      {/* ========================================================================= */}
      <section id="contato" className="py-32 px-6 max-w-7xl mx-auto relative scroll-mt-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left Column: Direct Access */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>INICIE SUA TRANSMISSÃO // CONTATO DIRETO</span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white">
                Vamos Criar <span className="text-cyan-400">Juntos?</span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg font-sans font-light leading-relaxed">
                Pronto para transformar a presença audiovisual, a identidade visual e o alcance da sua empresa com Daniel Rodrigues e a Draft Creative Studio?
              </p>
            </div>

            {/* Direct Contact Badges */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 border border-emerald-500/30 hover:border-emerald-400 flex items-center gap-4 transition-all group cursor-pointer shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                    WhatsApp Direto (Resposta Rápida)
                  </span>
                  <span className="text-base font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                    +55 61 98905-720
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/draftcreativestudio/"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-pink-500/40 flex items-center gap-4 transition-all group cursor-pointer shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                    Instagram Oficial
                  </span>
                  <span className="text-base font-bold text-white font-mono group-hover:text-pink-300 transition-colors">
                    @draftcreativestudio
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <form
              action="https://formsubmit.co/draftcs21@gmail.com"
              method="POST"
              className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl space-y-6 shadow-2xl"
            >
              <input
                type="hidden"
                name="_subject"
                value="Novo Contato Oficial - Draft Creative Studio"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://draftcreative.com.br"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    name="Nome"
                    required
                    placeholder="Daniel Rodrigues"
                    className="w-full p-4 rounded-xl bg-zinc-950/80 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                    Seu E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="contato@empresa.com"
                    className="w-full p-4 rounded-xl bg-zinc-950/80 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                  Serviço de Interesse *
                </label>
                <select
                  name="Servico_Desejado"
                  required
                  className="w-full p-4 rounded-xl bg-zinc-950 border border-white/10 text-white focus:border-cyan-400 outline-none transition-colors font-mono text-sm"
                >
                  <option value="Consultoria em Audiovisual">Consultoria em Audiovisual & Direção</option>
                  <option value="Produção Audiovisual 6K">Produção Audiovisual & Captação 6K (Institucional / Comercial)</option>
                  <option value="Edição de Vídeo Sênior e Motion">Edição de Vídeo Sênior & Motion Design</option>
                  <option value="Concept Design e Branding">Concept Design, Branding & Identidade Visual</option>
                  <option value="Social Media e Redes">Criação de Conteúdo & Social Media de Alto Impacto</option>
                  <option value="Fotografia Corporativa">Fotografia Corporativa & Eventos</option>
                  <option value="Fotojornalismo">Fotojornalismo & Cobertura Institucional</option>
                  <option value="Roteiros e Master Scenes">Criação de Roteiros Cinematográficos & Master Scenes</option>
                  <option value="Consultoria em IA">Consultoria em IA Aplicada ao Audiovisual</option>
                  <option value="Jornalismo Investigativo OSINT">Jornalismo Investigativo, OSINT & Auditoria TI</option>
                  <option value="Projeto 360 Completo">Projeto 360° Completo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase font-bold tracking-wider text-zinc-300">
                  Mensagem / Desafio da sua Empresa *
                </label>
                <textarea
                  name="Mensagem"
                  required
                  rows={4}
                  placeholder="Descreva brevemente o projeto, prazo desejado e objetivos..."
                  className="w-full p-4 rounded-xl bg-zinc-950/80 border border-white/10 text-white placeholder:text-zinc-600 focus:border-cyan-400 outline-none transition-colors font-mono text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-mono font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitação</span>
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#05070c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/draftlogo.svg"
              alt="Draft Creative Studio"
              className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold text-white uppercase">
                Draft Creative Studio Ltda.
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                Daniel Rodrigues • CNPJ & Atuação Global
              </span>
            </div>
          </div>

          <p className="text-zinc-500 text-xs font-mono text-center md:text-left">
            © 2026 Draft Creative Studio Ltda. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a
              href="https://www.instagram.com/draftcreativestudio/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" /> Instagram
            </a>
            <a
              href="https://www.instagram.com/danielrodrigues.photography"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" /> Daniel Rodrigues
            </a>
          </div>
        </div>
      </footer>

      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </PageTransition>
  );
}
