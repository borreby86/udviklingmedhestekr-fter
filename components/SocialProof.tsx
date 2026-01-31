export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="social-proof-content">
        <div className="forbes-quote">
          <span className="forbes-logo">FORBES</span>
          <div className="forbes-content">
            <p className="forbes-text">
              "Equine-assisted learning has become one of the most powerful tools used for executives and teams."
            </p>
            <a href="https://www.forbes.com/sites/nelldebevoise/2025/09/23/what-horses-teach-us-about-leadership-that-no-offsite-ever-could/" target="_blank" rel="noopener noreferrer" className="proof-link">Læs artiklen →</a>
          </div>
        </div>
        <div className="proof-stats">
          <div className="proof-number">106</div>
          <div className="proof-content">
            <p className="proof-text">
              <strong>Peer-reviewed studier i 2023 alene</strong> dokumenterede effekten af interaktion med heste,
              herunder signifikante forbedringer i emotionel intelligens og selvbevidsthed.
            </p>
            <a href="/forskning" className="proof-link">Se forskningsartikler →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
