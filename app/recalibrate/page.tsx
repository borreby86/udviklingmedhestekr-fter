'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Data
const metoder = [
  {
    title: "Nervesystemsregulering",
    description: "Du lærer at genkende, når dit nervesystem er i alarmberedskab – og hvad du konkret kan gøre for at bringe det tilbage i balance, så du kan holde til tempoet uden at betale med dit helbred."
  },
  {
    title: "Co-regulering med heste",
    description: "Heste har en naturlig evne til at berolige et overstimuleret nervesystem. I deres rolige nærvær falder pulsen, skuldrene sænker sig, og du begynder at mærke dig selv igen."
  },
  {
    title: "Naturens helende rum",
    description: "Naturen tilbyder et andet tempo end hverdagen. Her er ingen notifikationer, ingen deadlines – bare rum til at trække vejret og lade nervesystemet finde ro."
  },
  {
    title: "Kropslig forankring",
    description: "Stress sidder i kroppen. Gennem simple øvelser lærer du at mærke signalerne tidligt og handle på dem, før de vokser sig store."
  }
]

const oplevelser = [
  "En dybere forståelse af dine egne mønstre og reaktioner",
  "Konkrete redskaber til at regulere dit nervesystem i hverdagen",
  "Kropslig erfaring med, hvordan ro og balance faktisk føles",
  "Klarhed over, hvad du har brug for – og mod til at handle på det",
  "En fornyet kontakt til dig selv og dine egne ressourcer"
]

const forHvem = [
  "Du føler dig konstant \"på\" og har svært ved at koble af",
  "Du har mistet fornemmelsen for, hvad du egentlig har brug for",
  "Du mærker, at kroppen sender signaler, du har ignoreret for længe",
  "Du søger et rum uden præstation, hvor du bare kan være",
  "Du vil gerne forstå dig selv bedre og træffe mere bevidste valg",
  "Du er nysgerrig på, hvad heste kan lære dig om dig selv"
]

const formater = [
  {
    title: "Enkelt session",
    description: "1,5-3 timer med co-regulering af nervesystemet gennem hestesamvær og guidet refleksion. Et godt sted at starte.",
    price: "Fra 1.500 kr."
  },
  {
    title: "Forløb",
    description: "Et intensivt forløb over tid til dig, der mærker stresssymptomer eller ønsker et kontinuerligt rum til at rekalibrere.",
    price: "Fra 5.000 kr."
  }
]

export default function RecalibratePage(): React.JSX.Element {
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
      <section className="workshop-hero-full" ref={heroRef}>
        <motion.div className="workshop-hero-bg" style={{ y: heroY }}>
          <img src="/natur-recalibrate.jpeg" alt="Recalibrate - find tilbage til dig selv" />
        </motion.div>
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-content-full">
          <motion.div
            className="workshop-hero-text-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Back to basics</p>
            <h1>Recalibrate</h1>
            <p className="workshop-hero-tagline">Bliv ved med at præstere – uden at kroppen betaler prisen</p>
            <p className="workshop-hero-desc">
              For dig der vil holde tempoet, men mærker at noget skal ændres. Lær at regulere dit nervesystem med hestenes hjælp og naturens ro.
            </p>
            <a href="#format" className="cta-button">
              <span>Se formater</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="workshop-why-neutral">
        <div className="workshop-container">
          <motion.div
            className="workshop-why-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Hvad er Recalibrate?</p>
            <h2>Hold tempoet – uden at betale med dit helbred</h2>
            <p>
              Livet kræver meget af dig. Og måske handler det ikke om at sætte tempoet ned – men om at finde en måde at holde til det på.
            </p>
            <p>
              Recalibrate handler om at regulere dit nervesystem, så du kan fortsætte med at præstere uden at kroppen betaler prisen. Med hestenes hjælp og naturens ro lærer du at genkende dine signaler og handle på dem i tide.
            </p>
            <p>
              Det handler ikke om at stoppe op. Det handler om at finde det fundament, der gør, at du kan blive ved.
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
                  <path d="M2 12h4l3-9 4 18 3-9h6"/>
                </svg>
              </span>
              <div>
                <h4>Regulér nervesystemet</h4>
                <p>Lær at genkende alarmsignaler og handle før det er for sent</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16.5 6.5c-1.5-1.5-4-1.5-5.5 0l-.5.5-.5-.5c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l6 6 6-6c1.5-1.5 1.5-4 0-5.5z"/>
                  <path d="M10.5 10.5c2 2 2 4 2 4" strokeLinecap="round"/>
                  <path d="M13.5 10.5c-2 2-2 4-2 4" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <h4>Hestenes co-regulering</h4>
                <p>Naturlig beroligelse af et overstimuleret nervesystem</p>
              </div>
            </div>
            <div className="workshop-point">
              <span className="workshop-point-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="5" r="2"/>
                  <path d="M12 7v5m-3 2l3-2 3 2m-6 0v4m6-4v4"/>
                  <path d="M7 10c0-1 1-2 2-2m8 2c0-1-1-2-2-2"/>
                </svg>
              </span>
              <div>
                <h4>Qigong</h4>
                <p>Blide bevægelser der bringer krop og sind i balance, som du kan bruge i din hverdag</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hestene Section - med billede */}
      <section className="workshop-instructor">
        <div className="workshop-instructor-bg">
          <img src="/horse-course-stress-fri.jpeg" alt="Hest i naturen" />
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
            <p className="section-label">Metoden</p>
            <h2>Hestene som spejl og co-regulering</h2>
            <p>
              Heste lever i nuet. De reagerer ikke på det, du siger eller tænker – men på det, du udstråler. Din energi, dit nervesystem, din indre tilstand. Det gør dem til ærlige spejle, der viser dig noget, ord sjældent kan.
            </p>
            <p>
              Men hestene gør mere end at spejle. Som flokdyr har de en naturlig evne til at <strong>co-regulere</strong> – at hjælpe med at berolige et overstimuleret nervesystem gennem deres egen rolige tilstedeværelse.
            </p>
            <p>
              Når du står ved siden af en hest og mærker dens langsomme vejrtrækning, sker der noget i din egen krop. Pulsen falder. Skuldrene sænker sig. Du begynder at mærke dig selv igen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Redskaberne Section */}
      <section className="workshop-benefits-new">
        <div className="workshop-container-wide">
          <div className="workshop-benefits-header">
            <p className="section-label">Redskaberne</p>
            <h2>Hvordan vi arbejder</h2>
          </div>

          <div className="workshop-benefits-columns">
            <motion.div
              className="workshop-benefit-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="workshop-benefit-list">
                {metoder.slice(0, 2).map((metode, index) => (
                  <div key={index} className="workshop-benefit-item">
                    <span className="benefit-number">0{index + 1}</span>
                    <div>
                      <h4>{metode.title}</h4>
                      <p>{metode.description}</p>
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
              <div className="workshop-benefit-list">
                {metoder.slice(2, 4).map((metode, index) => (
                  <div key={index} className="workshop-benefit-item">
                    <span className="benefit-number">0{index + 3}</span>
                    <div>
                      <h4>{metode.title}</h4>
                      <p>{metode.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Det kan du tage med dig */}
      <section className="workshop-timeline">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-timeline-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Udbytte</p>
            <h2>Det kan du tage med dig</h2>
          </motion.div>

          <div className="workshop-timeline-track">
            {oplevelser.map((oplevelse, index) => (
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
                  {index < oplevelser.length - 1 && <span className="timeline-step-line" />}
                </div>
                <div className="timeline-step-content">
                  <p style={{ marginTop: '0.25rem' }}>{oplevelse}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Section - med naturbillede */}
      <section className="workshop-instructor" id="format">
        <div className="workshop-instructor-bg">
          <img src="/walkandtalk-recalibrate.jpeg" alt="Efterår i skoven" />
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
            <p className="section-label">Format og pris</p>
            <h2>Vælg det der passer dig</h2>

            <div className="workshop-practical-badges" style={{ marginTop: '1.5rem', marginBottom: '2rem', justifyContent: 'flex-start', gap: '1.5rem' }}>
              <div className="practical-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Hørsholm, Nordsjælland</span>
              </div>
              <div className="practical-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>Fra 1,5 time</span>
              </div>
              </div>

            <div className="workshop-investment-grid">
              {formater.map((format, index) => (
                <motion.div
                  key={index}
                  className={`investment-card ${index === 1 ? 'investment-card-featured' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3>{format.title}</h3>
                  <div className="investment-price">{format.price}</div>
                  <p className="investment-unit" style={{ marginTop: '0.5rem' }}>{format.description}</p>
                </motion.div>
              ))}
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--color-sage)', fontStyle: 'italic' }}>
              Kan også arrangeres for grupper efter ønske.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Er Recalibrate noget for dig? - Mørk sektion */}
      <section className="workshop-for-hvem-dark">
        <div className="workshop-container-wide">
          <motion.div
            className="workshop-for-hvem-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Er det noget for dig?</p>
            <h2>Recalibrate er for dig, der...</h2>
            <p className="workshop-for-hvem-intro">
              ...mærker, at tempoet har taget overhånd – uanset om du vil stoppe op eller finde en sundere måde at fortsætte på.
            </p>
          </motion.div>

          <div className="workshop-for-hvem-grid">
            {forHvem.map((punkt, index) => (
              <motion.div
                key={index}
                className="workshop-for-hvem-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <svg className="workshop-for-hvem-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/>
                </svg>
                <p>{punkt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="workshop-instructor recalibrate-cta">
        <div className="workshop-instructor-bg">
          <img src="/baal-recalibrate.jpeg" alt="Bål i naturen" style={{ objectPosition: 'center 70%' }} />
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
            <p className="section-label">Næste skridt</p>
            <h2>Klar til at finde tilbage til dig selv?</h2>
            <p>
              Du behøver ikke have alle svarene på forhånd. Du behøver ikke engang vide præcis, hvad du leder efter. Bare en fornemmelse af, at der må være en anden måde.
            </p>
            <Link href="/kontakt" className="cta-button" style={{ marginTop: '2rem' }}>
              <span>Lad os tage en samtale</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
