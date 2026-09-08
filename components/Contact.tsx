'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon } from './Icons'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formLoadTime] = useState(() => Date.now())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      formType: 'forside',
      _honeypot: formData.get('website'),
      _loadTime: formLoadTime,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section contact-with-bg" id="kontakt">
      <div className="contact-bg">
        <Image
          src="/audience-bg.jpg"
          alt="Hesteassisteret coaching"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="contact-overlay" />
      <div className="contact-container">
        <div className="contact-header">
          <p className="section-label">Kontakt</p>
          <h2 className="section-title">Send en forespørgsel</h2>
          <p>
            Book en gratis 20 minutters samtale, hvor vi taler om dine behov og
            hvordan hesteassisteret læring kan støtte din udvikling.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <EmailIcon />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Email</div>
                <div className="contact-card-sub">Svar inden for 24 timer</div>
              </div>
              <a href="mailto:info@christinaborreby.dk" className="contact-card-value">
                info@christinaborreby.dk
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <LinkedInIcon />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-sub">Forbind med Christina</div>
              </div>
              <a
                href="https://www.linkedin.com/in/cborreby/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-value"
              >
                Christina Borreby
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <LocationIcon />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Lokation</div>
                <div className="contact-card-sub">Sessions afholdes her</div>
              </div>
              <span className="contact-card-value">Hørsholm, Nordsjælland</span>
            </div>
          </div>
          <div className="contact-form">
            {submitStatus === 'success' ? (
              <div className="form-success-card">
                <div className="form-success-card-icon">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3>Tak for din henvendelse</h3>
                <p>Jeg vender tilbage inden for 24 timer.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Honeypot field - hidden from humans, filled by bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="website-contact">Website</label>
                  <input type="text" id="website-contact" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Navn *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Besked</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    placeholder="Fortæl kort om din situation..."
                  />
                </div>
                <button type="submit" className="cta-button form-button" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sender...' : 'Send forespørgsel'}</span>
                  <ArrowIcon />
                </button>
                {submitStatus === 'error' && (
                  <p className="form-error">Der opstod en fejl. Skriv til <a href="mailto:info@christinaborreby.dk">info@christinaborreby.dk</a> eller ring til Christina på <a href="tel:+4522471247">22 47 12 47</a></p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
