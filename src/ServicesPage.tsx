import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Clapperboard,
  Film,
  Video,
  Layers,
  Sparkles,
  Camera,
  Eye,
  MessageSquare,
  Cpu,
  Binary,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/ui/ContactModal';
import { CosmicBackground } from './components/ui/CosmicBackground';
import PageTransition from './PageTransition';

interface ServicesPageProps {
  onOpenContact?: () => void;
}

export interface ServiceItem {
  id: string;
  badgeColor: string;
  icon: React.ReactNode;
  title: Record<string, string>;
  badge: Record<string, string>;
  shortDesc: Record<string, string>;
  tags: Record<string, string[]>;
}

export const DRAFT_SERVICES_LIST: ServiceItem[] = [
  {
    id: "consultoria-audiovisual",
    title: {
      en: "Audiovisual Consulting & Strategy",
      pt: "Consultoria em Audiovisual",
      es: "Consultoría Audiovisual",
      fr: "Conseil Audiovisuel & Stratégie"
    },
    badge: {
      en: "CORE CATEGORY",
      pt: "CATEGORIA PRINCIPAL",
      es: "CATEGORÍA PRINCIPAL",
      fr: "CATÉGORIE PRINCIPALE"
    },
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    icon: <Clapperboard className="w-7 h-7 text-cyan-400" />,
    shortDesc: {
      en: "Strategic media planning, executive corporate aesthetic curation, and scene direction for high-relevance brands.",
      pt: "Planejamento estratégico de mídia, curadoria de estética corporativa e direção de cena para marcas de alta relevância.",
      es: "Planificación estratégica de medios, curaduría de estética corporativa y dirección escénica para marcas de alta relevancia.",
      fr: "Planification stratégique média, curation esthétique corporate et direction de scène pour marques de premier plan."
    },
    tags: {
      en: ["Creative Direction", "Visual Curation", "360° Strategy"],
      pt: ["Direção Criativa", "Curadoria Visual", "Estratégia 360°"],
      es: ["Dirección Creativa", "Curaduría Visual", "Estrategia 360°"],
      fr: ["Direction Créative", "Curation Visuelle", "Stratégie 360°"]
    }
  },
  {
    id: "producao-cinematografica",
    title: {
      en: "Audiovisual Production & Cinema Filming",
      pt: "Produção Audiovisual & Captação Cinematográfica",
      es: "Producción Audiovisual y Filmación Cinematográfica",
      fr: "Production Audiovisuelle & Prise de Vue Cinéma"
    },
    badge: {
      en: "CINEMA & COMMERCIAL",
      pt: "CINEMA & COMERCIAL",
      es: "CINE & COMERCIAL",
      fr: "CINÉMA & COMMERCIAL"
    },
    badgeColor: "border-purple-400/40 text-purple-300 bg-purple-950/40",
    icon: <Film className="w-7 h-7 text-purple-400" />,
    shortDesc: {
      en: "High-end cinematic filming in ultra-high resolution for commercials, brand films, webseries, and documentaries.",
      pt: "Captação cinematográfica em altíssima resolução para comerciais, vídeos institucionais, webseries e documentários.",
      es: "Filmación cinematográfica en ultra alta resolución para anuncios comerciales, videos corporativos y documentales.",
      fr: "Tournage cinéma en ultra-haute résolution pour publicités, films d'entreprise, webséries et documentaires."
    },
    tags: {
      en: ["Commercials", "Brand Films", "Documentaries"],
      pt: ["Comerciais", "Vídeo Institucional", "Documentários"],
      es: ["Comerciales", "Video Institucional", "Documentales"],
      fr: ["Publicités", "Films Corporate", "Documentaires"]
    }
  },
  {
    id: "edicao-motion",
    title: {
      en: "Senior Video Editing & Motion Design",
      pt: "Edição de Vídeo Sênior & Motion Design",
      es: "Edición de Video Senior y Motion Design",
      fr: "Montage Vidéo Senior & Motion Design"
    },
    badge: {
      en: "HIGH-END POST-PRODUCTION",
      pt: "PÓS-PRODUÇÃO HIGH-END",
      es: "POSPRODUCCIÓN HIGH-END",
      fr: "POST-PRODUCTION HAUT DE GAMME"
    },
    badgeColor: "border-emerald-400/40 text-emerald-300 bg-emerald-950/40",
    icon: <Video className="w-7 h-7 text-emerald-400" />,
    shortDesc: {
      en: "Surgical pacing, cinema color grading, immersive sound design, and world-class motion graphics.",
      pt: "Ritmo cirúrgico de corte, color grading cinematográfico, sound design imersivo e animações gráficas de padrão internacional.",
      es: "Ritmo quirúrgico, corrección de color de cine, diseño de sonido envolvente y motion graphics de nivel internacional.",
      fr: "Rythme chirurgical, étalonnage cinéma, sound design immersif et animations graphiques aux standards internationaux."
    },
    tags: {
      en: ["Color Grading", "Sound Design", "VFX & Motion"],
      pt: ["Color Grading", "Sound Design", "VFX & Motion"],
      es: ["Color Grading", "Sound Design", "VFX & Motion"],
      fr: ["Étalonnage", "Sound Design", "VFX & Motion"]
    }
  },
  {
    id: "concept-design",
    title: {
      en: "Concept Design, Branding & Identity",
      pt: "Concept Design, Branding & Identidade",
      es: "Concept Design, Branding e Identidad",
      fr: "Concept Design, Branding & Identité"
    },
    badge: {
      en: "STRATEGIC DESIGN",
      pt: "DESIGN ESTRATÉGICO",
      es: "DISEÑO ESTRATÉGICO",
      fr: "DESIGN STRATÉGIQUE"
    },
    badgeColor: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    icon: <Layers className="w-7 h-7 text-cyan-400" />,
    shortDesc: {
      en: "Memorable visual identity architecture, high-impact logos, proprietary typography, and comprehensive brand guidelines.",
      pt: "Construção de identidades visuais memoráveis, logotipos de alto impacto, tipografia autoral e diretrizes de marca completas.",
      es: "Construcción de identidades visuales memorables, logotipos de alto impacto y manuales de marca integrales.",
      fr: "Architecture d'identités visuelles mémorables, logos percutants, typographie d'auteur et chartes complètes."
    },
    tags: {
      en: ["Visual Identity", "Logo Design", "Design System"],
      pt: ["Identidade Visual", "Logotipos", "Design System"],
      es: ["Identidad Visual", "Logotipos", "Design System"],
      fr: ["Identité Visuelle", "Logos", "Design System"]
    }
  },
  {
    id: "social-media",
    title: {
      en: "Content Creation & High-Retention Social Media",
      pt: "Criação de Conteúdo & Social Media",
      es: "Creación de Contenido y Redes Sociales",
      fr: "Création de Contenu & Réseaux Sociaux"
    },
    badge: {
      en: "HIGH RETENTION",
      pt: "ALTA RETENÇÃO",
      es: "ALTA RETENCIÓN",
      fr: "HAUTE RÉTENTION"
    },
    badgeColor: "border-pink-400/40 text-pink-300 bg-pink-950/40",
    icon: <Sparkles className="w-7 h-7 text-pink-400" />,
    shortDesc: {
      en: "Strategic visual assets for social channels: magnetic Reels, dynamic TikToks, authority carousels, and growth calendars.",
      pt: "Estratégia visual para redes sociais: Reels magnéticos, TikToks dinâmicos, carrosséis de autoridade e cronograma de publicação.",
      es: "Estrategia visual para redes sociales: Reels magnéticos, TikToks dinámicos, carruseles de autoridad y calendario editorial.",
      fr: "Stratégie visuelle pour les réseaux sociaux: Reels magnétiques, TikToks dynamiques, carrousels d'autorité et planning éditorial."
    },
    tags: {
      en: ["Reels & TikTok", "Authority Carousels", "Organic Growth"],
      pt: ["Reels & TikTok", "Carrosséis", "Growth Orgânico"],
      es: ["Reels y TikTok", "Carruseles", "Crecimiento Orgánico"],
      fr: ["Reels & TikTok", "Carrousels", "Croissance Organique"]
    }
  },
  {
    id: "fotografia-corporativa",
    title: {
      en: "Corporate Photography & Executive Events",
      pt: "Fotografia Corporativa & Eventos",
      es: "Fotografía Corporativa y Eventos",
      fr: "Photographie Corporate & Événements"
    },
    badge: {
      en: "EXECUTIVE & CONFERENCES",
      pt: "EXECUTIVO & CONGRESSOS",
      es: "EJECUTIVO & CONGRESOS",
      fr: "DIRIGEANTS & CONGRÈS"
    },
    badgeColor: "border-amber-400/40 text-amber-300 bg-amber-950/40",
    icon: <Camera className="w-7 h-7 text-amber-400" />,
    shortDesc: {
      en: "High-summit event coverage, executive symposiums, and corporate portraits for C-level directors and industry leaders.",
      pt: "Cobertura de eventos de alta cúpula, congressos executivos e retratos corporativos para diretores e líderes de mercado.",
      es: "Cobertura de congresos ejecutivos y retratos corporativos de alto nivel para directivos y líderes del mercado.",
      fr: "Couverture de sommets et congrès exécutifs, portraits institutionnels de dirigeants et leaders du marché."
    },
    tags: {
      en: ["Executive Portraits", "Corporate Events", "Board of Directors"],
      pt: ["Retratos Executivos", "Eventos Corporativos", "Diretoria"],
      es: ["Retratos Ejecutivos", "Eventos Corporativos", "Dirección"],
      fr: ["Portraits Exécutifs", "Événements Corporate", "Direction"]
    }
  },
  {
    id: "fotojornalismo",
    title: {
      en: "Photojournalism & Institutional Archiving",
      pt: "Fotojornalismo & Cobertura Institucional",
      es: "Fotoperiodismo y Archivo Institucional",
      fr: "Photojournalisme & Archives Institutionnelles"
    },
    badge: {
      en: "DOCUMENTARY & HERITAGE",
      pt: "DOCUMENTAL & MEMÓRIA",
      es: "DOCUMENTAL & MEMORIA",
      fr: "DOCUMENTAIRE & MÉMOIRE"
    },
    badgeColor: "border-blue-400/40 text-blue-300 bg-blue-950/40",
    icon: <Eye className="w-7 h-7 text-blue-400" />,
    shortDesc: {
      en: "On-the-ground factual documentation with sharp journalistic intuition, corporate historical archiving, and documentary essays.",
      pt: "Registro factual em campo com olhar jornalístico apurado, memória histórica institucional e ensaios documentais de verdade.",
      es: "Registro factual en terreno con mirada periodística aguda, archivo histórico institucional y ensayos documentales.",
      fr: "Documentation factuelle de terrain avec regard journalistique aiguisé, archives historiques d'entreprise et essais documentaires."
    },
    tags: {
      en: ["Photojournalism", "Institutional Archive", "Factual Rigor"],
      pt: ["Fotojornalismo", "Arquivo Institucional", "Rigor Factual"],
      es: ["Fotoperiodismo", "Archivo Institucional", "Rigor Factual"],
      fr: ["Photojournalisme", "Archives Institutionnelles", "Rigueur Factuelle"]
    }
  },
  {
    id: "roteiros-master-scenes",
    title: {
      en: "Cinematic Screenplays & Master Scenes",
      pt: "Roteiros Cinematográficos & Master Scenes",
      es: "Guiones Cinematográficos y Master Scenes",
      fr: "Scénarios Cinématographiques & Master Scenes"
    },
    badge: {
      en: "STORYTELLING & SCRIPT",
      pt: "STORYTELLING & SCRIPT",
      es: "STORYTELLING & GUIÓN",
      fr: "STORYTELLING & SCÉNARIO"
    },
    badgeColor: "border-violet-400/40 text-violet-300 bg-violet-950/40",
    icon: <MessageSquare className="w-7 h-7 text-violet-400" />,
    shortDesc: {
      en: "Surgically crafted scripts structured scene-by-scene to captivate attention and forge lasting emotional brand resonance.",
      pt: "Roteiros cirúrgicos e magnéticos estruturados cena a cena para prender a atenção e gerar conexões emocionais duradouras.",
      es: "Guiones quirúrgicos y magnéticos estructurados escena a escena para cautivar y crear conexiones emocionales duraderas.",
      fr: "Scénarios chirurgicaux et magnétiques structurés scène par scène pour captiver et susciter des émotions durables."
    },
    tags: {
      en: ["Master Scenes", "Storytelling", "Cinematic Copy"],
      pt: ["Master Scenes", "Storytelling", "Copy Cinematográfica"],
      es: ["Master Scenes", "Storytelling", "Copy Cinematográfico"],
      fr: ["Master Scenes", "Storytelling", "Copywriting Cinéma"]
    }
  },
  {
    id: "pos-producao-web",
    title: {
      en: "Web Post-Production & Motion Assets",
      pt: "Pós-Produção & Motion para Web",
      es: "Posproducción y Motion para Web",
      fr: "Post-Production & Motion pour le Web"
    },
    badge: {
      en: "DIGITAL PERFORMANCE",
      pt: "PERFORMANCE DIGITAL",
      es: "RENDIMIENTO DIGITAL",
      fr: "PERFORMANCE DIGITALE"
    },
    badgeColor: "border-teal-400/40 text-teal-300 bg-teal-950/40",
    icon: <Cpu className="w-7 h-7 text-teal-400" />,
    shortDesc: {
      en: "Lightweight, ultra-smooth animations and videos optimized for landing pages, interactive websites, and vertical ad creatives.",
      pt: "Animações leves e vídeos otimizados para landing pages, websites interativos, banners de alto impacto e criativos verticais.",
      es: "Animaciones ligeras y videos optimizados para páginas de aterrizaje, sitios interactivos y anuncios verticales.",
      fr: "Animations légères et vidéos optimisées pour pages d'atterrissage, sites interactifs et visuels publicitaires verticaux."
    },
    tags: {
      en: ["Web Video", "Landing Pages", "Ad Creatives"],
      pt: ["Web Video", "Landing Pages", "Criativos de Anúncio"],
      es: ["Web Video", "Landing Pages", "Creatividades de Anuncio"],
      fr: ["Vidéo Web", "Landing Pages", "Créations Publicitaires"]
    }
  },
  {
    id: "ia-audiovisual",
    title: {
      en: "AI Consulting for Audiovisual Pipelines",
      pt: "Consultoria em IA para Audiovisual",
      es: "Consultoría de IA para Audiovisual",
      fr: "Conseil en IA pour Pipelines Audiovisuels"
    },
    badge: {
      en: "INTELLIGENCE & INNOVATION",
      pt: "INTELIGÊNCIA & INOVAÇÃO",
      es: "INTELIGENCIA & INNOVACIÓN",
      fr: "INTELLIGENCE & INNOVATION"
    },
    badgeColor: "border-indigo-400/40 text-indigo-300 bg-indigo-950/40",
    icon: <Binary className="w-7 h-7 text-indigo-400" />,
    shortDesc: {
      en: "Deployment of generative AI workflows into creative pipelines to supercharge concept design and automate visual iterations.",
      pt: "Implementação de ferramentas de IA generativa em pipelines criativos para acelerar o concept design e automatizar processos visuais.",
      es: "Implementación de IA generativa en flujos creativos para acelerar el concept design y automatizar procesos visuales.",
      fr: "Intégration d'outils d'IA générative dans les pipelines créatifs pour accélérer le concept design et automatiser les processus."
    },
    tags: {
      en: ["Generative AI", "Agile Workflows", "Upscaling & Audio"],
      pt: ["IA Generativa", "Workflows Ágeis", "Upscaling & Áudio"],
      es: ["IA Generativa", "Flujos Ágiles", "Upscaling & Audio"],
      fr: ["IA Générative", "Workflows Agiles", "Upscaling & Audio"]
    }
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const currentLang = i18n?.language ? i18n.language.slice(0, 2) : 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenContactWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#05070c] text-white flex flex-col justify-between selection:bg-cyan-500/30">
        {/* Unified Navbar */}
        <Navbar onOpenContact={() => setIsModalOpen(true)} />

        {/* Contact Popup Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialService={selectedService}
        />

        {/* Cosmic Moving Lights & Subtle Twinkling Stars Background */}
        <CosmicBackground />

        {/* Main Content */}
        <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto w-full flex-1">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DRAFT CREATIVE STUDIO // SERVICES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white font-bold">
              {t("services.title", "Our")} <span className="text-cyan-400">{t("services.titleHighlight", "Services")}</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg font-sans font-light leading-relaxed">
              {t("services.subtitle", "Structured enterprise services designed to elevate your company's visual authority, brand positioning, and conversions.")}
            </p>
          </motion.div>

          {/* Services Grid (Clean 10 services - No OSINT duplicate, No 3D deconstruction) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {DRAFT_SERVICES_LIST.map((service) => {
              const currentLang = i18n.language ? i18n.language.slice(0, 2) : 'en';
              const title = service.title[currentLang] || service.title.en || service.title.pt;
              const badge = service.badge[currentLang] || service.badge.en || service.badge.pt;
              const shortDesc = service.shortDesc[currentLang] || service.shortDesc.en || service.shortDesc.pt;
              const tags = service.tags[currentLang] || service.tags.en || service.tags.pt || [];
              const waMsg = currentLang === 'en'
                ? `Hello Daniel! I would like to discuss the service: ${title}`
                : `Olá Daniel! Gostaria de conversar sobre o serviço de: ${title}`;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden"
                >
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all shadow-md">
                        {service.icon}
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border ${service.badgeColor}`}
                      >
                        {badge}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold font-display uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                        {title}
                      </h2>
                      <p className="text-zinc-300 text-sm leading-relaxed mt-2.5 font-sans font-light">
                        {shortDesc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-zinc-950/80 border border-white/5 text-[10px] font-mono text-zinc-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Request CTA triggers Contact Popup */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => handleOpenContactWithService(title)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{t("services.request", "Request Quote")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </button>

                    <a
                      href={`https://wa.me/556198905720?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-950 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </main>

        {/* Footer */}
        <Footer onOpenContact={() => setIsModalOpen(true)} />
      </div>
    </PageTransition>
  );
}
