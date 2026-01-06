'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const teamBenefits = [
  {
    title: "Styrket tillid og psykologisk tryghed",
    description: "Hestene skaber et neutralt rum hvor hierarkier opløses og ægte relationer kan bygges"
  },
  {
    title: "Tydeligere kommunikation",
    description: "Oplev hvordan jeres kommunikationsmønstre bliver synlige - og hvordan I kan forbedre dem"
  },
  {
    title: "Bedre samarbejde under pres",
    description: "Træn evnen til at bevare ro, overblik og samarbejde når det virkelig gælder"
  },
  {
    title: "Dybere selvindsigt for hver enkelt",
    description: "Hver deltager får personlig feedback på deres rolle og bidrag i teamet"
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Indledende samtale',
    description: 'Vi afdækker jeres behov, udfordringer og mål. Hvad skal teamet opnå?'
  },
  {
    step: '02',
    title: 'Skræddersyet program',
    description: 'Jeg designer et forløb der matcher jeres virkelighed og ønskede dybde.'
  },
  {
    step: '03',
    title: 'Hesteassisteret session',
    description: 'Teamet møder hestene og arbejder med øvelser der spejler jeres samarbejde.'
  },
  {
    step: '04',
    title: 'Faciliteret refleksion',
    description: 'Vi omsætter oplevelserne til konkrete handlinger I kan tage med tilbage.'
  }
]

const testimonials = [
  {
    quote: '"Dagen gav os mulighed for en værdifuld refleksion i teamet om, hvad godt lederskab og teamwork egentlig kræver. Det var en god måde at være sammen på i andre rammer, og særdeles udbytterigt at opleve hinanden uden for vores normale comfort zone."',
    name: 'Søren Truelsen',
    role: 'CEO, Nordic Bloom'
  },
  {
    quote: '"Spændende, tankevækkende og forfriskende anderledes teambuilding, kan stærkt anbefales!"',
    name: 'Christian Stig Møller',
    role: 'M&A Advisory/Transactions'
  }
]

export default function TeamsPage() {
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
      <section className="workshop-hero-full teams-hero" ref={heroRef}>
        <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
          <img src="/team.jpg" alt="Teamudvikling med heste" />
        </motion.div>
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-content-full">
          <motion.div
            className="workshop-hero-text-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Skræddersyet til jeres team</p>
            <h1>Teamudvikling der <em>rykker</em></h1>
            <p className="workshop-hero-tagline">Dybere end teambuilding. Stærkere end teori.</p>
            <p className="workshop-hero-desc">
              Når et team står sammen med en hest, bliver dynamikkerne synlige på få minutter. Hvem tager ledelsen? Hvem trækker sig? Hvordan kommunikerer I under pres? Hesteassisteret teamudvikling giver jer indsigter, som ingen PowerPoint kan levere.
            </p>
            <a href="/kontakt" className="cta-button">
              <span>Kontakt og hør mere</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Section - NEUTRAL BAGGRUND */}
      <section className="workshop-why-neutral">
        <div className="workshop-container">
          <motion.div
            className="workshop-why-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Hvorfor heste?</p>
            <h2>Mere end almindelig teambuilding</h2>
            <p>
              Klassisk teambuilding efterlader sjældent varige spor. En dag med aktiviteter, lidt sjov, og så tilbage til hverdagen. Hesteassisteret teamudvikling er anderledes - fordi oplevelserne forankres i kroppen, ikke kun i hovedet.
            </p>
            <p>
              Hestene fungerer som levende spejle der afslører teamets mønstre, styrker og udviklingsområder. De reagerer på energi, ikke på ord eller titler.
            </p>
            <p>
              I vælger selv graden af dybde - fra fokus på samarbejde og kommunikation til personlig udvikling og lederskab.
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
                <h4>Øjeblikkelig feedback</h4>
                <p>Hesten reagerer i nuet på teamets energi og dynamik</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </span>
              <div>
                <h4>Synlige mønstre</h4>
                <p>Teamdynamikker bliver tydelige gennem hestens adfærd</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </span>
              <div>
                <h4>Varig forandring</h4>
                <p>Kropslig læring der forankres langt dybere end ord</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - INGEN BILLEDE, bruger kort-design */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <p className="section-label">Det siger de</p>
          <h2 className="section-title">Oplevelser fra tidligere teams</h2>
        </div>
        <div className="testimonials-grid testimonials-grid-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section - INGEN BILLEDE */}
      <section className="workshop-timeline">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-timeline-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Processen</p>
            <h2>Sådan foregår det</h2>
            <p className="workshop-timeline-intro">
              Hvert forløb designes til jeres specifikke behov og mål. Her er den typiske proces:
            </p>
          </motion.div>

          <div className="workshop-timeline-track">
            {processSteps.map((step, index) => (
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
                  {index < processSteps.length - 1 && <span className="timeline-step-line" />}
                </div>
                <div className="timeline-step-content">
                  <span className="timeline-step-time">{step.step}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info - MED BILLEDE */}
      <section className="workshop-instructor teams-praktisk">
        <div className="workshop-instructor-bg">
          <img src="/team sammen.jpg" alt="Hesteassisteret teamudvikling i Nordsjælland" />
        </div>
        <div className="workshop-instructor-overlay" />
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-instructor-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Praktisk</p>
            <h2>Rammer og muligheder</h2>
            <p>
              <strong>Gruppestørrelse:</strong> For optimalt udbytte arbejder vi med max 15 deltagere. Ved større grupper tilknyttes en ekstra facilitator fra mit netværk af erfarne konsulenter.
            </p>
            <p>
              <strong>Varighed:</strong> Fra en halv dag til flere sessioner over tid - afhængig af jeres mål og ønskede dybde.
            </p>
            <p>
              <strong>Lokation:</strong> Sessioner afholdes ved hestene i Hørsholm, Nordsjælland.
            </p>
            <p>
              <strong>Ingen hesteerfaring:</strong> Der er ingen ridning involveret. Alle øvelser foregår fra jorden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - INGEN BILLEDE */}
      <section className="workshop-benefits-new">
        <div className="workshop-container-wide">
          <div className="workshop-benefits-header">
            <p className="section-label">Udbytte</p>
            <h2>Hvad får jeres team med hjem?</h2>
          </div>

          <div className="workshop-benefits-columns">
            <motion.div
              className="workshop-benefit-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>For teamet</h3>
              <div className="workshop-benefit-list">
                {teamBenefits.slice(0, 2).map((benefit, index) => (
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
              <h3>For den enkelte</h3>
              <div className="workshop-benefit-list">
                {teamBenefits.slice(2, 4).map((benefit, index) => (
                  <div key={index} className="workshop-benefit-item">
                    <span className="benefit-number">0{index + 3}</span>
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
            <h2>Pris</h2>
          </motion.div>

          <div className="workshop-investment-grid workshop-investment-single">
            <motion.div
              className="investment-card investment-card-featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Teamworkshop</h3>
              <div className="investment-price">Fra 14.000 kr.</div>
              <p className="investment-unit">skræddersyet til jeres team</p>
              <ul className="investment-details">
                <li>3-4 timer</li>
                <li>6-15 deltagere</li>
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

      {/* CTA Section - INGEN BILLEDE */}
      <section className="cta-section">
        <div className="cta-content">
          <p className="section-label">Næste skridt</p>
          <h2 className="section-title">Klar til at styrke jeres team?</h2>
          <p className="section-text">
            Lad os tage en uforpligtende samtale om, hvordan hesteassisteret teamudvikling kan styrke netop jeres team.
          </p>
          <a href="/kontakt" className="cta-button">
            <span>Kontakt og hør mere</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
