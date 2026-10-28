'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function About() {
  return (
    <section className="about-banner" id="om">
      <div className="about-banner-bg">
        <Image
          src="/christina_borreby.jpeg"
          alt="Christina Borreby - specialist i hesteassisteret lederudvikling"
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="about-banner-overlay" />
      <div className="about-banner-container">
        <motion.div
          className="about-banner-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Din facilitator</p>
          <h2>Christina Borreby</h2>
          <p className="about-credentials">Cand.negot · Certificeret psykoterapeut · 30 års erfaring med heste</p>
          <p>
            Fra barnsben har heste været mine læremestre i nærvær og lederskab, uden jeg var bevidst om det.
            Når jeg mistede fokus eller var uklar i min intention, tog hesten over.
          </p>
          <p>
            Når du sidder på 500 kilo muskler, der galoperer afsted med 60 km/t, finder du hurtigt ud af, om dit lederskab virker.
            Det har jeg mærket på egen krop!
          </p>
          <p>
            Hestene lærer mig dagligt, at følgeskab ikke handler om kontrol - men om nærvær, tydelighed og sunde grænser.
            Og ikke mindst om kongruens mellem det, man tænker, føler og signalerer udadtil.
          </p>
          <p>
            Den erfaring bruger jeg i dag - kombineret med min baggrund i kommunikation, adfærdspsykologi og menneskelig udvikling -
            til at hjælpe ledere, teams og unge med at se deres eget lederskab uden filter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
