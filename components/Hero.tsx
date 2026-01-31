'use client'

import Image from 'next/image'
import { ArrowIcon } from './Icons'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/hero-horse-eye.jpg"
          alt="Hestens øje"
          fill
          priority
          sizes="100vw"
          quality={80}
        />
      </div>
      <div className="hero-content">
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Leder- og teamudvikling i Nordsjælland
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Udvikling med <em>hestekræfter</em>
        </motion.h1>
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Hestene spejler din måde at lede, samarbejde og være til stede på.
          Et unikt rum til instant feedback og øget selvindsigt. Uden ridning, uden hesteerfaring.
        </motion.p>
        <motion.a
          href="/kontakt"
          className="cta-button"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Kontakt og hør mere</span>
          <ArrowIcon />
        </motion.a>
      </div>
    </section>
  )
}
