'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useCookieConsent } from '@/providers/CookieConsentProvider'

export function CookieBanner() {
  const { hasInteracted, acceptAll, acceptNecessary } = useCookieConsent()

  if (hasInteracted) return null

  return (
    <AnimatePresence>
      {/* Mobile: Bottom sheet */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-x-0 bottom-0 z-[9999] md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div
          className="backdrop-blur-2xl border-t border-white/20"
          style={{
            background: 'rgba(52, 64, 79, 0.95)',
            padding: '1.5rem 1.5rem 1.75rem',
          }}
        >
          <p
            className="text-[15px] leading-relaxed text-center"
            style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)' }}
          >
            Vi bruger cookies til at forbedre din oplevelse
          </p>

          <div className="flex gap-3 mt-5">
            <button
              onClick={acceptAll}
              className="flex-1 text-[13px] font-medium tracking-wide transition-transform duration-200 active:scale-[0.98]"
              style={{
                background: '#fff',
                color: '#34404F',
                padding: '1rem',
                borderRadius: '12px',
                fontFamily: 'var(--font-label)',
              }}
            >
              Acceptér
            </button>
            <button
              onClick={acceptNecessary}
              className="flex-1 text-[13px] font-medium tracking-wide transition-transform duration-200 active:scale-[0.98]"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.8)',
                padding: '1rem',
                borderRadius: '12px',
                fontFamily: 'var(--font-label)',
              }}
            >
              Afvis
            </button>
          </div>

          <a
            href="/privatlivspolitik"
            className="block text-center text-[12px] mt-4 transition-opacity duration-200 active:opacity-70"
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-label)',
            }}
          >
            Læs mere om cookies
          </a>
        </div>
      </motion.div>

      {/* Desktop: Full-width bottom bar */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed inset-x-0 bottom-0 z-[9999] hidden md:block"
      >
        <div
          style={{
            background: '#34404F',
            borderTop: '1px solid rgba(212, 184, 106, 0.2)',
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '1.25rem 3rem',
            }}
          >
            <p
              className="text-[15px]"
              style={{ color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'var(--font-body)' }}
            >
              Vi bruger cookies til at forbedre din oplevelse.{' '}
              <a
                href="/privatlivspolitik"
                style={{
                  color: '#D4B86A',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                Læs mere
              </a>
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={acceptNecessary}
                className="text-[12px] font-medium tracking-wider uppercase transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: 'rgba(255, 255, 255, 0.7)',
                  padding: '0.9rem 1.75rem',
                  fontFamily: 'var(--font-label)',
                  letterSpacing: '0.08em',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                }}
              >
                Kun nødvendige
              </button>
              <button
                onClick={acceptAll}
                className="text-[12px] font-medium tracking-wider uppercase transition-all duration-300"
                style={{
                  background: '#D4B86A',
                  color: '#2a3441',
                  padding: '0.9rem 2rem',
                  fontFamily: 'var(--font-label)',
                  letterSpacing: '0.08em',
                  border: '1px solid #D4B86A',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e0c678'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#D4B86A'}
              >
                Acceptér alle
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
