import { useEffect, useState } from 'react'
import Icon from './Icon'
import { categories, projects } from '../data/profile'
import { Reveal, SectionHead } from './Sections'
import { useLang } from '../i18n'

const mono = (title) => title.slice(0, 2).toUpperCase()

function Status({ live, small }) {
  const { t } = useLang()
  return (
    <span className={`pill ${small ? 'pill--sm' : ''} ${live ? 'pill--live' : ''}`}>
      {live && <span className="dot" />} {live ? t('proj.live') : t('proj.dev')}
    </span>
  )
}

function ProjectCard({ p, onOpen, i }) {
  const { t, tr } = useLang()
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const title = tr(p.title)
  return (
    <Reveal delay={i * 70} className="project-wrap">
      <button
        className="card project"
        style={{ '--pc': p.color }}
        onMouseMove={onMove}
        onClick={() => onOpen(p)}
        aria-label={`${t('proj.details')}: ${title}`}
      >
        <div className="project__cover">
          <span className="project__mono">{mono(title)}</span>
          <Status live={p.live} small />
        </div>
        <div className="project__body">
          <h3>{title}</h3>
          <span className="project__sub">{tr(p.subtitle)}</span>
          <p>{tr(p.description)}</p>
          <div className="tags">{p.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
          <span className="project__more">
            {t('proj.details')} <Icon name="arrow" size={16} />
            {p.link && (
              <span className="project__site">
                <Icon name="globe" size={14} /> {p.link.replace(/^https?:\/\//, '')}
              </span>
            )}
          </span>
        </div>
      </button>
    </Reveal>
  )
}

function ProjectModal({ p, onClose }) {
  const { t, tr } = useLang()
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const title = tr(p.title)
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className="modal__box" style={{ '--pc': p.color }} onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn modal__close" onClick={onClose} aria-label={t('proj.close')}>
          <Icon name="close" size={18} />
        </button>
        <div className="modal__cover">
          <span className="project__mono">{mono(title)}</span>
        </div>
        <div className="modal__content">
          <span className="kicker">{tr(p.subtitle)}</span>
          <h3 id="modal-title">{title}</h3>
          <p>{tr(p.description)}</p>
          <h4>{t('proj.highlights')}</h4>
          <ul className="checklist">
            {p.highlights.map((h, i) => (
              <li key={i}><Icon name="check" size={16} /> {tr(h)}</li>
            ))}
          </ul>
          <h4>{t('proj.tech')}</h4>
          <div className="tags">{p.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
          <div className="modal__actions">
            {p.link ? (
              <a className="btn btn--primary" href={p.link} target="_blank" rel="noreferrer">
                {t('proj.visit')} <Icon name="external" size={16} />
              </a>
            ) : (
              <a className="btn btn--primary" href="#contacto" onClick={onClose}>
                {t('proj.demo')} <Icon name="arrow" size={16} />
              </a>
            )}
            <Status live={p.live} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ openId, setOpenId }) {
  const { t, tr } = useLang()
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const open = projects.find((p) => p.id === openId)

  return (
    <section id="projetos" className="section">
      <div className="container">
        <SectionHead kicker={t('proj.kicker')} title={t('proj.title')}>
          {t('proj.lead')}
        </SectionHead>

        <div className="filters" role="group" aria-label={t('proj.filter')}>
          {categories.map((c) => {
            const count = c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length
            return (
              <button
                key={c.id}
                className={`chip ${filter === c.id ? 'is-active' : ''}`}
                onClick={() => setFilter(c.id)}
                aria-pressed={filter === c.id}
              >
                {tr(c.label)} <span>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="projects" key={filter}>
          {list.map((p, i) => <ProjectCard key={p.id} p={p} i={i} onOpen={(x) => setOpenId(x.id)} />)}
        </div>
      </div>

      {open && <ProjectModal p={open} onClose={() => setOpenId(null)} />}
    </section>
  )
}
