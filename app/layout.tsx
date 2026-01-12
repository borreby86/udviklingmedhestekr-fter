import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { LenisProvider } from '@/providers/LenisProvider'
import { CookieConsentProvider } from '@/providers/CookieConsentProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { CookieBanner } from '@/components/CookieBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-label',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://christinaborreby.dk'),
  title: 'Christina Borreby | Leder- og teamudvikling med hestekræfter',
  description: 'Unik læring gennem samspil med heste.',
  openGraph: {
    title: 'Christina Borreby | Leder- og teamudvikling med hestekræfter',
    description: 'Unik læring gennem samspil med heste.',
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
    description: 'Unik læring gennem samspil med heste.',
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
      <body className={`${cormorant.variable} ${jost.variable} ${inter.variable}`} suppressHydrationWarning>
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
