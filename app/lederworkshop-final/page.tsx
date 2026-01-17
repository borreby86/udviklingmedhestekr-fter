'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const testimonials = [
  {
    quote: "Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd.",
    author: "Kim Høgh",
    role: "Bestyrelsesformand & Tidl. CEO, Hjerteforeningen"
  },
  {
    quote: "Jeg kunne tydeligt mærke, hvordan mit eget indre nærvær og ro påvirkede hestens tillid til mig. Det var en vigtig påmindelse om, hvordan vores energi og autenticitet skaber følgeskab.",
    author: "Søren Truelsen",
    role: "CEO, Nordic Bloom"
  },
  {
    quote: "Fantastisk at blive spejlet i og få respons fra hesten - stor øjenåbner for mig. På trods af mange års coaching fik jeg nyt syn og perspektiv.",
    author: "Camilla Guldmann",
    role: "Teamleder"
  }
]

const personalBenefits = [
  {
    title: "Autentisk lederskab i kroppen",
    description: "En kropslig oplevelse af, hvornår du står stærkt i dit lederskab, og hvornår du mister fodfæstet"
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
  }
]

const faqItems = [
  {
    question: "Hvem er workshoppen relevant for?",
    answer: "Workshoppen er relevant for ledere på alle niveauer, der ønsker at arbejde med deres personlige lederskab og autenticitet. Det kan være erfarne ledere, der vil have nye perspektiver, eller nyere ledere, der vil styrke deres fundament. Fælles for deltagerne er et ønske om at lede med mere nærvær, tydelighed og ægthed."
  },
  {
    question: "Kræver det hesteerfaring?",
    answer: "Nej, overhovedet ikke. Du skal ikke ride, og du behøver ingen erfaring med heste. Alle øvelser foregår fra jorden, og jeg guider dig hele vejen. Faktisk kan det være en fordel at komme uden hesteerfaring – så møder du øvelserne helt åbent og uden vanemønstre."
  },
  {
    question: "Hvad hvis jeg er nervøs for heste?",
    answer: "Det er helt okay – og mere almindeligt end du tror. Hestene er rolige og vant til at arbejde med mennesker, og vi tilpasser altid øvelserne til dig. Du bestemmer selv, hvor tæt du vil være på hesten. Nervøsiteten kan faktisk blive en del af læringen: Hvordan håndterer du usikkerhed? Hvordan påvirker det din tilstedeværelse? Mange oplever, at netop dét bliver en værdifuld indsigt."
  },
  {
    question: "Er det sikkert?",
    answer: "Ja. Sikkerhed prioriteres højt: Alle øvelser foregår fra jorden, der gives grundig instruktion inden opstart, hestene er udvalgt og vant til arbejdet, og forløbene faciliteres professionelt."
  },
  {
    question: "Hvordan dokumenterer vi værdien over for HR?",
    answer: "Hesteassisteret læring er en evidensbaseret metode med dokumenterede resultater. Peer-reviewed forskning viser forbedringer i emotionel intelligens, selvindsigt og evne til at skabe tillid – kompetencer der direkte påvirker ledelseskvalitet og teamdynamik. Alle deltagere får desuden et refleksionsmateriale med hjem, som kan bruges til at formulere konkrete fokusområder og handlinger efterfølgende. Vil I have mere dokumentation inden beslutningen, sender jeg gerne relevante forskningsreferencer."
  },
  {
    question: "Hvordan booker jeg?",
    answer: "Kontakt mig på info@christinaborreby.dk for en kort afklarende dialog om dine mål og ønsket udbytte. Du kan også tilmelde dig ventelisten for kommende åbne workshops, så får du besked, når nye datoer åbner."
  }
]

const journeySteps = [
  {
    number: '01',
    title: 'Udtryk & adfærd',
    subtitle: 'Dit lederskab i praksis',
    description: 'I mødet med hesten får du øjeblikkelig feedback på din tilstedeværelse, energi og kommunikation. Hesten spejler det, du udstråler – ikke det, du siger.'
  },
  {
    number: '02',
    title: 'Indsigt',
    subtitle: 'Mønstre bliver synlige',
    description: 'Gennem faciliteret refleksion får du øje på de mønstre og blinde vinkler, der påvirker dit lederskab. Hvad virker? Hvad står i vejen?'
  },
  {
    number: '03',
    title: 'Forankring',
    subtitle: 'Fra oplevelse til hverdag',
    description: 'Du får konkrete redskaber til at tage læringen med hjem. Indsigter der forankres i kroppen huskes længe efter workshoppen.'
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
              Få klarhed over dine adfærdsmønstre, ressourcer og blind spots, så du kan lede fra dit autentiske selv, og træn dit autentiske lederskab i praksis. Gennem mødet med hesten får du øjeblikkelig, ærlig feedback på dit lederskab, uden filter.
            </p>
            <div className="workshop-hero-buttons">
              <a href="/kontakt" className="cta-button cta-button-swap">
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

      {/* Journey Section */}
      <section className="workshop-forloeb">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-forloeb-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Workshoppens indhold</p>
            <h2>Fra indsigt til forankring</h2>
            <p className="workshop-forloeb-intro">
              De fleste lederkurser giver dig værktøjer. Modeller. Teorier du skal huske at anvende, når du kommer tilbage til hverdagen.
            </p>
            <p className="workshop-forloeb-intro workshop-forloeb-question">
              Men hvornår fik du sidst mulighed for at træne din evne til at opnå følgeskab - med instant feedback?
            </p>
          </motion.div>

          <div className="workshop-forloeb-cards">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="workshop-forloeb-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <span className="forloeb-card-number">{step.number}</span>
                <h3>{step.title}</h3>
                <span className="forloeb-card-subtitle">{step.subtitle}</span>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="workshop-forloeb-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Du behøver ingen hesteerfaring, kun nysgerrighed og viljen til at lære noget nyt om dig selv.
          </motion.p>

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
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>3 timers intensiv workshop</span>
            </div>
            <div className="practical-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>
              </svg>
              <span>Let forplejning inkluderet</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Method Section */}
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
            <p className="section-label">Forskellen</p>
            <h2>Hvorfor virker det anderledes?</h2>
            <p className="workshop-why-intro">
              De fleste lederkurser giver dig værktøjer, modeller og teorier. Men hvornår fik du sidst mulighed for at <em>se</em> dit lederskab – helt uden filter?
            </p>
            <p>
              Hestene spejler din autenticitet, dit nærvær og din energi i nuet. De viser præcist, hvor du står stærkt, og hvor du ubevidst mister kontakt eller gennemslagskraft.
            </p>
            <p>
              Heste er byttedyr. De har overlevet i millioner af år ved at aflæse intention og energi hos dem omkring sig.
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
                <h4>Uden filter</h4>
                <p>De reagerer ikke på titler, ord eller charme – kun på det, du reelt udstråler</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </span>
              <div>
                <h4>Brutalt ærlige spejle</h4>
                <p>Når hesten følger dig, ved du, at dit lederskab virker</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </span>
              <div>
                <h4>Værdifuld feedback</h4>
                <p>Når hesten vender sig væk, får du information om, hvad der mangler</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="workshop-testimonial-slider">
        <div className="workshop-container">
          <p className="section-label">Det siger deltagerne</p>
          <div className="testimonial-slider">
            <button
              className="testimonial-nav testimonial-nav-prev"
              onClick={prevTestimonial}
              aria-label="Forrige citat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-slide"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="testimonial-quote-large">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="testimonial-author-large">
                  <span className="testimonial-name">{testimonials[currentTestimonial].author}</span>
                  <span className="testimonial-role">{testimonials[currentTestimonial].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="testimonial-nav testimonial-nav-next"
              onClick={nextTestimonial}
              aria-label="Næste citat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Gå til citat ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="workshop-evidence-banner">
        <div className="workshop-container">
          <motion.div
            className="evidence-banner-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="evidence-banner-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div className="evidence-banner-text">
              <p className="evidence-banner-label">Dokumenteret effekt</p>
              <h3>Hesteassisteret læring er en evidensbaseret metode</h3>
              <p className="evidence-banner-desc">
                Peer-reviewed forskning dokumenterer forbedringer i emotionel intelligens, evne til at skabe tillid og følgeskab, samt stresshåndtering.
              </p>
            </div>
            <a href="/forskning" className="evidence-banner-link">
              <span>Læs om forskningen</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="workshop-facilitator">
        <div className="workshop-facilitator-bg">
          <img src="/christina-gallop.jpg" alt="Christina rider på hest i galop" />
        </div>
        <div className="workshop-facilitator-overlay" />
        <div className="workshop-facilitator-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Din facilitator</p>
            <h2>Christina Borreby</h2>
            <p className="workshop-facilitator-credentials">
              Cand.negot. i Kommunikation · Certificeret psykoterapeut · 30+ års erfaring med heste
            </p>
            <div className="workshop-facilitator-text">
              <p>
                Fra barnsben har heste været mine læremestre i lederskab - uden jeg vidste det.
              </p>
              <p>
                Når jeg mistede fokus eller var uklar i min intention, tog hesten over. Når du sidder på 500 kilo muskler i 60 km/t, finder du hurtigt ud af, om dit lederskab virker. Det har jeg mærket på egen krop.
              </p>
              <p>
                Hestene lærer mig dagligt, at følgeskab ikke handler om kontrol - men om nærvær, tydelighed og sunde grænser. Og ikke mindst om kongruens mellem det, man tænker, føler og signalerer udadtil.
              </p>
              <p>
                Den erfaring bruger jeg i dag - kombineret med min baggrund i kommunikation, adfærdspsykologi og menneskelig udvikling - til at hjælpe ledere med at se deres eget lederskab uden filter.
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

      {/* Booking Section */}
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
            <p className="section-label">Kom i gang</p>
            <h2>Book din workshop</h2>
          </motion.div>

          <div className="workshop-booking-options">
            <motion.div
              className="booking-option booking-option-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="booking-option-label">Anbefalet</span>
              <h3>Lukket workshop</h3>
              <div className="booking-option-price">Fra 14.000 kr.</div>
              <p className="booking-option-unit">for jeres ledergruppe</p>
              <ul className="booking-option-details">
                <li>3-4 timer</li>
                <li>Max 6 deltagere</li>
                <li>Inkl. forplejning og reflektionsmateriale</li>
              </ul>
              <a href="/kontakt" className="booking-option-cta">
                <span>Book en samtale</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="booking-option"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Åben workshop</h3>
              <div className="booking-option-price">4.000 kr.</div>
              <p className="booking-option-unit">pr. deltager</p>
              <ul className="booking-option-details">
                <li>3-4 timer</li>
                <li>Max 6 deltagere</li>
                <li>Inkl. forplejning og reflektionsmateriale</li>
              </ul>
              <button onClick={() => openModal('Venteliste')} className="booking-option-cta booking-option-cta-secondary">
                <span>Skriv mig på ventelisten</span>
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
                <p className="section-label">Venteliste</p>
                <h3>Få besked om nye datoer</h3>
                <p className="modal-info">Skriv dig op og få første adgang til nye workshopdatoer</p>
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
                  <p className="form-success">Tak! Du hører fra os, når nye datoer åbner.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="form-error">Der opstod en fejl. Prøv igen eller skriv til info@christinaborreby.dk</p>
                )}
              </form>

              <p className="modal-disclaimer">
                Bare rolig, du modtager kun besked om nye workshopdatoer.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
