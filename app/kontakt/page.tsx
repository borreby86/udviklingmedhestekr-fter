'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon } from '@/components/Icons'

export default function KontaktPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Tak for din henvendelse! Vi vender tilbage hurtigst muligt.')
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src="/audience-bg.jpg" alt="Hesteassisteret coaching" />
        </div>
        <div className="contact-hero-overlay" />

        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <p className="section-label">Kontakt</p>
            <h1>Lad os tale sammen</h1>
            <p className="contact-hero-intro">
              Ræk ud og hør hvordan hesteassisteret coaching kan hjælpe dig, dit team eller optimere dit lederskab – personligt såvel som professionelt.
            </p>
          </div>

          <div className="contact-hero-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <EmailIcon />
              </div>
              <div className="contact-info-content">
                <h3>Email</h3>
                <p>Svar inden for 24 timer</p>
                <a href="mailto:info@christinaborreby.dk">info@christinaborreby.dk</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <LinkedInIcon />
              </div>
              <div className="contact-info-content">
                <h3>LinkedIn</h3>
                <p>Forbind med Christina</p>
                <a href="https://www.linkedin.com/in/cborreby/" target="_blank" rel="noopener noreferrer">
                  Christina Borreby
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <LocationIcon />
              </div>
              <div className="contact-info-content">
                <h3>Lokation</h3>
                <p>Sessions afholdes her</p>
                <span>Hørsholm, Nordsjælland</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-header">
            <h2>Send en forespørgsel</h2>
            <p>Udfyld formularen, så vender jeg tilbage hurtigst muligt.</p>
          </div>

          <div className="contact-form-wrapper">
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
                  rows={3}
                  placeholder="Fortæl kort om din situation..."
                />
              </div>
              <button type="submit" className="cta-button form-button">
                <span>Send forespørgsel</span>
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
