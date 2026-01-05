'use client'

import { ArrowIcon, EmailIcon, LinkedInIcon, LocationIcon } from './Icons'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Tak for din henvendelse! Vi vender tilbage hurtigst muligt.')
  }

  return (
    <section className="contact-section" id="kontakt">
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
      </div>
    </section>
  )
}
