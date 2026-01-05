import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teamudvikling med heste | Christina Borreby',
  description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring. Max 15 deltagere.',
  openGraph: {
    title: 'Teamudvikling med heste | Christina Borreby',
    description: 'Skræddersyet teamudvikling der går dybere end klassisk teambuilding. Styrk samarbejde, kommunikation og tillid gennem hesteassisteret læring.',
    type: 'website',
  },
}

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
