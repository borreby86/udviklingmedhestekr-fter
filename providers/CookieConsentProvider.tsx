'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ConsentType = 'all' | 'necessary' | null

interface CookieConsentContextType {
  consent: ConsentType
  hasInteracted: boolean
  acceptAll: () => void
  acceptNecessary: () => void
  resetConsent: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

const CONSENT_KEY = 'cookie-consent'

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentType>(null)
  const [hasInteracted, setHasInteracted] = useState(true) // Start true to prevent flash

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'all' || stored === 'necessary') {
      setConsent(stored)
      setHasInteracted(true)
    } else {
      setHasInteracted(false)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'all')
    setConsent('all')
    setHasInteracted(true)
  }

  const acceptNecessary = () => {
    localStorage.setItem(CONSENT_KEY, 'necessary')
    setConsent('necessary')
    setHasInteracted(true)
  }

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_KEY)
    setConsent(null)
    setHasInteracted(false)
  }

  return (
    <CookieConsentContext.Provider value={{ consent, hasInteracted, acceptAll, acceptNecessary, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}
