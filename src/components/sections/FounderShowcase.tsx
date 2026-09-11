import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, Hexagon } from 'lucide-react';

export const FounderShowcase: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="founder" className="scroll-mt-28 space-y-12 py-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>AUTHORITY & LEADERSHIP // SEÇÃO 04</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-poppins tracking-tight text-white">
          A Mente por trás do Código e da Lente
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Profile Image & Bio */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative h-full glass-panel p-1 flex flex-col justify-end min-h-[400px] overflow-hidden">
            {/* Placeholder for Daniel Rodrigues Image */}
            <div className="absolute inset-0 bg-zinc-800 bg-cover bg-center mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-opacity" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=800)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="relative z-10 p-6 space-y-2">
              <h3 className="text-2xl font-bold font-poppins text-white">Daniel Rodrigues</h3>
              <p className="text-sm font-mono text-emerald-400">Jornalista (DRT) • Arquiteto de Software • Especialista OSINT</p>
            </div>
          </div>
        </motion.div>

        {/* Multidisciplinary Text & Certifications */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 glass-panel p-8 space-y-8 flex flex-col justify-center"
        >
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white font-poppins">Multidisciplinaridade Estratégica</h4>
            <p className="text-zinc-300 leading-relaxed text-sm">
              Com atuação global, Daniel une o rigor do jornalismo investigativo clássico à engenharia de software de ponta. A capacidade de auditar sistemas complexos, estruturar pipelines de IA Generativa e, simultaneamente, operar câmeras de cinema em campo, permite à Draft Creative Studio entregar um valor inalcançável por agências tradicionais.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h5 className="text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider">Certificações e Credenciais</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-colors">
                <Hexagon className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-sm font-bold text-white">F1NDX OSINT</div>
                  <div className="text-[10px] font-mono text-emerald-400">Specialist Level</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-sm font-bold text-white">Fact Check</div>
                  <div className="text-[10px] font-mono text-cyan-400">Verificação Forense</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/30 transition-colors">
                <Award className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-sm font-bold text-white">Google News Initiative</div>
                  <div className="text-[10px] font-mono text-blue-400">Jornalismo Digital</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
