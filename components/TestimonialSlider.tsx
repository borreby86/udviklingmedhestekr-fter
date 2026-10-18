'use client'

import { useState } from 'react'
import { ArrowIcon } from './Icons'

const testimonials = [
  {
    quote: '"Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd."',
    name: 'Kim Høgh',
    role: 'Bestyrelsesformand & Tidl. CEO, Hjerteforeningen'
  },
  {
    quote: '"Det befriende ved denne metode er, at man kan øve sig på at være 100% autentisk uden at der går rollespil i den."',
    name: 'Mads Elk',
    role: 'CEO, Mind Balance System ApS'
  },
  {
    quote: '"Noget af min ubevidste adfærd blev bevidst og det passer perfekt ind i mit arbejde med mig selv."',
    name: 'Anne Marie Valentin',
    role: 'Indehaver, Icebreaker Academy'
  }
]

export default function TestimonialSlider() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const t = testimonials[i]

  return (
    <section className="tslide-section" id="udtalelser" aria-label="Udtalelser">
      <p className="section-label">Det siger deltagerne</p>
      <div className="tslide-row">
        <button className="tslide-nav" onClick={() => setI((i - 1 + n) % n)} aria-label="Forrige udtalelse">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div className="tslide-slide" key={i} aria-live="polite">
          <blockquote className="tslide-quote">{t.quote}</blockquote>
          <p className="tslide-name">{t.name}</p>
          <p className="tslide-role">{t.role}</p>
        </div>
        <button className="tslide-nav" onClick={() => setI((i + 1) % n)} aria-label="Næste udtalelse">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div className="tslide-dots">
        {testimonials.map((_, d) => (
          <button key={d} className={`tslide-dot${d === i ? ' active' : ''}`} onClick={() => setI(d)} aria-label={`Vis udtalelse ${d + 1}`} />
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
