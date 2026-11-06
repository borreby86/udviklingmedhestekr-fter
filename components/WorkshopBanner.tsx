'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function WorkshopBanner() {
  const pathname = usePathname()
  const isFrontpage = pathname === '/'
  const barRef = useRef<HTMLDivElement>(null)

  // Push nav down on frontpage to make room for topbar (measured, so it also works when the text wraps on mobile)
  useEffect(() => {
    if (!isFrontpage) {
      document.documentElement.style.setProperty('--topbar-height', '0px')
      return
    }

    const updateHeight = () => {
      if (barRef.current) {
        document.documentElement.style.setProperty('--topbar-height', `${barRef.current.offsetHeight}px`)
      }
    }
    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    if (barRef.current) resizeObserver.observe(barRef.current)

    return () => {
      resizeObserver.disconnect()
      document.documentElement.style.removeProperty('--topbar-height')
    }
  }, [isFrontpage])

  if (!isFrontpage) return null

  return (
    <div className="workshop-topbar" ref={barRef}>
      <span className="workshop-topbar-text">
        Siden er under opdatering - mere information tilføjes løbende, kig snart forbi igen
      </span>
    </div>
  )
}
