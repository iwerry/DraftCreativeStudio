import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Terminal, CheckCircle2, Binary, Cpu, Server, Code, Instagram, MessageSquare } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/ui/ContactModal';
import { OsintTerminal } from './components/ui/OsintTerminal';
import { MatrixRain } from './components/ui/MatrixRain';
import PageTransition from './PageTransition';

export default function InvestigativeJournalismPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#05070c] text-white flex flex-col justify-between relative isolate overflow-hidden selection:bg-emerald-500/30">
        {/* Subtle Matrix Code Rain Effect */}
        <MatrixRain />

        {/* Unified Navbar */}
        <Navbar onOpenContact={() => setIsModalOpen(true)} />

        {/* Contact Popup Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialService="Investigative Journalism & OSINT Consulting"
        />

        {/* Ambient Top Glow */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-emerald-950/20 rounded-full blur-[150px]" />
          <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[140px]" />
        </div>

        {/* Main Content */}
        <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto w-full flex-1 relative z-10 space-y-16">
          {/* Section Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="space-y-4 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>INVESTIGATIVE JOURNALISM // OSINT & LINUX INTELLIGENCE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white font-bold leading-tight">
              A Fusão Entre <span className="text-emerald-400">Jornalismo Investigativo</span> & Tecnologia
            </h1>
            <p className="text-zinc-300 text-base sm:text-xl font-sans font-light leading-relaxed">
              Daniel Rodrigues reúne dois universos complementares: o rigor da apuração documental do jornalismo com a soberania técnica de sistemas Linux e inteligência de fontes abertas (OSINT).
            </p>
          </motion.div>

          {/* Dual Grid: Daniel Bio & Live Terminal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Profile Overview Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-emerald-500/30 backdrop-blur-xl flex flex-col justify-between space-y-8 shadow-[0_0_40px_rgba(16,185,129,0.1)]"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center font-display font-bold text-2xl text-emerald-300">
                      DR
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-display text-white">
                      Daniel Rodrigues
                    </h2>
                    <p className="text-xs font-mono text-emerald-400 font-bold">
                      Journalist Investigative | OSINT SPECIALIST
                    </p>
                  </div>
                </div>

                {/* Exact Requested Bio */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/5 space-y-3 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <p className="text-emerald-300 font-bold">
                    "Uso linux desde 2002 nativo na TI, vim para audiovisual/jornalismo a mais de 10 anos. O que me faz ter conhecimentos hoje diferenciados sobre o jornalismo e TI."
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Conhecimentos em diversos sistemas operacionais, servidores Linux, programação Python e outras linguagens.
                  </p>
                </div>

                {/* Expertise Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    {
                      icon: <Server className="w-4 h-4 text-emerald-400" />,
                      title: "Servidores Linux",
                      desc: "Desde 2002 operando sistemas e infraestrutura nativa com alta soberania."
                    },
                    {
                      icon: <Binary className="w-4 h-4 text-cyan-400" />,
                      title: "OSINT Forensics",
                      desc: "Extração de metadados, análise de imagens e mapeamento de dados abertos."
                    },
                    {
                      icon: <Code className="w-4 h-4 text-purple-400" />,
                      title: "Python & Programação",
                      desc: "Automações de coleta de dados, scrapers e pipelines investigativos."
                    },
                    {
                      icon: <Shield className="w-4 h-4 text-emerald-400" />,
                      title: "Rigor Documental",
                      desc: "Apuração ética de fatos, checagem cruzada e narrativa incontestável."
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-950/80 border border-white/5 space-y-1 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://www.instagram.com/danielrodrigues.photography"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@danielrodrigues.photography</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 hover:bg-emerald-400 hover:text-black text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                >
                  Falar com Daniel
                </button>
              </div>
            </motion.div>

            {/* Right Column: The Live Terminal Animation */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <OsintTerminal />
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setIsModalOpen(true)} />
      </div>
    </PageTransition>
  );
}
