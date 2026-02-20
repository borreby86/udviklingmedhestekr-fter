import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

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
        url: '/og-lederworkshop.jpg',
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
    images: ['/og-lederworkshop.jpg']
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/lederudvikling-nordsjaelland'
  },
  robots: {
    index: true,
    follow: true
  }
}

const courseSchema = {
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hvem er workshoppen relevant for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Workshoppen er relevant for ledere på alle niveauer, der ønsker at arbejde med deres personlige lederskab og autenticitet. Det kan være erfarne ledere, der vil have nye perspektiver, eller nyere ledere, der vil styrke deres fundament. Fælles for deltagerne er et ønske om at lede med mere nærvær, tydelighed og ægthed.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kræver det hesteerfaring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, overhovedet ikke. Du skal ikke ride, og du behøver ingen erfaring med heste. Alle øvelser foregår fra jorden, og jeg guider dig hele vejen. Faktisk kan det være en fordel at komme uden hesteerfaring - så møder du øvelserne helt åbent og uden vanemønstre.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvad hvis jeg er nervøs for heste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det er helt okay - og mere almindeligt end du tror. Hestene er rolige og vant til at arbejde med mennesker, og vi tilpasser altid øvelserne til dig. Du bestemmer selv, hvor tæt du vil være på hesten. Nervøsiteten kan faktisk blive en del af læringen: Hvordan håndterer du usikkerhed? Hvordan påvirker det din tilstedeværelse? Mange oplever, at netop dét bliver en værdifuld indsigt.'
      }
    },
    {
      '@type': 'Question',
      name: 'Er det sikkert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Sikkerhed prioriteres højt: Alle øvelser foregår fra jorden, der gives grundig instruktion inden opstart, hestene er udvalgt og vant til arbejdet, og forløbene faciliteres professionelt.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvordan dokumenterer vi værdien over for HR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hesteassisteret læring er en evidensbaseret metode med dokumenterede resultater. Peer-reviewed forskning viser forbedringer i emotionel intelligens, selvindsigt og evne til at skabe tillid - kompetencer der direkte påvirker ledelseskvalitet og teamdynamik. Alle deltagere får desuden et refleksionsmateriale med hjem, som kan bruges til at formulere konkrete fokusområder og handlinger efterfølgende. Vil I have mere dokumentation inden beslutningen, sender jeg gerne relevante forskningsreferencer.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvordan booker jeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kontakt mig på info@christinaborreby.dk for en kort afklarende dialog om dine mål og ønsket udbytte. Du kan også tilmelde dig ventelisten for kommende åbne workshops, så får du besked, når nye datoer åbner.'
      }
    }
  ]
}

export default function LederworkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaMarkup data={courseSchema} />
      <SchemaMarkup data={faqSchema} />
      {children}
    </>
  )
}
