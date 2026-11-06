'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { trackEvent } from '@/lib/analytics'

const gaarHjemMed = [
  'En enkel vejrtrækningsteknik, de kan bruge i skolen og derhjemme',
  'Oplevelsen af at mestre relationen til et 500 kilo stort dyr, som giver gå-på-mod til andre svære ting',
  'Mere selvtillid og forståelse af, hvordan deres egen ro smitter'
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
    description: 'En hel dag med heste, frokost og at sidde op på hesten. Fællesskab i mindre format, hvor de unge er to og to om hver hest og følges ad gennem hele dagen.'
  },
  {
    title: 'Forløb over tid',
    duration: 'Flere besøg · uger eller måneder',
    description: 'Den samme gruppe eller den samme unge over flere møder. Giver tid til at bygge tillid op, integrere oplevelserne og se forandringen sætte sig.'
  }
]

export default function EnDagMedHestePage() {
  const heroRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formLoadTime, setFormLoadTime] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const openModal = () => {
    setModalOpen(true)
    setFormLoadTime(Date.now())
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${window.scrollY}px`
  }

  const closeModal = () => {
    const scrollY = document.body.style.top
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    setModalOpen(false)
    setSubmitStatus('idle')
  }

  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(form)
    const data = {
      name: formData.get('navn'),
      email: formData.get('email'),
      phone: formData.get('telefon'),
      message: formData.get('besked'),
      formType: 'venteliste-en-dag-med-heste',
      workshopDate: 'Forår 2027',
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
        trackEvent('form_submit', { form_type: 'venteliste-en-dag-med-heste' })
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
        {/* Hero */}
        <section className="workshop-hero-full" ref={heroRef}>
          <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
            <img src="/unge-heste-grimer.jpg" alt="En dag med heste, ro og natur" style={{ objectPosition: 'center 30%' }} />
          </motion.div>
          <div className="workshop-hero-overlay" />
          <div
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(12,15,15,0) 48%, rgba(12,15,15,0.22) 100%)', pointerEvents: 'none' }}
          />
          <div className="workshop-hero-content-full">
            <motion.div
              className="workshop-hero-text-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label">Workshop for unge</p>
              <h1>En dag med <em>heste, ro</em> og natur</h1>
              <p className="workshop-hero-tagline">For unge mellem 12 og 18 år - Udbydes gennem UngFredensborg</p>
              <p className="workshop-hero-desc">
                Når tempoet sænkes, opstår der plads til at lykkes. At få et stort dyr til at stole på sig giver selvtillid, en konkret oplevelse af mestring og et bedre selvværd, som den unge tager med sig hjem.
              </p>
              <button type="button" onClick={openModal} className="cta-button">
                <span>Få besked om nye datoer</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Om workshoppen - tekst venstre, collage højre */}
        <section className="unge-intro" id="dagen">
          <div className="unge-intro-grid">
            <motion.div
              className="unge-intro-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">Om workshoppen</p>
              <h2>Hestene er læremestrene - ikke målet</h2>
              <p>
                Denne workshop er for unge i alderen 12-18 år. De unge møder hestene, lærer at passe og pleje dem og slutter dagen med at sidde på hesten, med fokus på deres egen ro som styrepind. Det kræver ingen forhåndserfaring med heste.
              </p>
              <p>
                Det her er ikke en rideskole. Hestene er ikke målet, de er læremestrene. En hest reagerer på det, man udstråler, ikke på det, man siger. Når den unge lærer at skabe ro i sig selv gennem vejrtrækningen, kan de mærke, at hesten falder til ro sammen med dem. Den oplevelse gør det tydeligt, hvordan deres egen indre tilstand påvirker dem selv og menneskerne omkring dem.
              </p>
            </motion.div>

            <motion.div
              className="unge-collage"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img className="unge-collage-tall" src="/unge-heste-naerkontakt.jpg" alt="Unge møder hesten og lærer at passe den" />
              <img src="/unge-heste-folden.jpg" alt="Unge fører hesten gennem øvelser i folden" />
              <img src="/unge-heste-ridning.jpg" alt="Unge sidder op på hesten" />
            </motion.div>
          </div>
        </section>

        {/* Eksempel på en workshop i praksis */}
        <section className="workshop-detailed">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-detailed-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Eksempel på en workshop i praksis</p>
              <h2>Sådan foregår en typisk dag</h2>
            </motion.div>

            <div className="praksis-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="workshop-forloeb-intro" style={{ color: 'var(--color-warm-sand)', textAlign: 'left' }}>
                  Dagen starter typisk med ro: vejrtrækning og nærvær, før de unge går ind til hestene. Derefter lærer de at passe og pleje hesten og at skabe kontakt til et stort dyr, så de har tillid til den, og den til dem, inden de sidder op.
                </p>
                <p className="workshop-forloeb-intro" style={{ color: 'var(--color-warm-sand)', textAlign: 'left', marginTop: '1rem' }}>
                  Vi veksler typisk mellem aktivitet og korte samtaler, hvor de unge får hjælp til at sætte ord på det, de oplever. Frokosten midt på dagen er en del af dagen.
                </p>
              </motion.div>

              <motion.div
                className="workshop-phase phase-highlight-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="workshop-phase-header">
                  <h3>Det går de unge hjem med</h3>
                </div>
                <ul className="method-card-list">
                  {gaarHjemMed.map((item, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Formater - til kommuner og fagfolk */}
        <section className="workshop-dates-section workshop-dates-light" id="formater">
          <div className="workshop-dates-bg">
            <img src="/unge-heste-pony.jpg" alt="Ung pige rider på pony" />
          </div>
          <div className="workshop-dates-overlay" />
          <div
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, background: 'rgba(244,245,247,0.55)', pointerEvents: 'none' }}
          />
          <div className="workshop-dates-container" style={{ maxWidth: 1100 }}>
            <motion.div
              className="workshop-dates-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Tilbud til kommuner</p>
              <h2>Et mentalt frirum uden præstation</h2>
              <p className="workshop-dates-intro">Hesteassisterede sessioner og forløb for unge i mistrivsel</p>
              <p className="workshop-forloeb-intro" style={{ color: 'var(--color-soft-brown)', marginTop: '1.5rem' }}>
                Workshoppen kan også tilbydes som en målrettet indsats for unge med særlige behov, fx unge med højt skolefravær, angst, uro eller lavt selvværd. Det foregår som individuelle sessioner, små grupper, dagsworkshops eller længere forløb i Hørsholm.
              </p>
            </motion.div>

            <div className="workshop-forloeb-cards formater-grid">
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

            <p className="workshop-forloeb-intro" style={{ color: 'var(--color-soft-brown)', marginTop: '3rem', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
              Format, gruppestørrelse og fokus tilrettelægges efter den enkelte unge eller gruppens behov, så de får det rum, der virker for dem.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a href="/kontakt" className="cta-button">
                <span>Kontakt mig om et forløb</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Hvem er det for - genbrugt direkte fra kommuner-unge */}
        <section className="audience-section audience-solid" id="hvem-er-det-for">
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

        {/* Om mig - samme design som forsiden */}
        <section className="about-banner" id="om-mig">
          <div className="about-banner-bg">
            <img src="/lederudvikling heste.jpg" alt="Christina Borreby med hest" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
          </div>
          <div className="about-banner-overlay" />
          <div className="about-banner-container">
            <motion.div
              className="about-banner-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">Om mig</p>
              <h2>Christina Borreby</h2>
              <p className="about-credentials">Certificeret psykoterapeut · Cand.negot · 30 års erfaring med heste</p>
              <p>Heste har været mine læremestre, siden jeg var barn - uden jeg egentlig vidste det. De var mit frirum i en præstationsfokuseret hverdag med skole og forventninger. Derfor har jeg en stor passion for at give unge i dag et lignende sted, særligt med tanke på hvor svært det er at være ung nu.</p>
              <p>Som psykoterapeut har jeg arbejdet særligt med unge i mistrivsel, blandt andet som mentor hos en anden aktør i kommunen. Her har jeg set, hvor meget det betyder, når unge får et rum uden krav om at præstere, hvor de kan mærke sig selv og opleve at lykkes.</p>
              <p>Hestene giver de unge noget, som samtale alene sjældent kan: en konkret oplevelse af ro, mestring og tillid, som de kan tage med sig hjem og i skole.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer hideCta />

      {/* Tilmelding modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              <div className="modal-body">
                <div className="modal-header">
                  <p className="section-label">Venteliste</p>
                  <h3>Få besked om forår 2027</h3>
                  <p className="modal-info">2970 Hørsholm (kræver bil)</p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="form-success-card">
                    <div className="form-success-card-icon">
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3>Tak, du er på ventelisten</h3>
                    <p>Du hører fra os, når nye datoer åbner.</p>
                  </div>
                ) : (
                  <form className="modal-form" onSubmit={handleModalSubmit}>
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="website-endag">Website</label>
                      <input type="text" id="website-endag" name="website" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="modal-form-group">
                      <label htmlFor="endag-navn">Dit navn *</label>
                      <input type="text" id="endag-navn" name="navn" required placeholder="Dit fulde navn" />
                    </div>
                    <div className="modal-form-group">
                      <label htmlFor="endag-email">E-mail *</label>
                      <input type="email" id="endag-email" name="email" required placeholder="din@email.dk" />
                    </div>
                    <div className="modal-form-group">
                      <label htmlFor="endag-telefon">Telefon</label>
                      <input type="tel" id="endag-telefon" name="telefon" placeholder="Dit telefonnummer" />
                    </div>
                    <div className="modal-form-group">
                      <label htmlFor="endag-besked">Er der noget jeg skal vide?</label>
                      <textarea
                        id="endag-besked"
                        name="besked"
                        rows={3}
                        placeholder="Fx hvis du har redet før, allergier, eller noget andet"
                      />
                    </div>
                    <button type="submit" className="modal-submit" disabled={isSubmitting}>
                      <span>{isSubmitting ? 'Sender...' : 'Skriv mig på ventelisten'}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                    {submitStatus === 'error' && (
                      <p className="form-error">Der opstod en fejl. Skriv til <a href="mailto:borreby@gmail.com">borreby@gmail.com</a> eller ring til Christina på <a href="tel:+4522471247">22 47 12 47</a></p>
                    )}
                  </form>
                )}

                <p className="modal-disclaimer">
                  Hvis du er under 18, beder vi om samtykke fra en forælder ved bekræftelsen.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
