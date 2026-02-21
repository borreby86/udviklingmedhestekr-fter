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
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Christina Borreby - Leder- og teamudvikling med hestekræfter',
  url: 'https://christinaborreby.dk',
  image: 'https://christinaborreby.dk/og-hero-horse-eye.jpg',
  email: 'info@christinaborreby.dk',
  description: 'Hesteassisteret leder- og teamudvikling i Nordsjælland. Styrk dit lederskab, teamsamarbejde og personlige udvikling med hesten som spejl.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hørsholm',
    addressRegion: 'Nordsjælland',
    postalCode: '2970',
    addressCountry: 'DK'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Danmark'
  },
  founder: {
    '@type': 'Person',
    name: 'Christina Borreby',
    jobTitle: 'Specialist i hesteassisteret lederudvikling',
    description: 'Cand.negot. i Kommunikation & HR, certificeret psykoterapeut med 30+ års erfaring med heste'
  },
  serviceType: [
    'Lederudvikling',
    'Teamudvikling',
    'Hesteassisteret coaching',
    'Executive coaching',
    'Nervesystemsregulering'
  ],
  knowsLanguage: ['da', 'en']
}

export default function Home() {
  return (
    <>
      <SchemaMarkup data={professionalServiceSchema} />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Insights />
        <Services />
        <WhyHorsesVideo />
        <Testimonials />
        <Benefits />
        <About />
        <Audience />
        <CTA />
      </main>
      <Footer hideCta />
    </>
  )
}
