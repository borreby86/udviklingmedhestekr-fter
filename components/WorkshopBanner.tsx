'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function WorkshopBanner() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'
  const isBlindeVinkler = pathname === '/lederworkshop-i-blinde-vinkler'
  const [showBadge, setShowBadge] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Push nav down on frontpage to make room for topbar
  useEffect(() => {
    if (isFrontpage) {
      document.documentElement.style.setProperty('--topbar-height', '2.2rem')
    } else {
      document.documentElement.style.setProperty('--topbar-height', '0px')
    }
    return () => {
      document.documentElement.style.removeProperty('--topbar-height')
    }
  }, [isFrontpage])

  // Scroll handler for floating badge on subpages
  useEffect(() => {
    if (isFrontpage) return

    const handleScroll = () => {
      setShowBadge(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFrontpage])

  // Frontpage: topbar strip above navigation
  if (isFrontpage) {
    return (
      <div className="workshop-topbar">
        <span className="workshop-topbar-label">Aktuel Workshop</span>
        <a
          href="https://autentiskindflydelse.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="workshop-topbar-link"
        >
          Autentisk Indflydelse
          <svg
            className="workshop-topbar-arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    )
  }

  // Subpages: floating badge (light)
  // Don't show on Blinde Vinkler page (it's a competing workshop)
  if (isBlindeVinkler || dismissed) return null

  return (
    <div className={`workshop-badge ${showBadge ? 'workshop-badge--visible' : ''}`}>
      <button
        className="workshop-badge-close"
        onClick={() => setDismissed(true)}
        aria-label="Luk"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <a
        href="https://autentiskindflydelse.dk"
        target="_blank"
        rel="noopener noreferrer"
        className="workshop-badge-link"
      >
        <span className="workshop-badge-label">Aktuel workshop</span>
        <span className="workshop-badge-title">Autentisk Indflydelse</span>
        <span className="workshop-badge-subtitle">– med hesten som læremester →</span>
      </a>
    </div>
  )
}
