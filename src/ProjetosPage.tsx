import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Film, ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ContactModal } from "./components/ui/ContactModal";
import { FallingCrosses3D } from "./components/ui/FallingCrosses3D";
import PageTransition from "./PageTransition";
import { PROJECTS } from "./projectsData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};
const fadeUp = fadeInUp;

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProjetosPage() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#05070c] text-white flex flex-col justify-between selection:bg-cyan-500/30">
        {/* Unified Navbar */}
        <Navbar onOpenContact={() => setIsModalOpen(true)} />

        {/* Contact Popup Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/* 3D Falling Gamer Crosses Background */}
        <FallingCrosses3D />

        {/* Ambient Top Glow */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-950/20 rounded-full blur-[140px]" />
        </div>

        {/* Main Content: Just Projects Archive */}
        <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto w-full flex-1">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
              <Film className="w-3.5 h-3.5 text-purple-400" />
              <span>DRAFT CREATIVE STUDIO // PORTFOLIO</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white font-bold">
              {t("projects.title", "Selected")} <span className="text-purple-400">{t("projects.titleHighlight", "Projects")}</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg font-sans font-light leading-relaxed">
              {t("projects.subtitle", "A showcase of symbiosis between cinema aesthetics, digital intelligence, and measurable impact.")}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-cyan-400/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider backdrop-blur-md">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8 space-y-3">
                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-zinc-300 text-sm leading-relaxed font-sans font-light whitespace-pre-line">
                      {typeof project.description === 'string'
                        ? project.description
                        : (project.description as Record<string, string>)[i18n.language?.slice(0, 2)] || project.description.en || project.description.pt}
                    </p>
                  </div>
                </div>

                {project.link && (
                  <div className="px-8 pb-8 pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>{t("projects.viewProject", "Open Project")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
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
