import { motion } from "motion/react";
import PageTransition from "./PageTransition";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Instagram } from "lucide-react";
import { PROJECTS } from "./projectsData";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ProjetosPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      {/* Basic Navigation Minimal for Subpage */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-brand/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group cursor-pointer flex items-center">
            <img src="/draftlogo.svg" alt="Draft Logo" className="h-8 md:h-12 w-auto transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </Link>
          <div className="flex items-center gap-10">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-ink/80 hidden md:block">
              Início
            </Link>
            <a href="https://wa.me/556198905720" target="_blank" rel="noreferrer" className="flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-paper px-6 py-2 font-bold uppercase text-xs transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)]">
              Vamos Conversar
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <motion.h1 variants={fadeUp} className="font-display text-5xl lg:text-7xl uppercase tracking-tighter text-brand drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] mb-4">
            Arquivo de Projetos
          </motion.h1>
          <motion.div variants={fadeUp} className="h-1 w-24 bg-brand shadow-[0_0_10px_rgba(0,240,255,0.5)] mb-8"></motion.div>
          <motion.p variants={fadeUp} className="text-ink/60 text-lg max-w-2xl font-sans">
            Explore nossa galeria completa de trabalhos passados, abrangendo desenvolvimento de software, design estratégico, produção audiovisual e muito mais.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16"
        >
          {PROJECTS.map((project, i) => {
            const content = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden border border-ink/20 mb-6 bg-paper/5 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                  <div className="absolute top-4 left-4 border border-paper bg-paper/20 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                    {project.category}
                  </div>
                </div>
                <div className="flex justify-between items-start group">
                  <div className="pr-4">
                    <h3 className="text-3xl font-display uppercase tracking-tight text-brand group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-all">{project.title}</h3>
                    {project.description && (
                      <p className="text-sm text-ink/70 mt-4 font-sans whitespace-pre-line leading-relaxed">{project.description}</p>
                    )}
                  </div>
                  {project.link && (
                    <ArrowRight className="w-6 h-6 text-brand -rotate-45 group-hover:rotate-0 transition-transform duration-300 flex-shrink-0 mt-2" />
                  )}
                </div>
              </>
            );

            return project.link ? (
              <motion.a
                key={i}
                variants={fadeUp}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block outline-none"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={i}
                variants={fadeUp}
                className="block outline-none"
              >
                {content}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <footer className="py-12 px-6 border-t border-ink/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/" className="group cursor-pointer">
            <img src="/draftlogo.svg" alt="Draft Logo" className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300" />
          </Link>
          <p className="text-ink/40 text-xs text-center md:text-left">© 2026 Draft Creative Studio Ltda.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-ink/60">
            <a href="https://www.instagram.com/draftcreativestudio/" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="hover:text-brand transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </PageTransition>
  );
}
