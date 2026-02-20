import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: '/autentisk-lederudvikling.jpg',
        width: 1200,
        height: 630,
        alt: 'Referencer - Christina Borreby',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/autentisk-lederudvikling.jpg'],
  },
}

export default function ReferencerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
