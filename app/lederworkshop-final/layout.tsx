import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'Lederworkshop med Heste | Christina Borreby',
  description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching i Nordsjælland. 3-timers workshop der giver dig øjeblikkelig feedback på dit lederskab - helt uden filter. Maks 6 deltagere.',
  keywords: [
    'lederworkshop',
    'hesteassisteret lederudvikling',
    'autentisk lederskab',
    'lederudvikling nordsjælland',
    'executive coaching',
    'ledertræning med heste',
    'personlig udvikling ledere',
    'Christina Borreby'
  ],
  openGraph: {
    title: 'Lederworkshop med Heste | Autentisk Lederskab uden Filter',
    description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching. 3-timers workshop der giver dig øjeblikkelig, ærlig feedback på dit lederskab.',
    url: 'https://christinaborreby.dk/lederworkshop',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/lederworkshop.jpg',
        width: 1200,
        height: 630,
        alt: 'Lederworkshop med heste - Christina Borreby'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lederworkshop med Heste | Christina Borreby',
    description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching. Øjeblikkelig feedback på dit lederskab.',
    images: ['/lederworkshop.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/lederworkshop'
  },
  robots: {
    index: true,
    follow: true
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Lederworkshop med Heste - Autentisk Lederskab uden Filter',
  description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching. 3-timers workshop der giver dig øjeblikkelig, ærlig feedback på dit lederskab.',
  provider: {
    '@type': 'Person',
    name: 'Christina Borreby',
    jobTitle: 'Specialist i hesteassisteret lederudvikling',
    description: 'Cand.negot i Kommunikation & HR, certificeret psykoterapeut med 30 års erfaring med heste'
  },
  courseMode: 'onsite',
  educationalLevel: 'Executive',
  audience: {
    '@type': 'Audience',
    audienceType: 'Ledere og beslutningstagere'
  },
  locationCreated: {
    '@type': 'Place',
    name: 'Hørsholm, Nordsjælland',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hørsholm',
      addressRegion: 'Nordsjælland',
      addressCountry: 'DK'
    }
  },
  inLanguage: 'da',
  image: 'https://christinaborreby.dk/lederworkshop.jpg'
}

export default function LederworkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
