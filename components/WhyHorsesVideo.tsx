'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function WhyHorsesVideo() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play()
    }
  }, [isVisible])

  return (
    <section className="why-video-section" ref={sectionRef}>
      <div className="why-video-bg">
        {isVisible ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            poster="/hestekursus-nordsjaelland.jpeg"
          >
            <source src="/hestevideo.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/hestekursus-nordsjaelland.jpeg"
            alt="Hesteassisteret session"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        )}
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
          <h2>Unikke indsigter gennem instant feedback</h2>
          <p>
            Forskning viser, at op mod 95% af vores adfærd og væren styres af det ubevidste.
            Hestene mærker den del af os, vi ikke altid selv er bevidste om.
          </p>
          <p>
            Når du står ved siden af et dyr, der kun følger autenticitet og indre ro, bliver dine
            mønstre synlige. Ikke for at dømme, men for at vække bevidsthed.
          </p>
          <p>
            Den bevidsthed skaber kontakt.
          </p>
          <p className="why-video-highlight">
            Det er her, du begynder at lede både dig selv og andre indefra.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
