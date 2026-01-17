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
            <li className="nav-dropdown-label">Aktuelle workshops</li>
            <li><a href="/lederudvikling-nordsjaelland" className="nav-dropdown-subitem">Autentisk ledelse - uden filter</a></li>
            <li><a href="/lederworkshop-i-blinde-vinkler" className="nav-dropdown-subitem">Opdag dine blinde vinkler i ledelse</a></li>
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
        <li><a href="/referencer">Det siger andre</a></li>
        <li><a href="/#om">Om mig</a></li>
        <li><a href="/kontakt" className="nav-cta">Kontakt</a></li>
      </ul>
      <button
        className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'LUK' : 'MENU'}
      </button>
    </nav>
  )
}
