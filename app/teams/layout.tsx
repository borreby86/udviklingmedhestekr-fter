import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teamudvikling med heste | Christina Borreby',
  description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring. Max 15 deltagere.',
  openGraph: {
    title: 'Teamudvikling med heste | Christina Borreby',
    description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring.',
    type: 'website',
    images: [
      {
        url: '/team.jpg',
        width: 1200,
        height: 630,
        alt: 'Teamudvikling med heste',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/team.jpg'],
  },
}

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
