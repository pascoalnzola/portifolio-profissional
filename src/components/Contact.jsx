import { useState } from 'react'
import Icon from './Icon'
import { profile } from '../data/profile'
import { Reveal, SectionHead } from './Sections'
import { useLang } from '../i18n'

export default function Contact({ toast }) {
  const { t } = useLang()
  const subjects = t('contact.subjects')
  const [form, setForm] = useState({ name: '', email: '', subject: 0, message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      toast(t('contact.copied'))
    } catch {
      toast(profile.email)
    }
  }

  // Abre o cliente de email com a mensagem preenchida (sem backend).
  const submit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const subject = `${subjects[form.subject]} — ${form.name}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    toast(t('contact.opening'))
  }

  const site = profile.company.url.replace(/^https?:\/\//, '')

  return (
    <section id="contacto" className="section">
      <div className="container">
        <SectionHead kicker={t('contact.kicker')} title={t('contact.title')}>
          {t('contact.lead')}
        </SectionHead>

        <div className="contact">
          <Reveal className="contact__info">
            <button className="card contact__item" onClick={copyEmail}>
              <span className="service__icon"><Icon name="mail" size={20} /></span>
              <div>
                <span>{t('contact.email')}</span>
                <strong>{profile.email}</strong>
              </div>
              <Icon name="copy" size={16} className="contact__copy" />
            </button>
            {profile.phone && (
              <a className="card contact__item" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <span className="service__icon"><Icon name="phone" size={20} /></span>
                <div><span>{t('contact.phone')}</span><strong>{profile.phone}</strong></div>
              </a>
            )}
            <div className="card contact__item">
              <span className="service__icon"><Icon name="pin" size={20} /></span>
              <div>
                <span>{t('contact.location')}</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
            <a className="card contact__item" href={profile.company.url} target="_blank" rel="noreferrer">
              <span className="service__icon"><Icon name="globe" size={20} /></span>
              <div>
                <span>{t('contact.work')}</span>
                <strong>{profile.company.name} · {site}</strong>
              </div>
              <Icon name="external" size={16} className="contact__copy" />
            </a>
            <div className="contact__socials">
              <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a className="icon-btn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              {profile.socials.whatsapp && (
                <a className="icon-btn" href={profile.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
              )}
            </div>
          </Reveal>

          <Reveal as="form" className="card contact__form" onSubmit={submit} delay={100}>
            <div className="field-row">
              <label className="field">
                <span>{t('contact.name')}</span>
                <input required value={form.name} onChange={set('name')} placeholder={t('contact.namePh')} />
              </label>
              <label className="field">
                <span>{t('contact.email')}</span>
                <input required type="email" value={form.email} onChange={set('email')} placeholder={t('contact.emailPh')} />
              </label>
            </div>
            <div className="field">
              <span>{t('contact.subject')}</span>
              <div className="segmented">
                {subjects.map((s, i) => (
                  <button
                    type="button"
                    key={i}
                    className={form.subject === i ? 'is-active' : ''}
                    onClick={() => setForm({ ...form, subject: i })}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <label className="field">
              <span>{t('contact.message')}</span>
              <textarea required rows={5} value={form.message} onChange={set('message')} placeholder={t('contact.messagePh')} />
            </label>
            <button className="btn btn--primary btn--block" type="submit">
              {t('contact.send')} <Icon name="send" size={16} />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
