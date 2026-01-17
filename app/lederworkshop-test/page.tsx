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
    description: "En kropslig oplevelse af, hvornår du står stærkt – og hvornår du mister fodfæstet"
  },
  {
    title: "Ærlig feedback uden filter",
    description: "Hesten reagerer på din tilstedeværelse her og nu, ikke på din titel eller dine ord"
  },
  {
    title: "Indsigt i dine blinde vinkler",
    description: "Forstå de mønstre der påvirker dit lederskab – både de synlige og de skjulte"
  },
  {
    title: "Nærvær der skaber følgeskab",
    description: "Større bevidsthed om din energi og evne til at skabe ægte kontakt"
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

const faqItems = [
  {
    question: "Hvad er leder- og teamudvikling med heste?",
    answer: "Det er et praksisnært lærings- og udviklingsforløb, hvor heste anvendes som metodisk redskab til at arbejde med ledelse, samarbejde og kommunikation. Fokus er på adfærd i praksis - ikke teori alene."
  },
  {
    question: "Hvem er forløbene relevante for?",
    answer: "Forløbene er relevante for teams og ledere, der ønsker at arbejde konkret og praksisnært med samarbejde, kommunikation og adfærd. Typisk: Teams der ønsker bedre samarbejde, ledere på alle niveauer, lederteams og organisationer i forandring. Der kræves ingen erfaring med heste."
  },
  {
    question: "Hvilket udbytte kan I forvente?",
    answer: "Bedre samarbejde og beslutningstagning - også under pres. Indsigt i egen og teamets adfærd og blinde vinkler. Klarere kommunikation og et fælles sprog for ledelse og samarbejde. Udbyttet er konkrete observationer og tydelige handlepunkter, som kan omsættes direkte i hverdagen."
  },
  {
    question: "Hvordan foregår øvelserne?",
    answer: "Alle øvelser foregår fra jorden. Deltagerne observerer, leder og samarbejder omkring hestene gennem simple, strukturerede opgaver. Der er altid klare instruktioner og fokus på sikkerhed."
  },
  {
    question: "Er det sikkert?",
    answer: "Ja. Sikkerhed prioriteres højt: Alle øvelser foregår fra jorden, der gives grundig instruktion inden opstart, hestene er udvalgt og vant til arbejdet, og forløbene faciliteres professionelt."
  },
  {
    question: "Hvorfor virker det?",
    answer: "Heste reagerer på adfærd - ikke titler eller intentioner. De aflæser kropssprog, timing og klarhed i kommunikation. Feedbacken er øjeblikkelig og uden agenda. Når ledelsesadfærd afprøves i praksis, skabes stærkere indsigt og bedre overførbarhed til hverdagen."
  },
  {
    question: "Hvor lang tid varer et forløb?",
    answer: "Lederforløb: op til 4 timer. Teamforløb: 3-5 timer. Forløbene kan tilpasses efter behov."
  },
  {
    question: "Hvor mange kan deltage?",
    answer: "Lederforløb: 4-6 deltagere. Teamforløb: 6-12 deltagere."
  },
  {
    question: "Hvordan booker vi?",
    answer: "Kontakt os på info@christinaborreby.dk for en kort afklarende dialog om mål, deltagerkreds og ønsket udbytte. Herefter sammensættes et forløb, der matcher jeres behov."
  }
]

const timelineSteps = [
  {
    time: "Start",
    title: "Ankomst & let forplejning",
    description: "Kaffe, te og let morgenmad. Vi lander i rummet og sætter intentionen for dagen."
  },
  {
    time: "+30 min",
    title: "Introduktion til hestene",
    description: "Du møder hestene og lærer om deres sprog. Vi gennemgår dagens øvelser og rammer."
  },
  {
    time: "+1 time",
    title: "Første øvelse med hest",
    description: "Individuel interaktion med hesten. Her møder du dit lederskab og dig selv, uden filter."
  },
  {
    time: "+1½ time",
    title: "Refleksion & ny øvelse",
    description: "Faciliteret samtale om dine oplevelser, efterfulgt af en dybere øvelse med fokus på det, der viste sig."
  },
  {
    time: "+2½ time",
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

  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.25], [1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.3, 0.42, 0.5], [0, 1, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.47, 0.55, 0.67, 0.75], [0, 1, 1, 0])
  const opacity4 = useTransform(scrollYProgress, [0.72, 0.8, 1], [0, 1, 1])

  const y1 = useTransform(scrollYProgress, [0, 0.18, 0.25], [0, 0, -30])
  const y2 = useTransform(scrollYProgress, [0.22, 0.3, 0.42, 0.5], [30, 0, 0, -30])
  const y3 = useTransform(scrollYProgress, [0.47, 0.55, 0.67, 0.75], [30, 0, 0, -30])
  const y4 = useTransform(scrollYProgress, [0.72, 0.8, 1], [30, 0, 0])

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
              Ægte lederskab begynder med dig og ikke strategi. Din evne til at forstå, hvordan du påvirker andre og om du skaber troværdighed, er altafgørende for at opnå følgeskab. Men hvor ofte får du mulighed for at se dig selv som leder, helt uden filter – og med øjeblikkelig feedback?
            </p>
          </motion.div>

          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity3, y: y3 }}
          >
            <p>
              Hestene spejler din autenticitet, dit nærvær og din energi i nuet. De viser præcist, hvor du står stærkt – og hvor du ubevidst mister kontakt eller gennemslagskraft.
            </p>
          </motion.div>

          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity4, y: y4 }}
          >
            <p className="sticky-text-gold">
              Det giver dig indsigter, som er svære at opnå på andre måder.
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
              Denne workshop giver dig klarhed over dine adfærdsmønstre, ressourcer og blind spots, så du kan lede fra dit autentiske selv. Gennem mødet med hesten får du øjeblikkelig, ærlig feedback på dit lederskab – uden filter.
            </p>
            <p className="workshop-hero-question">
              Er du klar til at træne dit autentiske lederskab i praksis?
            </p>
            <div className="workshop-hero-buttons">
              <a href="#datoer" className="cta-button cta-button-swap">
                <span className="cta-text-default">Åbne workshops</span>
                <span className="cta-text-hover">Se datoer</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/kontakt" className="cta-button cta-button-blue cta-button-swap">
                <span className="cta-text-default">Kun for jeres ledergruppe</span>
                <span className="cta-text-hover">Forespørg på dato</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
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
              Heste er byttedyr. De har overlevet i millioner af år ved at aflæse intention og energi hos dem omkring sig. De reagerer ikke på titler, ord eller charme – kun på det, du reelt udstråler.
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

      {/* Testimonial Section */}
      <section className="workshop-testimonial">
        <div className="workshop-container">
          <motion.div
            className="testimonial-card-large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Det siger deltagerne</p>
            <blockquote className="testimonial-quote-large">
              "Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd."
            </blockquote>
            <div className="testimonial-author-large">
              <span className="testimonial-name">Kim Høgh</span>
              <span className="testimonial-role">Bestyrelsesformand & Tidl. CEO, Hjerteforeningen</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="workshop-evidence">
        <div className="workshop-container">
          <motion.div
            className="evidence-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Dokumenteret effekt</p>
            <h2>Hvad forskningen viser</h2>
            <p className="evidence-intro">
              Hesteassisteret læring er ikke bare en oplevelse – det er en evidensbaseret metode.
            </p>
            <div className="evidence-points">
              <p>Peer-reviewed forskning dokumenterer forbedringer i:</p>
              <ul>
                <li>Emotionel intelligens og selvindsigt</li>
                <li>Evne til at skabe tillid og følgeskab</li>
                <li>Stresshåndtering og nervesystemregulering</li>
              </ul>
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
            <p className="section-label">Din facilitator</p>
            <h3>Christina Borreby</h3>
            <p className="workshop-about-role">Cand.negot. i Kommunikation & HR · Certificeret psykoterapeut · 15+ års erfaring</p>
            <div className="workshop-about-text">
              <p>
                Jeg har trænet galopheste i mange år – og opdaget at heste lærer os mindst lige så meget om os selv, som vi lærer dem.
              </p>
              <p>
                Med en baggrund i kommunikation og psykoterapi har jeg skabt et unikt udviklingskoncept, hvor heste fungerer som ærlige spejle for ledere, der vil mere end værktøjer og teknikker.
              </p>
              <p>
                Jeg arbejder med ledere og teams, der ønsker at styrke deres nærvær, emotionelle intelligens og evne til at skabe ægte tillid.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="workshop-benefits-new workshop-benefits-single">
        <div className="workshop-container-wide">
          <div className="workshop-benefits-header">
            <p className="section-label">Udbytte</p>
            <h2>Dit udbytte</h2>
          </div>

          <motion.div
            className="workshop-benefit-list-centered"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {personalBenefits.map((benefit, index) => (
              <div key={index} className="workshop-benefit-item">
                <span className="benefit-number">0{index + 1}</span>
                <div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
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
      <section className="workshop-dates-section" id="datoer">
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
