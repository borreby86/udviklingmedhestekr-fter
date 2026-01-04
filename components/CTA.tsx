import { ArrowIcon } from './Icons'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <p className="section-label">Næste skridt</p>
        <h2 className="section-title">Er du nysgerrig på hesteassisteret udvikling?</h2>
        <p className="section-text">
          Ræk ud og hør hvordan hesteassisteret coaching kan hjælpe dit team eller optimere dit lederskab.
        </p>
        <a href="#kontakt" className="cta-button">
          <span>Book en uforpligtende samtale</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
