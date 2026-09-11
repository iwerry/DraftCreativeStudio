import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Layers, Smartphone, Camera, Play, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Magic3DShowcaseProps {
  onSelectService?: (serviceName: string) => void;
}

export const Magic3DShowcase: React.FC<Magic3DShowcaseProps> = ({ onSelectService }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'camera' | 'product' | 'mobile'>('camera');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="motion3d" className="py-28 px-6 max-w-7xl mx-auto relative scroll-mt-24">
      {/* Background Neon Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-900/20 via-purple-900/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t("magic3d.badge", "3D FOR THE WEB & CINEMA EM MOVIMENTO")}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white">
          {t("magic3d.titlePrefix", "A Magia Visual do ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-cyan-400">
            {t("magic3d.titleHighlight", "3D & Audiovisual")}
          </span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg font-sans font-light leading-relaxed">
          {t("magic3d.subtitle", "Transcendemos a web tradicional. Criamos experiências imersivas onde câmeras de cinema se desconstroem em 3D, produtos de luxo ganham partículas flutuantes e criativos de redes sociais saltam da tela.")}
        </p>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'camera', label: t("magic3d.tabCamera", "1. Desconstrução de Câmera 3D"), icon: <Camera className="w-4 h-4" /> },
            { id: 'product', label: t("magic3d.tabProduct", "2. Produto com Pétalas & Motion"), icon: <Sparkles className="w-4 h-4" /> },
            { id: 'mobile', label: t("magic3d.tabMobile", "3. Efeito Saindo do Celular"), icon: <Smartphone className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl bg-[#080b12] border border-white/15 p-6 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl group"
      >
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

        {/* TAB 1: EXPLODED 3D CAMERA (SONY / CANON CINEMA DECONSTRUCTION) */}
        {activeTab === 'camera' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>{t("magic3d.cameraBadge", "TECNOLOGIA CINEMA 6K // ENGENHARIA ÓPTICA")}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
                {t("magic3d.cameraTitle", "Desconstrução Técnica em 3D")}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                {t("magic3d.cameraDesc", "Demonstramos a anatomia de cada captação: o sensor CMOS Full-Frame, o conjunto de lentes anamórficas e a placa de processamento 8K flutuando em perspectiva tridimensional milimétrica. Um storytelling técnico que transmite autoridade inabalável para marcas do setor industrial, tech e audiovisual.")}
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  t("magic3d.camBullet1", "Sensor CMOS 6K/8K isolado com reflexos realistas"),
                  t("magic3d.camBullet2", "Elementos ópticos internos de vidro esférico em camadas"),
                  t("magic3d.camBullet3", "Animação fluida e interativa com rotação e profundidade")
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService ? onSelectService("Produção Audiovisual & Captação 6K") : (window.location.hash = "#contato")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-400 hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>{t("magic3d.cameraCta", "Solicitar Projeto 3D")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3D Camera Interactive Viewport with Tilt */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <motion.div
                animate={{
                  rotateX: -mousePos.y * 14,
                  rotateY: mousePos.x * 14,
                  scale: 1.02
                }}
                transition={{ type: 'spring', damping: 15, stiffness: 80 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-[0_0_50px_rgba(0,240,255,0.2)] group-hover:border-cyan-400/50 transition-colors"
              >
                <img
                  src="/studio/camera_exploded.jpg"
                  alt="3D Camera Exploded View"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating 3D Telemetry Badges */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 uppercase tracking-widest backdrop-blur-md">
                  CMOS SENSOR 6K // OPTICS EXPANDED
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 border border-purple-400/40 text-[10px] font-mono text-purple-300 uppercase tracking-widest backdrop-blur-md">
                  3D EXPLODED ARCHITECTURE
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* TAB 2: LUXURY PRODUCT WITH FALLING PETALS (PERFUMES, COSMETICS, BEVERAGES) */}
        {activeTab === 'product' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-[11px] font-mono text-rose-300">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>{t("magic3d.productBadge", "LUXURY COMMERCIAL // FÍSICA DE PARTÍCULAS")}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
                {t("magic3d.productTitle", "Produtos de Alto Padrão em Movimento")}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                {t("magic3d.productDesc", "Criamos comerciais e landing pages onde o produto é a estrela absoluta: frascos de luxo que levitam suavemente, pétalas de rosas que caem com física fluida, gotas de orvalho que escorrem e iluminação de estúdio volumétrica. Ideal para cosméticos, perfumaria, bebidas premium e lançamentos exclusivos.")}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  t("magic3d.prodBullet1", "Pétalas e partículas dinâmicas em queda tridimensional"),
                  t("magic3d.prodBullet2", "Refrações de vidro, líquidos transparentes e reflexos dourados"),
                  t("magic3d.prodBullet3", "Aumento comprovado na taxa de conversão e valor percebido")
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-rose-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_#F43F5E]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService ? onSelectService("Edição de Vídeo Sênior & Motion Design") : (window.location.hash = "#contato")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-950 border border-rose-500/50 text-rose-300 hover:bg-rose-500 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>{t("magic3d.productCta", "Criar Comercial de Produto")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Interactive Viewport with Tilt */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <motion.div
                animate={{
                  rotateX: -mousePos.y * 12,
                  rotateY: mousePos.x * 12,
                  scale: 1.02
                }}
                transition={{ type: 'spring', damping: 15, stiffness: 80 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-rose-500/30 bg-zinc-950 shadow-[0_0_50px_rgba(244,63,94,0.25)] group-hover:border-rose-400/60 transition-colors"
              >
                <img
                  src="/studio/product_petals_3d.png"
                  alt="3D Luxury Product with Falling Petals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 border border-rose-400/40 text-[10px] font-mono text-rose-300 uppercase tracking-widest backdrop-blur-md">
                  NOIR ESSENCE // 3D PARTICLES SYSTEM
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 border border-rose-400/40 text-[10px] font-mono text-rose-200 uppercase tracking-widest backdrop-blur-md">
                  CINEMATIC PRODUCT MOTION
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* TAB 3: SOCIAL MEDIA 3D - POPPING OUT OF MOBILE SCREEN */}
        {activeTab === 'mobile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("magic3d.mobileBadge", "SOCIAL MEDIA 3D // QUEBRA DE PADRÃO")}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
                {t("magic3d.mobileTitle", "Elementos Saindo da Tela")}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                {t("magic3d.mobileDesc", "Nas redes sociais, você tem 2 segundos para prender o scroll do usuário. Produzimos vídeos onde o seu produto, gráficos e personagens rompem fisicamente os limites do celular, criando a ilusão de ótica tridimensional que viraliza e multiplica cliques.")}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  t("magic3d.mobBullet1", "Câmeras e produtos que saltam para fora da interface"),
                  t("magic3d.mobBullet2", "Tiras de filme analógico e faíscas luminosas em órbita"),
                  t("magic3d.mobBullet3", "Roteiro cirúrgico desenhado para gerar retenção nos Stories e Reels")
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService ? onSelectService("Criação de Conteúdo & Social Media") : (window.location.hash = "#contato")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-400 hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>{t("magic3d.mobileCta", "Criar Conteúdo 3D para Redes")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile / Camera Popping Viewport with Tilt */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <motion.div
                animate={{
                  rotateX: -mousePos.y * 14,
                  rotateY: mousePos.x * 14,
                  scale: 1.02
                }}
                transition={{ type: 'spring', damping: 15, stiffness: 80 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/40 bg-zinc-950 shadow-[0_0_50px_rgba(0,240,255,0.25)] group-hover:border-cyan-400 transition-colors"
              >
                <img
                  src="/studio/floating_camera.jpg"
                  alt="Camera floating with film ribbons popping out"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 uppercase tracking-widest backdrop-blur-md">
                  FILM STRIPS // 3D FLOATING PERSPECTIVE
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 border border-purple-400/40 text-[10px] font-mono text-purple-300 uppercase tracking-widest backdrop-blur-md">
                  MAXIMUM ATTENTION RETENTION
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
