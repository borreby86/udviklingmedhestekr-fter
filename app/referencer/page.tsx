'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const testimonials = [
  {
    quote: "Når jeg holder op med at gøre mig umage for at være dygtig. Så opstår de magiske øjeblikke, hvor tiden står stille.",
    fullText: `Hvordan hænger personlig gennemslagskraft sammen med "bare at være"? Hvornår er jeg mig, og hvornår spiller jeg en rolle så godt, at jeg tror, den er mig? Hvad vil det sige at være autentisk? Det var nogle af de spørgsmål, jeg fik besvaret i mødet med hesten Calle.

Det forunderlige begreb "Forandringens paradoks", udspillede sig i mit møde med Calle. Transformationen i os selv sker, når vi accepterer det, vi allerede er. Når vi nøgternt erkender den indre virkelighed, præcis SOM DEN ER, og møder den med accept. Jeg har momentvis oplevet noget lignende som skuespiller, når rollen tager over, og jeg på mystisk vis bliver karakteren i stedet for at spille den. Når jeg holder op med at gøre mig umage for at være dygtig. Så opstår de magiske øjeblikke, hvor tiden står stille.

Det skete også i mødet med Calle, og har givet mig stof til eftertanke, som jeg allerede nu har brugt privat og professionelt.

Oplevelsen satte efterfølgende gang i en refleksion om, hvornår vi er helt ærlige overfor os selv, om vi opdager det og om vi altid handler på det eller skal handle på det. Hvilke muligheder har du? Hvad kan du? Hvad vil du? Hvad tør du? Og hvad gør du?`,
    author: "Philip Antonakakis",
    role: "Erhvervsskuespiller & kommunikationstræner",
    initials: "PA",
    image: "/Philip.jpg"
  },
  {
    quote: "Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd.",
    fullText: `Hvor får man trygheden fra til at gå alene ind i en fold til en ukendt hest? Hvis man nu er lidt bange? Hvorfor overhovedet gøre det?

Christina viste mig tillid, som skabte min ro, og mod til at samarbejde med hesten. For det var i det samarbejde jeg lærte at være HELT tilstede. Og konsekvensen af ikke at være det. Hvordan blev jeg tydelig i min kommunikation, hvem bar skylden for svigt i samarbejdet, hvor kunne jeg finde løsninger, og hvordan arbejde med dem?

De afgørende følelser og spørgsmål arbejdede jeg med. OG fandt svaret på mit indledende spørgsmål: Hvorfor overhovedet gøre det? Fordi hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd.`,
    author: "Kim Høgh",
    role: "Bestyrelsesformand & tidl. CEO, Hjerteforeningen",
    initials: "KH",
    image: "/kim.jpeg"
  },
  {
    quote: "Noget af min ubevidste adfærd blev bevidst og det passer perfekt ind i mit arbejde med mig selv.",
    fullText: `At mærke sig selv og sine grænser ift. det store og spejlende dyr, som en hest er, var en berigelse.

Jeg opdagede hvordan jeg sætter grænser og hvad der er på spil for mig. Jeg opdagede mit mod OG med din guidance, uddybende spørgsmål og tilstedeværelse blev det meget tydeligt for mig, hvor subtilt min krop og følelser reagerer. Ofte uden jeg er klar over det.

Noget af min ubevidste adfærd blev bevidst og det passer perfekt ind i mit arbejde med mig selv. KÆMPE tak for den indsigt.

Tak for en fantastisk session som jeg vil anbefale ALLE at investere i, hvis de vil øge indsigten i sig selv og det personlige lederskab.`,
    author: "Anne Marie Valentin",
    role: "Indehaver, Icebreaker Academy & Intojob",
    initials: "AV",
    image: "/annemarie.jpg"
  },
  {
    quote: "Det befriende ved denne metode er, at man kan øve sig på at være 100% autentisk uden at der går 'rollespil' i den.",
    fullText: `At arbejde med min egen kontakt til både mig selv og mine omgivelser via en hest var en fantastisk mulighed for at reflektere over min egen kommunikation; ikke mindst den nonverbale/mit kropssprog.

Det befriende ved denne metode er, at man kan øve sig på at være 100% autentisk uden at der går "rollespil" i den. Det betød også, at det var nemmere for mig selv at kommunikere med hesten uden at tolke på "den andens" forventninger og derved reelt mærke, hvordan det er at være helt tilstede i mig selv. En følelse som jeg har kunne trække frem mange gange efter.

Det var en både sjov og lærerig oplevelse og jeg vil klart anbefale denne workshop til mine kunder i de situationer, hvor det passer ind i kundens forløb og læringsmål.`,
    author: "Mads Elk",
    role: "CEO, Mind Balance System ApS",
    initials: "ME",
    image: "/Mads.jpeg"
  }
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.article
      className={`reference-card-large ${index % 2 === 1 ? 'reverse' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="reference-image">
        {testimonial.image ? (
          <img src={testimonial.image} alt={testimonial.author} />
        ) : (
          <div className="reference-image-placeholder">{testimonial.initials}</div>
        )}
      </div>
      <div className="reference-card-content">
        <div className="reference-text-content">
          <p className="reference-preview">"{testimonial.quote}"</p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="full"
                className="reference-full-text"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {testimonial.fullText.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className="reference-read-more"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Læs mindre' : 'Læs mere'}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>

        <div className="reference-author-large">
          <div className="reference-info-large">
            <h4>{testimonial.author}</h4>
            <p>{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function ReferencerPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="referencer-hero" ref={heroRef}>
        <motion.div className="referencer-hero-bg" style={{ y: heroY }}>
          <img src="/autentisk-lederudvikling.jpg" alt="Referencer" />
        </motion.div>
        <div className="referencer-hero-content">
          <p className="section-label">Referencer</p>
          <h1>Hvad siger <em>deltagerne</em>?</h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="referencer-testimonials">
        <div className="referencer-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="referencer-cta">
        <div className="referencer-container">
          <p className="section-label">Næste skridt</p>
          <h2>Klar til at opleve det selv?</h2>
          <p>Book en uforpligtende samtale og hør, hvordan hesteassisteret udvikling kan gavne dig eller dit team.</p>
          <a href="/#kontakt" className="cta-button">
            <span>Kontakt mig</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
