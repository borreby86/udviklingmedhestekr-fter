'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon } from '@/components/Icons'

export default function KontaktPage() {
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
      company: formData.get('company'),
      message: formData.get('message'),
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
    <>
      <Navigation />

      {/* Mobile Hero Image */}
      <section className="contact-mobile-hero">
        <div className="contact-mobile-hero-img">
          <img src="/lederudvikling heste.jpg" alt="Christina Borreby med hest" />
        </div>
        <div className="contact-mobile-hero-gradient" />
      </section>

      {/* Hero Section with Form */}
      <section className="contact-hero-stacked">
        <div className="contact-hero-stacked-bg">
          <img src="/lederudvikling heste.jpg" alt="Hesteassisteret coaching" />
        </div>
        <div className="contact-hero-stacked-overlay" />
        <div className="contact-hero-stacked-content">
          <div className="contact-hero-text">
            <p className="section-label">Kontakt</p>
            <h1>Lad os tale <em>sammen</em></h1>
            <p className="contact-hero-intro">
              Overvejer du hesteassisteret lederudvikling for dig selv eller dit team?<br />
              Eller har du spørgsmål om, hvordan forløbene kan tilpasses jeres behov?
            </p>
            <p className="contact-hero-intro">
              Ræk ud - jeg svarer inden for 24 timer og tager gerne en uforpligtende samtale om mulighederne.
            </p>
          </div>
          <div className="contact-hero-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Navn *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Virksomhed</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Besked</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Fortæl kort om din situation..."
                />
              </div>
              <button type="submit" className="cta-button" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sender...' : 'Send besked'}</span>
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
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="contact-methods-container">
          <div className="contact-method">
            <div className="contact-method-icon">
              <EmailIcon />
            </div>
            <h3>Email</h3>
            <p>Skriv når som helst</p>
            <a href="mailto:info@christinaborreby.dk">info@christinaborreby.dk</a>
          </div>

          <div className="contact-method">
            <div className="contact-method-icon">
              <LinkedInIcon />
            </div>
            <h3>LinkedIn</h3>
            <p>Forbind med Christina</p>
            <a href="https://www.linkedin.com/in/cborreby/" target="_blank" rel="noopener noreferrer">Christina Borreby</a>
          </div>

          <div className="contact-method">
            <div className="contact-method-icon">
              <LocationIcon />
            </div>
            <h3>Lokation</h3>
            <p>Sessions afholdes her</p>
            <span>Hørsholm, Nordsjælland</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
