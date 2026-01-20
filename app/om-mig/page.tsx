'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Navigation from '@/components/Navigation'

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
    detail: 'ID Academy - Speciale i stress og relationer'
  },
  {
    title: '30+ års erfaring med heste',
    detail: 'Træning af galopheste'
  }
]

const approach = [
  {
    title: 'Krop før tanke',
    description: 'Ægte forandring starter i kroppen. Hestene giver øjeblikkelig feedback på dit nærvær og din energi - længe før hovedet når at analysere.'
  },
  {
    title: 'Praksis frem for teori',
    description: 'Lederskab læres ikke i klasselokalet. Det trænes i øjeblikke, hvor du mærker presset og skal finde roen alligevel.'
  },
  {
    title: 'Relationer som fundament',
    description: 'Dit lederskab er kun så stærkt som dine relationer. Vi arbejder med tillid, grænser og autentisk kommunikation.'
  }
]

const testimonial = {
  quote: 'Christina formår at skabe et rum, hvor man tør være sårbar og ærlig. Det har forandret min måde at lede på.',
  author: 'Leder, større dansk virksomhed'
}

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
          <img src="/christina-gallop.jpg" alt="Christina Borreby rider på hest i galop" />
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
              Jeg hjælper ledere med at finde ro i presset og styrke i sårbarhed
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

      {/* Testimonial Section */}
      <section className="about-testimonial">
        <div className="about-testimonial-container">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <svg className="about-testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p>{testimonial.quote}</p>
            <cite>- {testimonial.author}</cite>
          </motion.blockquote>
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
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="about-approach">
        <div className="about-approach-container">
          <motion.div
            className="about-approach-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Filosofi</p>
            <h2>Min tilgang</h2>
          </motion.div>
          <div className="about-approach-grid">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                className="about-approach-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with CTA */}
      <footer className="about-footer">
        <div className="about-footer-container">
          <motion.div
            className="about-footer-cta"
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
          <div className="about-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Christina Borreby</p>
            <a href="/privatlivspolitik">Privatlivspolitik</a>
          </div>
        </div>
      </footer>
    </>
  )
}
