import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Rocket, Users, MonitorSmartphone } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function SobrePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-[100vh] bg-paper text-ink font-sans relative overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[100] blur-xl hidden md:block bg-brand/30 shadow-[0_0_40px_#00F0FF]"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Navegação Simplificada para a página secundária */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="p-3 border border-ink/20 rounded-full group-hover:bg-ink group-hover:text-paper transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs">Menu Principal</span>
          </Link>
          <img src="/draftlogo.svg" alt="Draft Logo" className="h-6 w-auto opacity-50 border border-transparent" />
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="show" variants={{
          show: { transition: { staggerChildren: 0.15 } }
        }}>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-8 text-ink flex items-end gap-4">
            DRAFT STUDIO <span className="text-brand text-6xl md:text-9xl py-2">IA</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-1 w-32 bg-brand mb-12 shadow-[0_0_15px_rgba(0,240,255,0.4)]"></motion.div>

          <motion.p variants={fadeUp} className="text-2xl text-ink/80 font-light leading-relaxed mb-6 italic">
            "A convergência impecável entre expertise visual profunda e Inteligência Artificial."
          </motion.p>
          
          <motion.p variants={fadeUp} className="text-lg text-ink/60 leading-relaxed font-sans mb-16">
            Com mais de <strong>10 anos de excelência</strong> atuando implacavelmente nas trincheiras do mercado audiovisual e de software corporativo, a nossa equipe tática da <strong className="text-ink">Draft Creative Studio Ltda.</strong> é um celeiro de criadores e desenvolvedores de elite. Nós arquitetamos, do zero absoluto ao código final de produção, o posicionamento estético de empresas, marcas e parcerias, moldando produtos revolucionários para a vanguarda atual e futura do mercado tecnológico.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Mestres do Audiovisual", icon: <Users className="w-8 h-8 text-brand"/>, desc: "Uma década forjando storytelling via perspectivas cinematográficas, cortes milimétricos e branding visual de tirar o fôlego." },
              { title: "Engenharia de Código", icon: <MonitorSmartphone className="w-8 h-8 text-[#00FF41]"/>, desc: "Programação High-end criando Apps móveis nativos e plataformas webs focadas brutalmente na retenção do usuário." },
              { title: "I.A. Estratégica", icon: <Rocket className="w-8 h-8 text-[#FFD700]"/>, desc: "Adoção inteligente de automações de Inteligência Artificial para escalar, turbinar e dominar o tráfego da sua campanha." }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="px-8 py-10 border border-ink/10 bg-black/5 hover:bg-black/10 transition-colors backdrop-blur group hover:-translate-y-2 shadow-sm hover:shadow-xl duration-500">
                <div className="mb-6 drop-shadow-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">{card.icon}</div>
                <h3 className="font-display uppercase tracking-widest text-lg mb-4 text-ink">{card.title}</h3>
                <p className="text-sm font-sans text-ink/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="p-12 border border-brand/20 relative overflow-hidden bg-brand/5 shadow-[0_0_50px_rgba(0,240,255,0.05)]">
            <h2 className="font-display uppercase text-3xl mb-6 text-ink drop-shadow-md">Nossa Missão Épica</h2>
            <p className="text-lg text-ink/70 leading-relaxed font-sans relative z-10">
              A nossa missão corporativa é centralizada em <strong>orquestrar impactos imersivos</strong> absolutos.
              Nossas mentes estão a 100% preparadas e hiperfocadas em desenvolver soluções, alavancar divulgações vitais para a sua empresa e garantir que, frente a todos os ruídos na internet, a sua corporação permaneça brilhando de forma clara, moderna, eficiente e, acima de tudo, <strong className="text-ink">Épica</strong>.
            </p>
            <div className="mt-10 relative z-10 w-full sm:w-auto overflow-hidden group/btn inline-block cursor-pointer">
              <a href="https://wa.me/556198905720" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-brand text-paper font-bold uppercase tracking-widest px-10 py-5 transition-all shadow-[0_0_20px_rgba(0,240,255,0.5)] group-hover/btn:brightness-110 w-full">
                Evoluir Minha Empresa
              </a>
            </div>
            
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand/10 blur-[130px] rounded-full pointer-events-none z-0 mix-blend-screen -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}
