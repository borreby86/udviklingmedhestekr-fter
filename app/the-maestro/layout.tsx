import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'The Maestro | Hall of fame | Christina Borreby',
  description: 'Historien om galophesten The Maestro - sejre, løbsvideoer og vejen dertil: pulstræning, fodring, planlægning mod mål, kropslig og energetisk balancering - og det indre arbejde bag resultaterne.',
  keywords: [
    'The Maestro',
    'galophest',
    'galopsport Danmark',
    'pulstræning hest',
    'fodring galophest',
    'kiropraktor hest',
    'Christina Borreby'
  ],
  openGraph: {
    title: 'The Maestro | Hall of fame',
    description: 'Sejre, løbsvideoer og vejen dertil - pulstræning, fodring, planlægning og balancering af krop og energi.',
    url: 'https://christinaborreby.dk/the-maestro',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/maestro-finish.jpg',
        width: 1920,
        height: 1080,
        alt: 'The Maestro vinder på opløbssiden'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Maestro | Hall of fame',
    description: 'Sejre, løbsvideoer og vejen dertil - træning, fodring, planlægning og balance.',
    images: ['/maestro-finish.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/the-maestro'
  },
  robots: {
    index: true,
    follow: true
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Maestro - hall of fame',
  description: 'Hall of fame for galophesten The Maestro med løbsvideoer, sejrsfotos og fortællingen om træning, fodring, planlægning og balancering bag resultaterne.',
  url: 'https://christinaborreby.dk/the-maestro',
  inLanguage: 'da',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Christina Borreby',
    url: 'https://christinaborreby.dk'
  },
  about: {
    '@type': 'Thing',
    name: 'The Maestro',
    description: 'Galophest'
  },
  author: {
    '@type': 'Person',
    name: 'Christina Borreby'
  }
}

export default function TheMaestroLayout({
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
