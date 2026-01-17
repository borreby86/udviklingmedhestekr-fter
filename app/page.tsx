import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Insights from '@/components/Insights'
import Services from '@/components/Services'
import WhyHorsesVideo from '@/components/WhyHorsesVideo'
import Audience from '@/components/Audience'
import Testimonials from '@/components/Testimonials'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <SocialProof />
      <Insights />
      <Services />
      <WhyHorsesVideo />
      <Testimonials />
      <Benefits />
      <About />
      <Audience />
      <Footer />
    </>
  )
}
