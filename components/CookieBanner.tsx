'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useCookieConsent } from '@/providers/CookieConsentProvider'

export function CookieBanner() {
  const { hasInteracted, acceptAll, acceptNecessary } = useCookieConsent()

  if (hasInteracted) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-8 right-8 left-8 md:left-auto z-[9999]"
      >
        <div
          className="backdrop-blur-xl md:w-[420px] border border-[rgba(139,120,74,0.2)]"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            padding: '2rem 2.5rem',
            boxShadow: '0 8px 32px rgba(52, 64, 79, 0.12)',
          }}
        >
          <p
            className="text-[15px] leading-relaxed tracking-wide"
            style={{ color: '#34404F', fontFamily: 'var(--font-body)' }}
          >
            Vi bruger cookies til at forbedre din oplevelse.
          </p>

          <div className="flex items-center gap-5 mt-6">
            <button
              onClick={acceptAll}
              className="text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-80"
              style={{
                background: '#34404F',
                color: '#F4F5F7',
                padding: '0.875rem 1.75rem',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.1em',
              }}
            >
              Acceptér
            </button>
            <button
              onClick={acceptNecessary}
              className="text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-70"
              style={{
                background: 'transparent',
                color: '#8B784A',
                padding: '0.875rem 1.5rem',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.1em',
                border: '1px solid #8B784A',
              }}
            >
              Afvis
            </button>
            <a
              href="/privatlivspolitik"
              className="text-[12px] tracking-wide transition-colors duration-300 ml-auto"
              style={{
                color: '#8B784A',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.08em',
              }}
            >
              Læs mere
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
