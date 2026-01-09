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

      {/* Desktop: Floating card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-8 right-8 z-[9999] hidden md:block"
      >
        <div
          className="backdrop-blur-xl border border-[rgba(139,120,74,0.15)] w-[400px]"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '1.75rem 2rem',
            boxShadow: '0 8px 40px rgba(52, 64, 79, 0.1)',
          }}
        >
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: '#34404F', fontFamily: 'var(--font-body)' }}
          >
            Vi bruger cookies til at forbedre din oplevelse.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={acceptAll}
              className="text-[12px] font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-80"
              style={{
                background: '#34404F',
                color: '#F4F5F7',
                padding: '0.8rem 1.5rem',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.08em',
              }}
            >
              Acceptér
            </button>
            <button
              onClick={acceptNecessary}
              className="text-[12px] font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-70"
              style={{
                color: '#6b7d8a',
                fontFamily: 'var(--font-label)',
                letterSpacing: '0.08em',
              }}
            >
              Afvis
            </button>
            <a
              href="/privatlivspolitik"
              className="text-[11px] tracking-wide transition-colors duration-300 ml-auto hover:underline"
              style={{
                color: '#8B784A',
                fontFamily: 'var(--font-label)',
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
