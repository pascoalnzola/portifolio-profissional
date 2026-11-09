// ─────────────────────────────────────────────────────────────
//  Edita este ficheiro para atualizar todo o conteúdo do portfólio.
//  Textos com { pt: '...', en: '...' } aparecem no idioma escolhido.
//  Textos simples ('...') aparecem iguais nos dois idiomas.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Pascoal Nzola Tondo',
  shortName: 'Pascoal Tondo',
  initials: 'PT',
  roles: {
    pt: ['Full Stack Developer', 'Team Leader', 'Criador de SaaS', 'Desenvolvedor Desktop C#'],
    en: ['Full Stack Developer', 'Team Leader', 'SaaS Builder', 'C# Desktop Developer'],
  },
  location: 'Luanda, Angola',
  email: 'pascoalnzolatondo@gmail.com',
  phone: '+244 945 31 86 73',
  photo: '/img/pascoal.jpg', // .jpg, .png ou .webp — basta mudar a extensão
  company: { name: 'SOSOFT, Lda.', url: 'https://sosoft.ao' },
  available: true,
  summary: {
    pt: 'Programador Full Stack e Team Leader na SOSOFT, Lda. Construo plataformas de gestão, sistemas académicos e produtos SaaS que resolvem problemas reais em Angola.',
    en: 'Full Stack Developer and Team Leader at SOSOFT, Lda. I build management platforms, academic systems and SaaS products that solve real problems in Angola.',
  },
  about: [
    {
      pt: 'Sou programador Full Stack baseado em Luanda. Atualmente lidero equipa na SOSOFT, Lda., onde trabalho na PIGA — Plataforma Integrada de Gestão Académica.',
      en: 'I am a Full Stack Developer based in Luanda. I currently lead a team at SOSOFT, Lda., where I work on PIGA — an Integrated Academic Management Platform.',
    },
    {
      pt: 'Comecei a minha jornada como Técnico de Informática no IPIL, onde criei o Portal do IPIL — o sistema de gestão escolar do instituto, usado na gestão de pautas e exames. Hoje estou no 2.º ano na Universidade Gregório Semedo.',
      en: 'I started my journey as an IT Technician at IPIL, where I built the IPIL Portal — the institute’s school management system, used for grade sheets and exams. I am now in my 2nd year at Universidade Gregório Semedo.',
    },
    {
      pt: 'Trabalho com React, PHP/Laravel e C# para aplicações desktop. Já fiz freelance em desenvolvimento web e estou a construir produtos próprios — com o objetivo de fundar a minha empresa de software em Angola. Nas horas livres, exploro eletrónica e análise de circuitos.',
      en: 'I work with React, PHP/Laravel and C# for desktop applications. I have freelanced in web development and I am building my own products — with the goal of founding my own software company in Angola. In my free time, I explore electronics and circuit analysis.',
    },
  ],
  facts: [
    { label: { pt: 'Localização', en: 'Location' }, value: 'Luanda, Angola' },
    { label: { pt: 'Formação', en: 'Education' }, value: 'Univ. Gregório Semedo' },
    { label: { pt: 'Foco', en: 'Focus' }, value: 'Full Stack & SaaS' },
    { label: { pt: 'Interesses', en: 'Interests' }, value: { pt: 'Eletrónica & Circuitos', en: 'Electronics & Circuits' } },
  ],
  socials: {
    github: 'https://github.com/pascoalnzola',
    linkedin: 'https://linkedin.com/in/', // ← substitui pelo teu perfil
    whatsapp: '', // ex: 'https://wa.me/244945318673'
  },
}

export const stats = [
  { value: 6, suffix: '+', label: { pt: 'Projetos entregues e em curso', en: 'Projects delivered and in progress' } },
  { value: 3, suffix: '', label: { pt: 'Plataformas educativas: PIGA, Portal IPIL e acessoETP', en: 'Education platforms: PIGA, IPIL Portal and acessoETP' } },
  { value: 1, suffix: '', label: { pt: 'Equipa liderada na SOSOFT', en: 'Team led at SOSOFT' } },
]

// current: true → mostra o ponto verde "ao vivo"
export const experience = [
  {
    current: true,
    period: { pt: 'Atual', en: 'Current' },
    role: 'Full Stack Developer & Team Leader',
    org: 'SOSOFT, Lda.',
    link: 'https://sosoft.ao',
    description: {
      pt: 'Lidero a equipa de desenvolvimento da PIGA — Plataforma Integrada de Gestão Académica. Defino arquitetura, reviso código e entrego funcionalidades de ponta a ponta.',
      en: 'I lead the development team behind PIGA — an Integrated Academic Management Platform. I define the architecture, review code and ship features end to end.',
    },
    tags: [{ pt: 'Liderança', en: 'Leadership' }, { pt: 'Arquitetura', en: 'Architecture' }, 'Full Stack'],
  },
  {
    period: { pt: 'Concluído', en: 'Completed' },
    role: { pt: 'Desenvolvedor Web Freelance', en: 'Freelance Web Developer' },
    org: 'C Calas',
    description: {
      pt: 'Desenvolvi websites e aplicações web à medida para clientes, do design à publicação.',
      en: 'Built custom websites and web applications for clients, from design to launch.',
    },
    tags: ['Web', { pt: 'Clientes', en: 'Clients' }, { pt: 'Entrega', en: 'Delivery' }],
  },
  {
    period: { pt: 'Em curso', en: 'In progress' },
    role: { pt: 'Licenciatura — 2.º ano', en: 'Bachelor’s degree — 2nd year' },
    org: 'Universidade Gregório Semedo',
    description: {
      pt: 'Formação superior que complementa a experiência prática em Engenharia de Informática.',
      en: 'Higher education that complements my hands-on experience in computer engineering.',
    },
    tags: [{ pt: 'Educação', en: 'Education' }],
  },
  {
    period: { pt: 'Concluído', en: 'Completed' },
    role: { pt: 'Técnico Médio de Informática', en: 'IT Technician (vocational diploma)' },
    org: 'IPIL — Instituto Politécnico Industrial de Luanda',
    description: {
      pt: 'Formação técnica onde nasceu o Portal do IPIL, o sistema de gestão escolar do próprio instituto.',
      en: 'Technical training where the IPIL Portal was born — the institute’s own school management system.',
    },
    tags: [{ pt: 'Educação', en: 'Education' }, { pt: 'Primeiro sistema', en: 'First system' }],
  },
]

// category: 'gestao' | 'saas' | 'web'
// live: true → "Produção / Live" com ponto verde; false → "Em desenvolvimento / In development"
export const projects = [
  {
    id: 'piga',
    title: 'PIGA',
    subtitle: { pt: 'Plataforma Integrada de Gestão Académica', en: 'Integrated Academic Management Platform' },
    category: 'gestao',
    live: true,
    color: '#f5b13d',
    description: {
      pt: 'Plataforma académica completa desenvolvida na SOSOFT: matrículas, notas, turmas, docentes e relatórios num só sistema.',
      en: 'A complete academic platform built at SOSOFT: enrolments, grades, classes, teachers and reports in a single system.',
    },
    highlights: [
      { pt: 'Liderança técnica da equipa', en: 'Technical team leadership' },
      { pt: 'Módulos académicos integrados', en: 'Integrated academic modules' },
      { pt: 'Relatórios e painéis de gestão', en: 'Management reports and dashboards' },
    ],
    stack: ['PHP', 'MySQL', 'Laravel', 'React'],
    link: '',
  },
  {
    id: 'ipil',
    title: { pt: 'Portal do IPIL', en: 'IPIL Portal' },
    subtitle: { pt: 'Gestão Escolar IPIL', en: 'IPIL School Management' },
    category: 'gestao',
    live: true,
    color: '#4fb3a9',
    description: {
      pt: 'Portal e sistema de gestão escolar do Instituto Politécnico Industrial de Luanda, com Pauta Geral, Exames Especiais e gestão de alunos.',
      en: 'Portal and school management system for the Instituto Politécnico Industrial de Luanda, with grade sheets, special exams and student management.',
    },
    highlights: [
      { pt: 'Pauta Geral automatizada', en: 'Automated general grade sheet' },
      { pt: 'Gestão de Exames Especiais', en: 'Special exams management' },
      { pt: 'Usado pelo próprio instituto', en: 'Used by the institute itself' },
    ],
    stack: ['React', 'Node.js', 'MySQL'],
    link: 'https://portal.ipil.ao',
  },
  {
    id: 'faturacao',
    title: { pt: 'Faturação & POS', en: 'Invoicing & POS' },
    subtitle: { pt: 'SaaS para pequenos negócios', en: 'SaaS for small businesses' },
    category: 'saas',
    live: false,
    color: '#e5533d',
    description: {
      pt: 'Software como serviço para faturação e ponto de venda, pensado para comércios angolanos: vendas, stock, clientes e documentos fiscais.',
      en: 'Invoicing and point-of-sale software as a service, designed for Angolan retailers: sales, stock, customers and tax documents.',
    },
    highlights: [
      { pt: 'Multi-empresa (SaaS)', en: 'Multi-tenant (SaaS)' },
      { pt: 'POS rápido para balcão', en: 'Fast counter POS' },
      { pt: 'Gestão de stock e relatórios', en: 'Stock management and reports' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL'],
    link: '',
  },
  {
    id: 'bue',
    title: 'Bué Prático',
    subtitle: { pt: 'Plataforma de arrendamento', en: 'Rental platform' },
    category: 'saas',
    live: false,
    color: '#8b7cf6',
    description: {
      pt: 'Plataforma que liga proprietários e inquilinos em Angola — anúncios de imóveis, pesquisa com filtros e contacto direto.',
      en: 'A platform connecting landlords and tenants in Angola — property listings, filtered search and direct contact.',
    },
    highlights: [
      { pt: 'Anúncios com fotos e filtros', en: 'Listings with photos and filters' },
      { pt: 'Perfis de proprietário e inquilino', en: 'Landlord and tenant profiles' },
      { pt: 'Foco em experiência mobile', en: 'Mobile-first experience' },
    ],
    stack: ['React', 'Node.js', 'SQL'],
    link: '',
  },
  {
    id: 'acessoetp',
    title: 'acessoETP',
    subtitle: { pt: 'Acesso ao Ensino Técnico Profissional', en: 'Access to Technical & Vocational Education' },
    category: 'gestao',
    live: true,
    color: '#3d9be5',
    description: {
      pt: 'Plataforma de acesso ao ensino técnico profissional: candidaturas, inscrições e acompanhamento do processo de ingresso nas escolas técnicas.',
      en: 'Access platform for technical and vocational education: applications, enrolments and tracking of the admission process to technical schools.',
    },
    highlights: [
      { pt: 'Candidaturas online', en: 'Online applications' },
      { pt: 'Gestão de inscrições e vagas', en: 'Enrolment and seat management' },
      { pt: 'Acompanhamento do processo de acesso', en: 'Admission process tracking' },
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'React'],
    link: 'https://acessoetp.ao',
  },
  {
    id: 'caminho',
    title: 'Igreja O Caminho',
    subtitle: { pt: 'Website institucional', en: 'Institutional website' },
    category: 'web',
    live: false,
    color: '#58c27d',
    description: {
      pt: 'Website da Igreja O Caminho com agenda de eventos, ministérios e informação para membros e visitantes.',
      en: 'Website for Igreja O Caminho with an events calendar, ministries and information for members and visitors.',
    },
    highlights: [
      { pt: 'Design responsivo', en: 'Responsive design' },
      { pt: 'Agenda de eventos', en: 'Events calendar' },
      { pt: 'Fácil de atualizar', en: 'Easy to update' },
    ],
    stack: ['React', 'CSS'],
    link: '',
  },
]

export const categories = [
  { id: 'all', label: { pt: 'Todos', en: 'All' } },
  { id: 'gestao', label: { pt: 'Gestão', en: 'Management' } },
  { id: 'saas', label: 'SaaS' },
  { id: 'web', label: 'Websites' },
]

export const skills = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', level: 88 },
      { name: 'JavaScript / ES6+', level: 90 },
      { name: 'HTML & CSS', level: 92 },
      { name: { pt: 'UI Responsiva', en: 'Responsive UI' }, level: 85 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', level: 82 },
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 84 },
      { name: 'APIs REST', level: 85 },
      { name: { pt: 'Autenticação & Segurança', en: 'Authentication & Security' }, level: 75 },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop',
    items: [
      { name: 'C#', level: 80 },
      { name: '.NET', level: 76 },
      { name: { pt: 'Aplicações Desktop Windows', en: 'Windows Desktop Apps' }, level: 78 },
      { name: { pt: 'Integração com bases de dados', en: 'Database integration' }, level: 82 },
    ],
  },
  {
    id: 'data',
    label: { pt: 'Dados & DevOps', en: 'Data & DevOps' },
    items: [
      { name: 'MySQL / PostgreSQL', level: 84 },
      { name: { pt: 'Modelação de dados', en: 'Data modelling' }, level: 80 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Deploy & Linux', level: 70 },
    ],
  },
  {
    id: 'lead',
    label: { pt: 'Liderança', en: 'Leadership' },
    items: [
      { name: { pt: 'Gestão de equipa', en: 'Team management' }, level: 82 },
      { name: 'Code review', level: 85 },
      { name: { pt: 'Levantamento de requisitos', en: 'Requirements gathering' }, level: 80 },
      { name: { pt: 'Comunicação com clientes', en: 'Client communication' }, level: 84 },
    ],
  },
]

export const services = [
  {
    icon: 'layers',
    title: { pt: 'Sistemas de Gestão', en: 'Management Systems' },
    text: {
      pt: 'Plataformas académicas e empresariais, web ou desktop (C#), feitas à medida do teu processo.',
      en: 'Academic and business platforms, web or desktop (C#), tailored to your workflow.',
    },
  },
  {
    icon: 'cart',
    title: { pt: 'Produtos SaaS', en: 'SaaS Products' },
    text: {
      pt: 'Da ideia ao produto: multi-empresa, faturação, pagamentos e painéis de controlo.',
      en: 'From idea to product: multi-tenancy, invoicing, payments and dashboards.',
    },
  },
  {
    icon: 'globe',
    title: 'Websites & Landing Pages',
    text: {
      pt: 'Sites rápidos, responsivos e bonitos para empresas, igrejas e marcas pessoais.',
      en: 'Fast, responsive and beautiful sites for companies, churches and personal brands.',
    },
  },
  {
    icon: 'users',
    title: { pt: 'Liderança Técnica', en: 'Technical Leadership' },
    text: {
      pt: 'Arquitetura, organização de equipa e boas práticas para entregar com qualidade.',
      en: 'Architecture, team organisation and best practices to ship with quality.',
    },
  },
]
