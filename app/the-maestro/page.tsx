'use client'

/* ------------------------------------------------------------------------
   THE MAESTRO — hall of fame
   ------------------------------------------------------------------------
   Alt indhold styres fra data-arrays herunder, så tekst, videoer og fotos
   kan udskiftes uden at røre selve layoutet.

   TODO (Christina):
   - videos[]  : indsæt YouTube-/Vimeo-link eller sti til mp4 i "url".
                 Tom "url" = kortet vises som "Video på vej".
   - merits[]  : indsæt starter/sejre/placeringer. Tomt array = feltet skjules.
   - Alle brødtekster er UDKAST og skal erstattes med dine egne tekster.
   ------------------------------------------------------------------------ */

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

type MaestroVideo = {
  title: string
  meta: string
  description: string
  poster: string
  /** YouTube-/Vimeo-link eller sti til mp4 i /public. Tom = "Video på vej". */
  url: string
}

type MaestroPhoto = {
  src: string
  alt: string
  caption: string
}

type Merit = {
  value: string
  label: string
}

/* --- 6 pladser til løbsvideoer ---------------------------------------- */
const videos: MaestroVideo[] = [
  {
    title: 'Sejr nr. 1',
    meta: 'Bane · Løbsnavn · Årstal',
    description: 'Kort beskrivelse af løbet — hvordan det blev redet, og hvad der gjorde dagen særlig.',
    poster: '/maestro-finish.jpg',
    url: ''
  },
  {
    title: 'Sejr nr. 2',
    meta: 'Bane · Løbsnavn · Årstal',
    description: 'Kort beskrivelse af løbet — hvordan det blev redet, og hvad der gjorde dagen særlig.',
    poster: '/maestro-duel.jpg',
    url: ''
  },
  {
    title: 'Sejr nr. 3',
    meta: 'Bane · Løbsnavn · Årstal',
    description: 'Kort beskrivelse af løbet — hvordan det blev redet, og hvad der gjorde dagen særlig.',
    poster: '/maestro-field.jpg',
    url: ''
  },
  {
    title: 'Sejr nr. 4',
    meta: 'Bane · Løbsnavn · Årstal',
    description: 'Kort beskrivelse af løbet — hvordan det blev redet, og hvad der gjorde dagen særlig.',
    poster: '/maestro-winner.jpg',
    url: ''
  },
  {
    title: 'Sejr nr. 5',
    meta: 'Bane · Løbsnavn · Årstal',
    description: 'Kort beskrivelse af løbet — hvordan det blev redet, og hvad der gjorde dagen særlig.',
    poster: '/maestro-parade.jpg',
    url: ''
  },
  {
    title: 'Sejr nr. 6',
    meta: 'Bane · Løbsnavn · Årstal',
    description: 'Kort beskrivelse af løbet — hvordan det blev redet, og hvad der gjorde dagen særlig.',
    poster: '/maestro-finish.jpg',
    url: ''
  }
]

/* --- Sejrsfotos -------------------------------------------------------- */
const gallery: MaestroPhoto[] = [
  {
    src: '/maestro-finish.jpg',
    alt: 'The Maestro vinder løbet på opløbssiden',
    caption: 'Over stregen først'
  },
  {
    src: '/maestro-duel.jpg',
    alt: 'The Maestro i duel med to andre heste',
    caption: 'Duellen ind mod målstolpen'
  },
  {
    src: '/maestro-field.jpg',
    alt: 'Feltet på vej mod mål med The Maestro forrest',
    caption: 'Feltet på vej hjem'
  },
  {
    src: '/maestro-winner.jpg',
    alt: 'The Maestro og jockey efter sejren',
    caption: 'Øjeblikket lige efter'
  },
  {
    src: '/maestro-parade.jpg',
    alt: 'The Maestro trækkes ind på banen før løbet',
    caption: 'Ind på banen — nummer 14'
  }
]

/* --- Meritter. Tomt array = sektionen vises som "på vej". -------------- */
const merits: Merit[] = []

/* --- Vejen mod resultater --------------------------------------------- */
const pillars = [
  {
    number: '01',
    label: 'Konditionen',
    title: 'Pulstræning',
    lead: 'Træning på tal frem for på fornemmelse.',
    body: [
      'UDKAST: Pulsmåler på i hvert eneste arbejde. Hvor højt kommer pulsen op, og — vigtigere — hvor hurtigt falder den igen? Restitutionen er den ærligste indikator på, om formen er på vej op eller om kroppen er ved at være presset.',
      'UDKAST: Tallene fortæller, hvornår der skal lægges et hak til, og hvornår der skal holdes igen. Det er dét, der gør, at træningen bygger op i stedet for at slide ned.'
    ],
    points: [
      'Arbejdspuls og restitutionstid følges i hvert pas',
      'Intervaller doseres efter dagens tal — ikke efter planen alene',
      'Formkurven planlægges mod bestemte løbsdatoer'
    ]
  },
  {
    number: '02',
    label: 'Brændstoffet',
    title: 'Fodring',
    lead: 'Foderet skal matche det arbejde, der bliver lavet.',
    body: [
      'UDKAST: Grundfoderet er fundamentet — grovfoder af god kvalitet, rigeligt og i ro. Ovenpå det doseres energi, protein, mineraler og elektrolytter efter, hvor i træningsforløbet han er.',
      'UDKAST: En hest, der har ondt i maven eller mangler et mineral, kan ikke præstere — uanset hvor god formen ellers er. Derfor følges mave, hud, pels og humør lige så tæt som træningstallene.'
    ],
    points: [
      'Grovfoder først — energi tilpasses arbejdsmængden',
      'Elektrolytter og mineraler efter sæson og sved',
      'Maven passes: små måltider, aldrig hårdt arbejde på tom mave'
    ]
  },
  {
    number: '03',
    label: 'Retningen',
    title: 'Planlægning mod mål',
    lead: 'Et løb vindes flere måneder før startboksen åbner.',
    body: [
      'UDKAST: Først vælges målløbet. Derefter regnes baglæns: hvornår skal grundformen ligge, hvornår skal der skærpes, hvornår skal der hviles, og hvilke løb undervejs er trin på vejen frem for mål i sig selv.',
      'UDKAST: Planen er styrende, men ikke hellig. Hesten har det sidste ord — og en plan, der ikke kan justeres, er ikke en plan, det er et ønske.'
    ],
    points: [
      'Målløb vælges først — resten planlægges baglæns',
      'Toppen skal ramme den rigtige dag',
      'Planen justeres efter hesten, ikke omvendt'
    ]
  },
  {
    number: '04',
    label: 'Balancen',
    title: 'Energetisk og fysisk balancering',
    lead: 'En krop i ubalance koster længder, længe før den halter.',
    body: [
      'UDKAST: Kiropraktor, massage og bodyworker kommer fast — ikke først når noget er galt. Små spændinger i ryg, bækken eller nakke ændrer skridtlængden, og et par centimeter i hvert galopspring bliver til meget over en distance.',
      'UDKAST: Ved siden af det fysiske arbejder jeg med den energetiske balance. Heste bærer på spændinger, der ikke altid kan mærkes med hænderne — og når de får lov at slippe, ændrer både bevægelse og udtryk sig.'
    ],
    points: [
      'Fast behandlingsrytme frem for brandslukning',
      'Sadeltilpasning, beslag og tandtjek som en del af helheden',
      'Energetisk balancering side om side med det fysiske'
    ]
  }
]

/* --- Videohjælpere ------------------------------------------------------ */
const isEmbed = (url: string) => /youtube\.com|youtu\.be|vimeo\.com/.test(url)

const toEmbedUrl = (url: string) => {
  const youtube = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/)
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}?autoplay=1&rel=0`
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`
  return url
}

type Lightbox =
  | { type: 'video'; item: MaestroVideo }
  | { type: 'photo'; item: MaestroPhoto }
  | null

export default function TheMaestroPage(): React.JSX.Element {
  const heroRef = useRef(null)
  const [lightbox, setLightbox] = useState<Lightbox>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  /* Baggrunden låses med overflow: hidden — ikke position: fixed — så
     scroll-positionen bevares, når lightboxen lukkes (Lenis smooth scroll). */
  const openLightbox = useCallback((next: NonNullable<Lightbox>) => {
    setLightbox(next)
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    setLightbox(null)
  }, [])

  // Ryd op, hvis komponenten unmountes med lightboxen åben
  useEffect(() => () => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox])

  return (
    <>
      <Navigation />
      <main>

      {/* Hero */}
      <section className="maestro-hero" ref={heroRef}>
        <motion.div className="maestro-hero-bg" style={{ y: heroY }}>
          <img src="/maestro-finish.jpg" alt="The Maestro vinder på opløbssiden" />
        </motion.div>
        <div className="maestro-hero-overlay" />
        <div className="maestro-hero-content">
          <motion.div
            className="maestro-hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Hall of fame</p>
            <h1>The Maestro</h1>
            <p className="maestro-hero-tagline">Min galopper — og alt det, der skulle til</p>
            <p className="maestro-hero-desc">
              Sejre bliver kørt hjem på opløbssiden, men de bliver bygget længe før: i pulstal, i foderspande,
              i behandlinger, i planer der rækker måneder frem — og i det indre arbejde hos den, der står med
              hesten. Det her er hans side.
            </p>
            <div className="maestro-hero-buttons">
              <a href="#hall-of-fame" className="cta-button">
                <span>Se løbene</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#vejen" className="cta-button cta-button-secondary maestro-cta-ghost">
                <span>Vejen mod resultater</span>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="maestro-hero-credit">Foto: Nils Rosenkjær</div>
      </section>

      {/* Intro / portræt */}
      <section className="maestro-intro">
        <div className="maestro-container">
          <div className="maestro-intro-grid">
            <motion.div
              className="maestro-intro-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">Hesten</p>
              <h2>Mere end en galophest</h2>
              <p className="maestro-lead">
                UDKAST: The Maestro er ikke bare et navn på en startliste. Han er den hest, der har lært mig mest
                om, hvad der egentlig skaber resultater.
              </p>
              <p>
                UDKAST: Her skriver du hans historie — hvor han kom fra, hvordan I fandt hinanden, hvad han er for
                en type, og hvad der gør ham speciel at have med at gøre. Både på banen og hjemme i stalden.
              </p>
              <p>
                UDKAST: Og gerne det, der ikke gik som planlagt. De perioder hvor formen udeblev, skaderne,
                tvivlen — for det er dér, det meste af læringen ligger.
              </p>
            </motion.div>

            <motion.div
              className="maestro-intro-visual"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="maestro-intro-frame">
                <img src="/maestro-winner.jpg" alt="The Maestro efter sejren" />
              </div>
            </motion.div>
          </div>

          {/* Meritter — vises kun når merits[] er udfyldt */}
          {merits.length > 0 ? (
            <div className="maestro-merits">
              {merits.map((merit, index) => (
                <div key={index} className="maestro-merit">
                  <span className="maestro-merit-value">{merit.value}</span>
                  <span className="maestro-merit-label">{merit.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="maestro-merits maestro-merits-empty">
              <p>Meritliste og løbsstatistik indsættes her.</p>
            </div>
          )}
        </div>
      </section>

      {/* Hall of fame — videoer */}
      <section className="maestro-videos" id="hall-of-fame">
        <div className="maestro-container-wide">
          <motion.div
            className="maestro-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Hall of fame</p>
            <h2>Løbene</h2>
            <p className="maestro-section-intro">
              Seks løb, seks dage hvor det hele faldt på plads. Klik på et løb for at se det.
            </p>
          </motion.div>

          <div className="maestro-video-grid">
            {videos.map((video, index) => {
              const ready = video.url !== ''
              return (
                <motion.div
                  key={index}
                  className={`maestro-video-card ${ready ? '' : 'maestro-video-card-pending'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <button
                    type="button"
                    className="maestro-video-thumb"
                    onClick={() => ready && openLightbox({ type: 'video', item: video })}
                    disabled={!ready}
                    aria-label={ready ? `Afspil video: ${video.title}` : `${video.title} — video på vej`}
                  >
                    <img src={video.poster} alt="" />
                    <span className="maestro-video-scrim" />
                    {ready ? (
                      <span className="maestro-play">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    ) : (
                      <span className="maestro-video-pending-badge">Video på vej</span>
                    )}
                  </button>
                  <div className="maestro-video-body">
                    <p className="maestro-video-meta">{video.meta}</p>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vejen mod resultater */}
      <section className="maestro-path" id="vejen">
        <div className="maestro-container-wide">
          <motion.div
            className="maestro-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Metoden</p>
            <h2>Vejen mod resultater</h2>
            <p className="maestro-section-intro">
              Fire ting, der har haft afgørende betydning. Ingen af dem virker alene — det er samspillet,
              der gør forskellen.
            </p>
          </motion.div>

          <div className="maestro-pillars">
            {pillars.map((pillar, index) => (
              <motion.article
                key={index}
                className="maestro-pillar"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="maestro-pillar-aside">
                  <span className="maestro-pillar-number">{pillar.number}</span>
                  <p className="maestro-pillar-label">{pillar.label}</p>
                </div>
                <div className="maestro-pillar-content">
                  <h3>{pillar.title}</h3>
                  <p className="maestro-pillar-lead">{pillar.lead}</p>
                  {pillar.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <ul className="maestro-pillar-points">
                    {pillar.points.map((point, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Det indre arbejde */}
      <section className="maestro-inner">
        <div className="maestro-inner-bg">
          <img src="/maestro-parade.jpg" alt="Christina trækker The Maestro ind på banen" />
        </div>
        <div className="maestro-inner-overlay" />
        <div className="maestro-container-wide">
          <motion.div
            className="maestro-inner-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Det femte element</p>
            <h2>Mit eget indre arbejde</h2>
            <p>
              UDKAST: Man kan lægge den perfekte plan, ramme hvert eneste pulstal og have alle behandlinger på
              plads — og alligevel mærke, at noget ikke flyder. Heste reagerer ikke på det, vi siger. De reagerer
              på den tilstand, vi kommer med.
            </p>
            <p>
              UDKAST: Her fortæller du om dit eget arbejde: nervøsiteten før et løb, kontrolbehovet, forventningerne
              til dig selv — og hvad der sker med hesten, når du får styr på dit eget system først.
            </p>
            <blockquote className="maestro-quote">
              UDKAST: Indsæt dit eget citat her — den ene sætning, der samler det hele.
            </blockquote>
            <p>
              Det er præcis den sammenhæng, jeg arbejder med, når jeg står med ledere og teams. Forskellen er
              bare, at hesten siger det med det samme.
            </p>
            <Link href="/lederudvikling-nordsjaelland" className="cta-button" style={{ marginTop: '2rem' }}>
              <span>Se hvordan jeg arbejder med ledere</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sejrsfotos */}
      <section className="maestro-gallery" id="galleri">
        <div className="maestro-container-wide">
          <motion.div
            className="maestro-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Galleri</p>
            <h2>Sejrsfotos</h2>
          </motion.div>

          <div className="maestro-gallery-grid">
            {gallery.map((photo, index) => (
              <motion.button
                key={index}
                type="button"
                className={`maestro-gallery-item maestro-gallery-item-${index + 1}`}
                onClick={() => openLightbox({ type: 'photo', item: photo })}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                aria-label={`Vis foto: ${photo.caption}`}
              >
                <img src={photo.src} alt={photo.alt} />
                <span className="maestro-gallery-caption">{photo.caption}</span>
              </motion.button>
            ))}
          </div>
          <p className="maestro-gallery-credit">Alle løbsfotos: © Nils Rosenkjær</p>
        </div>
      </section>

      {/* CTA */}
      <section className="maestro-cta">
        <div className="maestro-cta-bg">
          <img src="/maestro-duel.jpg" alt="The Maestro i duel mod mål" />
        </div>
        <div className="maestro-cta-overlay" />
        <div className="maestro-container-wide">
          <motion.div
            className="maestro-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Næste skridt</p>
            <h2>Det samme gælder mennesker</h2>
            <p>
              Retning, restitution, balance og et indre arbejde der hænger sammen med det ydre. Det er ikke
              forbeholdt galopheste — det er præcis dét, jeg arbejder med, når ledere og teams skal rykke sig.
            </p>
            <Link href="/kontakt" className="cta-button" style={{ marginTop: '2rem' }}>
              <span>Lad os tage en samtale</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer hideCta />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="maestro-lightbox"
          data-lenis-prevent
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.type === 'video' ? lightbox.item.title : lightbox.item.caption}
          onClick={closeLightbox}
        >
          <button type="button" className="maestro-lightbox-close" onClick={closeLightbox} aria-label="Luk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="maestro-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === 'video' ? (
              <>
                <div className="maestro-lightbox-frame">
                  {isEmbed(lightbox.item.url) ? (
                    <iframe
                      src={toEmbedUrl(lightbox.item.url)}
                      title={lightbox.item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video src={lightbox.item.url} poster={lightbox.item.poster} controls autoPlay playsInline />
                  )}
                </div>
                <div className="maestro-lightbox-caption">
                  <p className="maestro-video-meta">{lightbox.item.meta}</p>
                  <h3>{lightbox.item.title}</h3>
                </div>
              </>
            ) : (
              <>
                <img src={lightbox.item.src} alt={lightbox.item.alt} />
                <div className="maestro-lightbox-caption">
                  <h3>{lightbox.item.caption}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
