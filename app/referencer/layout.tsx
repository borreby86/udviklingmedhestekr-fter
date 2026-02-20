import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referencer | Christina Borreby',
  description: 'Læs hvad ledere, CEOs og teamledere siger om hesteassisteret udvikling hos Christina Borreby. Autentiske anbefalinger fra deltagere.',
  alternates: {
    canonical: 'https://christinaborreby.dk/referencer'
  },
  openGraph: {
    title: 'Referencer | Christina Borreby',
    description: 'Læs hvad ledere, CEOs og teamledere siger om hesteassisteret udvikling hos Christina Borreby.',
    url: 'https://christinaborreby.dk/referencer',
    images: [
      {
        url: '/og-autentisk-lederudvikling.jpg',
        width: 1200,
        height: 630,
        alt: 'Referencer - Christina Borreby',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-autentisk-lederudvikling.jpg'],
  },
}

export default function ReferencerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
