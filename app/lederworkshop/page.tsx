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
    description: "Oplev din ledelsesmæssige styrke fysisk – ikke kun som en idé"
  },
  {
    title: "Øjeblikkelig feedback",
    description: "Hesten reagerer på din kommunikation og tilstedeværelse her og nu"
  },
  {
    title: "Nærvær og tillid",
    description: "Øget bevidsthed om din evne til at skabe ægte kontakt"
  },
  {
    title: "Indsigt i mønstre",
    description: "Forstå dine synlige og skjulte ledelsesmæssige mønstre"
  }
]

const orgBenefits = [
  {
    title: "Tillid gennem autenticitet",
    description: "Ledelse baseret på ægthed skaber stærkere relationer"
  },
  {
    title: "Klar kommunikation",
    description: "Nærværende beslutningstagere med tydelig kommunikation"
  },
  {
    title: "Reguleret nervesystem",
    description: "Ledere der kan bevare roen under pres"
  },
  {
    title: "Komplekse relationer",
    description: "Styrket evne til at navigere i tværfagligt samarbejde"
  }
]

export default function LederworkshopPage() {
  const heroRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

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
    document.body.style.overflow = ''
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
            <p className="workshop-hero-desc">
              Workshoppen er for dig, der ønsker at styrke din gennemslagskraft, nærvær og selvindsigt i lederskabet. Det er til dig, der vil udfordre dig selv, opdage dine blinde vinkler og omsætte indsigt til handling – og som er nysgerrig på, hvordan samarbejde med heste kan accelerere læring og personlig udvikling.
            </p>
            <a href="#tilmelding" className="cta-button">
              <span>Se kommende workshops</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="workshop-quote-banner">
        <div className="workshop-container-wide">
          <p>God ledelse begynder med selvindsigt</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="workshop-intro-section">
        <div className="workshop-container">
          <motion.div
            className="workshop-intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Ægte lederskab begynder med dig – din evne til at forstå, hvordan du påvirker andre og skaber troværdighed, er nøglen til at inspirere, motivere og invitere til følgeskab. Men hvor ofte får du mulighed for at se dig selv som leder, helt uden filter – og med øjeblikkelig feedback?
            </p>
            <p className="workshop-intro-highlight">
              Mødet med hesten giver dig denne unikke mulighed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="workshop-why-new">
        <div className="workshop-container">
          <motion.div
            className="workshop-why-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="workshop-why-text">
              <p className="section-label">Metoden</p>
              <h2>Hvorfor træne lederskab med heste?</h2>
              <p>
                Heste er eksperter i at aflæse intention, energi og autenticitet.
                De reagerer ikke på titler eller ord – kun på det, du reelt udstråler.
              </p>
              <p>
                Det gør dem til ærlige spejle, der giver dig indsigt, som er svær at
                opnå på andre måder. Ingen hesteerfaring er nødvendig – kun en åbenhed
                over for at lære noget nyt om dig selv.
              </p>
            </div>
            <div className="workshop-why-points">
              <div className="workshop-point">
                <span className="workshop-point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <div>
                  <h4>Øjeblikkelig respons</h4>
                  <p>Hesten reagerer i nuet på din energi og intention</p>
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
                  <p>Heste læser dit kropssprog – ikke dine ord</p>
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
                  <p>Oplevelser der forankres dybere end teori</p>
                </div>
              </div>
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

      {/* Practical Info */}
      <section className="workshop-practical">
        <div className="workshop-container">
          <motion.div
            className="workshop-practical-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="workshop-practical-content">
              <p className="section-label">Praktisk</p>
              <h2>Sådan foregår det</h2>
              <p>
                Workshoppen kombinerer individuel refleksion, gruppearbejde og
                interaktion med hestene. Du behøver ingen hesteerfaring – kun
                nysgerrighed og åbenhed.
              </p>
              <ul className="workshop-practical-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  Ingen hesteerfaring nødvendig
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  Individuel og gruppebaseret læring
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  Faciliteret af certificeret psykoterapeut
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  Kan tilpasses dit team eller organisation
                </li>
              </ul>
            </div>
            <div className="workshop-practical-image">
              <img src="/hestekursus-nordsjaelland.jpeg" alt="Workshop med heste" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dates Section */}
      <section className="workshop-dates-section" id="tilmelding">
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
              Kl. 9:00–12:00 · Nordsjælland
            </p>
          </motion.div>

          <div className="workshop-date-cards">
            {workshopDates.map((date, index) => (
              <motion.button
                key={index}
                onClick={() => openModal(date.month)}
                className="workshop-date-card"
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
            Ønsker du at booke en workshop til jeres team eller organisation? <a href="/#kontakt">Kontakt os</a> for et skræddersyet forløb.
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

              <form className="modal-form">
                <div className="modal-form-group">
                  <label htmlFor="modal-navn">Navn *</label>
                  <input type="text" id="modal-navn" name="navn" required placeholder="Dit fulde navn" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-email">E-mail *</label>
                  <input type="email" id="modal-email" name="email" required placeholder="din@email.dk" />
                </div>
                <button type="submit" className="modal-submit">
                  <span>Skriv mig op</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
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
