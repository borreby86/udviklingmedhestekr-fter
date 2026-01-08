'use client'

import Script from 'next/script'
import { useCookieConsent } from '@/providers/CookieConsentProvider'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export function GoogleAnalytics() {
  const { consent } = useCookieConsent()

  // Only load GA if user has accepted all cookies and we have a measurement ID
  if (consent !== 'all' || !GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  )
}
