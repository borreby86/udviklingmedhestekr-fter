'use client'

import { CheckIcon } from './Icons'
import { motion } from 'motion/react'

const personalBenefits = [
  'En kropslig oplevelse af, hvornår du står stærkt i dit autentiske lederskab.',
  'Øjeblikkelig og ærlig feedback fra hesten på din kommunikation.',
  'Større bevidsthed om dit nærvær og din evne til at skabe tillid.'
]

const businessBenefits = [
  'Ledelse der hviler på autenticitet og skaber større tillid og følgeskab.',
  'Mere klare og nærværende beslutningstagere.',
  'En leder der kan regulere sit nervesystem og styrke arbejdsmiljøet.'
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

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Udbytte</p>
          <h2 className="section-title">Hvad du og din virksomhed får</h2>
        </motion.div>
        <div className="benefits-grid">
          <motion.div
            className="benefits-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 variants={itemVariants}>Dit personlige udbytte</motion.h3>
            {personalBenefits.map((benefit, index) => (
              <motion.div key={index} className="benefit-item" variants={itemVariants}>
                <div className="benefit-icon">
                  <CheckIcon />
                </div>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="benefits-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 variants={itemVariants}>Virksomhedens udbytte</motion.h3>
            {businessBenefits.map((benefit, index) => (
              <motion.div key={index} className="benefit-item" variants={itemVariants}>
                <div className="benefit-icon">
                  <CheckIcon />
                </div>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
