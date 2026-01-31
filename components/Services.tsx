'use client'

import { ArrowIcon } from './Icons'
import { motion } from 'motion/react'

const services = [
  {
    tag: 'For ledere',
    title: 'Lederudvikling',
    text: 'Læring der mærkes, ikke forklares. Hestens umiddelbare reaktioner spejler din adfærd og giver ærlig, kropslig feedback. Resultatet er dyb indsigt i, hvordan tillid og følgeskab skabes i praksis.',
    href: '/lederudvikling-nordsjaelland'
  },
  {
    tag: 'For teams',
    title: 'Teamudvikling',
    text: 'Hestene giver et levende spejl af jeres samarbejde og teamdynamik. Ubevidste mønstre og kommunikationsvaner bliver synlige, og det tydeliggør hvad der styrker, og hvad der spænder ben.',
    href: '/teams'
  },
  {
    tag: '1:1',
    title: 'Samtaler & coaching',
    text: 'Individuelle forløb i Hørsholm eller online. Fokus på at forstå dine tanke- og adfærdsmønstre, regulere stress og finde ro, nærvær og retning.',
    href: '/kontakt'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Services() {
  return (
    <section className="services-section" id="ydelser">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-label">Ydelser</p>
        <h2 className="section-title">Hesteassisteret udvikling for ledere og teams</h2>
      </motion.div>
      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={service.href}
            className="bento-card"
            variants={cardVariants}
          >
            <span className="bento-tag">{service.tag}</span>
            <h3 className="bento-title">{service.title}</h3>
            <p className="bento-text">{service.text}</p>
            <div className="bento-arrow">
              <ArrowIcon />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
