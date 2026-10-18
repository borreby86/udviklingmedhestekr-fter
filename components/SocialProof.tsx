const items = [
  {
    quote: 'Equine-assisted learning has become one of the most powerful tools used for executives and teams.',
    name: 'Forbes',
    meta: 'Nell Debevoise · 2025',
    href: 'https://www.forbes.com/sites/nelldebevoise/2025/09/23/what-horses-teach-us-about-leadership-that-no-offsite-ever-could/',
    linkLabel: 'Læs artiklen',
    external: true
  },
  {
    quote:
      '106 peer-reviewed studier i 2023 alene dokumenterede effekten af interaktion med heste, herunder signifikante forbedringer i emotionel intelligens og selvbevidsthed.',
    name: 'Evidens',
    meta: 'Forskning',
    href: '/forskning',
    linkLabel: 'Se forskningsartikler',
    external: false
  },
  {
    quote: 'I samarbejdet med hesten lærte jeg at være helt til stede. Og konsekvensen af ikke at være det.',
    name: 'Kim Høgh',
    meta: 'Bestyrelsesformand og tidl. adm. direktør · Hjerteforeningen',
    href: '/referencer',
    linkLabel: 'Se flere udtalelser',
    external: false
  }
]

function Item({ item }: { item: (typeof items)[number] }) {
  return (
    <figure className="proof-item">
      <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
      <figcaption>
        <p className="proof-name">{item.name}</p>
        <div className="proof-rule" />
        <p className="proof-meta">{item.meta}</p>
        <a
          href={item.href}
          className="proof-link"
          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {item.linkLabel} →
        </a>
      </figcaption>
    </figure>
  )
}

export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Udtalelser og evidens">
      <div className="proof-marquee-mask">
        <div className="proof-marquee-track">
          {items.map((item) => (
            <Item key={item.name} item={item} />
          ))}
          <div className="proof-marquee-copy" aria-hidden="true">
            {items.map((item) => (
              <Item key={`${item.name}-copy`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
