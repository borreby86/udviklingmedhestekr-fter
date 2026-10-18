'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './Icons'

// Ord mellem *stjerner* fremhæves med guld
const testimonials = [
  {
    quote: '"Hestens adfærd hjalp mig til at fokusere på og *forstå min adfærd*. På godt og ondt. Og det var *det hele værd*."',
    name: 'Kim Høgh',
    role: 'Bestyrelsesformand & Tidl. CEO, Hjerteforeningen'
  },
  {
    quote: '"Jeg kunne tydeligt mærke, hvordan mit eget *indre nærvær og ro* påvirkede hestens tillid til mig. Det var en vigtig påmindelse om, hvordan vores energi og *autenticitet* skaber *følgeskab*."',
    name: 'Søren Truelsen',
    role: 'CEO, Nordic Bloom'
  },
  {
    quote: '"Det befriende ved denne metode er, at man kan øve sig på at være *100% autentisk* uden at der går rollespil i den."',
    name: 'Mads Elk',
    role: 'CEO, Mind Balance System ApS'
  },
  {
    quote: '"Noget af min *ubevidste adfærd blev bevidst* og det passer perfekt ind i mit arbejde med mig selv."',
    name: 'Anne Marie Valentin',
    role: 'Indehaver, Icebreaker Academy'
  }
]

function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, k) => (k % 2 ? <em key={k} className="tslide-hl">{part}</em> : part))}
    </>
  )
}

export default function TestimonialSlider() {
  const [i, setI] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const n = testimonials.length
  const t = testimonials[i]

  const goTo = useCallback((next: number) => {
    setFading(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setI(next)
      setFading(false)
    }, 450)
  }, [])

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setTimeout(() => goTo((i + 1) % n), 5000)
    return () => clearTimeout(id)
  }, [i, paused, goTo, n])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <section className="tslide-section" id="udtalelser" aria-label="Udtalelser" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="section-label">Det siger deltagerne</p>
      <div className="tslide-row">
        <button className="tslide-nav" onClick={() => goTo((i - 1 + n) % n)} aria-label="Forrige udtalelse">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div className={`tslide-slide${fading ? ' is-fading' : ''}`} aria-live="polite">
          <blockquote className="tslide-quote"><Highlighted text={t.quote} /></blockquote>
          <p className="tslide-name">{t.name}</p>
          <p className="tslide-role">{t.role}</p>
        </div>
        <button className="tslide-nav" onClick={() => goTo((i + 1) % n)} aria-label="Næste udtalelse">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div className="tslide-dots">
        {testimonials.map((_, d) => (
          <button key={d} className={`tslide-dot${d === i ? ' active' : ''}`} onClick={() => goTo(d)} aria-label={`Vis udtalelse ${d + 1}`} />
        ))}
      </div>
      <div className="tslide-cta">
        <a href="/referencer" className="cta-button cta-button-outline">
          <span>Flere udtalelser</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
