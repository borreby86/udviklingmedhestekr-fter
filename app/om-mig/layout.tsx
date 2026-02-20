import type { Metadata } from 'next'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    images: [
      {
        url: '/og-christina_borreby.jpeg',
        width: 1200,
        height: 630,
        alt: 'Christina Borreby',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-christina_borreby.jpeg'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christina Borreby',
  jobTitle: 'Specialist i hesteassisteret lederudvikling',
  description: 'Cand.negot. i Kommunikation & HR, certificeret psykoterapeut med 30+ års erfaring med heste. Hjælper ledere, teams og medarbejdere med at finde det, der ikke kan læres i et klasselokale.',
  image: 'https://christinaborreby.dk/christina_borreby.jpeg',
  url: 'https://christinaborreby.dk/om-mig',
  email: 'info@christinaborreby.dk',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Cand.negot. i Kommunikation & HR'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certificate',
      name: 'Certificeret psykoterapeut'
    }
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Syddansk Universitet (SDU)'
    },
    {
      '@type': 'EducationalOrganization',
      name: 'ID Academy'
    }
  ],
  knowsAbout: [
    'Hesteassisteret lederudvikling',
    'Teamudvikling',
    'Executive coaching',
    'Nervesystemsregulering',
    'Autentisk lederskab',
    'Kommunikation',
    'Psykoterapi'
  ],
  sameAs: [
    'https://www.linkedin.com/in/cborreby/',
    'https://www.instagram.com/christinaborreby/'
  ]
}

export default function OmMigLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup data={personSchema} />
      {children}
    </>
  )
}
