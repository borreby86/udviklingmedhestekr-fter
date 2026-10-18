import Image from 'next/image'
import { ArrowIcon } from './Icons'

const services = [
  {
    tag: 'For ledere',
    title: 'Lederudvikling',
    text: 'Læring der mærkes, ikke forklares. Hestens umiddelbare reaktioner spejler din adfærd og giver ærlig, kropslig feedback. Resultatet er dyb indsigt i, hvordan tillid og følgeskab skabes i praksis.',
    href: '/lederudvikling-nordsjaelland',
    image: '/autentisk-lederudvikling.jpg',
    alt: 'Leder og hest i tæt kontakt'
  },
  {
    tag: 'For teams',
    title: 'Teamudvikling',
    text: 'Hestene giver et levende spejl af jeres samarbejde og teamdynamik. Ubevidste mønstre og kommunikationsvaner bliver synlige, og det tydeliggør hvad der styrker, og hvad der spænder ben.',
    href: '/teams',
    image: '/team-pony.jpg',
    alt: 'Team samlet omkring en islænder i ridehallen'
  },
  {
    tag: '1:1 personlig udvikling',
    title: 'Samtaler & forløb',
    text: 'Individuelle forløb i Hørsholm eller online. Fokus på at forstå dine tanke- og adfærdsmønstre, regulere stress og finde ro, nærvær og retning.',
    href: '/kontakt',
    image: '/samtaler-gaatur.jpg',
    alt: 'To kvinder går og taler sammen ad en grusvej'
  },
  {
    tag: 'For unge',
    title: 'En dag med heste',
    text: 'I samarbejde med Fredensborg Kommune tilbyder jeg workshoppen "En dag med heste" for unge ml. 13–18 år. Fokus er på at skabe tillid og opdage, hvad der sker i os, når vi sænker tempoet med hestene.',
    href: 'https://www.ungfredensborg.dk/subjectclass/06de21810fbf4a5ebac8653c28e420ff',
    external: true,
    image: '/unge-dag-med-heste.jpg',
    alt: 'Unge med heste og ponyer ude på engen'
  }
]

export default function Services() {
  return (
    <section className="services-section" id="ydelser">
      <div className="services-header">
        <p className="section-label">Hesteassisteret udvikling</p>
        <h2 className="section-title">
          Hesteassisteret lederudvikling, <em>hvor lederskab begynder indefra</em>
        </h2>
        <div className="services-intro">
          <p className="services-lead">
            Lederskab er evnen til at stå i sig selv og sætte en retning, som andre har lyst til at følge.
          </p>
          <p className="services-body">
            Hestene sanser dit lederskab som en tilstand i nuet – du behøver derfor ikke have en titel som leder, for at lederudvikling med heste er relevant for dig.
            <br />
            Med hestene som sparringspartnere hjælper jeg ledere, medarbejdere og teams,<br />samt unge, der skal finde deres plads i verden.
          </p>
        </div>
      </div>
      <div className="bento-grid">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="bento-card"
            {...('external' in service && service.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <div className="bento-media">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="bento-body">
              <span className="bento-tag">{service.tag}</span>
              <h3 className="bento-title">{service.title}</h3>
              <p className="bento-text">{service.text}</p>
              <div className="bento-arrow">
                <ArrowIcon />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
