import { useEffect, useState } from 'react'
import Icon from './Icon'
import { experience, profile, services, skills } from '../data/profile'
import { useInView, useReveal } from '../hooks'
import { useLang } from '../i18n'

export function SectionHead({ kicker, title, children }) {
  const ref = useReveal()
  return (
    <div className="section-head reveal" ref={ref}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

/* ─────────── Sobre ─────────── */
export function About() {
  const { t, tr } = useLang()
  const [photoError, setPhotoError] = useState(false)
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <Reveal className="about__photo">
          <div className="avatar">
            {profile.photo && !photoError ? (
              <img src={import.meta.env.BASE_URL + profile.photo.replace(/^\//, '')} alt={profile.name} loading="lazy" onError={() => setPhotoError(true)} />
            ) : (
              <span>{profile.initials}</span>
            )}
          </div>
          <a className="about__badge" href={profile.company.url} target="_blank" rel="noreferrer">
            <strong>Team Leader</strong>
            <span>{profile.company.name} <Icon name="external" size={12} /></span>
          </a>
        </Reveal>

        <div>
          <SectionHead kicker={t('about.kicker')} title={t('about.title')} />
          {profile.about.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80} className="about__p">{tr(p)}</Reveal>
          ))}
          <Reveal className="about__facts" delay={240}>
            {profile.facts.map((f, i) => (
              <div key={i}><span>{tr(f.label)}</span><strong>{tr(f.value)}</strong></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────── Percurso ─────────── */
export function Experience() {
  const { t, tr } = useLang()
  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <SectionHead kicker={t('exp.kicker')} title={t('exp.title')}>
          {t('exp.lead')}
        </SectionHead>
        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" key={i} className="timeline__item" delay={i * 90}>
              <span className="timeline__dot" />
              <div className="card timeline__card">
                <div className="timeline__top">
                  <span className={`pill ${e.current ? 'pill--live' : ''}`}>
                    {e.current && <span className="dot" />} {tr(e.period)}
                  </span>
                  {e.link ? (
                    <a className="timeline__org timeline__org--link" href={e.link} target="_blank" rel="noreferrer">
                      {e.org} · {e.link.replace(/^https?:\/\//, '')} <Icon name="external" size={12} />
                    </a>
                  ) : (
                    <span className="timeline__org">{e.org}</span>
                  )}
                </div>
                <h3>{tr(e.role)}</h3>
                <p>{tr(e.description)}</p>
                <div className="tags">{e.tags.map((tag, j) => <span key={j} className="tag">{tr(tag)}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ─────────── Competências ─────────── */
function SkillBar({ name, level, start: visible, i }) {
  // wait one frame after mount so the bar animates even when switching tabs
  const [start, setStart] = useState(false)
  useEffect(() => {
    if (!visible) return
    const id = requestAnimationFrame(() => setStart(true))
    return () => cancelAnimationFrame(id)
  }, [visible])
  return (
    <div className="skill">
      <div className="skill__row">
        <span>{name}</span>
        <span className="mono">{level}%</span>
      </div>
      <div className="skill__track">
        <div
          className="skill__fill"
          style={{ width: start ? `${level}%` : 0, transitionDelay: `${i * 90}ms` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const { t, tr } = useLang()
  const [tab, setTab] = useState(skills[0].id)
  const [ref, inView] = useInView(0.25)
  const current = skills.find((s) => s.id === tab)

  return (
    <section id="competencias" className="section section--alt">
      <div className="container">
        <SectionHead kicker={t('skills.kicker')} title={t('skills.title')} />
        <div className="skills" ref={ref}>
          <div className="tabs" role="tablist">
            {skills.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={tab === s.id}
                className={`tab ${tab === s.id ? 'is-active' : ''}`}
                onClick={() => setTab(s.id)}
              >
                {tr(s.label)}
              </button>
            ))}
          </div>
          <div className="card skills__panel" key={tab}>
            {current.items.map((s, i) => (
              <SkillBar key={i} name={tr(s.name)} level={s.level} i={i} start={inView} />
            ))}
          </div>
        </div>

        <div className="services">
          {services.map((s, i) => (
            <Reveal key={i} className="card service" delay={i * 80}>
              <div className="service__icon"><Icon name={s.icon} size={22} /></div>
              <h3>{tr(s.title)}</h3>
              <p>{tr(s.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
