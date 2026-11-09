import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// Textos da interface (botões, títulos de secção, etc.)
const ui = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.journey': 'Percurso',
    'nav.projects': 'Projetos',
    'nav.skills': 'Competências',
    'nav.contact': 'Contacto',
    'nav.search': 'Procurar',
    'nav.theme': 'Mudar tema',
    'nav.lang': 'Switch to English',

    'hero.available': 'Disponível para novos projetos',
    'hero.hello': 'Olá, sou o',
    'hero.cta.projects': 'Ver projetos',
    'hero.cta.contact': 'Falar comigo',

    'about.kicker': '01 · Sobre mim',
    'about.title': 'Código com propósito, feito em Angola.',

    'exp.kicker': '02 · Percurso',
    'exp.title': 'Experiência & formação',
    'exp.lead': 'Do primeiro sistema escolar no IPIL até liderar uma equipa de desenvolvimento.',

    'proj.kicker': '03 · Projetos',
    'proj.title': 'Coisas que construí e estou a construir',
    'proj.lead': 'Clica num projeto para ver os detalhes.',
    'proj.details': 'Ver detalhes',
    'proj.highlights': 'Destaques',
    'proj.tech': 'Tecnologias',
    'proj.visit': 'Visitar projeto',
    'proj.demo': 'Pedir demonstração',
    'proj.live': 'Produção',
    'proj.dev': 'Em desenvolvimento',
    'proj.close': 'Fechar',
    'proj.filter': 'Filtrar projetos',

    'skills.kicker': '04 · Competências',
    'skills.title': 'Ferramentas do ofício',

    'contact.kicker': '05 · Contacto',
    'contact.title': 'Vamos construir algo juntos?',
    'contact.lead': 'Tens um projeto, uma ideia de SaaS ou precisas de um sistema de gestão? Escreve-me.',
    'contact.email': 'Email',
    'contact.location': 'Localização',
    'contact.phone': 'Telefone',
    'contact.work': 'Onde trabalho',
    'contact.name': 'Nome',
    'contact.namePh': 'O teu nome',
    'contact.emailPh': 'tu@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjects': ['Novo projeto', 'SaaS', 'Freelance', 'Outro'],
    'contact.message': 'Mensagem',
    'contact.messagePh': 'Conta-me sobre o teu projeto…',
    'contact.send': 'Enviar mensagem',
    'contact.copied': 'Email copiado!',
    'contact.opening': 'A abrir o teu cliente de email…',

    'footer.made': 'Feito com React em Luanda.',
    'footer.tip': 'Dica: carrega',
    'toTop': 'Voltar ao topo',

    'palette.placeholder': 'Procurar secções, projetos, ações…',
    'palette.empty': 'Sem resultados para',
    'palette.nav': 'Navegar',
    'palette.projects': 'Projetos',
    'palette.actions': 'Ações',
    'palette.theme': 'Mudar tema claro/escuro',
    'palette.lang': 'Mudar para inglês',
    'palette.copy': 'Copiar email',
    'palette.mail': 'Enviar email',
    'palette.move': 'navegar',
    'palette.open': 'abrir',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.journey': 'Journey',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.search': 'Search',
    'nav.theme': 'Toggle theme',
    'nav.lang': 'Mudar para português',

    'hero.available': 'Available for new projects',
    'hero.hello': 'Hi, I’m',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',

    'about.kicker': '01 · About me',
    'about.title': 'Purposeful code, made in Angola.',

    'exp.kicker': '02 · Journey',
    'exp.title': 'Experience & education',
    'exp.lead': 'From my first school system at IPIL to leading a development team.',

    'proj.kicker': '03 · Projects',
    'proj.title': 'Things I’ve built and am building',
    'proj.lead': 'Click a project to see the details.',
    'proj.details': 'View details',
    'proj.highlights': 'Highlights',
    'proj.tech': 'Technologies',
    'proj.visit': 'Visit project',
    'proj.demo': 'Request a demo',
    'proj.live': 'Live',
    'proj.dev': 'In development',
    'proj.close': 'Close',
    'proj.filter': 'Filter projects',

    'skills.kicker': '04 · Skills',
    'skills.title': 'Tools of the trade',

    'contact.kicker': '05 · Contact',
    'contact.title': 'Let’s build something together?',
    'contact.lead': 'Have a project, a SaaS idea or need a management system? Drop me a line.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.phone': 'Phone',
    'contact.work': 'Where I work',
    'contact.name': 'Name',
    'contact.namePh': 'Your name',
    'contact.emailPh': 'you@example.com',
    'contact.subject': 'Subject',
    'contact.subjects': ['New project', 'SaaS', 'Freelance', 'Other'],
    'contact.message': 'Message',
    'contact.messagePh': 'Tell me about your project…',
    'contact.send': 'Send message',
    'contact.copied': 'Email copied!',
    'contact.opening': 'Opening your email client…',

    'footer.made': 'Built with React in Luanda.',
    'footer.tip': 'Tip: press',
    'toTop': 'Back to top',

    'palette.placeholder': 'Search sections, projects, actions…',
    'palette.empty': 'No results for',
    'palette.nav': 'Navigate',
    'palette.projects': 'Projects',
    'palette.actions': 'Actions',
    'palette.theme': 'Toggle light/dark theme',
    'palette.lang': 'Switch to Portuguese',
    'palette.copy': 'Copy email',
    'palette.mail': 'Send email',
    'palette.move': 'navigate',
    'palette.open': 'open',
  },
}

const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])

  const t = useCallback((key) => ui[lang][key] ?? ui.pt[key] ?? key, [lang])
  // tr: traduz um valor do profile.js ({pt, en} ou texto simples)
  const tr = useCallback(
    (v) => (v && typeof v === 'object' && !Array.isArray(v) && ('pt' in v || 'en' in v) ? v[lang] ?? v.pt : v),
    [lang],
  )
  const toggleLang = useCallback(() => setLang((l) => (l === 'pt' ? 'en' : 'pt')), [])

  const value = useMemo(() => ({ lang, setLang, toggleLang, t, tr }), [lang, toggleLang, t, tr])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
