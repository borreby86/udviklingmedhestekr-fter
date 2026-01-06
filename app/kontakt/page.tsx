'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon } from '@/components/Icons'

export default function KontaktPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Tak for din henvendelse! Jeg vender tilbage hurtigst muligt.')
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero-new">
        <div className="contact-hero-new-bg">
          <img src="/lederudvikling heste.jpg" alt="Hesteassisteret coaching" />
        </div>
        <div className="contact-hero-new-overlay" />
        <div className="contact-hero-new-content">
          <p className="section-label">Kontakt</p>
          <h1>Lad os tale <em>sammen</em></h1>
          <p className="contact-hero-new-intro">
            Har du spørgsmål om hesteassisteret udvikling? Ræk ud - jeg svarer inden for 24 timer.
          </p>
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

      {/* Form Section */}
      <section className="contact-form-new">
        <div className="contact-form-new-container">
          <div className="contact-form-new-header">
            <h2>Send en besked</h2>
            <p>Eller udfyld formularen, så vender jeg tilbage hurtigst muligt.</p>
          </div>
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
                rows={2}
                placeholder="Fortæl kort om din situation..."
              />
            </div>
            <button type="submit" className="cta-button">
              <span>Send besked</span>
              <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
