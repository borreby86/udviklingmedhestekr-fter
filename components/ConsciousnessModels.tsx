'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

const layerData = [
  {
    id: 'reactive',
    title: 'Det reaktive selv',
    subtitle: 'Overfladen',
    description: 'Her lever vi fra tankernes tempo. Ego styrer, agendaer driver os, og vi reagerer på verden udefra.',
    color: '#6b7d8a',
    keywords: ['Ego', 'Kontrol', 'Forsvar', 'Reaktion'],
  },
  {
    id: 'conscious',
    title: 'Det bevidste selv',
    subtitle: 'Forbindelsen',
    description: 'Her er vi i kontakt med vores tanker og følelser uden at blive opslugt. Vores handlinger afspejler den, vi virkelig er.',
    color: '#8B784A',
    keywords: ['Nærvær', 'Autenticitet', 'Kontakt', 'Valg'],
  },
  {
    id: 'being',
    title: 'Værenskernen',
    subtitle: 'Stilheden',
    description: 'Her er vi. Uden agenda, uden rolle. Det er her, hestene lever - og herfra ægte forandring sker.',
    color: '#34404F',
    keywords: ['Væren', 'Stilhed', 'Nu', 'Kilde'],
  },
]

/* ========================================
   MODEL 1: Koncentriske cirkler (Original)
   ======================================== */
export function Model1() {
  const [active, setActive] = useState<string | null>(null)
  const data = layerData.find(l => l.id === active)

  return (
    <div className="model-preview">
      <div className="model-visual">
        <svg viewBox="0 0 300 300" style={{ width: '100%', maxWidth: 280 }}>
          {/* Outer - Reactive */}
          <motion.circle
            cx="150" cy="150" r="130"
            fill="none" stroke="#6b7d8a" strokeWidth="20"
            strokeDasharray="6 3"
            opacity={active && active !== 'reactive' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'reactive' ? null : 'reactive')}
            animate={{ strokeDashoffset: [0, -18] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Middle - Conscious */}
          <circle
            cx="150" cy="150" r="85"
            fill="none" stroke="#8B784A" strokeWidth="18"
            opacity={active && active !== 'conscious' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'conscious' ? null : 'conscious')}
          />
          {/* Inner - Being */}
          <motion.circle
            cx="150" cy="150" r="45"
            fill="#34404F"
            opacity={active && active !== 'being' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'being' ? null : 'being')}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          {/* Center */}
          <circle cx="150" cy="150" r="6" fill="#D4B86A" />
        </svg>
      </div>
      <div className="model-info">
        <h4>1. Koncentriske cirkler</h4>
        <p className="model-desc">Klassisk "løg-model". Ydre ring bevæger sig uroligt, indre pulserer roligt.</p>
        {data && <p className="model-active"><strong>{data.title}:</strong> {data.description}</p>}
      </div>
    </div>
  )
}

/* ========================================
   MODEL 2: Vertikale lag (Horisont)
   ======================================== */
export function Model2() {
  const [active, setActive] = useState<string | null>(null)
  const data = layerData.find(l => l.id === active)

  return (
    <div className="model-preview">
      <div className="model-visual">
        <svg viewBox="0 0 300 200" style={{ width: '100%', maxWidth: 300 }}>
          {/* Sky/Reactive layer */}
          <rect x="0" y="0" width="300" height="70" fill="#6b7d8a"
            opacity={active && active !== 'reactive' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'reactive' ? null : 'reactive')}
          />
          <text x="150" y="40" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="var(--font-label)" letterSpacing="2">TANKER</text>

          {/* Middle/Conscious layer */}
          <rect x="0" y="70" width="300" height="60" fill="#8B784A"
            opacity={active && active !== 'conscious' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'conscious' ? null : 'conscious')}
          />
          <text x="150" y="105" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9" fontFamily="var(--font-label)" letterSpacing="2">BEVIDSTHED</text>

          {/* Ground/Being layer */}
          <rect x="0" y="130" width="300" height="70" fill="#34404F"
            opacity={active && active !== 'being' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'being' ? null : 'being')}
          />
          <text x="150" y="170" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="var(--font-label)" letterSpacing="2">VÆREN</text>

          {/* Horse silhouette */}
          <motion.g
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ellipse cx="150" cy="155" rx="25" ry="12" fill="#D4B86A" opacity="0.8" />
          </motion.g>
        </svg>
      </div>
      <div className="model-info">
        <h4>2. Horisont-lag</h4>
        <p className="model-desc">Landskab med himmel, horisont og jord. Hesten lever i det nederste lag.</p>
        {data && <p className="model-active"><strong>{data.title}:</strong> {data.description}</p>}
      </div>
    </div>
  )
}

/* ========================================
   MODEL 3: Vanddråbe/Ripple
   ======================================== */
export function Model3() {
  const [active, setActive] = useState<string | null>(null)
  const data = layerData.find(l => l.id === active)

  return (
    <div className="model-preview">
      <div className="model-visual" style={{ background: 'linear-gradient(180deg, #f8f7f4 0%, #e8e6e0 100%)', borderRadius: 8, padding: '2rem' }}>
        <svg viewBox="0 0 300 300" style={{ width: '100%', maxWidth: 260 }}>
          {/* Ripples from center */}
          <motion.circle
            cx="150" cy="150" r="120"
            fill="none" stroke="#6b7d8a" strokeWidth="1"
            opacity={active && active !== 'reactive' ? 0.1 : 0.4}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'reactive' ? null : 'reactive')}
            animate={{ r: [120, 130, 120], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="150" cy="150" r="100"
            fill="none" stroke="#6b7d8a" strokeWidth="1"
            opacity={active && active !== 'reactive' ? 0.1 : 0.5}
            animate={{ r: [100, 108, 100], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle
            cx="150" cy="150" r="75"
            fill="none" stroke="#8B784A" strokeWidth="2"
            opacity={active && active !== 'conscious' ? 0.2 : 0.7}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'conscious' ? null : 'conscious')}
          />
          <motion.circle
            cx="150" cy="150" r="50"
            fill="none" stroke="#8B784A" strokeWidth="1.5"
            opacity={active && active !== 'conscious' ? 0.1 : 0.5}
          />
          {/* Still center */}
          <circle
            cx="150" cy="150" r="25"
            fill="#34404F"
            opacity={active && active !== 'being' ? 0.2 : 1}
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'being' ? null : 'being')}
          />
          <circle cx="150" cy="150" r="4" fill="#D4B86A" />
        </svg>
      </div>
      <div className="model-info">
        <h4>3. Vandringe</h4>
        <p className="model-desc">Som ringe i vand. Uro på overfladen, stilhed i dybet. Centeret er uforstyrret.</p>
        {data && <p className="model-active"><strong>{data.title}:</strong> {data.description}</p>}
      </div>
    </div>
  )
}

/* ========================================
   MODEL 4: Tre søjler
   ======================================== */
export function Model4() {
  const [active, setActive] = useState<string | null>(null)
  const data = layerData.find(l => l.id === active)

  return (
    <div className="model-preview">
      <div className="model-visual">
        <svg viewBox="0 0 300 220" style={{ width: '100%', maxWidth: 300 }}>
          {/* Column 1 - Reactive */}
          <g style={{ cursor: 'pointer' }} onClick={() => setActive(active === 'reactive' ? null : 'reactive')}>
            <motion.rect
              x="25" y="60" width="70" height="120" rx="4"
              fill="#6b7d8a"
              opacity={active && active !== 'reactive' ? 0.2 : 1}
              animate={{ y: [60, 55, 60] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <text x="60" y="200" textAnchor="middle" fill="#6b7d8a" fontSize="8" fontFamily="var(--font-label)" letterSpacing="1">REAKTIVT</text>
            {/* Noise lines */}
            <motion.g animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 0.5, repeat: Infinity }}>
              <line x1="35" y1="80" x2="85" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="35" y1="100" x2="85" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="35" y1="120" x2="85" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="35" y1="140" x2="85" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            </motion.g>
          </g>

          {/* Column 2 - Conscious */}
          <g style={{ cursor: 'pointer' }} onClick={() => setActive(active === 'conscious' ? null : 'conscious')}>
            <rect
              x="115" y="40" width="70" height="140" rx="4"
              fill="#8B784A"
              opacity={active && active !== 'conscious' ? 0.2 : 1}
            />
            <text x="150" y="200" textAnchor="middle" fill="#8B784A" fontSize="8" fontFamily="var(--font-label)" letterSpacing="1">BEVIDST</text>
            {/* Steady pulse */}
            <motion.circle
              cx="150" cy="110" r="15"
              fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </g>

          {/* Column 3 - Being */}
          <g style={{ cursor: 'pointer' }} onClick={() => setActive(active === 'being' ? null : 'being')}>
            <rect
              x="205" y="20" width="70" height="160" rx="4"
              fill="#34404F"
              opacity={active && active !== 'being' ? 0.2 : 1}
            />
            <text x="240" y="200" textAnchor="middle" fill="#34404F" fontSize="8" fontFamily="var(--font-label)" letterSpacing="1">VÆREN</text>
            {/* Still point */}
            <circle cx="240" cy="100" r="8" fill="#D4B86A" />
          </g>

          {/* Arrow */}
          <path d="M95 210 L205 210" stroke="#ccc" strokeWidth="1" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#ccc" />
            </marker>
          </defs>
          <text x="150" y="218" textAnchor="middle" fill="#999" fontSize="7" fontFamily="var(--font-label)">DYBDE</text>
        </svg>
      </div>
      <div className="model-info">
        <h4>4. Tre søjler</h4>
        <p className="model-desc">Progression fra uro til dybde. Hver søjle viser sin egen energi.</p>
        {data && <p className="model-active"><strong>{data.title}:</strong> {data.description}</p>}
      </div>
    </div>
  )
}

/* ========================================
   MODEL 5: Minimalistisk linje
   ======================================== */
export function Model5() {
  const [active, setActive] = useState<string | null>(null)
  const data = layerData.find(l => l.id === active)

  return (
    <div className="model-preview">
      <div className="model-visual" style={{ padding: '3rem 2rem' }}>
        <svg viewBox="0 0 300 100" style={{ width: '100%', maxWidth: 320 }}>
          {/* Base line */}
          <line x1="20" y1="50" x2="280" y2="50" stroke="#e0ddd5" strokeWidth="2" />

          {/* Reactive - scattered dots */}
          <g
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'reactive' ? null : 'reactive')}
            opacity={active && active !== 'reactive' ? 0.2 : 1}
          >
            <motion.circle cx="50" cy="35" r="4" fill="#6b7d8a" animate={{ y: [0, -5, 0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }} />
            <motion.circle cx="65" cy="55" r="3" fill="#6b7d8a" animate={{ y: [0, 4, 0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
            <motion.circle cx="45" cy="60" r="3" fill="#6b7d8a" animate={{ y: [0, -3, 0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }} />
            <motion.circle cx="70" cy="40" r="2" fill="#6b7d8a" animate={{ y: [0, 3, 0, -4, 0] }} transition={{ duration: 0.9, repeat: Infinity }} />
            <text x="55" y="85" textAnchor="middle" fill="#6b7d8a" fontSize="7" fontFamily="var(--font-label)" letterSpacing="1">REAKTIVT</text>
          </g>

          {/* Conscious - aligned dots */}
          <g
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'conscious' ? null : 'conscious')}
            opacity={active && active !== 'conscious' ? 0.2 : 1}
          >
            <circle cx="135" cy="50" r="5" fill="#8B784A" />
            <circle cx="150" cy="50" r="5" fill="#8B784A" />
            <circle cx="165" cy="50" r="5" fill="#8B784A" />
            <motion.path
              d="M130 50 Q150 35 170 50"
              fill="none" stroke="#8B784A" strokeWidth="1" strokeDasharray="3 2"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <text x="150" y="85" textAnchor="middle" fill="#8B784A" fontSize="7" fontFamily="var(--font-label)" letterSpacing="1">BEVIDST</text>
          </g>

          {/* Being - single point */}
          <g
            style={{ cursor: 'pointer' }}
            onClick={() => setActive(active === 'being' ? null : 'being')}
            opacity={active && active !== 'being' ? 0.2 : 1}
          >
            <circle cx="245" cy="50" r="12" fill="#34404F" />
            <motion.circle
              cx="245" cy="50" r="18"
              fill="none" stroke="#34404F" strokeWidth="1"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <circle cx="245" cy="50" r="3" fill="#D4B86A" />
            <text x="245" y="85" textAnchor="middle" fill="#34404F" fontSize="7" fontFamily="var(--font-label)" letterSpacing="1">VÆREN</text>
          </g>
        </svg>
      </div>
      <div className="model-info">
        <h4>5. Minimalistisk linje</h4>
        <p className="model-desc">Fra kaos til orden til stilhed. Enkelt og moderne.</p>
        {data && <p className="model-active"><strong>{data.title}:</strong> {data.description}</p>}
      </div>
    </div>
  )
}
