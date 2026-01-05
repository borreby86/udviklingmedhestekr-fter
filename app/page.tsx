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
  return (
    <>
      <Navigation />
      <Hero />
      <SocialProof />
      <Insights />
      <Services />
      <WhyHorses />
      <CTA />
      <Testimonials />
      <Benefits />
      <About />
      <Audience />
      <Contact />
      <Footer />
    </>
  )
}
