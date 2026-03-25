/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  Monitor,
  Zap,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
  ChevronRight,
  Code2,
  Video,
  GraduationCap,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SERVICES = [
  {
    title: "STUDIO",
    description: "Produção audiovisual completa: Fotografia, Filmagem, Design, Edição de Vídeo, Motion Design e Lives. Expertise também em Marketing Digital e Copywriting.",
    icon: <Video className="w-8 h-8" />,
    color: "bg-[#8E9AAF]",
    textColor: "text-[#0A0F1E]"
  },
  {
    title: "LAB",
    description: "Desenvolvimento de Apps para Web, Android e iPhone. Criação de Games, soluções de software sob medida e Design focado em UX.",
    icon: <Code2 className="w-8 h-8" />,
    color: "bg-[#00FF41]",
    textColor: "text-[#0A0F1E]"
  },
  {
    title: "ACADEMY",
    description: "Cursos e formações práticas na área de audiovisual, desenvolvimento, front-end e também em Inteligência Artificial.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-[#FFD700]",
    textColor: "text-[#0A0F1E]"
  }
];

const SKILLS = [
  { role: "Fotografia", desc: "Capturando a essência da sua marca com direção de arte impecável e qualidade de cinema.", bgImage: "https://picsum.photos/seed/photo/800/600" },
  { role: "Filmagem", desc: "Produção de vídeo premium para comerciais, coberturas e conteúdo institucional de alto impacto.", bgImage: "https://picsum.photos/seed/film/800/600" },
  { role: "Edição de Vídeo", desc: "Ritmo, cor e storytelling visual que prendem a atenção do primeiro ao último segundo.", bgImage: "https://picsum.photos/seed/edit/800/600" },
  { role: "Motion Design", desc: "Animações e grafismos dinâmicos que dão vida, fluidez e energia moderna à sua comunicação.", bgImage: "https://picsum.photos/seed/motion/800/600" },
  { role: "Design & Branding", desc: "Construção de identidades visuais de alto impacto corporativo. Criação técnica de logotipos, produtos digitais e campanhas offline (Outdoors e Flyers).", bgImage: "https://picsum.photos/seed/branding/800/600" },
  { role: "UX Design p/ App", desc: "Interfaces centradas no usuário, garantindo uma navegação intuitiva em plataformas Android e iOS.", bgImage: "https://picsum.photos/seed/ui/800/600" },
  { role: "Marketing Digital", desc: "Estratégias de ponta, copy focada em resultados reais e campanhas inteligentes de tráfego.", bgImage: "https://picsum.photos/seed/marketing/800/600" },
  { role: "Script", desc: "Roteiros cirúrgicos e magnéticos projetados para reter a máxima atenção nas redes sociais e converter engajamento em vendas e também em formato Master Scenes usados no Cinema.", bgImage: "https://picsum.photos/seed/script/800/600" }
];

const HERO_SLIDES = [
  {
    id: "studio",
    title: ["Draft", "Creative", "Studio."],
    subtitle: "Produção audiovisual premium, design estratégico e storytelling visual que transformam marcas em legados eternos.",
    color: "text-brand",
    glowLight: "rgba(0,240,255,0.4)",
    fallbackImg: "https://picsum.photos/seed/studio_brand_dark/1920/1080"
  },
  {
    id: "lab",
    title: ["Draft", "Lab."],
    subtitle: "Desenvolvimento de alta performance para Apps, Web e Games. Transformamos ideias completas em experiências digitais épicas e responsivas.",
    color: "text-[#00FF41]",
    glowLight: "rgba(0,255,65,0.3)",
    fallbackImg: "https://picsum.photos/seed/lab_code_dark/1920/1080"
  },
  {
    id: "academy",
    title: ["Draft", "Academy."],
    subtitle: "Em breve: Cursos práticos de Fotografia, Filmagem, Edição de Vídeo e Motion. Aprenda com os maiores especialistas do mercado audiovisual.",
    color: "text-[#FFD700]",
    glowLight: "rgba(255,215,0,0.3)",
    fallbackImg: "https://picsum.photos/seed/academy_class_dark/1920/1080"
  }
];

const PROJECTS = [
  {
    title: "Urban Flow",
    category: "STUDIO",
    image: "https://picsum.photos/seed/urban/800/600"
  },
  {
    title: "Nova Tech",
    category: "LAB",
    image: "https://picsum.photos/seed/tech/800/600"
  },
  {
    title: "Edu Platform",
    category: "ACADEMY",
    image: "https://picsum.photos/seed/edu/800/600"
  },
  {
    title: "Zenith Game",
    category: "LAB",
    image: "https://picsum.photos/seed/app/800/600"
  }
];

// Reusable Framer Motion Variants for entire site consistency
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDraftDropdownOpen, setIsDraftDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000); // 7s per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand selection:text-paper font-sans">
      {/* Custom Mouse Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-brand/20 rounded-full pointer-events-none z-[100] blur-xl shadow-[0_0_30px_rgba(0,240,255,0.6)] hidden md:block"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-brand/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group cursor-pointer flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/draftlogo.svg"
              alt="Draft Logo"
              className="h-8 md:h-12 w-auto transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => setIsDraftDropdownOpen(true)}
              onMouseLeave={() => setIsDraftDropdownOpen(false)}
            >
              <button className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-ink/80 flex items-center gap-1 py-4">
                Draft <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isDraftDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 left-0 w-48 bg-paper/95 backdrop-blur border border-brand/20 shadow-[0_10px_40px_rgba(0,240,255,0.15)] py-2 z-50 rounded"
                  >
                    <Link to="/sobre" className="block px-4 py-3 text-xs font-bold uppercase hover:text-brand hover:bg-brand/5 transition-colors text-ink/80">Sobre a Draft</Link>
                    <Link to="/studio" className="block px-4 py-3 text-xs font-bold uppercase hover:text-[#8E9AAF] hover:bg-brand/5 transition-colors text-ink/80">Studio</Link>
                    <Link to="/lab" className="block px-4 py-3 text-xs font-bold uppercase hover:text-[#00FF41] hover:bg-brand/5 transition-colors text-ink/80">Lab</Link>
                    <Link to="/academy" className="block px-4 py-3 text-xs font-bold uppercase hover:text-[#FFD700] hover:bg-brand/5 transition-colors text-ink/80">Academy</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {['Serviços', 'Skills', 'Projetos', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace('ç', 'c')}`} className="text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors text-ink/80">
                {item}
              </a>
            ))}
            <a href="https://wa.me/556198905720" target="_blank" rel="noreferrer" className="flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-paper px-6 py-2 font-bold uppercase text-xs transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)]">
              Vamos Conversar
            </a>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button className="text-brand" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {['Serviços', 'Skills', 'Projetos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ç', 'c')}`}
              className="font-display text-5xl uppercase hover:text-brand transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="https://wa.me/556198905720" target="_blank" rel="noreferrer" className="mt-8 border border-brand text-brand hover:bg-brand hover:text-paper px-8 py-4 font-bold uppercase text-lg transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]" onClick={() => setIsMenuOpen(false)}>
            Vamos Conversar
          </a>
        </motion.div>
      )}

      {/* Hero Section - Dynamic Slideshow */}
      <section className="relative min-h-[95vh] pt-40 pb-20 px-6 w-full flex items-center overflow-hidden bg-paper">
        {/* Animated Background Image / Video Player */}
        <div className="absolute inset-0 -z-20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Scale animation separated for better GPU performance and mix-blend-mode removed */}
              <motion.img 
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 15, ease: "linear" }}
                src={HERO_SLIDES[activeSlide].fallbackImg} 
                alt="Background Slide" 
                className="w-full h-full object-cover opacity-20"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent"></div>
              
              {/* Static glow that fades in/out with the slide (No color interpolation needed here) */}
              <div 
                className="absolute top-1/2 left-1/4 w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-screen opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ backgroundColor: HERO_SLIDES[activeSlide].glowLight }}
              ></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle grid background layer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 relative min-h-[400px] flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                }}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="relative z-10"
              >
                <h1 className="font-display text-[15vw] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase relative">
                  {HERO_SLIDES[activeSlide].title.map((line, idx) => (
                    <span key={idx} className="block overflow-hidden pb-1 lg:pb-3">
                      <motion.span 
                        variants={{
                          hidden: { y: "110%", opacity: 0, rotateZ: 2 },
                          show: { y: "0%", opacity: 1, rotateZ: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="block origin-top-left"
                      >
                        {line.includes('.') ? (
                          <>
                            {line.replace('.', '')}
                            <span className={HERO_SLIDES[activeSlide].color}>.</span>
                          </>
                        ) : (
                          line
                        )}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                {/* Animated Accent Line */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scaleX: 0 },
                    show: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
                  }}
                  className="origin-left w-24 h-1 bg-brand my-8 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                ></motion.div>
                
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
                  }}
                  className="text-lg lg:text-xl font-light leading-relaxed text-ink/80 mb-10 font-sans max-w-2xl"
                >
                  {HERO_SLIDES[activeSlide].subtitle}
                </motion.p>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } }
                  }}
                >
                  <a href="#servicos" className="inline-flex items-center gap-4 group cursor-pointer relative">
                    <span className={`w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:border-transparent transition-all shadow-lg overflow-hidden relative`}>
                      <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                      <ArrowRight className="w-6 h-6 text-brand font-bold relative z-10 group-hover:text-paper transition-colors duration-300" />
                    </span>
                    <span className={`font-bold uppercase tracking-widest text-sm text-ink group-hover:opacity-80 transition-opacity`}>
                      Descobrir Portfólio
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="lg:col-span-4 pb-4 flex lg:justify-end items-end gap-3 z-10">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-700 h-1.5 rounded-full overflow-hidden relative cursor-pointer ${activeSlide === idx ? 'w-20 bg-ink/20 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'w-6 bg-ink/10 hover:bg-ink/30'}`}
              >
                {activeSlide === idx && (
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className={`absolute left-0 top-0 bottom-0 ${HERO_SLIDES[activeSlide].color.replace('text-', 'bg-')} opacity-80`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-brand text-paper py-4 overflow-hidden whitespace-nowrap border-y border-brand/20 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
        <div className="flex animate-marquee gap-8 items-center">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="font-display text-2xl uppercase tracking-widest">
              STUDIO / LAB / ACADEMY / DEEP TECH /
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="overflow-hidden pb-4">
            <motion.h2 
              initial={{ y: "100%", rotateZ: 2 }}
              whileInView={{ y: 0, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl lg:text-7xl uppercase tracking-tighter text-ink flex items-center gap-4 origin-top-left"
            >
              Nossos Serviços
            </motion.h2>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="h-1 w-32 bg-brand origin-left shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="p-10 border border-ink/20 bg-paper/50 backdrop-blur flex flex-col gap-6 relative group overflow-hidden"
            >
              <div className="absolute inset-0 border border-brand/0 group-hover:border-brand/50 transition-colors duration-500 pointer-events-none"></div>

              <div className={`w-16 h-16 ${service.color} ${service.textColor} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display tracking-widest uppercase text-ink">{service.title}</h3>
              <p className="text-ink/60 leading-relaxed font-sans">{service.description}</p>
              <Link to={`/${service.title.toLowerCase()}`} className={`mt-auto flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-brand transition-colors`}>
                Saber Mais <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-32 bg-[#030610] text-ink px-6 relative overflow-hidden">
        {/* Deep Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-20 relative z-10">
            <div className="overflow-hidden pb-4 inline-block">
              <motion.h2 
                initial={{ y: "100%", rotateZ: 2 }}
                whileInView={{ y: 0, rotateZ: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl lg:text-7xl uppercase tracking-tighter text-ink drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] origin-top-left"
              >
                Habilidades do <span className="text-brand">Nosso Time</span>
              </motion.h2>
            </div>
            <motion.p 
              variants={fadeUp}
              className="text-ink/70 font-sans max-w-2xl mx-auto text-lg leading-relaxed mt-4"
            >
              A Draft Creative Studio Ltda conta com especialistas de elite. Cada habilidade do nosso esquadrão é uma ferramenta precisa, pronta para escalar sua marca.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] min-h-[380px] rounded border border-brand/20 bg-paper/5 transition-all text-left group cursor-pointer relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                whileHover={{ y: -5 }}
              >
                {/* Background Image with Dark Gradient Overlay */}
                <img src={skill.bgImage} alt={skill.role} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="h-1 w-12 bg-brand mb-6 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                  <h4 className="font-bold text-white mb-3 text-lg tracking-widest uppercase group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">{skill.role}</h4>
                  <p className="text-white/70 font-sans text-sm mb-8 leading-relaxed">{skill.desc}</p>

                  {/* Card Micro-CTA */}
                  <a href="#contato" className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand group-hover:text-white transition-colors">
                    Solicitar <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Conversional CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-20 text-center relative z-10"
          >
            <div className="inline-block p-1 bg-gradient-to-r from-brand/50 via-brand to-brand/50 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all">
              <a href="#contato" className="flex items-center gap-4 bg-ink px-10 py-6 font-bold uppercase tracking-widest text-paper hover:bg-brand hover:text-ink transition-colors">
                Estou Pronto Para Começar O Meu Projeto <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="projetos" className="py-32 px-6 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="overflow-hidden pb-4">
                <motion.h2 
                  initial={{ y: "100%", rotateZ: 2 }}
                  whileInView={{ y: 0, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl lg:text-7xl uppercase tracking-tighter origin-top-left"
                >
                  Últimos Projetos
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-ink/60 text-lg mt-4 max-w-md">Uma amostra da simbiose entre estética, código e aprendizado.</motion.p>
            </div>
            <motion.button variants={fadeUp} className="px-8 py-4 border border-brand/50 text-brand hover:bg-brand hover:text-paper transition-all uppercase font-bold tracking-widest text-sm shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              Ver Arquivo Completo
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-ink/20 mb-6 bg-paper/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>

                  {/* Categoria Badge */}
                  <div className="absolute top-4 left-4 border border-paper bg-paper/20 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                    {project.category}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-display uppercase tracking-tight text-brand">{project.title}</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-brand -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div>
            <div className="overflow-hidden pb-4">
              <motion.h2 
                initial={{ y: "100%", rotateZ: 2 }}
                whileInView={{ y: 0, rotateZ: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl lg:text-7xl uppercase tracking-tighter mb-4 text-brand drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] origin-top-left"
              >
                Vamos criar o amanhã?
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="h-1 w-24 bg-brand mb-8 origin-left shadow-[0_0_10px_rgba(0,240,255,0.5)]"
            ></motion.div>

            <motion.p variants={fadeUp} className="text-lg text-ink/60 mb-12 max-w-md font-sans">
              Seja no Lab desenvolvendo sua ideia, no Studio narrando sua história, ou na Academy ensinando seu legado.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                { label: "E-mail", text: "hello@draftstudio.com", icon: <Mail className="w-5 h-5" />, link: null },
                { label: "WhatsApp Direto", text: "+55 61 9890-5720", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>, link: "https://wa.me/556198905720", isBrand: true },
                { label: "Social", text: "@draftcreative.studio", icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/draftcreative.studio" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 rounded-full border ${item.isBrand ? 'border-[rgb(37,211,102)]/30 bg-[rgb(37,211,102)]/10 text-[rgb(37,211,102)] shadow-[0_0_15px_rgba(37,211,102,0.3)] group-hover:bg-[rgb(37,211,102)] group-hover:text-paper cursor-pointer' : 'border-brand/30 text-brand'} flex items-center justify-center transition-all`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink/40 font-bold">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className={`text-md font-bold text-ink hover:${item.isBrand ? 'text-[rgb(37,211,102)]' : 'text-brand'} transition-colors`}>{item.text}</a>
                    ) : (
                      <p className="text-md font-bold text-ink">{item.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.form 
            action="https://formsubmit.co/draftcs21@gmail.com"
            method="POST"
            variants={fadeUp}
            className="space-y-6 p-8 border border-ink/20 bg-paper/5 backdrop-blur relative overflow-hidden"
          >
            <input type="hidden" name="_subject" value="Novo Lead (Draft): Contato do Site Principal" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://draft.draftcs21.workers.dev" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-ink/60">Nome</label>
                <input type="text" name="Nome" required className="w-full p-4 border border-ink/20 bg-transparent text-ink focus:border-brand outline-none transition-colors" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-ink/60">E-mail</label>
                <input type="email" name="Email" required className="w-full p-4 border border-ink/20 bg-transparent text-ink focus:border-brand outline-none transition-colors" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-ink/60">Unidade de Interesse</label>
              <select name="Unidade" required className="w-full p-4 border border-ink/20 bg-paper text-ink focus:border-brand outline-none transition-colors">
                <option>LAB (Apps/Software)</option>
                <option>STUDIO (Audiovisual/Branding)</option>
                <option>ACADEMY (Cursos/Educação)</option>
                <option>Múltiplas / Outro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-ink/60">Sua Missão</label>
              <textarea name="Mensagem" required rows={4} className="w-full p-4 border border-ink/20 bg-transparent text-ink focus:border-brand outline-none transition-colors resize-none" placeholder="Conte-nos sobre o seu desafio..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-brand text-paper font-bold uppercase tracking-widest hover:bg-brand/80 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              Iniciar Transmissão
            </button>
          </motion.form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-ink/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/draftlogo.svg" alt="Draft Logo" className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </motion.a>

          <p className="text-ink/40 text-xs text-center md:text-left">© 2026 Draft Creative Studio Ltda.</p>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-ink/60">
            <a href="#" className="hover:text-brand transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* Marquee Animation Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
