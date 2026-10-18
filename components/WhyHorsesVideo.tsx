'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function WhyHorsesVideo() {
  return (
    <section className="why-video-section">
      <div className="why-video-bg">
        <Image
          src="/hestekursus-nordsjaelland.jpeg"
          alt="Hesteassisteret session"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
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
          <h2>
            Hvad afslører hesten<br />om <em>dit lederskab?</em>
          </h2>
          <p>
            Forskning viser, at op mod 95% af vores adfærd og væren styres af det ubevidste.
            <br />
            Hestene mærker den del af os, vi ikke altid selv er bevidste om.
            <br />
            De reagerer ikke på det, vi siger, men på det, vi udstråler. Derfor bliver mødet med en hest en direkte vej til
            at forstå, hvordan vi påvirker andre gennem vores energi, vores grænser og vores nærvær.
          </p>
          <p>
            Gennem strukturede øvelser får du alene eller med dit team et unikt spejl, der med sin instante feedback bidrager
            med indsigter, der gennem refleksion og dialog omsættes til hverdagsbrug.
          </p>
          <p className="why-video-highlight">
            Det handler altså ikke om at være hesteinteresseret.<br />Det handler om hvad samspillet med hesten sætter i gang hos dig.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
