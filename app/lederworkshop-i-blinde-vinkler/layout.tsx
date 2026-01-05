import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'Lederworkshop i Blinde Vinkler | Christina Borreby & Michael Casparij',
  description: 'Mini-forløb der øger din selvindsigt som leder. Kombiner MBS® Relationsanalyse med hesteassisteret lederskabstræning og find din gyldne middelvej i ledelse. Intropris kr. 4.750.',
  keywords: [
    'lederworkshop',
    'blinde vinkler',
    'MBS relationsanalyse',
    'hesteassisteret lederudvikling',
    'selvindsigt',
    'ledelsesudvikling',
    'Christina Borreby',
    'Michael Casparij',
    'executive coaching',
    'lederudvikling nordsjælland'
  ],
  openGraph: {
    title: 'Lederworkshop i Blinde Vinkler | Øget Selvindsigt for Ledere',
    description: 'Opdag dine blinde vinkler og bliv en bedre leder. Mini-forløb med MBS® Relationsanalyse og hesteassisteret lederskabstræning.',
    url: 'https://christinaborreby.dk/lederworkshop-i-blinde-vinkler',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/lederworkshop.jpg',
        width: 1200,
        height: 630,
        alt: 'Lederworkshop i Blinde Vinkler - Christina Borreby & Michael Casparij'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lederworkshop i Blinde Vinkler | Christina Borreby',
    description: 'Opdag dine blinde vinkler og bliv en bedre leder. Mini-forløb med MBS® Relationsanalyse og hesteassisteret lederskabstræning.',
    images: ['/lederworkshop.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/lederworkshop-i-blinde-vinkler'
  },
  robots: {
    index: true,
    follow: true
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Lederworkshop i Blinde Vinkler - Øget Selvindsigt for Ledere',
  description: 'Mini-forløb der øger din selvindsigt som leder. Kombiner MBS® Relationsanalyse med hesteassisteret lederskabstræning.',
  provider: [
    {
      '@type': 'Person',
      name: 'Christina Borreby',
      jobTitle: 'Specialist i hesteassisteret lederudvikling'
    },
    {
      '@type': 'Person',
      name: 'Michael Casparij',
      jobTitle: 'Ledelseskonsulent & MBS Certified Partner'
    }
  ],
  courseMode: 'blended',
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
      streetAddress: 'Løjeltevej 16',
      postalCode: '2970',
      addressLocality: 'Hørsholm',
      addressRegion: 'Nordsjælland',
      addressCountry: 'DK'
    }
  },
  offers: {
    '@type': 'Offer',
    price: '4750',
    priceCurrency: 'DKK',
    availability: 'https://schema.org/InStock',
    validFrom: '2025-01-01'
  },
  inLanguage: 'da',
  image: 'https://christinaborreby.dk/lederworkshop.jpg'
}

export default function BlindeVinklerLayout({
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
