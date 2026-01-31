'use client'

import { EyeIcon, HeartIcon, SunIcon, ClockIcon } from './Icons'
import { motion } from 'motion/react'

const insights = [
  {
    icon: EyeIcon,
    title: 'Blinde vinkler',
    text: 'Adfærd og mønstre du ikke ser i dig selv, men som påvirker alle omkring dig.'
  },
  {
    icon: HeartIcon,
    title: 'Emotionel intelligens',
    text: 'At mærke hvad der sker i dig selv, før du reagerer på andre.'
  },
  {
    icon: SunIcon,
    title: 'Autenticitet',
    text: 'Når dit indre og ydre matcher, og hvad der sker, når det ikke gør.'
  },
  {
    icon: ClockIcon,
    title: 'Nærvær',
    text: 'At være 100% til stede, og mærke konsekvensen, når du ikke er.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Insights() {
  return (
    <section className="insights-section" id="indsigter">
      <div className="insights-container">
        <motion.h2
          className="insights-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Hvad afslører <em>hesten</em> om dit lederskab?
        </motion.h2>
        <div className="insights-content-grid">
          <motion.div
            className="insights-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="insights-intro">
              Hestene mærker den del af os, vi ikke altid selv er bevidste om.<br />
              De reagerer ikke på det, vi siger, men på det, vi udstråler. Derfor bliver mødet med en hest
              en direkte vej til at forstå, hvordan vi påvirker andre gennem vores energi, vores grænser og vores nærvær.
            </p>
            <p className="insights-intro">
              Gennem strukturede øvelser får du alene eller med dit team et unikt spejl, der med sin
              instante feedback bidrager med indsigter, der gennem refleksion og dialog omsættes til hverdagsbrug.
            </p>
            <p className="insights-intro insights-highlight">
              Det handler altså <strong>ikke</strong> om at være hesteinteresseret.
              Det handler om hvad samspillet med hesten sætter i gang hos dig.
            </p>
          </motion.div>
          <motion.div
            className="insights-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {insights.map((insight, index) => (
              <motion.div key={index} className="insight-item" variants={itemVariants}>
                <div className="insight-icon">
                  <insight.icon />
                </div>
                <div className="insight-content">
                  <h3>{insight.title}</h3>
                  <p>{insight.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
