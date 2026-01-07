'use client'

import { motion } from 'motion/react'

export default function WhyHorsesVideo() {
  return (
    <section className="why-video-section">
      <div className="why-video-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hestekursus-nordsjaelland.jpeg"
        >
          <source src="/hestevideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="why-video-overlay" />
      <div className="why-video-container">
        <motion.div
          className="why-video-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Hvorfor heste?</p>
          <h2>Unikke indsigter gennem instant feedback</h2>
          <p>
            Forskning viser, at op mod 95% af vores adfærd og væren styres af det ubevidste.
            Hestene mærker den del af os, vi ikke altid selv er bevidste om.
          </p>
          <p>
            Når du står ved siden af et dyr, der kun følger autenticitet og indre ro, bliver dine
            mønstre synlige. Ikke for at dømme, men for at vække bevidsthed.
          </p>
          <p>
            Den bevidsthed skaber kontakt.
          </p>
          <p className="why-video-highlight">
            Det er her, du begynder at lede både dig selv og andre indefra.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
