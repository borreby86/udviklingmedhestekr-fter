'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const scrollNavLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Forløbet', href: '#forloeb' },
  { label: 'Metoden', href: '#metoden' },
  { label: 'Facilitatorer', href: '#facilitatorer' },
  { label: 'Udbytte', href: '#udbytte' },
  { label: 'Tilmelding', href: '#tilmelding' },
  { label: 'Kontakt', href: '/kontakt' }
]

const workshopDates = [
  { day: '11', month: 'Marts', year: '2026', time: 'kl. 9-12' }
]

const forloebSteps = [
  {
    number: '01',
    title: 'MBS® Relationsanalyse',
    subtitle: 'Test + 1:1 feedback',
    description: 'Du modtager en dybdegående test via app og 60 minutters personlig online feedback på dine mønstre og blinde vinkler.'
  },
  {
    number: '02',
    title: '3-timers workshop',
    subtitle: 'Hesteassisteret træning',
    description: 'Intensiv workshop hvor du træner dit lederskab med hesten som spejl og får konkrete øvelser til at håndtere dine blinde vinkler.'
  },
  {
    number: '03',
    title: 'Online opfølgning',
    subtitle: '30 min + læringsplatform',
    description: 'Opfølgende session der samler trådene, plus fortsat adgang til videotræning og ekspertbaseret vejledning.'
  }
]

const mbsBenefits = [
  'Visuel og konkret indsigt i personlige mønstre',
  'Handlingsplan inkl. videotræning',
  'Vejledning til at fastholde balancen fremover'
]

const hesteBenefits = [
  'Autentisk lederskab med hest som sparringspartner',
  'Direkte feedback på din ledelsesenergi',
  'Træn balanceret energi ved at føre hest i tov'
]

const personalBenefits = [
  {
    title: "Dybere selvindsigt",
    description: "Forstå dine blinde vinkler og hvorfor du reagerer, som du gør i pressede situationer"
  },
  {
    title: "Personlig handlingsplan",
    description: "Konkret plan til implementering i hverdagen med videotræning og ekspertvejledning"
  },
  {
    title: "Balance mellem handlekraft og ro",
    description: "Viden og øvelser til at finde din gyldne middelvej i ledelse"
  }
]

const orgBenefits = [
  {
    title: "Øget emotionel intelligens",
    description: "En leder med dybere selvindsigt skaber stærkere relationer og bedre samarbejde"
  },
  {
    title: "Forebyggelse af stress",
    description: "Trivsel i organisationen når lederen kan regulere sit eget nervesystem"
  },
  {
    title: "Autentisk ledelse under pres",
    description: "Klar og tydelig leder i pressede situationer giver bedre handlekraft og resultater"
  }
]

const beforeSteps = [
  {
    step: 'Trin 1',
    title: 'MBS® Relationsanalyse',
    points: [
      'Bekræftelse på mail inden for 24 timer',
      'Besvar test via app (ca. 30 minutter)',
      'Vælg konkret relation hvor alt ikke altid flyder ubesværet',
      'Modtag rapport med mønstre og blinde vinkler'
    ]
  },
  {
    step: 'Trin 2',
    title: 'Online 1:1 Feedback (60 min)',
    points: [
      'Tilbagemelding på MBS resultat',
      'Analyse af over-/underforbrugsmønstre i relationer',
      'Indsigt i dine blinde vinkler'
    ]
  },
  {
    step: 'Trin 3',
    title: 'Individuel Handlingsplan',
    points: [
      'Personaliseret plan til dine udfordringer',
      'Videotræningsprogram på MBS® platform',
      'Ekspertbaseret vejledning i vanetænding'
    ]
  }
]

const duringSteps = [
  {
    title: 'Velkomst og introduktion',
    description: 'Vi lander i rummet og sætter intentionen for dagen'
  },
  {
    title: 'Hesteassisteret session',
    description: 'Ca. 20 minutter individuel tid med hesten. Du behøver ingen hesteerfaring - du skal ikke ride. Mød hesten fra jorden og få direkte feedback på din ledelsesenergi.'
  },
  {
    title: 'Praktisk træning',
    description: 'Håndtering af blinde vinkler gennem konkrete øvelser, faciliteret af Michael'
  },
  {
    title: 'Selvrefleksion',
    description: 'Skriftlig selvrefleksion og perspektivering 2 & 2. Omsæt indsigter til konkrete intentioner.'
  },
  {
    title: 'Fælles refleksion',
    description: 'Spejl jer i hinandens oplevelser, udveksle indsigter og tag ny inspiration med hjem'
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
            <h2>Hvornår har du sidst fået et <em>ærligt, ufiltreret spejl</em> på dig selv som leder?</h2>
          </motion.div>

          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity2, y: y2 }}
          >
            <p>
              Mange ledere navigerer ud fra vanemønstre uden at opdage deres blinde vinkler. Når presset stiger, reagerer vi ofte for meget - eller for lidt - uden at være bevidste om det.
            </p>
          </motion.div>

          <motion.div
            className="sticky-text-slide"
            style={{ opacity: opacity3, y: y3 }}
          >
            <p className="sticky-text-gold">
              På dette intensive mini-forløb får du indsigt i det, du normalt ikke ser - så du kan finde den gyldne middelvej i ledelse.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function BlindeVinklerPage() {
  const heroRef = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<typeof workshopDates[0] | null>(null)
  const [showScrollNav, setShowScrollNav] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formLoadTime, setFormLoadTime] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollNav(window.scrollY > 400)
    }
    handleScroll() // Check initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = (date: typeof workshopDates[0]) => {
    setSelectedDate(date)
    setModalOpen(true)
    setFormLoadTime(Date.now())
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
      phone: formData.get('telefon'),
      company: formData.get('virksomhed'),
      formType: 'tilmelding-blinde-vinkler',
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

      {/* Scroll Navigation */}
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

      {/* Hero Section */}
      <section className="workshop-hero-full" ref={heroRef}>
        <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
          <img src="/blind vinkel ledelse.jpeg" alt="Lederworkshop i Blinde Vinkler" />
        </motion.div>
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-content-full">
          <motion.div
            className="workshop-hero-text-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Mini-forløb der øger din selvindsigt</p>
            <h1>Opdag dine <em>blinde vinkler</em> og bliv en bedre leder</h1>
            <p className="workshop-hero-tagline">MBS® Relationsanalyse + Hesteassisteret lederskabstræning</p>
            <p className="workshop-hero-desc">
              Hvordan reagerer du i relationer, når presset stiger? Hvor giver du for meget - eller for lidt - af dig selv? På dette forløb får du skarp selvindsigt, konkret handlingsplan og tydeligere retning for dit lederskab.
            </p>
            <p className="workshop-hero-cta-text">Er du klar til at se dig selv fra en ny vinkel?</p>
            <a href="#tilmelding" className="cta-button">
              <span>Se datoer og priser</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sticky Scroll Text Section */}
      <StickyTextSection />

      {/* Forløbets tre dele */}
      <section className="workshop-forloeb" id="forloeb">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-forloeb-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Forløbet</p>
            <h2>Tre dele der skaber varig forandring</h2>
            <p className="workshop-forloeb-intro">
              Et komplet mini-forløb der kombinerer dybdegående analyse med praktisk træning og opfølgning.
            </p>
          </motion.div>

          <div className="workshop-forloeb-cards">
            {forloebSteps.map((step, index) => (
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
        </div>
      </section>

      {/* Find din gyldne middelvej */}
      <section className="workshop-middelvej" id="metoden">
        <div className="workshop-middelvej-bg">
          <img src="/gylden middelvej ledelse.jpeg" alt="Find din gyldne middelvej i ledelse" />
        </div>
        <div className="workshop-middelvej-overlay" />
        <div className="workshop-container">
          <motion.div
            className="workshop-middelvej-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Målet</p>
            <h2>Find din gyldne middelvej</h2>
            <p className="workshop-middelvej-intro">
              Effektiv ledelse findes sjældent i ekstremerne. Når vi reagerer for meget, risikerer vi overstyring, kontrol eller impulsive beslutninger. Når vi reagerer for lidt, bliver vi usynlige, undvigende eller mister retningen.
            </p>
          </motion.div>

          <div className="workshop-methods-grid">
            <motion.div
              className="workshop-method-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="method-card-header">
                <span className="method-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <h3>MBS® Relationsanalysen</h3>
              </div>
              <p className="method-card-desc">Det nyeste ledelsesværktøj til øget selvindsigt går videre end traditionelle personlighedstests. Den afdækker dybere årsager bag reaktionsmønstre.</p>
              <ul className="method-card-list">
                {mbsBenefits.map((benefit, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="workshop-method-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="method-card-header">
                <span className="method-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </span>
                <h3>Hesteassisteret træning</h3>
              </div>
              <p className="method-card-desc">Når MBS® kombineres med hesten som spejl, bliver mønstre synlige øjeblikkeligt. Heste reagerer på energi, nærvær og kropssprog.</p>
              <ul className="method-card-list">
                {hesteBenefits.map((benefit, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.blockquote
            className="workshop-quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>"MBS® analysen bliver et spejl, der gør det muligt at arbejde dér, hvor det betyder mest: i mødet med andre mennesker."</p>
          </motion.blockquote>
        </div>
      </section>

      {/* Instruktører */}
      <section className="workshop-instructors" id="facilitatorer">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-instructors-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Dine facilitatorer</p>
            <h2>Ekspertise der mødes</h2>
          </motion.div>

          <div className="workshop-instructors-grid">
            <motion.div
              className="workshop-instructor-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="instructor-card-image">
                <img src="/Christina borreby.png" alt="Christina Borreby" />
              </div>
              <div className="instructor-card-content">
                <h3>Christina Borreby</h3>
                <span className="instructor-card-title">Specialist i hesteassisteret lederudvikling</span>
                <p>Med baggrund som cand.negot i kommunikation og HR, mange års erfaring som psykoterapeut og træning af galopheste, skaber Christina et unikt rum hvor teori og praksis smelter sammen.</p>
                <div className="instructor-card-badges">
                  <span>Cand.negot</span>
                  <span>Psykoterapeut</span>
                  <span>30 års hesteerfaring</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="workshop-instructor-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="instructor-card-image">
                <img src="/Michael casparij.png" alt="Michael Casparij" />
              </div>
              <div className="instructor-card-content">
                <h3>Michael Casparij</h3>
                <span className="instructor-card-title">Ledelseskonsulent & MBS Certified Partner</span>
                <p>Michael bringer dyb ekspertise i MBS® Relationsanalysen og faciliterer øvelser der omsætter indsigt til handling. Han guider dig gennem praktisk træning i håndtering af blinde vinkler.</p>
                <div className="instructor-card-badges">
                  <span>MBS Certified</span>
                  <span>Ledelseskonsulent</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detaljeret forløb */}
      <section className="workshop-detailed">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-detailed-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Detaljeret forløb</p>
            <h2>Sådan foregår det</h2>
          </motion.div>

          {/* Før workshoppen */}
          <motion.div
            className="workshop-phase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="workshop-phase-header">
              <span className="phase-label">Før workshoppen</span>
              <h3>Forberedelse og analyse</h3>
            </div>
            <div className="workshop-phase-steps">
              {beforeSteps.map((step, index) => (
                <div key={index} className="phase-step">
                  <span className="phase-step-label">{step.step}</span>
                  <h4>{step.title}</h4>
                  <ul>
                    {step.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Under workshoppen */}
          <motion.div
            className="workshop-phase workshop-phase-highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="workshop-phase-header">
              <span className="phase-label">Under workshoppen</span>
              <h3>3 timer med fokus og intensitet</h3>
            </div>
            <div className="workshop-during-steps">
              {duringSteps.map((step, index) => (
                <div key={index} className="during-step">
                  <span className="during-step-number">{index + 1}</span>
                  <div className="during-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="workshop-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <p><strong>Ingen hesteerfaring nødvendig</strong> - du skal ikke ride. Du møder hesten fra jorden og arbejder med at føre den i tov.</p>
            </div>
          </motion.div>

          {/* Efter workshoppen */}
          <motion.div
            className="workshop-phase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="workshop-phase-header">
              <span className="phase-label">Efter workshoppen</span>
              <h3>Opfølgning og forankring</h3>
            </div>
            <div className="workshop-after-content">
              <div className="after-item">
                <h4>30 minutters opfølgende online session</h4>
                <ul>
                  <li>Samle tråde fra MBS handlingsplan</li>
                  <li>Reflektere erfaringer fra øvelserne</li>
                  <li>Konkretisere næste skridt</li>
                </ul>
              </div>
              <div className="after-item">
                <h4>Fortsat adgang til læringsplatform</h4>
                <ul>
                  <li>Videotræninger med førende eksperter</li>
                  <li>Opbyg sunde vaner over tid</li>
                  <li>Opnå frihed og balance i fastlåste mønstre</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Horses Section */}
      <section className="workshop-why-new">
        <div className="workshop-why-bg">
          <img src="/session.JPG" alt="Workshop session med heste og deltagere" />
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
            <p className="section-label">Hvorfor heste?</p>
            <h2>Øjeblikkelig og ærlig feedback</h2>
            <p>
              Heste har et sensitivt nervesystem der reagerer på energi, nærvær og kropssprog. De giver en direkte feedback-loop og ærlig spejling af din ledelsesenergi.
            </p>
            <p>
              Når du fører hesten i et tov, ser du hvordan den responderer på din energi: Er du tilbageholdt? Tager du for meget kontrol? Står du tydeligt i dit autentiske selv?
            </p>
            <p>
              Du får en følt oplevelse af, hvornår du rammer den gyldne middelvej i din udstrålede energi - en kropslig læring der forankres langt dybere end ord.
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
                <p>Hesten reagerer i nuet på din energi og indre tilstand</p>
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
                <h4>Synlige mønstre</h4>
                <p>Blinde vinkler bliver tydelige gennem hestens adfærd</p>
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
                <p>Oplevelser der forankres i kroppen og huskes længe efter</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="workshop-benefits-new" id="udbytte">
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
              <h3>Dit personlige udbytte</h3>
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
              <h3>Virksomhedens udbytte</h3>
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

      {/* Pricing & Dates Section */}
      <section className="workshop-dates-section workshop-dates-light" id="tilmelding">
        <div className="workshop-dates-bg">
          <img src="/m og c går.JPG" alt="Michael og Christina" />
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
            <p className="section-label">Pris og praktik</p>
            <h2>Vælg din dato</h2>
            <p className="workshop-dates-intro">
              Nordsjælland, 2970 Hørsholm
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
                <div className="date-card-date">
                  <div className="date-card-day-month">
                    <span className="date-card-day">{date.day}</span>
                    <span className="date-card-month">{date.month}</span>
                  </div>
                  <span className="date-card-year">{date.year}</span>
                </div>
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

            {/* Forespørg dato til ledergruppe/team */}
            <motion.a
              href="/kontakt"
              className="workshop-date-card workshop-date-card-light workshop-date-card-inquiry"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: workshopDates.length * 0.1 }}
            >
              <div className="date-card-inquiry-content">
                <span className="date-card-inquiry-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </span>
                <h4>Til jeres ledergruppe eller team?</h4>
                <p>Forespørg på en dato der passer jer</p>
              </div>
              <div className="date-card-divider" />
              <div className="date-card-action">
                <span>Kontakt os</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="workshop-pricing-compact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="pricing-compact-main">
              <span className="pricing-compact-label">Intropris</span>
              <span className="pricing-compact-amount">kr. 4.750</span>
              <span className="pricing-compact-suffix">ex. moms</span>
              <span className="pricing-compact-original">Normalpris: kr. 9.500</span>
            </div>
            <div className="pricing-compact-includes">
              <span>Inkl. MBS® test, 1:1 feedback, workshop, opfølgning og læringsplatform</span>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />

      {/* Registration Modal */}
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
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              <div className="modal-header">
                <p className="section-label">Tilmelding</p>
                <h3>Workshop {selectedDate.day}. {selectedDate.month} {selectedDate.year}</h3>
                <p className="modal-info">{selectedDate.time} · Nordsjælland, 2970 Hørsholm</p>
              </div>

              <form className="modal-form" onSubmit={handleModalSubmit}>
                {/* Honeypot field - hidden from humans, filled by bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website-blinde">Website</label>
                  <input type="text" id="website-blinde" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-navn">Navn *</label>
                  <input type="text" id="modal-navn" name="navn" required placeholder="Dit fulde navn" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-email">E-mail *</label>
                  <input type="email" id="modal-email" name="email" required placeholder="din@email.dk" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-telefon">Telefon</label>
                  <input type="tel" id="modal-telefon" name="telefon" placeholder="Dit telefonnummer" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="modal-virksomhed">Virksomhed</label>
                  <input type="text" id="modal-virksomhed" name="virksomhed" placeholder="Din virksomhed" />
                </div>
                <button type="submit" className="modal-submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sender...' : 'Send tilmelding'}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                {submitStatus === 'success' && (
                  <p className="form-success">Tak for din tilmelding! Du modtager en bekræftelse inden for 24 timer.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="form-error">Der opstod en fejl. Prøv igen eller skriv til info@christinaborreby.dk</p>
                )}
              </form>

              <p className="modal-disclaimer">
                Du modtager en bekræftelse på mail inden for 24 timer.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
