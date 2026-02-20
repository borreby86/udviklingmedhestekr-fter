'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
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

const faqItems = [
  {
    question: "Hvem er teamworkshops relevante for?",
    answer: "Teams og ledergrupper der vil arbejde konkret med samarbejde, kommunikation og roller. Vi har arbejdet med alt fra lederteams på 4-6 personer til afdelinger på op til 15. Der kræves ingen hesteerfaring."
  },
  {
    question: "Kræver det hesteerfaring?",
    answer: "Nej. Du skal ikke ride, og alt foregår fra jorden. De fleste deltagere har aldrig rørt en hest, og det er en fordel. Så møder du øvelserne åbent og uden vanemønstre."
  },
  {
    question: "Hvad hvis nogen i teamet er nervøse for heste?",
    answer: "Det er helt normalt og mere almindeligt end man tror. Hestene er rolige og vant til at arbejde med mennesker, og vi tilpasser øvelserne. Nervøsiteten kan faktisk blive en del af læringen: hvordan håndterer du usikkerhed, og hvordan påvirker det din tilstedeværelse?"
  },
  {
    question: "Er det sikkert?",
    answer: "Ja. Alle øvelser foregår fra jorden, der gives grundig instruktion inden opstart, og hestene er udvalgt og vant til arbejdet. Der er altid en iboende risiko ved levende dyr, og det informerer vi deltagerne om på forhånd."
  },
  {
    question: "Hvor lang tid varer det, og hvor mange kan deltage?",
    answer: "En teamworkshop varer typisk 3-4 timer. Vi tager op til 15 deltagere. Forløbet tilpasses jeres behov og mål."
  },
  {
    question: "Hvordan dokumenterer vi værdien over for HR?",
    answer: "Hesteassisteret læring er en evidensbaseret metode. Peer-reviewed forskning viser forbedringer i emotionel intelligens, selvindsigt og evnen til at skabe tillid. Alle deltagere får refleksionsmateriale med hjem til at formulere konkrete fokusområder. Jeg sender gerne forskningsreferencer inden beslutningen."
  },
  {
    question: "Hvad koster det?",
    answer: "Kontakt mig for pris. Hvert forløb er skræddersyet, så prisen afhænger af deltagerantal, varighed og tilpasning til jeres behov."
  },
  {
    question: "Hvad skal vi have på?",
    answer: "Lukkede og flade sko er et krav, da vi går rundt på en sandbane med hestene. Derudover tøj der passer til vejret - vi er udendørs det meste af tiden."
  },
  {
    question: "Hvordan booker vi?",
    answer: "Skriv til info@christinaborreby.dk eller ring. Vi tager en kort snak om jeres mål og deltagere, og så sammensætter jeg et forløb der matcher."
  }
]

export default function TeamsPage() {
  const heroRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formLoadTime, setFormLoadTime] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const openModal = () => {
    setModalOpen(true)
    setFormLoadTime(Date.now())
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
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
      phone: formData.get('telefon'),
      company: formData.get('virksomhed'),
      teamSize: formData.get('antal'),
      message: formData.get('besked'),
      formType: 'teamworkshop-forespørgsel',
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
      <section className="workshop-hero-full teams-hero" ref={heroRef}>
        <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
          <img src="/team.jpg" alt="Teamudvikling med heste" loading="eager" fetchPriority="high" decoding="async" />
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
            <h1>Teamudvikling med <em>hestekræfter</em></h1>
            <p className="workshop-hero-tagline">Få indsigt i jeres dynamik med hesten som spejl</p>
            <p className="workshop-hero-desc">
              Når teamet møder hesten, bliver dynamikkerne synlige. Hvem tager ledelsen? Hvordan kommunikerer I under pres? Hesteassisteret teamudvikling styrker fællesskabet og giver jer nye indsigter, der er svære at opnå gennem traditionel teambuilding.
            </p>
            <div className="workshop-hero-buttons">
              <button onClick={openModal} className="cta-button">
                <span>Forespørg teamworkshop</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <a href="#pris" className="cta-button-secondary">
                <span>Se priser og praktik</span>
              </a>
            </div>
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
          <img src="/team2.jpg" alt="Hesteassisteret teamudvikling i Nordsjælland" />
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
          </motion.div>
        </div>
      </section>

      {/* Info Bar - Ingen hesteerfaring */}
      <section className="info-bar">
        <div className="info-bar-content">
          <p><strong>Ingen hesteerfaring nødvendig</strong> - der er ingen ridning involveret.</p>
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

      {/* FAQ Section */}
      <section className="workshop-faq">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-faq-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Ofte stillede spørgsmål</p>
            <h2>FAQ</h2>
          </motion.div>

          <div className="workshop-faq-list">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className={`workshop-faq-item ${openFaq === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  className="workshop-faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={openFaq === index ? 'rotated' : ''}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      className="workshop-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="workshop-dates-section teams-booking" id="pris">
        <div className="workshop-dates-bg">
          <img src="/team-sammen.jpg" alt="Teamudvikling med heste" />
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
            <p className="section-label">Kom i gang</p>
            <h2>Book jeres teamworkshop</h2>
          </motion.div>

          <div className="workshop-booking-options workshop-booking-single">
            <motion.div
              className="booking-option booking-option-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Teamworkshop</h3>
              <div className="booking-option-price">Individuel pris</div>
              <p className="booking-option-unit">skræddersyet til jeres team og behov</p>
              <ul className="booking-option-details">
                <li>2-6 timer</li>
                <li>4-15 deltagere</li>
                <li>Inkl. forplejning</li>
              </ul>
              <button onClick={openModal} className="booking-option-cta">
                <span>Forespørg teamworkshop</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </motion.div>
          </div>

          <motion.p
            className="booking-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Priser ekskl. moms
          </motion.p>
        </div>
      </section>

      <Footer />

      {/* Inquiry Modal */}
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

              <div className="modal-body">
                <div className="modal-header">
                  <p className="section-label">Forespørgsel</p>
                  <h3>Book en teamworkshop</h3>
                  <p className="modal-info">Udfyld formularen, så vender jeg tilbage inden for 24 timer</p>
                </div>

                <form className="modal-form" onSubmit={handleModalSubmit}>
                  {/* Honeypot field - hidden from humans, filled by bots */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="website-team">Website</label>
                    <input type="text" id="website-team" name="website" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="modal-navn">Navn *</label>
                    <input type="text" id="modal-navn" name="navn" required placeholder="Dit fulde navn" />
                  </div>
                  <div className="modal-form-row">
                    <div className="modal-form-group">
                      <label htmlFor="modal-email">E-mail *</label>
                      <input type="email" id="modal-email" name="email" required placeholder="din@email.dk" />
                    </div>
                    <div className="modal-form-group">
                      <label htmlFor="modal-telefon">Telefon</label>
                      <input type="tel" id="modal-telefon" name="telefon" placeholder="Telefonnummer" />
                    </div>
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="modal-virksomhed">Virksomhed *</label>
                    <input type="text" id="modal-virksomhed" name="virksomhed" required placeholder="Jeres virksomhed" />
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="modal-antal">Antal deltagere (ca.)</label>
                    <input type="text" id="modal-antal" name="antal" placeholder="F.eks. 8-10 personer" />
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="modal-besked">Fortæl kort om jeres behov</label>
                    <textarea id="modal-besked" name="besked" rows={3} placeholder="Hvad er anledningen? Har I specifikke ønsker?" />
                  </div>
                  <button type="submit" className="modal-submit" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sender...' : 'Send forespørgsel'}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                  {submitStatus === 'success' && (
                    <p className="form-success">Tak for din forespørgsel! Jeg vender tilbage hurtigst muligt.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="form-error">Der opstod en fejl. Prøv igen eller skriv til info@christinaborreby.dk</p>
                  )}
                </form>

                <p className="modal-disclaimer">
                  Forespørgslen er uforpligtende. Jeg kontakter dig for en indledende samtale.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
