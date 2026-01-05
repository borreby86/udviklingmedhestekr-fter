'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const isSubpage = pathname !== '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On subpages, always show scrolled state for visibility
  const showScrolled = scrolled || isSubpage

  return (
    <nav id="navbar" className={showScrolled ? 'scrolled' : ''}>
      <ul className="nav-links">
        {isSubpage ? (
          <li><a href="/">Forside</a></li>
        ) : null}
        <li className="nav-dropdown">
          <a href="#" className="nav-dropdown-trigger">
            Workshops
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
          <ul className="nav-dropdown-menu">
            <li><a href="/lederworkshop">Autentisk lederskab uden filter</a></li>
            <li><a href="/lederworkshop-i-blinde-vinkler">Opdag dine blinde vinkler</a></li>
          </ul>
        </li>
        <li><a href="/referencer">Referencer</a></li>
        <li><a href="/#om">Om mig</a></li>
        <li><a href="/#kontakt" className="nav-cta">Kontakt</a></li>
      </ul>
      <button className="mobile-menu-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
