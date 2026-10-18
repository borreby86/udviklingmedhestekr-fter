import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metoden: Sådan virker lederudvikling med heste | Christina Borreby',
  description:
    'Se, hvordan lederudvikling med heste virker: fra erfaring med hesten til refleksion, parallel til hverdagen og mere autentisk ledelse. Hesten reagerer på din tilstand, ikke på din titel.',
  openGraph: {
    title: 'Metoden: Sådan virker lederudvikling med heste',
    description:
      'Fra reaktion til retning. Hesten viser dig hvert skridt: mærk, genkend, find roen og vælg.',
    url: 'https://christinaborreby.dk/metoden',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://christinaborreby.dk/metoden' }
}

export default function MetodenLayout({ children }: { children: React.ReactNode }) {
  return children
}
