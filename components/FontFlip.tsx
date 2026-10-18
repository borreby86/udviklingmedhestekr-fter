'use client'

import { useEffect, useState } from 'react'

// Skjult værktøj til at skifte brødtekstfont i hero og første sektion live.
// Slå til: åbn siden med ?fonts i adressen (huskes). Slå fra: ?fonts=off.
const fonts = [
  { id: 'raleway', name: 'Raleway 400' },
  { id: 'poppins', name: 'Poppins 300' },
  { id: 'dmsans', name: 'DM Sans 300' },
  { id: 'inter', name: 'Inter 300' },
  { id: 'jost', name: 'Jost 300 (original)' }
]

export function FontFlip() {
  const [index, setIndex] = useState(0)
  const [flip, setFlip] = useState(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    try {
      const param = new URLSearchParams(window.location.search).get('fonts')
      if (param === 'off') localStorage.removeItem('font-flip-on')
      else if (param !== null) localStorage.setItem('font-flip-on', '1')
      if (localStorage.getItem('font-flip-on') !== '1') return
      setEnabled(true)
      const saved = localStorage.getItem('font-flip')
      const i = fonts.findIndex((f) => f.id === saved)
      if (i >= 0) setIndex(i)
    } catch {}
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.dataset.font = fonts[index].id
    return () => {
      delete document.documentElement.dataset.font
    }
  }, [index, enabled])

  const go = (dir: number) => {
    const next = (index + dir + fonts.length) % fonts.length
    setIndex(next)
    setFlip((n) => n + 1)
    try {
      localStorage.setItem('font-flip', fonts[next].id)
    } catch {}
  }

  if (!enabled) return null

  return (
    <div className="ff-bar" role="group" aria-label="Skift skrifttype">
      <button type="button" onClick={() => go(-1)} aria-label="Forrige skrifttype">‹</button>
      <div className="ff-card">
        <span key={flip} className="ff-face">
          <span className="ff-aa">Aa</span>
          <span className="ff-name">{fonts[index].name}</span>
        </span>
      </div>
      <button type="button" onClick={() => go(1)} aria-label="Næste skrifttype">›</button>
    </div>
  )
}
