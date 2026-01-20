'use client'

import Navigation from '@/components/Navigation'
import { HorizonModel } from '@/components/HorizonModel'

export default function ModelTestPage() {
  return (
    <>
      <Navigation />
      <div style={{ paddingTop: '100px' }}>
        <HorizonModel />
      </div>
    </>
  )
}
