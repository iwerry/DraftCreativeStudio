/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Draft Creative Studio Ltda - Daniel Rodrigues
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
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
  ChevronRight,
  Instagram,
  Send,
  Clapperboard,
  Layers,
  MessageSquare,
  Binary,
  ExternalLink
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ContactModal } from "./components/ui/ContactModal";
import PageTransition from "./PageTransition";
import { Hero3D } from "./components/ui/Hero3D";
import { FloatingAmbient3D } from "./components/ui/FloatingAmbient3D";
import { DRAFT_SERVICES_LIST } from "./ServicesPage";
import { PROJECTS } from "./projectsData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenContactWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      {/* Parallax Floating Ambient Elements */}
      <FloatingAmbient3D />

      {/* Unified Navbar */}
      <Navbar onOpenContact={() => setIsModalOpen(true)} />

      {/* Contact Popup Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />

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
            "jobTitle": "Journalist Investigative | OSINT Specialist",
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
          }
        })}
      </script>

      {/* Global Futuristic Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-900/15 via-purple-950/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[130px]" />
        <div className="absolute top-[75%] -left-40 w-[650px] h-[650px] bg-purple-950/20 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: INTERACTIVE 3D PRISM + FUTURISTIC TYPOGRAPHY           */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen pt-36 pb-24 px-6 w-full flex items-center justify-center overflow-hidden bg-[#05070c]">
        {/* Modern Cinematic Studio Video Loop */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105 filter brightness-110 contrast-125"
          >
            <source src="/studio/hero_particles.mp4" type="video/mp4" />
          </video>
          {/* Vignette gradients for 100% crisp typography readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070c] via-transparent to-[#05070c]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#05070c_85%)]" />
        </div>

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
                <span className="text-zinc-400 uppercase tracking-widest">{t("hero.badge", "Enterprise Media Tech // Draft Creative Studio Ltda")}</span>
              </div>
            </motion.div>

            {/* Giant Futuristic Headline */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="font-display text-[13vw] sm:text-[11vw] lg:text-[7.5rem] leading-[0.88] tracking-tighter uppercase font-bold text-white select-none">
                <span className="block">{t("hero.title1", "DRAFT")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  {t("hero.title2", "CREATIVE")}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-cyan-400">
                  {t("hero.title3", "STUDIO.")}
                </span>
              </h1>
            </motion.div>

            {/* Subheadline Translated */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-3xl mx-auto font-light"
            >
              {t("hero.subtitle", "Concepção de Arte de Alto Padrão, Produção Audiovisual Cinematográfica, Estratégia para Redes Sociais e Inteligência Investigativa OSINT. Conectamos narrativa cinematográfica e soberania de dados para transformar marcas em referências indiscutíveis.")}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/servicos"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-400 text-white font-mono font-bold text-sm flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(0,240,255,0.35)] transition-all cursor-pointer group"
              >
                <span>{t("hero.ctaServices", "Explorar Serviços")}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/15 hover:border-cyan-400/50 font-mono text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{t("nav.letsTalk", "Vamos Conversar")}</span>
              </button>
            </motion.div>

            {/* Quick Authority Telemetry Strip */}
            <motion.div
              variants={fadeInUp}
              className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-left"
            >
              {[
                { label: t("hero.stat1Label", "AUDIOVISUAL"), value: t("hero.stat1Value", "Cinema & Lentes"), sub: t("hero.stat1Sub", "Captação de Alto Padrão") },
                { label: t("hero.stat2Label", "CONCEPT DESIGN"), value: t("hero.stat2Value", "Branding & Presença"), sub: t("hero.stat2Sub", "Identidades Marcantes") },
                { label: t("hero.stat3Label", "SOCIAL MEDIA"), value: t("hero.stat3Value", "Reels & Retenção"), sub: t("hero.stat3Sub", "Estratégia & Crescimento") },
                { label: t("hero.stat4Label", "INVESTIGAÇÃO & TI"), value: t("hero.stat4Value", "OSINT & Linux"), sub: t("hero.stat4Sub", "Checagem Forense de Dados") }
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
              <span>PRODUÇÃO AUDIOVISUAL CINEMATOGRÁFICA</span>
              <span className="text-cyan-400">•</span>
              <span>CONCEPT DESIGN & BRANDING</span>
              <span className="text-emerald-400">•</span>
              <span>SOCIAL MEDIA & REELS</span>
              <span className="text-amber-400">•</span>
              <span>INVESTIGATIVE JOURNALISM</span>
              <span className="text-purple-400">•</span>
              <span>MOTION DESIGN AVANÇADO</span>
              <span className="text-cyan-400">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CORE VERTICALS OVERVIEW (Quick Access)                                 */}
      {/* ========================================================================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1: Services */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 w-fit">
                <Clapperboard className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {t("nav.services", "Serviços")}
              </h2>
              <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
                Consultoria em audiovisual, produção cinematográfica, concept design, social media e consultoria em inteligência artificial.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 group-hover:text-white transition-colors"
              >
                <span>Conhecer Todos os Serviços</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Box 2: Investigative Journalism */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-emerald-500/30 hover:border-emerald-400/60 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 w-fit">
                <Terminal className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Investigative Journalism
              </h2>
              <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
                Daniel Rodrigues unindo apuração documental, servidores Linux desde 2002, OSINT e inteligência forense digital.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/investigative-journalism"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 group-hover:text-white transition-colors"
              >
                <span>Acessar Seção Investigativa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Box 3: Projects Archive */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 w-fit">
                <Film className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {t("nav.projects", "Projetos")}
              </h2>
              <p className="text-zinc-400 text-sm font-sans font-light leading-relaxed">
                Galeria selecionada de projetos reais: Entre Elas, Instituto Mais Brasília, Nexus Intelligence e Brasília Grill Fest.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400 group-hover:text-white transition-colors"
              >
                <span>Ver Arquivo de Projetos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unified Footer */}
      <Footer onOpenContact={() => setIsModalOpen(true)} />
    </PageTransition>
  );
}
