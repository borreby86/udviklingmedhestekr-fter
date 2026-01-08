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
        className="fixed bottom-6 right-6 left-6 md:left-auto z-[9999]"
      >
        <div className="bg-earth backdrop-blur-md rounded-2xl px-6 py-5 shadow-xl md:w-[380px]">
          <p className="text-white/85 text-[15px] leading-relaxed">
            Vi bruger cookies til at forbedre din oplevelse.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 bg-white text-earth rounded-full text-sm font-medium hover:bg-cream transition-colors"
            >
              Acceptér
            </button>
            <button
              onClick={acceptNecessary}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Afvis
            </button>
            <a
              href="/privatlivspolitik"
              className="text-white/60 text-sm hover:text-white transition-colors ml-auto"
            >
              Læs mere
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
