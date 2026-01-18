'use client'

import { motion } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const education = [
  {
    year: '2013-2017',
    title: 'Psykoterapeut, Meditation og Psykologi',
    institution: 'ID Academy · Speciale i stresshåndtering samt relationer'
  },
  {
    year: '2005-2011',
    title: 'Cand.negot. Spansk, International Communication & Marketing + HR',
    institution: 'Syddansk Universitet'
  },
  {
    year: '',
    title: 'Meditation og Mindfulness Instruktør',
    institution: ''
  }
]

const experience = [
  {
    year: '2017-2023',
    title: 'Founder, Power Academy',
    description: 'Hesteassisterede workshops, forløb, kurser & 1:1 sessioner med fokus på personlig udvikling'
  },
  {
    year: '2017 -',
    title: 'Facilitator af leder- og teamudvikling',
    description: 'Hesteassisterede workshops og forløb for ledere og teams'
  },
  {
    year: '30+ år',
    title: 'Erfaring med heste',
    description: 'Træning af galopheste og daglig omgang med heste som læremestre i lederskab'
  }
]

const collaborators = [
  { name: 'Hjerteforeningen', logo: '/placeholder-logo.svg' },
  { name: 'Nordic Bloom', logo: '/placeholder-logo.svg' },
  { name: 'CSM', logo: '/placeholder-logo.svg' }
]

export default function OmMigPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="about-page-hero">
        <div className="about-page-hero-bg">
          <img src="/christina-gallop.jpg" alt="Christina Borreby rider på hest i galop" />
        </div>
        <div className="about-page-hero-overlay" />
        <div className="about-page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Om mig</p>
            <h1>Christina Borreby</h1>
            <p className="about-page-hero-tagline">
              Cand.negot. · Psykoterapeut · Mindfulness Instruktør · 30+ års erfaring med heste
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="about-page-bio">
        <div className="about-page-container">
          <div className="about-page-bio-grid">
            <motion.div
              className="about-page-bio-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/christina_borreby.jpeg" alt="Christina Borreby" />
            </motion.div>

            <motion.div
              className="about-page-bio-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>Min passion er at hjælpe ledere med at finde deres autentiske lederskab</h2>
              <p>
                Min passion er at hjælpe ledere med at opbygge et stærkt indre fundament, så de kan stå roligt, tydeligt og autentisk i deres lederskab.
              </p>
              <p>
                Med en baggrund som cand.negot i kommunikation og HR, mange års erfaring som psykoterapeut og træning af galopheste, hvor mit eget autentiske lederskab dagligt kommer på prøve, har jeg skabt et koncept hvor teori og praksis smelter sammen.
              </p>
              <p>
                Denne kombination giver mig en unik evne til at forbinde forretningsforståelse, psykologisk indsigt og konkret erfaring med samarbejde under pres.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="about-page-story">
        <div className="about-page-story-bg">
          <img src="/playboy.jpeg" alt="Hest i naturen" />
        </div>
        <div className="about-page-story-overlay" />
        <div className="about-page-container">
          <motion.div
            className="about-page-story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Hestene som læremestre</h2>
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
              Hestene er mine vigtigste samarbejdspartnere. De spejler med det samme de mønstre og blind spots, som ellers kan være svære at opdage. De viser præcist, hvor vi mister kontakt, retning eller energi, og åbner en vej til forandring, der ikke blot handler om at løse problemer, men om at forløse potentiale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CV Section */}
      <section className="about-page-cv">
        <div className="about-page-container">
          <motion.div
            className="about-page-cv-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Baggrund</p>
            <h2>Uddannelse & erfaring</h2>
          </motion.div>

          <div className="about-page-cv-columns">
            <motion.div
              className="about-page-cv-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Uddannelse</h3>
              <div className="about-page-cv-list">
                {education.map((item, index) => (
                  <div key={index} className="about-page-cv-item">
                    <span className="cv-year">{item.year}</span>
                    <div className="cv-content">
                      <h4>{item.title}</h4>
                      <p>{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-page-cv-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3>Erfaring</h3>
              <div className="about-page-cv-list">
                {experience.map((item, index) => (
                  <div key={index} className="about-page-cv-item">
                    <span className="cv-year">{item.year}</span>
                    <div className="cv-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="about-page-collaborators">
        <div className="about-page-container">
          <motion.div
            className="about-page-collaborators-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Tidligere samarbejder</p>
            <h2>Jeg har arbejdet med</h2>
            <p className="about-page-collaborators-intro">
              Ledere og teams fra blandt andet disse organisationer har deltaget i mine workshops og forløb.
            </p>
          </motion.div>

          <motion.div
            className="about-page-logo-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder boxes for logos - replace with actual logos */}
            <div className="about-page-logo-item">
              <span>Hjerteforeningen</span>
            </div>
            <div className="about-page-logo-item">
              <span>Nordic Bloom</span>
            </div>
            <div className="about-page-logo-item">
              <span>Logo 3</span>
            </div>
            <div className="about-page-logo-item">
              <span>Logo 4</span>
            </div>
            <div className="about-page-logo-item">
              <span>Logo 5</span>
            </div>
            <div className="about-page-logo-item">
              <span>Logo 6</span>
            </div>
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
