'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="workshop-hero-new" ref={heroRef}>
        <div className="workshop-hero-content-new">
          <motion.div
            className="workshop-hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Lederworkshop</p>
            <h1>Autentisk indflydelse – med <em>hesten</em> som læremester</h1>
            <p className="workshop-hero-desc">
              Denne lederworkshop giver dig øget klarhed over dine adfærdsmønstre,
              ressourcer og blinde vinkler, så du bedre kan lede fra dit autentiske selv.
            </p>
            <a href="#tilmelding" className="cta-button">
              <span>Se kommende datoer</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
        <motion.div className="workshop-hero-image" style={{ y: heroY }}>
          <img src="/lederworkshop.jpg" alt="Lederworkshop med heste" />
        </motion.div>
      </section>

      {/* Quote Banner */}
      <section className="workshop-quote-banner">
        <div className="workshop-container-wide">
          <p>God ledelse begynder med selvindsigt</p>
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

      {/* Signup Section */}
      <section className="workshop-signup" id="tilmelding">
        <div className="workshop-signup-grid">
          <motion.div
            className="workshop-signup-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Åbne workshops</p>
            <h2>Deltag i en kommende workshop</h2>
            <p>
              Vi afholder løbende åbne workshops, hvor du kan tilmelde dig.
              Ønsker du at booke kursus til en gruppe fra jeres virksomhed, så <a href="/#kontakt">kontakt os gerne</a>.
            </p>

            <div className="workshop-dates">
              <h4>Kommende datoer</h4>
              <div className="workshop-date-boxes">
                <div className="workshop-date-box">
                  <span className="date-day">XX</span>
                  <span className="date-month">marts 2026</span>
                </div>
                <div className="workshop-date-box">
                  <span className="date-day">XX</span>
                  <span className="date-month">april 2026</span>
                </div>
                <div className="workshop-date-box">
                  <span className="date-day">XX</span>
                  <span className="date-month">maj 2026</span>
                </div>
              </div>
            </div>

            <div className="workshop-practical-info">
              <h4>Praktisk information</h4>
              <div className="workshop-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <strong>Adresse</strong>
                  <p>Nordsjælland (præcis adresse oplyses ved tilmelding)</p>
                </div>
              </div>
              <div className="workshop-info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <div>
                  <strong>Tidspunkt</strong>
                  <p>Kl. 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="workshop-signup-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Tilmeld dig en workshop</h3>
            <form>
              <div className="form-group">
                <label htmlFor="navn">Navn *</label>
                <input type="text" id="navn" name="navn" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefon">Telefon</label>
                <input type="tel" id="telefon" name="telefon" />
              </div>
              <div className="form-group">
                <label htmlFor="virksomhed">Virksomhed</label>
                <input type="text" id="virksomhed" name="virksomhed" />
              </div>
              <div className="form-group">
                <label htmlFor="dato">Vælg dato *</label>
                <select id="dato" name="dato" required>
                  <option value="">Vælg en dato</option>
                  <option value="marts-2026">XX. marts 2026</option>
                  <option value="april-2026">XX. april 2026</option>
                  <option value="maj-2026">XX. maj 2026</option>
                </select>
              </div>
              <button type="submit" className="form-submit">
                <span>Send tilmelding</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
