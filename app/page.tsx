'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Insights from '@/components/Insights'
import Services from '@/components/Services'
import WhyHorses from '@/components/WhyHorses'
import Audience from '@/components/Audience'
import Testimonials from '@/components/Testimonials'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar')
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <SocialProof />
      <Insights />
      <Services />
      <WhyHorses />
      <Audience />
      <Testimonials />
      <Benefits />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
