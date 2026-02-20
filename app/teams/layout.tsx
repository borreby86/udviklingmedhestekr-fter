import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Teamudvikling med heste | Christina Borreby',
  description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring. Max 15 deltagere.',
  openGraph: {
    title: 'Teamudvikling med heste | Christina Borreby',
    description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring.',
    type: 'website',
    images: [
      {
        url: '/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Teamudvikling med heste',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-team.jpg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hvem er teamworkshops relevante for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams og ledergrupper der vil arbejde konkret med samarbejde, kommunikation og roller. Vi har arbejdet med alt fra lederteams på 4-6 personer til afdelinger på op til 15. Der kræves ingen hesteerfaring.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kræver det hesteerfaring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej. Du skal ikke ride, og alt foregår fra jorden. De fleste deltagere har aldrig rørt en hest, og det er en fordel. Så møder du øvelserne åbent og uden vanemønstre.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvad hvis nogen i teamet er nervøse for heste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det er helt normalt og mere almindeligt end man tror. Hestene er rolige og vant til at arbejde med mennesker, og vi tilpasser øvelserne. Nervøsiteten kan faktisk blive en del af læringen: hvordan håndterer du usikkerhed, og hvordan påvirker det din tilstedeværelse?'
      }
    },
    {
      '@type': 'Question',
      name: 'Er det sikkert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Alle øvelser foregår fra jorden, der gives grundig instruktion inden opstart, og hestene er udvalgt og vant til arbejdet. Der er altid en iboende risiko ved levende dyr, og det informerer vi deltagerne om på forhånd.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvor lang tid varer det, og hvor mange kan deltage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En teamworkshop varer typisk 3-4 timer. Vi tager op til 15 deltagere. Forløbet tilpasses jeres behov og mål.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvordan dokumenterer vi værdien over for HR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hesteassisteret læring er en evidensbaseret metode. Peer-reviewed forskning viser forbedringer i emotionel intelligens, selvindsigt og evnen til at skabe tillid. Alle deltagere får refleksionsmateriale med hjem til at formulere konkrete fokusområder. Jeg sender gerne forskningsreferencer inden beslutningen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvad koster det?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kontakt mig for pris. Hvert forløb er skræddersyet, så prisen afhænger af deltagerantal, varighed og tilpasning til jeres behov.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvad skal vi have på?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lukkede og flade sko er et krav, da vi går rundt på en sandbane med hestene. Derudover tøj der passer til vejret - vi er udendørs det meste af tiden.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hvordan booker vi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skriv til info@christinaborreby.dk eller ring. Vi tager en kort snak om jeres mål og deltagere, og så sammensætter jeg et forløb der matcher.'
      }
    }
  ]
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hesteassisteret teamudvikling',
  description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring.',
  provider: {
    '@type': 'Person',
    name: 'Christina Borreby'
  },
  areaServed: 'Nordsjælland, Danmark',
  serviceType: 'Teamudvikling'
}

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaMarkup data={faqSchema} />
      <SchemaMarkup data={serviceSchema} />
      {children}
    </>
  )
}
