'use client'

import { useState } from 'react'
import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon } from './Icons'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      formType: 'forside',
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.currentTarget.reset()
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
        <img src="/audience-bg.jpg" alt="Hesteassisteret coaching" />
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
            <form onSubmit={handleSubmit}>
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
              {submitStatus === 'success' && (
                <p className="form-success">Tak for din henvendelse! Jeg vender tilbage inden for 24 timer.</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-error">Der opstod en fejl. Prøv igen eller skriv direkte til info@christinaborreby.dk</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
