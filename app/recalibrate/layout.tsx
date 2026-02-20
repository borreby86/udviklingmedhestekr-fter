import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Recalibrate | Nervesystemsregulering med heste | Christina Borreby',
  description: 'Hold tempoet uden at kroppen betaler prisen. Lær at regulere dit nervesystem med hestenes hjælp og naturens ro. Enkelt session fra 1.500 kr.',
  openGraph: {
    title: 'Recalibrate | Nervesystemsregulering med heste',
    description: 'Hold tempoet uden at kroppen betaler prisen. Lær at regulere dit nervesystem med hestenes hjælp og naturens ro.',
    url: 'https://christinaborreby.dk/recalibrate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/recalibrate'
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Recalibrate - Nervesystemsregulering med heste og natur',
  description: 'Hold tempoet uden at kroppen betaler prisen. Lær at regulere dit nervesystem med hestenes hjælp og naturens ro.',
  provider: {
    '@type': 'Person',
    name: 'Christina Borreby',
    jobTitle: 'Specialist i hesteassisteret lederudvikling'
  },
  areaServed: 'Nordsjælland, Danmark',
  serviceType: 'Nervesystemsregulering',
  offers: [
    {
      '@type': 'Offer',
      name: 'Enkelt session',
      price: '1500',
      priceCurrency: 'DKK'
    },
    {
      '@type': 'Offer',
      name: 'Forløb',
      price: '5000',
      priceCurrency: 'DKK'
    }
  ]
}

export default function RecalibrateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaMarkup data={serviceSchema} />
      {children}
    </>
  )
}
