'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

const layers = [
  {
    id: 'reactive',
    title: 'Det reaktive selv',
    subtitle: 'Overfladen',
    description: 'Her lever vi fra tankernes tempo. Ego styrer, agendaer driver os, og vi reagerer på verden udefra. Vi identificerer os med vores tanker og forsvarer vores position.',
    color: '#6b7d8a',
    keywords: ['Ego', 'Kontrol', 'Forsvar', 'Reaktion'],
  },
  {
    id: 'conscious',
    title: 'Det bevidste selv',
    subtitle: 'Forbindelsen',
    description: 'Her begynder vi at mærke. Vi er i kontakt med vores tanker og følelser uden at blive opslugt af dem. Vores handlinger afspejler den, vi virkelig er.',
    color: '#8B784A',
    keywords: ['Nærvær', 'Autenticitet', 'Kontakt', 'Valg'],
  },
  {
    id: 'being',
    title: 'Værenskernen',
    subtitle: 'Stilheden',
    description: 'Her er vi. Uden agenda, uden rolle, uden forsvar. Det er her, hestene lever - fra det ene nu til det andet. Og det er herfra, ægte forandring sker.',
    color: '#34404F',
    keywords: ['Væren', 'Stilhed', 'Nu', 'Kilde'],
  },
]

export function ConsciousnessModel() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)
  const activeData = layers.find(l => l.id === activeLayer)

  return (
    <div className="consciousness-model">
      <div className="consciousness-model-container">
        {/* Visual */}
        <div className="consciousness-visual">
          <svg viewBox="0 0 400 400" className="consciousness-svg">
            {/* Outer ring - Reactive Self */}
            <motion.circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#6b7d8a"
              strokeWidth={activeLayer === 'reactive' ? 40 : 30}
              strokeDasharray="8 4"
              opacity={activeLayer && activeLayer !== 'reactive' ? 0.3 : 1}
              className="consciousness-ring"
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveLayer(activeLayer === 'reactive' ? null : 'reactive')}
              animate={{
                strokeDashoffset: [0, -24],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Middle ring - Conscious Self */}
            <motion.circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#8B784A"
              strokeWidth={activeLayer === 'conscious' ? 35 : 25}
              opacity={activeLayer && activeLayer !== 'conscious' ? 0.3 : 1}
              className="consciousness-ring"
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveLayer(activeLayer === 'conscious' ? null : 'conscious')}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />

            {/* Inner circle - Being */}
            <motion.circle
              cx="200"
              cy="200"
              r="60"
              fill="#34404F"
              opacity={activeLayer && activeLayer !== 'being' ? 0.3 : 1}
              className="consciousness-ring"
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveLayer(activeLayer === 'being' ? null : 'being')}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Center dot - pure stillness */}
            <circle
              cx="200"
              cy="200"
              r="8"
              fill="#D4B86A"
            />
          </svg>

          {/* Labels on visual */}
          <div className="consciousness-labels">
            <span
              className={`consciousness-label consciousness-label-outer ${activeLayer === 'reactive' ? 'active' : ''}`}
              onClick={() => setActiveLayer(activeLayer === 'reactive' ? null : 'reactive')}
            >
              Reaktivt
            </span>
            <span
              className={`consciousness-label consciousness-label-middle ${activeLayer === 'conscious' ? 'active' : ''}`}
              onClick={() => setActiveLayer(activeLayer === 'conscious' ? null : 'conscious')}
            >
              Bevidst
            </span>
            <span
              className={`consciousness-label consciousness-label-inner ${activeLayer === 'being' ? 'active' : ''}`}
              onClick={() => setActiveLayer(activeLayer === 'being' ? null : 'being')}
            >
              Væren
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="consciousness-content">
          {!activeData ? (
            <motion.div
              className="consciousness-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="consciousness-intro-label">Klik på et lag for at udforske</p>
              <h3>Tre lag af bevidsthed</h3>
              <p>
                Vi bevæger os alle mellem disse lag. Det reaktive selv beskytter os,
                men holder os også fanget. Det bevidste selv giver os valg.
                Og værenskernen - den stille midte - er hvor vi møder os selv og
                hinanden i sandhed.
              </p>
              <p className="consciousness-horse-note">
                Hestene lever fra værenskernen. De mærker øjeblikkeligt, når vi
                forlader den - og inviterer os tilbage.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeData.id}
              className="consciousness-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="consciousness-detail-subtitle" style={{ color: activeData.color }}>
                {activeData.subtitle}
              </p>
              <h3>{activeData.title}</h3>
              <p>{activeData.description}</p>
              <div className="consciousness-keywords">
                {activeData.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="consciousness-keyword"
                    style={{ borderColor: activeData.color, color: activeData.color }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              {activeData.id === 'being' && (
                <p className="consciousness-insight">
                  Det er herfra, forandring sker. Ikke ved at tilføje mere -
                  men ved at vende tilbage til det, der allerede er.
                </p>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Journey indicator */}
      <div className="consciousness-journey">
        <span>Udefra</span>
        <div className="consciousness-journey-line">
          <div className="consciousness-journey-arrow" />
        </div>
        <span>Ind</span>
      </div>
    </div>
  )
}
