import { LinkedInIcon, InstagramIcon, FacebookIcon } from './Icons'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Christina Borreby</div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/cborreby/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/psykoterapeut_christina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/borrebyterapi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Christina Borreby. Alle rettigheder forbeholdes.
      </div>
    </footer>
  )
}
