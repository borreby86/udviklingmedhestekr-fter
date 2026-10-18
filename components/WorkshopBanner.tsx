'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function WorkshopBanner() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'

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

  // Frontpage: topbar strip above navigation
  if (isFrontpage) {
    return (
      <div className="workshop-topbar">
        <span className="workshop-topbar-label">Aktuelle workshops</span>
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

  // Den flydende badge på undersider er fjernet (kun toppen på forsiden vises)
  return null
}
