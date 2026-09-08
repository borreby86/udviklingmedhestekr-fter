import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'En dag med heste, ro og natur | Workshop for unge | Christina Borreby',
  description: 'En dag med heste, ro og natur for dig der elsker tid udenfor. 4 timer i Hørsholm uden krav om hesteerfaring. Se datoer og tilmeld dig.',
  keywords: [
    'workshop unge heste',
    'hestedag',
    'ridning Hørsholm',
    'unge natur',
    'heste workshop',
    'ridetur skoven',
    'Christina Borreby'
  ],
  openGraph: {
    title: 'En dag med heste, ro og natur | Workshop for unge',
    description: 'For dig der er nysgerrig på heste og elsker tid i naturen. 4 timer uden krav om erfaring. Se datoer.',
    url: 'https://christinaborreby.dk/en-dag-med-heste',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/og-hero-horse-eye.jpg',
        width: 1200,
        height: 630,
        alt: 'En dag med heste, ro og natur'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En dag med heste, ro og natur | For unge',
    description: 'For dig der er nysgerrig på heste og elsker tid i naturen. 4 timer uden krav om erfaring.',
    images: ['/og-hero-horse-eye.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/en-dag-med-heste'
  },
  robots: {
    index: true,
    follow: true
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'En dag med heste, ro og natur - workshop for unge',
  description: '4 timers workshop med heste, frokost og ridetur i naturen. For unge der vil prøve noget nyt - ingen erfaring nødvendig.',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Løjeltevej 16, Hørsholm',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Løjeltevej 16',
      postalCode: '2970',
      addressLocality: 'Hørsholm',
      addressCountry: 'DK'
    }
  },
  organizer: {
    '@type': 'Person',
    name: 'Christina Borreby'
  },
  inLanguage: 'da'
}

export default function EnDagMedHesteLayout({
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
