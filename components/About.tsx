'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function About() {
  return (
    <section className="about-banner" id="om">
      <div className="about-banner-bg">
        <Image
          src="/christina_borreby.jpeg"
          alt="Christina Borreby - specialist i hesteassisteret lederudvikling"
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="about-banner-overlay" />
      <div className="about-banner-container">
        <motion.div
          className="about-banner-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Din facilitator</p>
          <h2>Christina Borreby</h2>
          <p className="about-credentials">Cand.negot i Kommunikation & HR · Certificeret psykoterapeut · 30 års erfaring med heste</p>
          <p>
            Min passion er at hjælpe ledere med at opbygge et stærkt indre fundament, så de kan stå roligt, tydeligt og autentisk i deres lederskab.
          </p>
          <p>
            Med en baggrund som cand.negot i kommunikation og HR, mange års erfaring som psykoterapeut og træning af galopheste, hvor mit eget autentiske lederskab dagligt kommer på prøve, har jeg skabt et koncept hvor teori og praksis smelter sammen. Denne kombination giver mig en unik evne til at forbinde forretningsforståelse, psykologisk indsigt og konkret erfaring med samarbejde under pres.
          </p>
          <p>
            Hestene er mine vigtigste samarbejdspartnere. De spejler med det samme de mønstre og blind spots, som ellers kan være svære at opdage. De viser præcist, hvor vi mister kontakt, retning eller energi, og åbner en vej til forandring, der ikke blot handler om at løse problemer, men om at forløse potentiale.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
