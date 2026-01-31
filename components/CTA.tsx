'use client'

import { ArrowIcon } from './Icons'
import { motion } from 'motion/react'

export default function CTA() {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-label">Næste skridt</p>
        <h2 className="section-title">Er du nysgerrig på hesteassisteret udvikling?</h2>
        <p className="section-text">
          Book en uforpligtende samtale og hør, hvordan hesteassisteret udvikling kan hjælpe dit team eller optimere dit lederskab.
        </p>
        <a href="/kontakt" className="cta-button">
          <span>Kontakt og hør mere</span>
          <ArrowIcon />
        </a>
      </motion.div>
    </section>
  )
}
