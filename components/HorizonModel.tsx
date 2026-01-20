'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const layers = [
  {
    id: 'reactive',
    title: 'Det reaktive selv',
    subtitle: 'Overfladen',
    description: 'Her lever vi fra tankernes tempo. Ego styrer, agendaer driver os, og vi reagerer på verden udefra. Vi identificerer os med vores tanker og forsvarer vores position.',
    insight: 'De fleste af os tilbringer det meste af vores tid her - i hovedet, i planlægning, i forsvar.',
    color: '#6b7d8a',
    keywords: ['Ego', 'Kontrol', 'Forsvar', 'Reaktion', 'Tanker'],
  },
  {
    id: 'conscious',
    title: 'Det bevidste selv',
    subtitle: 'Horisonten',
    description: 'Her begynder vi at mærke. Vi er i kontakt med vores tanker og følelser uden at blive opslugt af dem. Vores handlinger afspejler den, vi virkelig er.',
    insight: 'Dette er overgangen - hvor vi begynder at vælge vores respons i stedet for bare at reagere.',
    color: '#8B784A',
    keywords: ['Nærvær', 'Autenticitet', 'Kontakt', 'Valg', 'Balance'],
  },
  {
    id: 'being',
    title: 'Værenskernen',
    subtitle: 'Grunden',
    description: 'Her er vi. Uden agenda, uden rolle, uden forsvar. Det er her, hestene lever - fra det ene nu til det andet. Og det er herfra, ægte forandring sker.',
    insight: 'Hestene mærker øjeblikkeligt, når vi forlader dette sted - og inviterer os tilbage.',
    color: '#34404F',
    keywords: ['Væren', 'Stilhed', 'Nu', 'Kilde', 'Forandring'],
  },
]

export function HorizonModel() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)
  const activeData = layers.find(l => l.id === activeLayer)

  return (
    <section className="horizon-model">
      <div className="horizon-model-container">
        {/* Header */}
        <motion.div
          className="horizon-model-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Filosofi</p>
          <h2>Tre lag af bevidsthed</h2>
          <p className="horizon-model-intro">
            Vi bevæger os alle mellem disse lag. Klik på et lag for at udforske.
          </p>
        </motion.div>

        <div className="horizon-model-content">
          {/* Visual */}
          <motion.div
            className="horizon-visual-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg viewBox="0 0 500 340" className="horizon-svg">
              <defs>
                {/* Gradients */}
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8a9bab" />
                  <stop offset="100%" stopColor="#6b7d8a" />
                </linearGradient>
                <linearGradient id="horizonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a69660" />
                  <stop offset="100%" stopColor="#8B784A" />
                </linearGradient>
                <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3d4a5a" />
                  <stop offset="100%" stopColor="#2a3441" />
                </linearGradient>

                {/* Cloud filter */}
                <filter id="clouds" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>
              </defs>

              {/* Sky layer - Reactive */}
              <g
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer(activeLayer === 'reactive' ? null : 'reactive')}
              >
                <motion.rect
                  x="0" y="0" width="500" height="120"
                  fill="url(#skyGradient)"
                  opacity={activeLayer && activeLayer !== 'reactive' ? 0.3 : 1}
                  animate={activeLayer === 'reactive' ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4 }}
                />
                {/* Animated thought clouds */}
                <motion.g opacity={activeLayer && activeLayer !== 'reactive' ? 0.2 : 0.4}>
                  <motion.ellipse
                    cx="80" cy="40" rx="40" ry="20"
                    fill="rgba(255,255,255,0.3)"
                    animate={{ x: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.ellipse
                    cx="200" cy="60" rx="50" ry="25"
                    fill="rgba(255,255,255,0.25)"
                    animate={{ x: [0, -20, 0], opacity: [0.25, 0.4, 0.25] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  <motion.ellipse
                    cx="380" cy="35" rx="45" ry="22"
                    fill="rgba(255,255,255,0.3)"
                    animate={{ x: [0, 10, 0], opacity: [0.3, 0.45, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity }}
                  />
                  <motion.ellipse
                    cx="450" cy="70" rx="35" ry="18"
                    fill="rgba(255,255,255,0.2)"
                    animate={{ x: [0, -15, 0] }}
                    transition={{ duration: 9, repeat: Infinity }}
                  />
                </motion.g>
                {/* Label */}
                <text x="250" y="95" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="var(--font-label)" letterSpacing="3">
                  TANKER · EGO · REAKTION
                </text>
              </g>

              {/* Horizon layer - Conscious */}
              <g
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer(activeLayer === 'conscious' ? null : 'conscious')}
              >
                <motion.rect
                  x="0" y="120" width="500" height="80"
                  fill="url(#horizonGradient)"
                  opacity={activeLayer && activeLayer !== 'conscious' ? 0.3 : 1}
                  transition={{ duration: 0.4 }}
                />
                {/* Horizon line glow */}
                <motion.line
                  x1="0" y1="160" x2="500" y2="160"
                  stroke="#D4B86A"
                  strokeWidth="2"
                  opacity={activeLayer === 'conscious' ? 0.8 : 0.4}
                  animate={{ opacity: activeLayer === 'conscious' ? [0.6, 1, 0.6] : 0.4 }}
                  transition={{ duration: 2, repeat: activeLayer === 'conscious' ? Infinity : 0 }}
                />
                {/* Label */}
                <text x="250" y="165" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="11" fontFamily="var(--font-label)" letterSpacing="3">
                  NÆRVÆR · BEVIDSTHED · VALG
                </text>
              </g>

              {/* Ground layer - Being */}
              <g
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer(activeLayer === 'being' ? null : 'being')}
              >
                <motion.rect
                  x="0" y="200" width="500" height="140"
                  fill="url(#groundGradient)"
                  opacity={activeLayer && activeLayer !== 'being' ? 0.3 : 1}
                  transition={{ duration: 0.4 }}
                />

                {/* Ground texture lines */}
                <g opacity="0.1">
                  <line x1="0" y1="240" x2="500" y2="240" stroke="#fff" strokeWidth="0.5" />
                  <line x1="0" y1="280" x2="500" y2="280" stroke="#fff" strokeWidth="0.5" />
                </g>

                {/* Horse silhouette */}
                <motion.g
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <motion.path
                    d="M230 270
                       Q235 255 245 250
                       Q255 245 265 248
                       L270 245
                       Q275 240 280 242
                       L278 248
                       Q285 250 290 255
                       Q295 265 293 280
                       L290 295
                       L285 295
                       L287 280
                       Q280 275 270 278
                       L268 295
                       L263 295
                       L265 280
                       Q255 282 245 280
                       L243 295
                       L238 295
                       L240 278
                       Q235 275 233 280
                       L230 295
                       L225 295
                       L228 275
                       Q225 272 230 270
                       Z"
                    fill="#D4B86A"
                    opacity={activeLayer && activeLayer !== 'being' ? 0.3 : 0.9}
                  />
                </motion.g>

                {/* Label */}
                <text x="250" y="320" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="var(--font-label)" letterSpacing="3">
                  STILHED · VÆREN · NU
                </text>
              </g>

              {/* Side labels */}
              <text x="15" y="60" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="var(--font-label)" letterSpacing="1" transform="rotate(-90, 15, 60)">
                OVERFLADE
              </text>
              <text x="15" y="160" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="var(--font-label)" letterSpacing="1" transform="rotate(-90, 15, 160)">
                HORISONT
              </text>
              <text x="15" y="270" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="var(--font-label)" letterSpacing="1" transform="rotate(-90, 15, 270)">
                GRUND
              </text>
            </svg>

            {/* Arrow indicator */}
            <div className="horizon-arrow">
              <span>Indad</span>
              <svg viewBox="0 0 24 60" width="16" height="40">
                <path d="M12 0 L12 55 M6 50 L12 58 L18 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* Info panel */}
          <div className="horizon-info-panel">
            <AnimatePresence mode="wait">
              {!activeData ? (
                <motion.div
                  key="intro"
                  className="horizon-info-intro"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>Hvor er du lige nu?</h3>
                  <p>
                    De fleste af os tilbringer størstedelen af vores tid i det øverste lag -
                    fanget i tanker, planer og reaktioner.
                  </p>
                  <p>
                    Men ægte lederskab - og ægte forandring - sker, når vi finder vejen ned
                    til det sted, hvor hestene allerede er.
                  </p>
                  <div className="horizon-info-hint">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span>Klik på et lag for at udforske</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={activeData.id}
                  className="horizon-info-detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="horizon-info-subtitle" style={{ color: activeData.color }}>
                    {activeData.subtitle}
                  </p>
                  <h3>{activeData.title}</h3>
                  <p>{activeData.description}</p>

                  <div className="horizon-keywords">
                    {activeData.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="horizon-keyword"
                        style={{ borderColor: activeData.color, color: activeData.color }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="horizon-insight" style={{ borderLeftColor: activeData.color }}>
                    <p>{activeData.insight}</p>
                  </div>

                  <button
                    className="horizon-close-btn"
                    onClick={() => setActiveLayer(null)}
                  >
                    Tilbage til oversigt
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
