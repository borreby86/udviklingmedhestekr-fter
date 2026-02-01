'use client'

import { motion } from 'motion/react'
import Navigation from '@/components/Navigation'

const collaborators = [
  { name: 'Digitaliseringsstyrelsen', logo: '/digitaliseringsstyrelsen_rgb.jpg' },
  { name: '3 Danmark', logo: '/3 logo.jpg' },
  { name: 'Peter Justesen', logo: '/peter justesen.png' },
  { name: 'GlobalConnect', logo: '/global connect.png' },
  { name: 'Gentofte Hospital', logo: '/gentofte hospital.jpeg' },
  { name: 'Fredensborg Kommune', logo: '/fredensborg_logo.png' }
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
    detail: 'Daglig træning af galopheste'
  },
  {
    title: 'Træner galopheste på konkurrenceplan',
    detail: 'Daglig træning i beslutningstagning under pres og fart'
  }
]

const approach = [
  {
    title: 'Kongruens under pres',
    description: 'Hesten reagerer på forskellen mellem det, du viser udadtil, og det du mærker indeni. Den træning overfører jeg direkte til situationer, hvor presset er højt og autenticiteten afgørende.'
  },
  {
    title: 'Krop før analyse',
    description: 'Vi registrerer ubalance i kroppen længe før tankerne indhenter os. Gennem arbejdet med hestene træner vi evnen til at mærke og handle på de signaler - i stedet for at overse dem.'
  },
  {
    title: 'Relationer som fundament',
    description: 'Samarbejde, tillid og sunde grænser er ikke blot bløde værdier. Det er de konkrete kompetencer, der afgør, om et team fungerer under pres eller falder fra hinanden.'
  }
]

const testimonial = {
  quote: 'Jeg opdagede mit mod, og med Christinas guidance, uddybende spørgsmål og tilstedeværelse blev det meget tydeligt for mig, hvor subtilt min krop og følelser reagerer. Ofte uden jeg er klar over det.',
  author: 'Anne Marie Valentin, Indehaver, Icebreaker Academy'
}

export default function OmMigPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section - banner style */}
      <section className="about-page-banner">
        <div className="about-page-banner-bg">
          <img src="/christina_borreby.jpeg" alt="Christina Borreby - specialist i hesteassisteret lederudvikling" />
        </div>
        <div className="about-page-banner-overlay" />
        <div className="about-page-banner-container">
          <motion.div
            className="about-page-banner-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Om mig</p>
            <h1>Christina Borreby</h1>
            <p className="about-page-banner-credentials">Cand.negot i Kommunikation & HR · 30+ års erfaring med heste</p>
            <p className="about-page-banner-desc">
              Jeg hjælper ledere, teams og medarbejdere med at finde det, der ikke kan læres i et klasselokale: evnen til at stå roligt i sig selv, også når presset stiger.
            </p>
            <div className="workshop-hero-buttons">
              <a href="/kontakt" className="cta-button">
                <span>Book en samtale</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
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
            <h2>Det der ikke kan fakes</h2>
            <p>
              Min baggrund i kommunikation og HR gav mig forretningsforståelsen. Certificeringen som psykoterapeut gav mig indsigten i, hvad der driver mennesker under overfladen. Men det er 30 års daglig træning med heste, der har givet mig det, ingen uddannelse kan lære dig.
            </p>
            <p>
              En hest følger dig kun, hvis din indre og ydre tilstand stemmer overens. Den registrerer øjeblikkeligt, om du er til stede - eller bare lader som om. Den skelner ikke mellem titler og hierarkier, men reagerer udelukkende på din evne til at være kongruent, tydelig og rolig. Også der, hvor frygten melder sig.
            </p>
            <p>
              Gennem årene har jeg undervist i mindfulness, trivsel og motivation gennem fysisk aktivitet i en lang række virksomheder. Det arbejde gav mig dyb indsigt i, hvad der rykker mennesker - og hvad der ikke gør. I dag fokuserer jeg udelukkende på min passion: det dybere udviklingsarbejde, hvor hestene er med som spejl og katalysator.
            </p>
            <p>
              Den kompetence - at kunne holde fast i sig selv under pres - er præcis det, der adskiller mennesker, der trives i forandring, fra dem der går i stå. Uanset om du er leder, medarbejder eller del af et team.
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
            Tidligere samarbejder
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

      {/* Story Section - Full width with background */}
      <section className="about-page-story-full">
        <div className="about-page-story-bg">
          <img src="/christina-gallop.jpg" alt="Christina Borreby rider på hest i galop" />
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
            <h2>500 kilo ærlig feedback</h2>
            <p>
              Heste lever i flok med ét konstant spørgsmål: hvem leder vi? De søger ikke den stærkeste, men den mest kongruente. Den der er rolig indeni og tydelig udadtil.
            </p>
            <p>
              Når jeg sidder på en galophest i 60 km/t og mister fokus, tager hesten over. Ikke af ondskab - men fordi den ikke kan følge en leder, der ikke er til stede. Det har tvunget mig til dagligt at træne det, de fleste kun taler om: at holde fast i sig selv, også når frygten sætter ind.
            </p>
            <p className="story-highlight">
              Den træning overfører jeg direkte til mennesker i organisationer. For dynamikken er den samme: følgeskab opstår ikke gennem kontrol, men gennem nærvær, tydelighed og tillid.
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
            <p className="section-label">Hvad jeg bringer med</p>
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
              Uanset om du er leder, medarbejder eller søger udvikling for dit team - jeg tilbyder en uforpligtende samtale, hvor vi finder ud af, om det er det rette for jer.
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
