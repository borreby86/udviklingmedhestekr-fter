import { MetadataRoute } from 'next'

/* Sider der endnu ikke er klar til offentliggørelse. De blokeres for alle
   crawlere - både søgemaskiner og AI-bots. Fjern stien herfra, når siden
   går live (husk også robots-metadata i sidens layout.tsx og sitemap.ts). */
const draftPaths = ['/the-maestro']

const disallow = ['/api/', ...draftPaths]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: draftPaths,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: draftPaths,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: draftPaths,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: draftPaths,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: draftPaths,
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: draftPaths,
      },
    ],
    sitemap: 'https://christinaborreby.dk/sitemap.xml',
  }
}
