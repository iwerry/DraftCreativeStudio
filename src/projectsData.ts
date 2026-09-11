export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  link?: string;
  description: {
    en: string;
    pt: string;
    es: string;
    fr: string;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "Entre Elas",
    category: "STUDIO & LAB",
    image: "/studio/proj_entreelas.jpg",
    link: "https://www.projetoentreelas.com.br",
    description: {
      en: "The Entre Elas Project is an initiative dedicated to supporting vulnerable women and victims of domestic violence, providing legal, psychological assistance and self-esteem restoration programs. It strengthens the female protection network, fostering autonomy and social reinsertion through specialized workshops.\n\nWhat Draft Creative Studio delivers: Full Web Development, Audiovisual Cinema Production, Photography, Filmmaking, and Strategic Social Media Management.",
      pt: "O Projeto Entre Elas é uma iniciativa voltada para o acolhimento de mulheres em situação de vulnerabilidade e vítimas de violência doméstica, oferecendo suporte jurídico, psicológico e ações de resgate da autoestima. O programa busca fortalecer a rede de proteção feminina, promovendo a autonomia e a reinserção social através de cursos e assistência especializada.\n\nO que nós da Draft estamos fazendo para este projeto: Desenvolvimento Web, Audiovisual, Fotografia, Filmagem e Redes Sociais.",
      es: "El Proyecto Entre Elas es una iniciativa dedicada a acoger a mujeres en situación de vulnerabilidad y víctimas de violencia doméstica, ofreciendo apoyo legal, psicológico y programas de recuperación de la autoestima.\n\nLo que Draft Creative Studio aporta: Desarrollo Web, Producción Audiovisual, Fotografía, Filmación y Gestión de Redes Sociales.",
      fr: "Le Projet Entre Elas est une initiative dédiée à l'accompagnement des femmes en situation de vulnérabilité et victimes de violences domestiques, offrant un soutien juridique et psychologique.\n\nCe que Draft Creative Studio réalise: Développement Web, Production Audiovisuelle, Photographie, Tournage et Réseaux Sociaux."
    }
  },
  {
    title: "Instituto Mais Brasília",
    category: "STUDIO & LAB",
    image: "/studio/proj_tech.jpg",
    link: "https://www.institutomaisbrasilia.org.br",
    description: {
      en: "Instituto Mais Brasília strengthens citizenship and social development across the Federal District, combining transparency, ethics, and innovation to transform realities. Active in causes such as women's empowerment and civic inclusion, it bridges institutional credibility with contemporary digital solutions.\n\nWhat Draft Creative Studio delivers: Full Web Development, Brand Identity Architecture, Audiovisual Production, and Strategic Social Media.",
      pt: "O Instituto Mais Brasília fortalece a cidadania e o desenvolvimento social no DF, unindo transparência, ética e inovação para transformar realidades. Atua em causas como empoderamento feminino e inclusão, sendo um elo entre tradição institucional e soluções contemporâneas.\n\nO que nós da Draft estamos fazendo para este projeto: Desenvolvimento Web, Identidade Visual, Audiovisual e Redes Sociais.",
      es: "Instituto Mais Brasília fortalece la ciudadanía y el desarrollo social uniendo transparencia, ética e innovación.\n\nLo que Draft aporta: Desarrollo Web, Identidad Visual, Producción Audiovisual y Redes Sociales.",
      fr: "L'Institut Mais Brasília renforce la citoyenneté et le développement social en alliant transparence, éthique et innovation.\n\nCe que Draft apporte: Développement Web, Identité Visuelle, Audiovisuel et Réseaux Sociaux."
    }
  },
  {
    title: "Nexus Intelligence",
    category: "LAB",
    image: "/studio/proj_edu.jpg",
    link: "https://nexus-phi-sand.vercel.app/",
    description: {
      en: "Nexus Intelligence is an advanced real-time monitoring tool designed to connect investigative journalists and intelligence researchers to global open-source feeds. It accelerates lead discovery, investigative verification, and agenda research worldwide.\n\nWhat Draft Creative Studio engineered: Global RSS intelligence pipeline, custom journalist console, sub-second continuous feed synchronization, and high-performance Neon Postgres database integration.",
      pt: "O Nexus Intelligence é uma ferramenta de monitoramento avançado desenvolvida para conectar Jornalistas e Pesquisadores à informação global em tempo real. Facilita a descoberta de matérias, notícias e publicações de todos os lugares do mundo, agilizando o processo de pauta e pesquisa investigativa.\n\nO que nós da Draft desenvolvemos: Sistema de monitoramento RSS global, interface para jornalistas, sincronização contínua de feeds e integração com banco de dados Neon Postgres.",
      es: "Nexus Intelligence es una herramienta avanzada de monitoreo diseñada para conectar a periodistas e investigadores con información global en tiempo real.\n\nLo que Draft desarrolló: Sistema global de monitoreo RSS, interfaz para periodistas y base de datos Neon Postgres.",
      fr: "Nexus Intelligence est un outil de surveillance avancée conçu pour connecter les journalistes et les chercheurs à l'information mondiale en temps réel.\n\nCe que Draft a développé: Système de surveillance RSS mondial, interface pour journalistes et base de données Neon Postgres."
    }
  },
  {
    title: "Brasília Grill Fest",
    category: "STUDIO",
    image: "/studio/proj_app.jpg",
    description: {
      en: "One of the largest open-air gastronomic festivals ever produced in Brazil's Federal District. Brasília Grill Fest brought culture, culinary mastery, and world-class live entertainment to satellite cities—breaking geographic boundaries and democratizing access to high-end gastronomy.\n\nFeaturing live music stages, regional artisans, craft breweries, and an energetic crowd, the festival created emotional memories and reinforced regional cultural pride.\n\nComing Soon: The next edition of Grill Fest promises even greater scale—new venues, amplified stages, matching energy—with Draft Creative Studio leading the complete visual identity, media rollout, and cinematic audiovisual coverage.",
      pt: "Um dos maiores festivais gastronômicos a céu aberto já realizados no Distrito Federal. O Brasília Grill Fest levou cultura, sabor e entretenimento para as cidades satélites de Brasília — quebrando fronteiras e democratizando o acesso à gastronomia de alto nível.\n\nCom palcos ao vivo, bandas e artistas locais, artesanato regional, cervejas artesanais geladas e uma multidão vibrante, o evento criou memórias afetivas e reforçou o orgulho de quem vive nas regiões administrativas do DF.\n\nEm breve: A próxima edição do Grill Fest promete ser ainda maior. Novos bairros, novos palcos, mesma energia — com a Draft Creative Studio por trás de toda a identidade visual, comunicação e produção audiovisual do evento.",
      es: "Uno de los mayores festivales gastronómicos al aire libre de Brasilia, llevando cultura, sabor y entretenimiento a gran escala.\n\nPróximamente: La nueva edición con Draft Creative Studio a cargo de toda la identidad visual y cobertura cinematográfica.",
      fr: "L'un des plus grands festivals gastronomiques en plein air de Brasilia, apportant culture, gastronomie et divertissement à grande échelle.\n\nBientôt: La nouvelle édition avec Draft Creative Studio en charge de l'identité visuelle et de la couverture cinématographique."
    }
  }
];
