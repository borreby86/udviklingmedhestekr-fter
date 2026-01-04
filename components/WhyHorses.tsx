'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function WhyHorses() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-grid">
        <div className="why-content">
          <p className="section-label">Hvorfor heste?</p>
          <h2 className="section-title">Unikke indsigter gennem instant feedback</h2>
          <p className="section-text">
            Forskning viser, at op mod 95% af vores adfærd og væren styres af det ubevidste.
            Hestene mærker den del af os, vi ikke altid selv er bevidste om.
          </p>
          <p className="section-text">
            Når du står ved siden af et dyr, der kun følger autenticitet og indre ro, bliver dine
            mønstre synlige. Ikke for at dømme, men for at vække bevidsthed.
          </p>
          <p className="why-highlight">
            Den bevidsthed skaber kontakt. Og når du begynder at mærke dig selv igen, falder systemet til ro.
          </p>
          <p className="section-text">
            Det er her, du begynder at lede både dig selv og andre indefra.
          </p>
        </div>
        <div className="why-visual">
          <div className="why-image-frame"></div>
          <motion.div className="why-image" style={{ y: imageY }}>
            <img src="/hestekursus-nordsjaelland.jpeg" alt="Nærvær og forbindelse med hest" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
