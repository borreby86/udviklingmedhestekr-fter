'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const collaborators = [
  { name: 'Digitaliseringsstyrelsen', logo: '/digitaliseringsstyrelsen_rgb.jpg' },
  { name: '3 Danmark', logo: '/3 logo.jpg' },
  { name: 'Peter Justesen', logo: '/peter justesen.png' },
  { name: 'GlobalConnect', logo: '/download.png' },
  { name: 'Gentofte Hospital', logo: '/images.jpeg' },
  { name: 'Fredensborg Kommune', logo: '/fredensborg-kommune.png' }
]

const credentials = [
  {
    title: 'Cand.negot. i Kommunikation & HR',
    detail: 'Syddansk Universitet'
  },
  {
    title: 'Certificeret psykoterapeut',
    detail: 'ID Academy · Speciale i stress og relationer'
  },
  {
    title: '30+ års erfaring med heste',
    detail: 'Træning af galopheste'
  }
]

export default function OmMigPage() {
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
      <section className="about-page-hero-full" ref={heroRef}>
        <motion.div className="about-page-hero-bg" style={{ y: heroY }}>
          <img src="/galop_maestro1.jpg" alt="Christina Borreby rider på hest i galop" />
        </motion.div>
        <div className="about-page-hero-overlay-full" />
        <div className="about-page-hero-content-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Om mig</p>
            <h1>Christina Borreby</h1>
            <p className="about-page-hero-intro">
              Cand.negot i Kommunikation & HR · Certificeret psykoterapeut · 30 års erfaring med heste
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio + Credentials Section */}
      <section className="about-bio-credentials">
        <div className="about-bio-credentials-container">
          <motion.div
            className="about-bio-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Teori og praksis smeltet sammen</h2>
            <p>
              Min passion er at hjælpe ledere med at opbygge et stærkt indre fundament, så de kan stå roligt, tydeligt og autentisk i deres lederskab.
            </p>
            <p>
              Med en baggrund i kommunikation og HR, mange års erfaring som psykoterapeut og daglig træning af galopheste, har jeg skabt et koncept hvor teori og praksis smelter sammen.
            </p>
            <p>
              Denne kombination giver mig en unik evne til at forbinde forretningsforståelse, psykologisk indsigt og konkret erfaring med samarbejde under pres.
            </p>
          </motion.div>

          <motion.div
            className="about-credentials-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3>Baggrund</h3>
            {credentials.map((item, index) => (
              <div key={index} className="about-credential-item">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section - Full width with background */}
      <section className="about-page-story-full">
        <div className="about-page-story-bg">
          <img src="/recalibrate_stress_fri.jpeg" alt="Hest i naturen" />
        </div>
        <div className="about-page-story-overlay-full" />
        <div className="about-page-story-content-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Min historie</p>
            <h2>Hestene som læremestre</h2>
            <p>
              Fra barnsben har heste været mine læremestre i lederskab - uden jeg vidste det.
            </p>
            <p>
              Når jeg mistede fokus eller var uklar i min intention, tog hesten over. Når du sidder på 500 kilo muskler i 60 km/t, finder du hurtigt ud af, om dit lederskab virker. Det har jeg mærket på egen krop.
            </p>
            <p className="story-highlight">
              Hestene lærer mig dagligt, at følgeskab ikke handler om kontrol - men om nærvær, tydelighed og sunde grænser.
            </p>
            <p>
              Hestene er mine vigtigste samarbejdspartnere. De spejler med det samme de mønstre og blind spots, som ellers kan være svære at opdage. De viser præcist, hvor vi mister kontakt, retning eller energi, og åbner en vej til forandring, der ikke blot handler om at løse problemer, men om at forløse potentiale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar - Logos */}
      <section className="about-trust-bar">
        <div className="about-trust-container">
          <motion.p
            className="about-trust-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Har arbejdet med
          </motion.p>
          <motion.div
            className="about-trust-logos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {collaborators.map((collab, index) => (
              <div key={index} className="about-trust-logo">
                <img src={collab.logo} alt={collab.name} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-page-cta">
        <div className="about-page-container">
          <motion.div
            className="about-page-cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Skal vi tage en snak?</h2>
            <p>
              Jeg tilbyder en uforpligtende samtale, hvor vi kan afdække, om hesteassisteret udvikling er det rette for dig eller dit team.
            </p>
            <a href="/kontakt" className="cta-button">
              <span>Kontakt mig</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
