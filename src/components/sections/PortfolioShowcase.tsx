import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Play, ExternalLink } from 'lucide-react';

const portfolioData = [
  { id: 1, title: 'Documentário Operação X', category: 'Audiovisual', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Dashboard Inteligência OSINT', category: 'Inteligência & Pesquisa', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Sistema de Automação de Mídia', category: 'IA & Tech', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Cobertura Cúpula Global', category: 'Audiovisual', image: 'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'API de Rastreio Marítimo', category: 'Inteligência & Pesquisa', image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Plataforma Corporativa Next.js', category: 'IA & Tech', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' }
];

const categories = ['Todos', 'Audiovisual', 'IA & Tech', 'Inteligência & Pesquisa'];

export const PortfolioShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredData = portfolioData.filter(item => 
    activeFilter === 'Todos' ? true : item.category === activeFilter
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="portfolio" className="scroll-mt-28 space-y-12 py-16 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-violet/20 border border-brand-violet/30 text-xs font-mono text-purple-300">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>CASE STUDIES // SEÇÃO 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins tracking-tight text-white">
            Portfólio & Showcase
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Nossos principais cases unindo produção cinematográfica, desenvolvimento avançado e jornalismo investigativo.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer border ${
                activeFilter === category 
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 neon-border-cyan' 
                  : 'bg-zinc-900/50 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredData.map(item => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="group relative rounded-2xl overflow-hidden glass-panel aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0 bg-zinc-800 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-md mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold font-poppins text-white">{item.title}</h3>
                </div>
              </div>

              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                <div className="w-14 h-14 rounded-full bg-cyan-500/90 flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,240,255,0.6)]">
                  {item.category === 'Audiovisual' ? <Play className="w-6 h-6 ml-1" /> : <ExternalLink className="w-6 h-6" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
