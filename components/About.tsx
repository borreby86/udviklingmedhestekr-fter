'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section className="about-section" id="om" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-image-frame"></div>
          <motion.div className="about-image" style={{ y: imageY }}>
            <img src="/christina.jpg" alt="Christina Borreby" />
          </motion.div>
        </div>
        <div className="about-content">
          <p className="section-label">Om mig</p>
          <h3>Christina Borreby</h3>
          <p className="about-role">Cand.negot. i kommunikation · Certificeret psykoterapeut</p>
          <div className="about-text">
            <p>
              Jeg arbejder med ledere og teams, der ønsker mere end værktøjer.
              De vil styrke deres nærvær, emotionelle intelligens og evne til at skabe tillid.
            </p>
            <p>
              Med en baggrund i kommunikation og psykoterapi har jeg kombineret mange års
              erfaring med min passion for heste i et unikt udviklingskoncept.
            </p>
            <p>
              Jeg brænder for at hjælpe mennesker med at opbygge et stærkt indre fundament,
              der skaber ro, retning og autenticitet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
