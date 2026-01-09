# Instruks: Konverter Recalibrate til Next.js

## Opgave
Konverter vedlagte HTML-fil (recalibrate-v2.html) til en Next.js page komponent, der passer ind i min eksisterende sidestruktur.

---

## Min tech stack
| Teknologi     | Version                      |
|---------------|------------------------------|
| Framework     | Next.js 15.1 (med Turbopack) |
| Frontend      | React 19                     |
| Sprog         | TypeScript 5.7               |
| Styling       | Tailwind CSS 4.0             |
| Animationer   | Motion (Framer Motion) 11.15 |
| Smooth scroll | Lenis 1.1                    |
| Email         | Resend                       |

- **Fonts:** Cormorant Garamond (display) + system fonts (body)

---

## Farvepalet (Tailwind CSS 4.0 syntax)

```css
/* globals.css - definer CSS variabler (Tailwind 4.0 approach) */
@theme {
  --color-brand-cream: #FAF8F5;
  --color-brand-cream-dark: #F5F2EE;
  --color-brand-sand: #E8E4DF;
  --color-brand-charcoal: #3D3D3D;
  --color-brand-gray: #5C5C5C;
  --color-brand-brown: #8B7355;
  --color-brand-brown-light: #B8A398;
  
  --font-cormorant: 'Cormorant Garamond', Georgia, serif;
}
```

Alternativt i tailwind.config.ts:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF8F5',
          'cream-dark': '#F5F2EE', 
          sand: '#E8E4DF',
          charcoal: '#3D3D3D',
          gray: '#5C5C5C',
          brown: '#8B7355',
          'brown-light': '#B8A398',
        }
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      }
    }
  }
}
export default config
```

---

## Font setup

```css
/* globals.css - tilføj font import øverst */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
```

Eller brug Next.js font optimization:
```typescript
// app/layout.tsx
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// I <html> eller <body>:
<body className={`${cormorant.variable}`}>
```

---

## Struktur

Opret følgende fil:
```
app/
  recalibrate/
    page.tsx
```

---

## Krav til komponenten

### 1. Brug 'use client' direktiv
Komponenten bruger Framer Motion og skal være client-side.

### 2. Motion animationer (Framer Motion 11.15)
Erstat CSS scroll-animationer med Motion:

```tsx
// Motion 11+ import syntax
import { motion } from 'motion/react'

// Fade in up animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

// Stagger children
const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

// Brug med whileInView for scroll-trigger:
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeInUp}
>
```

### 3. Tailwind klasser
Konverter al inline CSS til Tailwind. Eksempler:

| CSS | Tailwind |
|-----|----------|
| `background: #FAF8F5` | `bg-brand-cream` |
| `color: #5C5C5C` | `text-brand-gray` |
| `font-family: Cormorant Garamond` | `font-cormorant` |
| `padding: 5rem 1.5rem` | `py-20 px-6` |
| `max-width: 42rem` | `max-w-2xl` |
| `gap: 3rem` | `gap-12` |

### 4. Responsivt design
Brug Tailwind breakpoints:
```tsx
className="text-3xl md:text-4xl lg:text-5xl"
className="grid md:grid-cols-2 gap-8 md:gap-12"
className="py-16 md:py-24"
```

### 5. Links
Brug Next.js Link komponent:
```tsx
import Link from 'next/link'

<Link 
  href="/kontakt"
  className="inline-block border border-brand-brown ..."
>
  Lad os tage en samtale
</Link>
```

### 6. Billeder
Brug Next.js Image komponent for billeder:
```tsx
import Image from 'next/image'

<Image
  src="/images/recalibrate-hest.jpg"
  alt="Hest i naturen"
  fill
  className="object-cover"
/>
```

---

## Sektioner der skal konverteres

1. **Hero** - med gradient baggrund og blur-elementer
2. **Intro** - leadtekst og brødtekst
3. **Back to basics** - baggrund: `bg-brand-cream-dark`
4. **Hestene** - grid layout med billede-placeholder
5. **Redskaberne** - 2x2 grid med metoder
6. **Det kan du tage med dig** - liste med dots
7. **Er Recalibrate noget for dig?** - mørk baggrund `bg-brand-charcoal`
8. **Format** - 3-kolonne grid
9. **Essens/CTA** - centreret med knap
10. **Praktisk info** - footer-lignende sektion

---

## Eksempel på komponent-struktur

```tsx
'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

export default function RecalibratePage(): React.JSX.Element {
  return (
    <main className="bg-brand-cream text-brand-charcoal min-h-screen">
      
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Gradient baggrund */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-sand via-brand-cream to-brand-cream" />
        
        {/* Blur elementer */}
        <div className="absolute top-20 right-8 w-80 h-80 rounded-full bg-brand-brown-light/10 blur-[60px]" />
        <div className="absolute bottom-20 left-8 w-64 h-64 rounded-full bg-brand-brown/10 blur-[60px]" />
        
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p 
            className="text-brand-brown tracking-[0.3em] uppercase text-xs mb-6"
            variants={fadeInUp}
          >
            Back to basics
          </motion.p>
          
          <motion.h1 
            className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-4"
            variants={fadeInUp}
          >
            Recalibrate
          </motion.h1>
          
          <motion.p 
            className="font-cormorant text-xl md:text-2xl text-brand-gray italic mb-8"
            variants={fadeInUp}
          >
            Find tilbage til dig selv – i dit eget tempo
          </motion.p>
          
          <motion.div 
            className="w-16 h-px bg-brand-brown-light mx-auto"
            variants={fadeInUp}
          />
        </motion.div>
      </section>

      {/* Fortsæt med flere sektioner... */}
      
    </main>
  )
}
```

---

## Vigtigt

- Bevar al tekst præcis som i HTML-filen
- Bevar den visuelle hierarki og spacing
- Sørg for at alle animationer føles organiske og langsomme (ease-out, 0.8s+)
- Brug `viewport={{ once: true }}` så animationer kun kører én gang
- Test responsivt design på mobil og desktop
- Siden skal fungere med eksisterende Lenis smooth scroll setup (ingen ekstra konfiguration nødvendig)

---

## TypeScript types

Sørg for korrekt typing:
```tsx
// For event handlers
const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => { }

// For komponenter
export default function RecalibratePage(): React.JSX.Element { }

// For arrays med data
interface MetodeItem {
  title: string
  description: string
}

const metoder: MetodeItem[] = [
  { title: '...', description: '...' }
]
```

---

## Output

Lever én komplet `page.tsx` fil jeg kan placere direkte i `app/recalibrate/` mappen.
