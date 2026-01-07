import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | Christina Borreby',
  description: 'Book en uforpligtende samtale om hesteassisteret udvikling. Kontakt Christina Borreby for at høre mere om workshops og coaching.',
  openGraph: {
    title: 'Kontakt | Christina Borreby',
    description: 'Book en uforpligtende samtale om hesteassisteret udvikling.',
    url: 'https://christinaborreby.dk/kontakt',
  },
  alternates: {
    canonical: 'https://christinaborreby.dk/kontakt'
  }
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
