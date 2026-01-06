'use client'

import { motion } from 'motion/react'

const researchItems = [
  {
    title: "Emotionel intelligens og lederskab",
    source: "Harvard Business Review",
    finding: "Ledere med høj emotionel intelligens skaber 20% bedre resultater i deres teams.",
    link: "#"
  },
  {
    title: "Hesteassisteret læring",
    source: "Journal of Experiential Education",
    finding: "Deltagere i hesteassisterede programmer viser signifikant forbedring i selvbevidsthed og kommunikation.",
    link: "#"
  },
  {
    title: "Kropsbaseret læring",
    source: "Neuroscience Research",
    finding: "Læring gennem kroppen forankres dybere og huskes længere end rent kognitiv læring.",
    link: "#"
  }
]

export default function ResearchSection() {
  return (
    <>
      {/* Hero */}
      <section className="workshop-hero">
        <div className="workshop-hero-bg">
          <img src="/hero-eye.jpg" alt="Forskning" />
        </div>
        <div className="workshop-hero-overlay"></div>
        <div className="workshop-hero-content-full">
          <motion.div
            className="workshop-hero-text-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Evidensbaseret</p>
            <h1 className="workshop-hero-title">Forskning <em>viser</em></h1>
            <p className="workshop-hero-intro">
              Hesteassisteret udvikling bygger på solid forskning inden for emotionel intelligens,
              kropsbaseret læring og lederskabsudvikling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Content */}
      <section className="insights-section">
        <div className="insights-container">
          <div className="insights-header">
            <p className="section-label">Peer-reviewed forskning</p>
            <h2 className="section-title">Hvad siger videnskaben</h2>
          </div>

          <div className="insights-grid">
            {researchItems.map((item, index) => (
              <motion.div
                key={index}
                className="insight-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="insight-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="insight-content">
                  <h3>{item.title}</h3>
                  <p className="insight-source">{item.source}</p>
                  <p>{item.finding}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <p className="section-label">Næste skridt</p>
          <h2 className="section-title">Oplev det selv</h2>
          <p>Book en uforpligtende samtale og hør mere om, hvordan hesteassisteret udvikling kan gavne dig.</p>
          <a href="/kontakt" className="cta-button">
            <span>Kontakt mig</span>
          </a>
        </div>
      </section>
    </>
  )
}
