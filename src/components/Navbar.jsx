import { useEffect, useState } from 'react'
import Icon from './Icon'
import { profile } from '../data/profile'
import { useLang } from '../i18n'

export const NAV = [
  { id: 'inicio', key: 'nav.home' },
  { id: 'sobre', key: 'nav.about' },
  { id: 'experiencia', key: 'nav.journey' },
  { id: 'projetos', key: 'nav.projects' },
  { id: 'competencias', key: 'nav.skills' },
  { id: 'contacto', key: 'nav.contact' },
]

export function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang-switch" role="group" aria-label={t('nav.lang')}>
      <span className="lang-switch__thumb" style={{ transform: lang === 'en' ? 'translateX(100%)' : 'none' }} />
      {['pt', 'en'].map((l) => (
        <button key={l} className={lang === l ? 'is-active' : ''} onClick={() => setLang(l)} aria-pressed={lang === l}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar({ active, theme, onToggleTheme, onOpenPalette }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__logo" aria-label={t('nav.home')}>
          <span className="logo-mark">{profile.initials}</span>
          <span className="nav__name">{profile.shortName}<span className="accent">.</span></span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Menu">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label={t('nav.search')}>
            <Icon name="search" size={16} />
            <span className="kbd-btn__label">{t('nav.search')}</span>
            <kbd>Ctrl K</kbd>
          </button>
          <LangSwitch />
          <button className="icon-btn" onClick={onToggleTheme} aria-label={t('nav.theme')}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
