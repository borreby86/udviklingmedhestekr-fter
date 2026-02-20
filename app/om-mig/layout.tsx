import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    images: [
      {
        url: '/christina_borreby.jpeg',
        width: 1200,
        height: 630,
        alt: 'Christina Borreby',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/christina_borreby.jpeg'],
  },
}

export default function OmMigLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
