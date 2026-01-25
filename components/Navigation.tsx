'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const isSubpage = pathname !== '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // On subpages, always show scrolled state for visibility
  const showScrolled = scrolled || isSubpage

  const navClasses = [
    showScrolled ? 'scrolled' : '',
    menuOpen ? 'menu-open' : ''
  ].filter(Boolean).join(' ')

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault()
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav id="navbar" className={navClasses}>
      <ul className="nav-links">
        {/* Mobile divider top */}
        <li className="mobile-menu-divider"></li>

        {/* Mobile section label */}
        <li className="mobile-menu-label">YDELSER</li>

        {isSubpage ? (
          <li><a href="/">Forside</a></li>
        ) : null}
        <li className={`nav-dropdown ${openDropdown === 'ledere' ? 'is-open' : ''}`}>
          <div className="nav-dropdown-header" onClick={(e) => toggleDropdown('ledere', e)}>
            <span className="nav-dropdown-text">For ledere</span>
            <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <ul className="nav-dropdown-menu">
            <li className="nav-dropdown-label">Aktuelle kurser</li>
            <li><a href="/lederudvikling-nordsjaelland" className="nav-dropdown-subitem">Workshop: Autentisk ledelse</a></li>
            <li><a href="/lederworkshop-i-blinde-vinkler" className="nav-dropdown-subitem">Mini-forløb: Opdag blinde vinkler i ledelse</a></li>
          </ul>
        </li>
        <li><a href="/teams">For teams</a></li>
        <li className={`nav-dropdown ${openDropdown === 'alle' ? 'is-open' : ''}`}>
          <div className="nav-dropdown-header" onClick={(e) => toggleDropdown('alle', e)}>
            <span className="nav-dropdown-text">For alle</span>
            <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <ul className="nav-dropdown-menu">
            <li className="nav-dropdown-label">Hold tempoet uden at betale med helbredet</li>
            <li><a href="/recalibrate">Recalibrate</a></li>
          </ul>
        </li>

        {/* Mobile divider middle */}
        <li className="mobile-menu-divider"></li>

        <li className={`nav-dropdown ${openDropdown === 'siger' ? 'is-open' : ''}`}>
          <div className="nav-dropdown-header" onClick={(e) => toggleDropdown('siger', e)}>
            <span className="nav-dropdown-text">Det siger andre</span>
            <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <ul className="nav-dropdown-menu">
            <li><a href="/referencer">Det siger deltagerne</a></li>
            <li><a href="/forskning">Det siger forskningen</a></li>
          </ul>
        </li>
        <li><a href="/#om">Om mig</a></li>
        <li><a href="/kontakt" className="nav-cta">Kontakt</a></li>

        {/* Mobile menu footer */}
        <li className="mobile-menu-footer">
          <div className="mobile-menu-divider-bottom"></div>
          <div className="mobile-menu-social">
            <a href="https://www.linkedin.com/in/christinaborreby/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 448 512" fill="currentColor" width="22" height="22">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/christinaborreby/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 448 512" fill="currentColor" width="22" height="22">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
          </div>
          <p className="mobile-menu-tagline">UDVIKLING MED HESTEKRÆFTER</p>
        </li>
      </ul>
      <button
        className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : 'MENU'}
      </button>
    </nav>
  )
}
