import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'En dag med heste for unge | Tilbud til kommuner | Christina Borreby',
  description: 'Et mentalt frirum uden præstation. Dagsworkshops og forløb med heste, ro og natur for unge med særlige behov. Skræddersyes til kommuners behov i Nordsjælland.',
  keywords: [
    'unge med særlige behov',
    'kommune tilbud unge',
    'hesteassisteret terapi unge',
    'SSP samarbejde',
    'sårbare unge',
    'eksamensangst',
    'mental sundhed unge',
    'workshop unge heste',
    'Christina Borreby',
    'Nordsjælland'
  ],
  openGraph: {
    title: 'En dag med heste for unge | Tilbud til kommuner',
    description: 'Et mentalt frirum uden præstation. Workshops og forløb med heste for unge med særlige behov - skræddersyet til kommuners behov.',
    url: 'https://christinaborreby.dk/kommuner-unge',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/og-hero-horse-eye.jpg',
        width: 1200,
        height: 630,
        alt: 'En dag med heste for unge - tilbud til kommuner'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En dag med heste for unge | Tilbud til kommuner',
    description: 'Et mentalt frirum uden præstation. Workshops med heste for unge med særlige behov.',
    images: ['/og-hero-horse-eye.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/kommuner-unge'
  },
  robots: {
    index: false,
    follow: false
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'En dag med heste for unge - tilbud til kommuner',
  description: 'Hesteassisterede workshops og forløb for unge med særlige behov. Skræddersyes til kommuners behov og de specifikke unge.',
  provider: {
    '@type': 'Person',
    name: 'Christina Borreby',
    jobTitle: 'Cert. ID-Psykoterapeut & Cand.negot.'
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Kommuner, SSP, UU-vejledere, sagsbehandlere'
  },
  areaServed: {
    '@type': 'Place',
    name: 'Nordsjælland'
  },
  serviceType: 'Hesteassisteret udvikling for unge',
  inLanguage: 'da'
}

export default function KommunerUngeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaMarkup data={jsonLd} />
      {children}
    </>
  )
}
