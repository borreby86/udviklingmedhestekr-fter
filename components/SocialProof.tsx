'use client'

import { motion } from 'motion/react'

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-proof-content">
        <motion.div
          className="forbes-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="forbes-logo">FORBES</span>
          <div className="forbes-content">
            <p className="forbes-text">
              "Equine-assisted learning has become one of the most powerful tools used for executives and teams."
            </p>
            <a href="https://www.forbes.com/sites/nelldebevoise/2025/09/23/what-horses-teach-us-about-leadership-that-no-offsite-ever-could/" target="_blank" rel="noopener noreferrer" className="proof-link">Læs artiklen →</a>
          </div>
        </motion.div>
        <motion.div
          className="proof-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proof-number">106</div>
          <div className="proof-content">
            <p className="proof-text">
              <strong>Peer-reviewed studier i 2023 alene</strong> dokumenterede effekten af interaktion med heste,
              herunder signifikante forbedringer i emotionel intelligens og selvbevidsthed.
            </p>
            <a href="/forskning" className="proof-link">Se forskningsartikler →</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
