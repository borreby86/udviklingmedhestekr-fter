import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'Lederudvikling Nordsjælland | Hesteassisteret Workshop | Christina Borreby',
  description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching i Nordsjælland. 3-timers workshop der giver dig øjeblikkelig feedback på dit lederskab - helt uden filter. Maks 6 deltagere.',
  keywords: [
    'lederudvikling nordsjælland',
    'lederworkshop',
    'hesteassisteret lederudvikling',
    'autentisk lederskab',
    'executive coaching nordsjælland',
    'ledertræning med heste',
    'personlig udvikling ledere',
    'lederudvikling hørsholm',
    'Christina Borreby'
  ],
  openGraph: {
    title: 'Lederudvikling Nordsjælland | Autentisk Lederskab uden Filter',
    description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching i Nordsjælland. 3-timers workshop der giver dig øjeblikkelig, ærlig feedback på dit lederskab.',
    url: 'https://christinaborreby.dk/lederudvikling-nordsjaelland',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/lederworkshop.jpg',
        width: 1200,
        height: 630,
        alt: 'Lederudvikling med heste i Nordsjælland - Christina Borreby'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lederudvikling Nordsjælland | Christina Borreby',
    description: 'Oplev autentisk lederudvikling gennem hesteassisteret coaching i Nordsjælland. Øjeblikkelig feedback på dit lederskab.',
    images: ['/lederworkshop.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/lederudvikling-nordsjaelland'
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
