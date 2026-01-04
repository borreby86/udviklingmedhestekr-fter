import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Christina Borreby | Lederudvikling med Hestekræfter',
  description: 'Hesteassisteret lederudvikling i Nordsjælland. Unik læring gennem samspil med heste for ledere og teams.',
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
      <body>{children}</body>
    </html>
  )
}
