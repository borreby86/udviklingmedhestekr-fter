'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { trackEvent } from '@/lib/analytics'

const scrollNavLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Tilbuddet', href: '#tilbud' },
  { label: 'Formater', href: '#formater' },
  { label: 'Byggesten', href: '#aktiviteter' },
  { label: 'Skræddersyet', href: '#skraeddersyet' },
  { label: 'Forespørg', href: '#forespoerg' }
]

const formater = [
  {
    title: 'Individuel session',
    duration: '1-2 timer',
    description: 'Den enkelte unge i 1:1 med hest og terapeut. Velegnet til unge der har brug for tryghed, ro og et tempo der følger dem - eller som forberedelse til at deltage i gruppe senere.'
  },
  {
    title: 'Lille gruppe',
    duration: '2-4 unge · 2-3 timer',
    description: 'Mindre enheder fra fx en klasse, et opholdssted eller en bostøtte-gruppe. Skaber fortrolighed uden at præstationspresset i en stor gruppe tager over.'
  },
  {
    title: 'Dagsworkshop',
    duration: '6-8 unge · 4 timer',
    description: 'En hel dag med heste, frokost og ridetur i naturen. Fællesskab i mindre format, hvor de unge er to og to om hver hest og følges ad gennem hele dagen.'
  },
  {
    title: 'Forløb over tid',
    duration: 'Flere besøg · uger eller måneder',
    description: 'Den samme gruppe eller den samme unge over flere møder. Giver tid til at bygge tillid op, integrere oplevelserne og se forandringen sætte sig.'
  }
]

const aktiviteter = [
  { title: 'Strigle og connecte med hest', description: 'Første kontakt - hesten lærer den unge at kende, og omvendt' },
  { title: 'Øvelser i folden', description: 'Små forhindringer der træner tillid og samarbejde' },
  { title: 'Refleksionsrunder', description: 'Korte samtaler hvor oplevelsen får ord og integreres' },
  { title: 'Nervesystemsøvelser', description: 'Kropslige øvelser der lærer den unge at finde ro som anker' },
  { title: 'Ridning (valgfrit)', description: 'Det er valgfrit at ride - også at deltage helt uden er en øvelse' },
  { title: 'Ridetur i naturen', description: 'Tur i skoven hvor de unge skiftes til at sidde på hesten' },
  { title: 'Frokost sammen', description: 'En del af rammen ved længere forløb - fællesskab uden krav' },
  { title: 'Skriftlig opsamling', description: 'Mulighed for kort dokumentation til kommunens videre arbejde' }
]

const dagsForloeb = [
  'Velkomst og introduktion',
  'Strigle og connecte med hesten i par',
  'Kort "Hvordan var det?"-runde',
  'Øvelser i folden med små forhindringer',
  'Kort "Hvad skulle der til?"-runde',
  'Frokost sammen',
  'Ridetur i naturen, to og to om hver hest',
  'Afsluttende "Hvad tager I med?"-runde'
]

const udbytte = [
  {
    title: 'Kropslig oplevelse af ro',
    description: 'Et anker som de unge kan finde tilbage til - fx før en eksamen eller i pressede situationer'
  },
  {
    title: 'Fællesskab uden præstation',
    description: 'Et trygt rum hvor præstation ikke er i centrum, og hvor de unge kan lande i sig selv'
  },
  {
    title: 'Erfaring med samarbejde og grænser',
    description: 'Konkret øvebane i ansvar, samarbejde og kontakt med dyr'
  }
]

const maalgruppe = [
  'Unge med eksamensangst',
  'Unge i sårbare positioner',
  'SSP-samarbejde',
  'Anbragte unge',
  'Unge i mistrivsel',
  'Skolevægring',
  'Unge med sociale udfordringer',
  'Forebyggende indsats'
]

const skraeddersyet = [
  {
    title: 'Format og gruppestørrelse',
    description: '1:1, lille gruppe, dagsworkshop eller forløb - vi vælger det format der passer den enkelte eller gruppen'
  },
  {
    title: 'Fagligt fokus',
    description: 'Vinkles efter behov - eksamensangst, samarbejde, selvtillid, nervesystemsregulering eller noget helt fjerde'
  },
  {
    title: 'Periode og kadence',
    description: 'Hverdage eller weekend, sommerferieforløb, eller ugentlig kadence over en periode'
  },
  {
    title: 'Pårørende og fagperson',
    description: 'Mulighed for at inddrage forældre, kontaktperson eller mentor i dele af forløbet'
  },
  {
    title: 'Trygt afsæt',
    description: 'For unge der har brug for et roligt afsæt kan vi starte 1:1 og bygge op mod gruppedeltagelse'
  },
  {
    title: 'Dokumentation',
    description: 'Mulighed for skriftlig opsamling til kommunens videre arbejde med den unge'
  }
]

export default function KommunerUngePage() {
  const heroRef = useRef(null)
  const [showScrollNav, setShowScrollNav] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formLoadTime, setFormLoadTime] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollNav(window.scrollY > 400)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setFormLoadTime(Date.now())
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(form)
    const data = {
      name: formData.get('navn'),
      email: formData.get('email'),
      phone: formData.get('telefon'),
      company: formData.get('kommune'),
      message: formData.get('besked'),
      formType: 'forespoergsel-kommuner-unge',
      _honeypot: formData.get('website'),
      _loadTime: formLoadTime,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        trackEvent('form_submit', { form_type: 'forespoergsel-kommuner-unge' })
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main>
        <AnimatePresence>
          {showScrollNav && (
            <motion.div
              className="scroll-nav"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="scroll-nav-container">
                {scrollNavLinks.map((link, index) => (
                  <a key={index} href={link.href} className="scroll-nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero */}
        <section className="workshop-hero-full" ref={heroRef}>
          <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
            <img
              src="/rideterapi-unge.png"
              alt="Et mentalt frirum med heste for unge"
              style={{ filter: 'saturate(0.78) contrast(1.06) brightness(0.82)' }}
            />
          </motion.div>
          <div className="workshop-hero-overlay" />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 70% 40%, rgba(12,15,15,0.0) 0%, rgba(12,15,15,0.55) 70%, rgba(12,15,15,0.85) 100%), linear-gradient(180deg, rgba(12,15,15,0.25) 0%, rgba(12,15,15,0.0) 30%, rgba(12,15,15,0.45) 100%)',
              pointerEvents: 'none'
            }}
          />
          <div className="workshop-hero-content-full">
            <motion.div
              className="workshop-hero-text-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label">Tilbud til kommuner</p>
              <h1>Et mentalt <em>frirum</em> uden præstation</h1>
              <p className="workshop-hero-tagline">Hesteassisterede sessioner og forløb for unge med særlige behov</p>
              <p className="workshop-hero-desc">
                Individuelle sessioner, små grupper, dagsworkshops eller længere forløb i Hørsholm. Format, gruppestørrelse og fokus tilrettelægges efter den enkelte unge eller gruppes behov - så de får det rum, der virker for dem.
              </p>
              <p className="workshop-hero-cta-text">Skal vi sammensætte et tilbud til jer?</p>
              <a href="#forespoerg" className="cta-button">
                <span>Forespørg på et tilbud</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Tilbuddet - solid intro (buffer mellem hero og næste billede-sektion) */}
        <section className="workshop-forloeb" id="tilbud">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-forloeb-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Tilbuddet</p>
              <h2>De unge bliver set af hesten - før de bliver bedt om at præstere</h2>
              <p className="workshop-forloeb-intro">
                Essensen er den samme uanset format: Nærvær, samarbejde og kontakt med hestene i et tempo der følger den unge. Hesten reagerer ærligt og uden dom - det fjerner præstationsfølelsen og giver den unge en konkret oplevelse af, at de kan lande i sig selv.
              </p>
              <p className="workshop-forloeb-intro" style={{ marginTop: '1rem' }}>
                Der er ingen krav om hesteerfaring, og det er valgfrit om man vil ride. Også at deltage uden at ride er i sig selv en øvelse i at mærke efter. Vi veksler mellem aktivitet og pauser med korte refleksionsrunder, så oplevelsen integreres.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hvem er det for */}
        <section className="audience-section audience-solid">
          <div className="audience-content">
            <p className="audience-label">Hvem er det for?</p>
            <h2 className="audience-title">
              Unge der har gavn af et frirum<br />
              fra præstation og pres
            </h2>
            <div className="audience-tags">
              {maalgruppe.map((label, index) => (
                <span key={index} className={`audience-tag ${index === 2 ? 'highlighted' : ''}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Formater - de fire byggesten */}
        <section className="workshop-forloeb" id="formater">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-forloeb-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Formater</p>
              <h2>Vælg det format der passer</h2>
              <p className="workshop-forloeb-intro">
                Tilbuddet kan tage forskellige former. Vi finder sammen ud af, hvilken ramme der passer bedst til den enkelte unge eller gruppe - og kan kombinere flere undervejs i et forløb.
              </p>
            </motion.div>

            <div className="workshop-forloeb-cards">
              {formater.map((item, index) => (
                <motion.div
                  key={index}
                  className="workshop-forloeb-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                >
                  <span className="forloeb-card-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <span className="forloeb-card-subtitle">{item.duration}</span>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aktiviteter / byggesten */}
        <section className="workshop-detailed" id="aktiviteter">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-detailed-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Byggesten</p>
              <h2>Aktiviteter vi kan kombinere</h2>
              <p className="workshop-forloeb-intro" style={{ maxWidth: 720, margin: '1rem auto 0' }}>
                Hvert format sammensættes af elementer fra denne palette. Hvad der indgår, afhænger af tid, gruppe og fokus.
              </p>
            </motion.div>

            <motion.div
              className="workshop-phase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginTop: '2rem' }}
            >
              <div className="workshop-during-steps">
                {aktiviteter.map((item, index) => (
                  <div key={index} className="during-step">
                    <span className="during-step-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="during-step-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Eksempel på dagsforløb */}
            <motion.div
              className="workshop-phase workshop-phase-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginTop: '3rem' }}
            >
              <div className="workshop-phase-header">
                <span className="phase-label">Eksempel · dagsworkshop, 4 timer</span>
                <h3>Sådan kunne en dag se ud</h3>
              </div>
              <ul className="method-card-list" style={{ maxWidth: 720, margin: '1.5rem auto 0' }}>
                {dagsForloeb.map((step, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.8 }}>
                Et 1:1-forløb eller en lille gruppe sammensættes anderledes - vi tilpasser tempo og elementer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Udbytte */}
        <section className="workshop-benefits-new">
          <div className="workshop-container-wide">
            <div className="workshop-benefits-header">
              <p className="section-label">Udbytte</p>
              <h2>Det de unge får med</h2>
            </div>

            <div className="workshop-benefits-columns">
              <motion.div
                className="workshop-benefit-column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ gridColumn: '1 / -1' }}
              >
                <div className="workshop-benefit-list">
                  {udbytte.map((b, index) => (
                    <div key={index} className="workshop-benefit-item">
                      <span className="benefit-number">0{index + 1}</span>
                      <div>
                        <h4>{b.title}</h4>
                        <p>{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skræddersyet løsning */}
        <section className="workshop-forloeb" id="skraeddersyet">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-forloeb-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Skræddersyet løsning</p>
              <h2>Vi tilrettelægger efter jeres unge</h2>
              <p className="workshop-forloeb-intro">
                Når I forespørger, taler vi sammen om hvilke unge det er for, hvad I gerne vil opnå, og hvilke rammer der giver mening. Derefter sammensætter vi et konkret oplæg.
              </p>
            </motion.div>

            <div className="workshop-forloeb-cards">
              {skraeddersyet.map((item, index) => (
                <motion.div
                  key={index}
                  className="workshop-forloeb-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <span className="forloeb-card-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Om underviseren */}
        <section className="workshop-instructors">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-instructors-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Underviseren</p>
              <h2>Hvem står bag?</h2>
            </motion.div>

            <div className="workshop-instructors-grid" style={{ gridTemplateColumns: '1fr', maxWidth: 720, margin: '0 auto' }}>
              <motion.div
                className="workshop-instructor-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="instructor-card-image">
                  <img src="/christina-hest.jpg" alt="Christina Borreby med hest" />
                </div>
                <div className="instructor-card-content">
                  <h3>Christina Borreby</h3>
                  <span className="instructor-card-title">Cert. ID-Psykoterapeut & Cand.negot.</span>
                  <p>30+ års erfaring med heste og mange års arbejde med mennesker i sårbare overgange. Christina skaber et trygt rum, hvor præstation ikke er i centrum, og hvor de unge kan lande i sig selv.</p>
                  <div className="instructor-card-badges">
                    <span>Cert. ID-Psykoterapeut</span>
                    <span>Cand.negot.</span>
                    <span>30+ års hesteerfaring</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Praktisk og pris */}
        <section className="workshop-dates-section workshop-dates-light">
          <div className="workshop-dates-bg">
            <img src="/m og c går.JPG" alt="Christina i naturen" />
          </div>
          <div className="workshop-dates-overlay" />
          <div className="workshop-dates-container-left">
            <motion.div
              className="workshop-dates-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Praktisk og pris</p>
              <h2>Rammer der virker</h2>
              <p className="workshop-dates-intro">
                Løjeltevej 16, 2970 Hørsholm. 4 heste til rådighed. Mulighed for forplejning ved længere besøg.
              </p>
            </motion.div>

            <motion.div
              className="workshop-pricing-compact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="pricing-compact-main">
                <span className="pricing-compact-label">Pris</span>
                <span className="pricing-compact-amount">Efter aftale</span>
                <span className="pricing-compact-suffix">introduktionspris ved første samarbejde</span>
              </div>
              <div className="pricing-compact-includes">
                <span>Pris afhænger af format, omfang og om det er enkeltbesøg eller forløb. I får et konkret tilbud, når vi har talt om jeres behov. Hjelm er obligatorisk ved ridning - vi har til låns. Samtykke vedr. egen forsikring indhentes ved tilmelding.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Forespørgsel */}
        <section className="workshop-detailed" id="forespoerg">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-detailed-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Forespørg på tilbud</p>
              <h2>Lad os tale om jeres unge</h2>
              <p className="workshop-forloeb-intro" style={{ maxWidth: 640, margin: '1rem auto 0' }}>
                Skriv lidt om hvilke unge det skal være for, hvor mange, og hvad I tænker - så vender jeg tilbage med et konkret oplæg.
              </p>
            </motion.div>

            {submitStatus === 'success' ? (
              <div className="form-success-card" style={{ maxWidth: 640, margin: '2rem auto 0' }}>
                <div className="form-success-card-icon">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3>Tak for din henvendelse</h3>
                <p>Jeg vender tilbage med et oplæg inden for 2 hverdage.</p>
              </div>
            ) : (
              <motion.form
                className="modal-form"
                onSubmit={handleSubmit}
                style={{ maxWidth: 640, margin: '2rem auto 0' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website-kommuner">Website</label>
                  <input type="text" id="website-kommuner" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="kommuner-navn">Navn *</label>
                  <input type="text" id="kommuner-navn" name="navn" required placeholder="Dit fulde navn" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="kommuner-email">E-mail *</label>
                  <input type="email" id="kommuner-email" name="email" required placeholder="din@email.dk" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="kommuner-telefon">Telefon</label>
                  <input type="tel" id="kommuner-telefon" name="telefon" placeholder="Dit telefonnummer" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="kommuner-kommune">Kommune / arbejdssted</label>
                  <input type="text" id="kommuner-kommune" name="kommune" placeholder="Fx Hørsholm Kommune, SSP" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="kommuner-besked">Beskriv jeres behov</label>
                  <textarea
                    id="kommuner-besked"
                    name="besked"
                    rows={5}
                    placeholder="Hvilke unge er det for? Antal, alder, særlige hensyn? Tænker I 1:1, gruppe eller forløb?"
                  />
                </div>
                <button type="submit" className="modal-submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sender...' : 'Send forespørgsel'}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                {submitStatus === 'error' && (
                  <p className="form-error">Der opstod en fejl. Skriv til <a href="mailto:borreby@gmail.com">borreby@gmail.com</a> eller ring til Christina på <a href="tel:+4522471247">22 47 12 47</a></p>
                )}
              </motion.form>
            )}

            {/* Cross-link til de unge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(184,160,122,0.25)' }}
            >
              <p className="section-label">Er du selv ung?</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 400, margin: '0.75rem 0 1rem' }}>
                Du kan tilmelde dig en workshop direkte
              </h3>
              <a href="/en-dag-med-heste" className="cta-button" style={{ display: 'inline-flex' }}>
                <span>Se datoer og tilmeld dig</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer hideCta />
    </>
  )
}
