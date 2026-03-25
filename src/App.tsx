/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Branding & Identidade",
    description: "Criamos marcas que contam histórias e deixam legados visuais.",
    icon: <Layers className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Web & Digital",
    description: "Experiências digitais fluidas, responsivas e focadas no usuário.",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-purple-500"
  },
  {
    title: "Motion & Content",
    description: "Conteúdo dinâmico que captura a atenção e comunica com impacto.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-orange-500"
  }
];

const PROJECTS = [
  {
    title: "Urban Flow",
    category: "Branding",
    image: "https://picsum.photos/seed/urban/800/600"
  },
  {
    title: "Nova Tech",
    category: "Web Design",
    image: "https://picsum.photos/seed/tech/800/600"
  },
  {
    title: "Eco Pulse",
    category: "Marketing",
    image: "https://picsum.photos/seed/eco/800/600"
  },
  {
    title: "Zenith App",
    category: "UI/UX",
    image: "https://picsum.photos/seed/app/800/600"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-paper/80 backdrop-blur-md border-b-2 border-ink py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-3xl tracking-tighter hover:text-brand transition-colors">
            DRAFT<span className="text-brand">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {['Trabalhos', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-widest hover:text-brand transition-colors">
                {item}
              </a>
            ))}
            <button className="brutal-border brutal-shadow bg-brand text-white px-6 py-2 font-bold uppercase text-sm brutal-shadow-hover transition-all">
              Vamos Conversar
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {['Trabalhos', 'Serviços', 'Sobre', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-display text-5xl uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-[15vw] lg:text-[12rem] leading-[0.85] tracking-tighter uppercase"
            >
              Draft<br />
              Creative<br />
              Studio<span className="text-brand">.</span>
            </motion.h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl lg:text-2xl font-light leading-relaxed text-ink/70 mb-8"
            >
              Transformamos marcas através de design estratégico e experiências digitais que desafiam o comum.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#trabalhos" className="inline-flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full brutal-border flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <ArrowRight className="w-6 h-6" />
                </span>
                <span className="font-bold uppercase tracking-widest text-sm">Ver Projetos</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-ink text-paper py-6 overflow-hidden whitespace-nowrap brutal-border border-x-0">
        <div className="flex animate-marquee gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-4xl uppercase tracking-tighter">
              Branding / Web Design / Motion Graphics / Strategy / Digital Experiences /
            </span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="serviços" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display text-6xl lg:text-8xl uppercase tracking-tighter mb-4">O que fazemos</h2>
          <div className="h-1 w-32 bg-brand"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 brutal-border brutal-shadow bg-white flex flex-col gap-6"
            >
              <div className={`w-16 h-16 ${service.color} brutal-border flex items-center justify-center text-white`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase">{service.title}</h3>
              <p className="text-ink/60 leading-relaxed">{service.description}</p>
              <a href="#" className="mt-auto flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-brand transition-colors">
                Saiba mais <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="trabalhos" className="py-32 bg-ink text-paper px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="font-display text-6xl lg:text-8xl uppercase tracking-tighter">Projetos Selecionados</h2>
              <p className="text-paper/60 text-xl mt-4 max-w-md">Uma amostra do nosso compromisso com a excelência visual e funcional.</p>
            </div>
            <button className="px-8 py-4 border border-paper/30 hover:bg-paper hover:text-ink transition-all uppercase font-bold tracking-widest text-sm">
              Ver Portfólio Completo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden brutal-border mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold uppercase tracking-widest text-lg">Ver Detalhes</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-display uppercase tracking-tight">{project.title}</h3>
                    <p className="text-paper/50 uppercase text-sm tracking-widest mt-1">{project.category}</p>
                  </div>
                  <ArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-6xl lg:text-8xl uppercase tracking-tighter mb-8">Vamos criar algo épico?</h2>
            <p className="text-xl text-ink/60 mb-12 max-w-md">
              Estamos sempre em busca de novos desafios e parcerias criativas. Entre em contato e vamos transformar sua visão em realidade.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/40 font-bold">E-mail</p>
                  <p className="text-lg font-bold">hello@draftstudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/40 font-bold">Social</p>
                  <p className="text-lg font-bold">@draftcreative.studio</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 p-8 brutal-border brutal-shadow bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest">Nome</label>
                <input type="text" className="w-full p-4 brutal-border focus:bg-brand/5 outline-none transition-colors" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest">E-mail</label>
                <input type="email" className="w-full p-4 brutal-border focus:bg-brand/5 outline-none transition-colors" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest">Assunto</label>
              <select className="w-full p-4 brutal-border focus:bg-brand/5 outline-none transition-colors bg-white">
                <option>Branding</option>
                <option>Web Design</option>
                <option>Motion Graphics</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest">Mensagem</label>
              <textarea rows={4} className="w-full p-4 brutal-border focus:bg-brand/5 outline-none transition-colors resize-none" placeholder="Conte-nos sobre seu projeto..."></textarea>
            </div>
            <button className="w-full py-4 bg-ink text-white font-bold uppercase tracking-widest hover:bg-brand transition-colors brutal-shadow-hover">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t-2 border-ink">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <a href="#" className="font-display text-4xl tracking-tighter">
              DRAFT<span className="text-brand">.</span>
            </a>
            <p className="text-ink/40 text-sm mt-2">© 2026 Draft Creative Studio Ltda. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="w-12 h-12 rounded-full brutal-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full brutal-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full brutal-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-12 text-xs font-bold uppercase tracking-widest">
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
