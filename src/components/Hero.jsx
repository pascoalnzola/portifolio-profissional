import { useRef } from 'react'
import Icon from './Icon'
import { profile, stats } from '../data/profile'
import { useCountUp, useInView, useTyping } from '../hooks'
import { useLang } from '../i18n'

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start)
  return (
    <div className="stat">
      <strong>{n}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const { t, tr, lang } = useLang()
  const role = useTyping(tr(profile.roles))
  const [statsRef, statsIn] = useInView(0.4)
  const cardRef = useRef(null)
  const pt = lang === 'pt'

  // 3D tilt on the code card
  const onMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
  }
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="grid-lines" />
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          {profile.available && (
            <span className="pill pill--live">
              <span className="dot" /> {t('hero.available')}
            </span>
          )}
          <h1>
            {t('hero.hello')} <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero__role">
            <span className="mono">&gt;</span> {role}
            <span className="caret" />
          </p>
          <p className="hero__summary">{tr(profile.summary)}</p>

          <div className="hero__cta">
            <a href="#projetos" className="btn btn--primary">
              {t('hero.cta.projects')} <Icon name="arrow" size={18} />
            </a>
            <a href="#contacto" className="btn btn--ghost">
              {t('hero.cta.contact')}
            </a>
          </div>

          <div className="hero__meta">
            <span><Icon name="pin" size={16} /> {profile.location}</span>
            <a className="hero__company" href={profile.company.url} target="_blank" rel="noreferrer">
              @ {profile.company.url.replace(/^https?:\/\//, '')}
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
          </div>
        </div>

        <div className="hero__visual" onMouseMove={onMove} onMouseLeave={onLeave}>
          <div className="code-card" ref={cardRef}>
            <div className="code-card__bar">
              <i /><i /><i />
              <span>pascoal.js</span>
            </div>
            <pre className="code-card__body">
<span className="c-k">const</span> <span className="c-v">dev</span> = {'{'}{'\n'}
{'  '}<span className="c-p">{pt ? 'nome' : 'name'}</span>: <span className="c-s">'Pascoal Nzola Tondo'</span>,{'\n'}
{'  '}<span className="c-p">{pt ? 'cargo' : 'role'}</span>: <span className="c-s">'Full Stack · Team Lead'</span>,{'\n'}
{'  '}<span className="c-p">{pt ? 'empresa' : 'company'}</span>: <span className="c-s">'SOSOFT, Lda.'</span>,{'\n'}
{'  '}<span className="c-p">base</span>: <span className="c-s">'Luanda 🇦🇴'</span>,{'\n'}
{'  '}<span className="c-p">web</span>: [<span className="c-s">'React'</span>, <span className="c-s">'Laravel'</span>, <span className="c-s">'MySQL'</span>],{'\n'}
{'  '}<span className="c-p">desktop</span>: [<span className="c-s">'C#'</span>, <span className="c-s">'.NET'</span>],{'\n'}
{'  '}<span className="c-p">{pt ? 'missao' : 'mission'}</span>: <span className="c-s">{pt ? "'Software que move Angola'" : "'Software that moves Angola'"}</span>,{'\n'}
{'}'};{'\n'}
{'\n'}
<span className="c-v">dev</span>.<span className="c-f">{pt ? 'construir' : 'build'}</span>(<span className="c-s">{pt ? "'o próximo grande produto'" : "'the next big product'"}</span>);
            </pre>
          </div>
          <div className="float-chip float-chip--1"><Icon name="layers" size={16} /> PIGA</div>
          <div className="float-chip float-chip--2"><Icon name="cart" size={16} /> SaaS POS</div>
          <div className="float-chip float-chip--3"><Icon name="layers" size={16} /> acessoETP</div>
        </div>
      </div>

      <div className="container">
        <div className="stats" ref={statsRef}>
          {stats.map((s, i) => <Stat key={i} value={s.value} suffix={s.suffix} label={tr(s.label)} start={statsIn} />)}
        </div>
      </div>

      <a href="#sobre" className="scroll-hint" aria-label={t('nav.about')}>
        <span />
      </a>
    </section>
  )
}
