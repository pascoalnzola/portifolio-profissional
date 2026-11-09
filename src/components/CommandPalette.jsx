import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon'
import { NAV } from './Navbar'
import { profile, projects } from '../data/profile'
import { useLang } from '../i18n'

export default function CommandPalette({ open, onClose, actions }) {
  const { t, tr } = useLang()
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const inputRef = useRef(null)

  const items = useMemo(() => {
    const all = [
      ...NAV.map((n) => ({ group: t('palette.nav'), label: t(n.key), icon: 'arrow', run: () => actions.goto(n.id) })),
      ...projects.map((p) => ({ group: t('palette.projects'), label: tr(p.title), hint: tr(p.subtitle), icon: 'layers', run: () => actions.openProject(p.id) })),
      { group: t('palette.actions'), label: t('palette.lang'), hint: 'PT / EN', icon: 'globe', run: actions.toggleLang },
      { group: t('palette.actions'), label: t('palette.theme'), icon: 'sun', run: actions.toggleTheme },
      { group: t('palette.actions'), label: t('palette.copy'), hint: profile.email, icon: 'copy', run: actions.copyEmail },
      { group: t('palette.actions'), label: t('palette.mail'), icon: 'mail', run: () => (window.location.href = `mailto:${profile.email}`) },
    ]
    const s = q.trim().toLowerCase()
    return s ? all.filter((i) => `${i.label} ${i.hint || ''} ${i.group}`.toLowerCase().includes(s)) : all
  }, [q, actions, t, tr])

  useEffect(() => {
    if (open) {
      setQ('')
      setIdx(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => setIdx(0), [q])

  if (!open) return null

  const run = (item) => {
    onClose()
    item.run()
  }

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, items.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && items[idx]) run(items[idx])
    if (e.key === 'Escape') onClose()
  }

  let lastGroup = null
  return (
    <div className="palette" onClick={onClose}>
      <div className="palette__box" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={t('nav.search')}>
        <div className="palette__search">
          <Icon name="search" size={18} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder={t('palette.placeholder')}
          />
          <kbd>Esc</kbd>
        </div>
        <ul className="palette__list">
          {items.length === 0 && <li className="palette__empty">{t('palette.empty')} “{q}”</li>}
          {items.map((item, i) => {
            const header = item.group !== lastGroup
            lastGroup = item.group
            return (
              <li key={item.group + item.label}>
                {header && <div className="palette__group">{item.group}</div>}
                <button
                  className={`palette__item ${i === idx ? 'is-active' : ''}`}
                  onMouseEnter={() => setIdx(i)}
                  onClick={() => run(item)}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                  {item.hint && <small>{item.hint}</small>}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="palette__foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> {t('palette.move')}</span>
          <span><kbd>Enter</kbd> {t('palette.open')}</span>
        </div>
      </div>
    </div>
  )
}
