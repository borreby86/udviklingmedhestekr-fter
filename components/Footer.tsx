import { LinkedInIcon, EmailIcon } from './Icons'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Christina Borreby</div>
          <p className="footer-tagline">Udvikling med hestekræfter i Nordsjælland</p>
        </div>
        <div className="footer-contact">
          <a href="mailto:info@christinaborreby.dk" className="footer-link">
            <EmailIcon />
            <span>info@christinaborreby.dk</span>
          </a>
          <a href="https://www.linkedin.com/in/cborreby/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Christina Borreby. Alle rettigheder forbeholdes.
      </div>
    </footer>
  )
}
