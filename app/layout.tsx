import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { LenisProvider } from '@/providers/LenisProvider'
import { CookieConsentProvider } from '@/providers/CookieConsentProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { CookieBanner } from '@/components/CookieBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'Christina Borreby | Leder- og teamudvikling med hestekræfter',
  description: 'Leder- og teamudvikling i Nordsjælland med hestekræfter',
  openGraph: {
    title: 'Christina Borreby | Leder- og teamudvikling med hestekræfter',
    description: 'Leder- og teamudvikling i Nordsjælland med hestekræfter',
    url: 'https://christinaborreby.dk',
    siteName: 'Christina Borreby',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: '/christina-hest.jpg',
        width: 1200,
        height: 630,
        alt: 'Christina Borreby - Leder- og teamudvikling med hestekræfter'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christina Borreby | Leder- og teamudvikling med hestekræfter',
    description: 'Leder- og teamudvikling i Nordsjælland med hestekræfter',
    images: ['/christina-hest.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CookieConsentProvider>
          <CustomCursor />
          <LenisProvider>
            {children}
          </LenisProvider>
          <CookieBanner />
          <GoogleAnalytics />
          <Analytics />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
