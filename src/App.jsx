import { useCallback, useEffect, useMemo, useState } from 'react'
import Navbar, { NAV } from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Skills } from './components/Sections'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CommandPalette from './components/CommandPalette'
import Icon from './components/Icon'
import { profile } from './data/profile'
import { useScrollSpy } from './hooks'
import { useLang } from './i18n'

const ids = NAV.map((n) => n.id)

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const { t, toggleLang } = useLang()
  const [theme, setTheme] = useState(getInitialTheme)
  const [palette, setPalette] = useState(false)
  const [openProject, setOpenProject] = useState(null)
  const [toastMsg, setToastMsg] = useState('')
  const [progress, setProgress] = useState(0)
  const active = useScrollSpy(ids)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  // scroll progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ctrl/Cmd + K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPalette((p) => !p)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // cursor spotlight
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const toast = useCallback((msg) => {
    setToastMsg(msg)
    clearTimeout(window.__toastT)
    window.__toastT = setTimeout(() => setToastMsg(''), 2200)
  }, [])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  const actions = useMemo(() => ({
    goto: (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
    openProject: (id) => {
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
      setOpenProject(id)
    },
    toggleTheme,
    toggleLang,
    copyEmail: () => navigator.clipboard?.writeText(profile.email).then(() => toast(t('contact.copied')), () => toast(profile.email)),
  }), [toggleTheme, toggleLang, toast, t])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="spotlight" aria-hidden="true" />

      <Navbar active={active} theme={theme} onToggleTheme={toggleTheme} onOpenPalette={() => setPalette(true)} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects openId={openProject} setOpenId={setOpenProject} />
        <Skills />
        <Contact toast={toast} />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} {profile.name}. {t('footer.made')}</span>
          <button className="link-btn" onClick={() => setPalette(true)}>
            {t('footer.tip')} <kbd>Ctrl</kbd> + <kbd>K</kbd>
          </button>
        </div>
      </footer>

      <button
        className={`to-top ${progress > 0.15 ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('toTop')}
      >
        <Icon name="arrowUp" size={18} />
      </button>

      <div className={`toast ${toastMsg ? 'is-visible' : ''}`} role="status">{toastMsg}</div>

      <CommandPalette open={palette} onClose={() => setPalette(false)} actions={actions} />
    </>
  )
}
