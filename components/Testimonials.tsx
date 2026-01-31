'use client'

import Image from 'next/image'
import { ArrowIcon } from './Icons'
import { motion } from 'motion/react'

const testimonials = [
  {
    quote: '"I samarbejdet med hesten lærte jeg at være HELT tilstede. Og konsekvensen af ikke at være det. Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd."',
    image: '/kim.jpeg',
    name: 'Kim Høgh',
    role: 'Tidl. CEO, Hjerteforeningen'
  },
  {
    quote: '"Det befriende ved denne metode er, at man kan øve sig på at være 100% autentisk uden at der går rollespil i den. At arbejde med min egen kontakt via en hest var en fantastisk mulighed for at reflektere over min kommunikation."',
    image: '/Mads.jpeg',
    name: 'Mads Elk',
    role: 'CEO, Mind Balance System ApS'
  },
  {
    quote: '"Noget af min ubevidste adfærd blev bevidst og det passer perfekt ind i mit arbejde med mig selv. Tak for en fantastisk session som jeg vil anbefale ALLE at investere i, hvis de vil øge indsigten i sig selv."',
    image: '/annemarie.jpg',
    name: 'Anne Marie Valentin',
    role: 'Indehaver, Icebreaker Academy'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="resultater">
      <motion.div
        className="testimonials-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-label">Det siger andre</p>
        <h2 className="section-title">Hvad har tidligere deltagere oplevet</h2>
      </motion.div>
      <motion.div
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} className="testimonial-card" variants={cardVariants}>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="testimonials-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="/referencer" className="cta-button cta-button-outline">
          <span>Læs flere udtalelser</span>
          <ArrowIcon />
        </a>
      </motion.div>
    </section>
  )
}
