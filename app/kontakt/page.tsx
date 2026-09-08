'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon, PhoneIcon } from '@/components/Icons'
import { trackEvent } from '@/lib/analytics'

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
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
      company: formData.get('company'),
      message: formData.get('message'),
      formType: 'kontakt',
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
        trackEvent('form_submit', { form_type: 'kontakt' })
        form.reset()
      } else {
        const res = await response.json()
        setErrorMessage(res.error || 'Ukendt fejl')
        setSubmitStatus('error')
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Netværksfejl')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main>

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
              Overvejer du hesteassisteret udvikling til dig som leder eller til dit team?<br />
              Eller har du spørgsmål om, hvordan forløbene kan tilpasses jeres behov?
            </p>
            <p className="contact-hero-intro">
              Ræk ud - jeg svarer inden for 24 timer og tager gerne en uforpligtende samtale om mulighederne.
            </p>
          </div>
          <div className="contact-hero-form">
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
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
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
                {submitStatus === 'error' && (
                  <p className="form-error">Der opstod en fejl. Skriv til <a href="mailto:info@christinaborreby.dk">info@christinaborreby.dk</a> eller ring til Christina på <a href="tel:+4522471247">22 47 12 47</a></p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods" id="kontaktinfo">
        <div className="contact-methods-container">
          <h2 className="sr-only">Kontaktoplysninger</h2>
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
              <PhoneIcon />
            </div>
            <h3>Telefon</h3>
            <p>Ring eller skriv</p>
            <a href="tel:+4522471247">22 47 12 47</a>
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

      </main>
      <Footer hideCta />
    </>
  )
}
