'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const workshopDates = [
  { month: 'April', year: '2026' },
  { month: 'Maj', year: '2026' }
]

const personalBenefits = [
  {
    title: "Autentisk lederskab i kroppen",
    description: "En kropslig oplevelse af, hvornår du står stærkt i dit lederskab, og hvornår du mister fodfæstet"
  },
  {
    title: "Øjeblikkelig, ærlig feedback",
    description: "Hesten reagerer på din kommunikation og tilstedeværelse her og nu, uden høflige hensyn"
  },
  {
    title: "Nærvær og tillid",
    description: "Større bevidsthed om din energi og din evne til at skabe ægte kontakt og følgeskab"
  },
  {
    title: "Indsigt i mønstre",
    description: "Forstå dine styrker og blinde vinkler som leder, både de synlige og de skjulte"
  }
]

const orgBenefits = [
  {
    title: "Tillid gennem autenticitet",
    description: "Ledelse der hviler på ægthed skaber større tillid og følgeskab i teamet"
  },
  {
    title: "Klar kommunikation",
    description: "Mere nærværende beslutningstagere der kommunikerer tydeligt og effektivt"
  },
  {
    title: "Reguleret nervesystem",
    description: "En leder der kan regulere sit eget nervesystem styrker hele arbejdsmiljøet"
  },
  {
    title: "Komplekse relationer",
    description: "Øget evne til at navigere i svære samtaler og skabe samarbejde på tværs"
  }
]

const timelineSteps = [
  {
    time: "9:00",
    title: "Ankomst & morgenbrød",
    description: "Kaffe, te og let forplejning. Vi lander i rummet og sætter intentionen for dagen."
  },
  {
    time: "9:30",
    title: "Introduktion til hestene",
    description: "Du møder hestene og lærer om deres sprog. Vi gennemgår dagens øvelser og rammer."
  },
  {
    time: "10:00",
    title: "Første øvelse",
    description: "Individuel interaktion med hesten. Her møder du dit lederskab og dig selv, uden filter."
  },
  {
    time: "10:45",
    title: "Refleksion & ny øvelse",
    description: "Faciliteret samtale om dine oplevelser, efterfulgt af en dybere øvelse med fokus på det, der viste sig."
  },
  {
    time: "11:30",
    title: "Integration & afrunding",
    description: "Vi samler op på dagens indsigter og arbejder med, hvordan du tager læringen med hjem i din hverdag."
  }
]

function StickyTextSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1])

  const y1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 0, -30])
  const y2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [30, 0, 0, -30])
  const y3 = useTransform(scrollYProgress, [0.65, 0.75, 1], [30, 0, 0])

  return (
    <section className="sticky-text-section" ref={sectionRef}>
      <div className="sticky-text-container">
        <div className="sticky-text-content">
          <div className="scroll-indicator">
            <motion.div
              className="scroll-line"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity1, y: y1 }}
          >
            <h2>God ledelse begynder med <em>selvindsigt</em></h2>
          </motion.div>

          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity2, y: y2 }}
          >
            <p>
              Ægte lederskab begynder med dig og ikke strategi. Din evne til at forstå, hvordan du påvirker andre og om du skaber troværdighed, er altafgørende for at opnå følgeskab.
            </p>
          </motion.div>

          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity3, y: y3 }}
          >
            <p className="sticky-text-gold">
              Men hvor ofte får du mulighed for at se dig selv som leder, helt uden filter, og med øjeblikkelig feedback?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function LederworkshopPage() {
  const heroRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const openModal = (month: string) => {
    setSelectedDate(month)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedDate(null)
    setSubmitStatus('idle')
    document.body.style.overflow = ''
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
      formType: 'venteliste-lederworkshop',
      workshopDate: selectedDate ? `${selectedDate} 2026` : '',
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
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

      {/* Hero Section */}
      <section className="workshop-hero-full" ref={heroRef}>
        <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
          <img src="/lederworkshop.jpg" alt="Lederworkshop med heste" />
        </motion.div>
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-content-full">
          <motion.div
            className="workshop-hero-text-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Lederworkshop med hestekræfter</p>
            <h1>Autentisk lederskab <em>uden filter</em></h1>
            <p className="workshop-hero-tagline">Følgeskab starter med relation, ikke retning.</p>
            <p className="workshop-hero-desc">
              Denne workshop giver dig klarhed over dine adfærdsmønstre, ressourcer og blind spots, så du kan lede fra dit autentiske selv. Gennem mødet med hesten får du øjeblikkelig, ærlig feedback på dit lederskab, uden filter.
            </p>
            <p className="workshop-hero-cta-text">Er du klar til at træne dit autentiske lederskab i praksis?</p>
            <a href="#tilmelding" className="cta-button">
              <span>Se kommende datoer</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sticky Scroll Text Section */}
      <StickyTextSection />

      {/* Why Section */}
      <section className="workshop-why-new">
        <div className="workshop-why-bg">
          <img src="/playboy.jpeg" alt="Hest i naturen - hesteassisteret lederudvikling" />
        </div>
        <div className="workshop-why-overlay" />
        <div className="workshop-container">
          <motion.div
            className="workshop-why-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Metoden</p>
            <h2>Hvorfor træne lederskab med heste?</h2>
            <p>
              Hestene spejler din autenticitet, dit nærvær og din energi i nuet. De viser præcist, hvor du står stærkt, og hvor du ubevidst mister kontakt eller gennemslagskraft.
            </p>
            <p>
              Heste er byttedyr. De har overlevet i millioner af år ved at aflæse intention og energi hos dem omkring sig. De reagerer ikke på titler, ord eller charme, kun på det, du reelt udstråler.
            </p>
            <p>
              Det gør dem til brutalt ærlige spejle. Når hesten følger dig, ved du, at dit lederskab virker. Når den vender sig væk, får du værdifuld information om, hvad der mangler.
            </p>
          </motion.div>

          <motion.div
            className="workshop-why-points"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </span>
              <div>
                <h4>Øjeblikkelig respons</h4>
                <p>Hesten reagerer i nuet på din energi, intention og indre tilstand</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </span>
              <div>
                <h4>Ingen facade</h4>
                <p>Heste læser dit kropssprog og nervesystem, ikke dine ord eller din titel</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </span>
              <div>
                <h4>Kropslig læring</h4>
                <p>Oplevelser der forankres i kroppen og huskes længe efter workshoppen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="workshop-timeline">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-timeline-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Dagens forløb</p>
            <h2>3 timer der ændrer dit perspektiv</h2>
            <p className="workshop-timeline-intro">
              Workshoppen veksler mellem øvelser med hestene, faciliteret refleksion og samtale. Du behøver ingen hesteerfaring, kun nysgerrighed og viljen til at lære noget nyt om dig selv.
            </p>
          </motion.div>

          <div className="workshop-timeline-track">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className="workshop-timeline-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-step-marker">
                  <span className="timeline-step-dot" />
                  {index < timelineSteps.length - 1 && <span className="timeline-step-line" />}
                </div>
                <div className="timeline-step-content">
                  <span className="timeline-step-time">{step.time}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="workshop-practical-badges"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="practical-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Hørsholm, Nordsjælland</span>
            </div>
            <div className="practical-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
              <span>Maks 4-6 deltagere</span>
            </div>
            <div className="practical-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>
              </svg>
              <span>Kaffe, te og let forplejning inkluderet</span>
            </div>
            <div className="practical-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
              </svg>
              <span>Du får et refleksionshæfte med hjem</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="workshop-about-section">
        <div className="workshop-about-grid">
          <div className="workshop-about-visual">
            <div className="workshop-about-image-frame"></div>
            <motion.div
              className="workshop-about-image"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/christina.jpg" alt="Christina Borreby" />
            </motion.div>
          </div>
          <motion.div
            className="workshop-about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Om mig</p>
            <h3>Christina Borreby</h3>
            <p className="workshop-about-role">Cand.negot. i kommunikation · Certificeret psykoterapeut</p>
            <div className="workshop-about-text">
              <p>
                Jeg arbejder med ledere og teams, der ønsker mere end værktøjer. De vil styrke deres nærvær, emotionelle intelligens og evne til at skabe tillid.
              </p>
              <p>
                Med en baggrund i kommunikation og psykoterapi har jeg kombineret mange års erfaring med min passion for heste i et unikt udviklingskoncept.
              </p>
              <p>
                Jeg brænder for at hjælpe mennesker med at opbygge et stærkt indre fundament, der skaber ro, retning og autenticitet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="workshop-benefits-new">
        <div className="workshop-container-wide">
          <div className="workshop-benefits-header">
            <p className="section-label">Udbytte</p>
            <h2>Hvad får du med hjem?</h2>
          </div>

          <div className="workshop-benefits-columns">
            <motion.div
              className="workshop-benefit-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>For dig personligt</h3>
              <div className="workshop-benefit-list">
                {personalBenefits.map((benefit, index) => (
                  <div key={index} className="workshop-benefit-item">
                    <span className="benefit-number">0{index + 1}</span>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="workshop-benefit-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3>For din organisation</h3>
              <div className="workshop-benefit-list">
                {orgBenefits.map((benefit, index) => (
                  <div key={index} className="workshop-benefit-item">
                    <span className="benefit-number">0{index + 1}</span>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="workshop-investment">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-investment-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Investering</p>
            <h2>Priser</h2>
          </motion.div>

          <div className="workshop-investment-grid">
            <motion.div
              className="investment-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Åben workshop</h3>
              <div className="investment-price">4.000 kr.</div>
              <p className="investment-unit">pr. deltager</p>
              <ul className="investment-details">
                <li>3-4 timer</li>
                <li>Max 6 deltagere</li>
                <li>Inkl. forplejning og reflektionsmateriale</li>
              </ul>
            </motion.div>

            <motion.div
              className="investment-card investment-card-featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Lukket workshop</h3>
              <div className="investment-price">Fra 14.000 kr.</div>
              <p className="investment-unit">for jeres ledere</p>
              <ul className="investment-details">
                <li>3-4 timer</li>
                <li>Max 6 deltagere</li>
                <li>Inkl. forplejning og reflektionsmateriale</li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            className="investment-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Priser ekskl. moms
          </motion.p>
        </div>
      </section>

      {/* Dates Section */}
      <section className="workshop-dates-section" id="tilmelding">
        <div className="workshop-dates-bg">
          <img src="/session.JPG" alt="Workshop session med heste og deltagere" />
        </div>
        <div className="workshop-dates-overlay" />
        <div className="workshop-dates-container">
          <motion.div
            className="workshop-dates-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Kommende workshops</p>
            <h2>Vælg en dato</h2>
            <p className="workshop-dates-intro">
              Kl. 9:00-12:00 · Hørsholm, Nordsjælland · Maks 6 deltagere
            </p>
          </motion.div>

          <div className="workshop-date-cards">
            {workshopDates.map((date, index) => (
              <motion.button
                key={index}
                onClick={() => openModal(date.month)}
                className="workshop-date-card workshop-date-card-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="date-card-date">
                  <span className="date-card-pending">Datoer på vej</span>
                  <div className="date-card-month-year">
                    <span className="date-card-month">{date.month}</span>
                    <span className="date-card-year">{date.year}</span>
                  </div>
                </div>
                <div className="date-card-divider" />
                <div className="date-card-action">
                  <span>Få besked</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.p
            className="workshop-dates-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ønsker du at booke en workshop til jeres team eller organisation? <a href="/kontakt">Kontakt mig</a> for et skræddersyet forløb.
          </motion.p>
        </div>
      </section>

      <Footer />

      {/* Waiting List Modal */}
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
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              <div className="modal-header">
                <p className="section-label">Få besked</p>
                <h3>Workshop i {selectedDate} 2026</h3>
                <p className="modal-info">Skriv dig op og få besked, når datoen er klar</p>
              </div>

              <form className="modal-form" onSubmit={handleModalSubmit}>
                <div className="modal-form-group">
                  <label htmlFor="modal-navn">Navn *</label>
                  <input type="text" id="modal-navn" name="navn" required placeholder="Dit fulde navn" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-email">E-mail *</label>
                  <input type="email" id="modal-email" name="email" required placeholder="din@email.dk" />
                </div>
                <button type="submit" className="modal-submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sender...' : 'Skriv mig op'}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                {submitStatus === 'success' && (
                  <p className="form-success">Tak! Du hører fra os, når datoen er klar.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="form-error">Der opstod en fejl. Prøv igen eller skriv til info@christinaborreby.dk</p>
                )}
              </form>

              <p className="modal-disclaimer">
                Bare rolig, du modtager kun information om denne workshop.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
