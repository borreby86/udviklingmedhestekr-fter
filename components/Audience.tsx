'use client'

import { motion } from 'motion/react'

const tags = [
  { label: 'Ledere', highlighted: false },
  { label: 'Ledergrupper', highlighted: false },
  { label: 'Teams', highlighted: false },
  { label: 'HR & Udvikling', highlighted: true },
  { label: 'Executive coaching', highlighted: false },
  { label: 'Teambuilding', highlighted: false }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06
    }
  }
}

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Audience() {
  return (
    <section className="audience-section audience-solid">
      <div className="audience-content">
        <motion.p
          className="audience-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Hvem er det for?
        </motion.p>
        <motion.h2
          className="audience-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Dig og dit team, der ønsker ledelse<br />
          med nærvær og ægte følgeskab
        </motion.h2>
        <motion.div
          className="audience-tags"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className={`audience-tag ${tag.highlighted ? 'highlighted' : ''}`}
              variants={tagVariants}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
