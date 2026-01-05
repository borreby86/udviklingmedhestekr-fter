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
        <li><a href="/lederworkshop">Lederworkshop</a></li>
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
