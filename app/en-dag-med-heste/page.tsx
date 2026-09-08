'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { trackEvent } from '@/lib/analytics'

const scrollNavLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Dagen', href: '#dagen' },
  { label: 'Det praktiske', href: '#praktisk' },
  { label: 'Mød Christina', href: '#christina' },
  { label: 'Datoer', href: '#datoer' }
]

const workshopDates = [
  { day: '26', month: 'September', year: '2026', time: 'kl. 11-15', isoDate: '2026-09-26T11:00:00+02:00' }
]

const dagensRytme = [
  { title: 'I møder hestene', description: 'I starter med at strigle og lære hesten at kende. I er to om hver hest, så I følges ad hele dagen og hjælper hinanden.' },
  { title: 'Øvelser i folden', description: 'Små opgaver hvor I sammen får hesten til at gå med jer over forhindringer. Det er sjovere - og sværere - end det lyder.' },
  { title: 'Frokost sammen', description: 'Vi spiser sammen midt på dagen. Det er en del af dagen at sænke tempoet og snakke.' },
  { title: 'Ridetur i skoven', description: 'I skiftes til at sidde på hesten, mens den anden går ved siden af. Hjelm er obligatorisk - vi har til låns.' },
  { title: 'Vi runder af', description: 'Kort runde til sidst, hvor I får sat ord på hvad I tager med jer fra dagen.' }
]

const detSkalDuVide = [
  {
    title: 'Du behøver ikke have redet før',
    description: 'Det er valgfrit om du vil ride. Du kan sagtens deltage med fuldt udbytte uden, og det er i sig selv en øvelse i at mærke efter.'
  },
  {
    title: 'I er to om hver hest',
    description: 'Det skaber tryghed og fjerner præstationspresset. I lærer hesten at kende sammen.'
  },
  {
    title: 'Tag tøj på der må blive beskidt',
    description: 'Lukkede sko og bukser med lidt stræk i (så de ikke revner, når du skal op på hesten). Tøj der passer til vejret.'
  },
  {
    title: 'Frokost er inkluderet',
    description: 'Du behøver ikke tage mad med - vi sørger for frokost og let forplejning gennem dagen.'
  }
]

export default function EnDagMedHestePage() {
  const heroRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<typeof workshopDates[0] | null>(null)
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

  const openModal = (date: typeof workshopDates[0]) => {
    setSelectedDate(date)
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
    setSelectedDate(null)
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
      formType: 'tilmelding-en-dag-med-heste',
      workshopDate: selectedDate ? `${selectedDate.day}. ${selectedDate.month} ${selectedDate.year}` : '',
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
        trackEvent('form_submit', { form_type: 'tilmelding-en-dag-med-heste' })
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
            <img src="/unge-med-heste-hero.jpg" alt="En dag med heste, ro og natur" style={{ transform: 'scale(1.32) translateX(13%)' }} />
          </motion.div>
          <div className="workshop-hero-overlay" />
          <div className="workshop-hero-content-full">
            <motion.div
              className="workshop-hero-text-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label">Workshop for unge</p>
              <h1>En dag med <em>heste, ro</em> og natur</h1>
              <p className="workshop-hero-tagline">For dig der er nysgerrig på heste og elsker tid i naturen</p>
              <p className="workshop-hero-desc">
                4 timer i Hørsholm hvor du møder hestene, lærer at passe og pleje dem, og slutter med en lille ridetur i skoven. Du behøver ikke have redet før, og du behøver ikke være god til noget. Du skal bare have lyst til at være tæt på et stort dyr en hel dag og opleve hvad der sker, når man sænker tempoet.
              </p>
              <a href="#datoer" className="cta-button">
                <span>Se datoer og tilmeld dig</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Tilbuddet i ord - solid (buffer mellem hero og næste billede-sektion) */}
        <section className="workshop-forloeb" id="dagen">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-forloeb-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">Hvad sker der den dag?</p>
              <h2>I er to om hver hest - I følges ad gennem hele dagen</h2>
              <p className="workshop-forloeb-intro">
                Du lærer at passe og pleje hesten, og hvordan man skaber forbindelse til så stort et dyr - så du har tillid til den, og den til dig - inden I skal ud på en lille ridetur i skoven.
              </p>
              <p className="workshop-forloeb-intro" style={{ marginTop: '1rem' }}>
                Vi veksler mellem aktivitet og pauser med korte snakke, hvor I får plads til at sætte ord på det I oplever. Frokosten midt på dagen er en del af dagen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dagens rytme */}
        <section className="workshop-detailed">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-detailed-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Dagens rytme</p>
              <h2>Sådan ser dagen ud</h2>
            </motion.div>

            <motion.div
              className="workshop-phase workshop-phase-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="workshop-phase-header">
                <span className="phase-label">Kl. 11-15 · 4 timer · frokost inkluderet</span>
                <h3>Fra første hilsen til ridetur i skoven</h3>
              </div>
              <div className="workshop-during-steps">
                {dagensRytme.map((step, index) => (
                  <div key={index} className="during-step">
                    <span className="during-step-number">{index + 1}</span>
                    <div className="during-step-content">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Det skal du vide */}
        <section className="workshop-benefits-new" id="praktisk">
          <div className="workshop-container-wide">
            <div className="workshop-benefits-header">
              <p className="section-label">Det skal du vide</p>
              <h2>Det praktiske</h2>
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
                  {detSkalDuVide.map((item, index) => (
                    <div key={index} className="workshop-benefit-item">
                      <span className="benefit-number">0{index + 1}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mød Christina */}
        <section className="workshop-instructors" id="christina">
          <div className="workshop-container-wide">
            <motion.div
              className="workshop-instructors-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">Mød Christina</p>
              <h2>Hvem du kommer til at hænge ud med</h2>
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
                  <h3>Christina</h3>
                  <span className="instructor-card-title">Din vært på dagen</span>
                  <p>Jeg har haft heste i over 30 år, og er trænet til at arbejde med mennesker der har brug for ro. Jeg siger det her, så du ved det: Du behøver ikke kunne noget på forhånd. Du behøver ikke være god til noget. Vi finder det rigtige tempo for dig - sammen med hestene.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Datoer */}
        <section className="workshop-dates-section workshop-dates-light" id="datoer">
          <div className="workshop-dates-bg">
            <img src="/unge-med-heste-datoer.jpg" alt="Unge med heste i Nordsjælland" />
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
              <p className="section-label">Datoer</p>
              <h2>Vælg din dag</h2>
              <p className="workshop-dates-intro">
                Løjeltevej 16, 2970 Hørsholm. Kl. 11-15. Plads til 6-8 unge pr. dag.
              </p>
            </motion.div>

            <div className="workshop-date-cards-vertical">
              {workshopDates.map((date, index) => (
                <motion.button
                  key={index}
                  onClick={() => openModal(date)}
                  className="workshop-date-card workshop-date-card-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <time dateTime={date.isoDate} className="date-card-date">
                    <div className="date-card-day-month">
                      <span className="date-card-day">{date.day}</span>
                      <span className="date-card-month">{date.month}</span>
                    </div>
                    <span className="date-card-year">{date.year}</span>
                  </time>
                  <div className="date-card-time">{date.time}</div>
                  <div className="date-card-divider" />
                  <div className="date-card-action">
                    <span>Tilmeld dig</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer hideCta />

      {/* Tilmelding modal */}
      <AnimatePresence>
        {modalOpen && selectedDate && (
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
                  <p className="section-label">Tilmelding</p>
                  <h3>{selectedDate.day}. {selectedDate.month} {selectedDate.year}</h3>
                  <p className="modal-info">{selectedDate.time} · Løjeltevej 16, 2970 Hørsholm</p>
                </div>

                {submitStatus === 'success' ? (
                  <div className="form-success-card">
                    <div className="form-success-card-icon">
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3>Tak for din tilmelding</h3>
                    <p>Du modtager en bekræftelse på mail inden for 24 timer.</p>
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
                      <span>{isSubmitting ? 'Sender...' : 'Send tilmelding'}</span>
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
