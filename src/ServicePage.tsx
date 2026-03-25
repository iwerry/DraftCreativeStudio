import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Video, Code2, GraduationCap, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import PageTransition from "./PageTransition";

const SERVICES_DATA: Record<string, any> = {
  studio: {
    title: "STUDIO",
    subtitle: "Produção Audiovisual e Storytelling",
    description: "Transformamos ideias em obras primas audiovisuais com qualidade de cinema. Fotografia impecável, filmagem premium, motion design e direção de arte projetadas para posicionar a sua marca no topo da pirâmide visual do mercado.",
    icon: <Video className="w-12 h-12" />,
    color: "bg-[#8E9AAF]",
    brandColor: "#8E9AAF",
    textColor: "text-[#0A0F1E]",
    glowLight: "rgba(142, 154, 175, 0.4)",
    coverUrl: "/studio/cover_studio.webp",
    fields: ["Fotografia Premium", "Trabalho Audiovisual / Vídeo", "Motion Design 2D/3D", "Identidade Visual Corporativa", "Cobertura de Evento"]
  },
  lab: {
    title: "LAB",
    subtitle: "Desenvolvimento de Apps, Games e Plataformas",
    description: "Nós criamos o terreno digital do futuro. Aplicativos hiper-responsivos para Android e iOS, softwares em nuvem e experiências completas de UI/UX construídas com alta performance e código épico.",
    icon: <Code2 className="w-12 h-12" />,
    color: "bg-[#00FF41]",
    brandColor: "#00FF41",
    textColor: "text-[#0A0F1E]",
    glowLight: "rgba(0, 255, 65, 0.3)",
    coverUrl: "/studio/cover_lab.webp",
    fields: ["App Android e iOS", "Plataforma Web Especialista", "Desenvolvimento de Jogos", "Design UI/UX", "Automatização / IA"]
  },
  academy: {
    title: "ACADEMY",
    subtitle: "Treinamentos, Cursos e Imersões",
    description: "A sabedoria técnica que molda o mercado. Conquiste novos horizontes através de nossas mentorias presenciais e imersões online em edição, captação, direção e fundamentos de frontend e IA.",
    icon: <GraduationCap className="w-12 h-12" />,
    color: "bg-[#FFD700]",
    brandColor: "#FFD700",
    textColor: "text-[#0A0F1E]",
    glowLight: "rgba(255, 215, 0, 0.3)",
    coverUrl: "/studio/cover_academy.webp",
    fields: ["Curso de Captação & Fotografia", "Formação de Edição Profissional", "Masterclass Desvendando IA", "Mentorias Individuais", "Base de Front-End e UX"]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const [selectedField, setSelectedField] = useState("");

  const data = SERVICES_DATA[serviceId?.toLowerCase() || "studio"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) return <div className="min-h-screen flex items-center justify-center bg-paper text-ink">Serviço não encontrado.</div>;

  return (
    <PageTransition>

      {/* Navegação Simplificada para a página secundária */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="p-3 border border-ink/20 rounded-full group-hover:bg-ink group-hover:text-paper transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-bold uppercase tracking-widest text-xs">Voltar</span>
          </Link>
          <div className="flex items-center gap-4">
            <img src="/draftlogo.svg" alt="Draft Logo" className="hidden md:block h-6 w-auto opacity-50 mr-2" />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero e Formulário Dual Column */}
      <section className="pt-40 pb-32 px-6 min-h-screen max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative overflow-hidden">
        
        {/* Glow Background do Elemento */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] mix-blend-screen opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/4"
          style={{ backgroundColor: data.brandColor }}
        ></div>

        {/* Cuna Esquerda: Exposição da Unidade */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col relative z-20"
        >
          <motion.div variants={fadeUp} className="mb-6 flex gap-4 items-center">
            <div className={`w-20 h-20 ${data.color} ${data.textColor} flex items-center justify-center shadow-2xl`}>
              {data.icon}
            </div>
            <div className="h-1 w-16 bg-brand shadow-[0_0_15px_rgba(0,240,255,0.4)]" style={{ backgroundColor: data.brandColor }}></div>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-display text-5xl lg:text-8xl uppercase tracking-tighter mb-4 text-ink flex flex-col">
            <span className="text-xl lg:text-2xl font-sans tracking-widest text-ink/40 mb-2">Draft Creative</span>
            {data.title}
          </motion.h1>

          <motion.h3 variants={fadeUp} className="text-xl lg:text-3xl font-light text-ink/80 mb-6" style={{ color: data.brandColor }}>
            {data.subtitle}
          </motion.h3>

          <motion.p variants={fadeUp} className="text-lg text-ink/60 font-sans leading-relaxed max-w-lg mb-12">
            {data.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-auto hidden lg:block rounded-xl overflow-hidden aspect-video border border-ink/10 relative p-1 shadow-2xl">
            <div className="absolute inset-0 bg-ink/5 mix-blend-overlay z-10 pointer-events-none"></div>
            <img src={data.coverUrl} className="w-full h-full object-cover grayscale opacity-80" alt="Exposição do Serviço" />
          </motion.div>

        </motion.div>

        {/* Coluna Direita: Captura do Briefing do Cliente */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-paper/50 backdrop-blur-xl border border-ink/10 p-8 lg:p-12 shadow-2xl relative z-20 flex flex-col justify-center"
        >
          <div className="mb-10">
            <h2 className="font-display text-4xl uppercase tracking-tighter mb-2">Inicie seu Briefing</h2>
            <p className="text-ink/60 text-sm font-sans uppercase tracking-widest">A magia está em entender sua visão para o escopo de {data.title}</p>
          </div>

          <form action="https://formsubmit.co/draftcs21@gmail.com" method="POST" className="space-y-8 flex-1">
            <input type="hidden" name="_subject" value={`Briefing/Lead Novo para a Unidade: ${data.title}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="Atuacao_Específica" value={selectedField || "Aberto/Geral"} />

            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-widest text-ink/50">Área Específica Desejada</label>
              <div className="flex flex-wrap gap-2">
                {data.fields.map((field: string, idx: number) => (
                  <button 
                    key={idx}
                    type="button"
                    onClick={() => setSelectedField(field)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${selectedField === field ? 'border-transparent text-paper shadow-lg' : 'border-ink/20 text-ink hover:border-ink/50'}`}
                    style={{ backgroundColor: selectedField === field ? data.brandColor : 'transparent' }}
                  >
                    {field}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-ink/50">Como chamamos você?</label>
                <input type="text" name="Nome" required className="w-full p-4 border-b border-ink/20 bg-transparent text-ink focus:border-ink outline-none transition-colors" placeholder="Seu Nome Completo" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-ink/50">WhatsApp com DDD</label>
                <input type="tel" name="WhatsApp" required className="w-full p-4 border-b border-ink/20 bg-transparent text-ink focus:border-ink outline-none transition-colors" placeholder="(00) 00000-0000" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-widest text-ink/50">Detalhe a sua ideia / projeto</label>
              <textarea name="Mensagem" required rows={4} className="w-full p-4 border border-ink/10 bg-black/5 text-ink focus:border-ink outline-none transition-colors resize-none mt-2" placeholder={`O que nós vamos realizar juntos no universo de ${data.title}? Conta pra nós...`}></textarea>
            </div>

            <button type="submit" className={`w-full py-5 font-bold uppercase tracking-widest transition-all text-paper shadow-2xl hover:-translate-y-1 hover:brightness-110 flex items-center justify-center gap-3`} style={{ backgroundColor: data.brandColor, color: data.textColor }}>
              Assinar Pedido de Reunião <CheckCircle2 className="w-5 h-5"/>
            </button>
            <p className="text-center text-[10px] uppercase text-ink/40 tracking-widest mt-4">Retornamos o contato em até 4h úteis</p>
          </form>
        </motion.div>
      </section>
    </PageTransition>
  );
}
