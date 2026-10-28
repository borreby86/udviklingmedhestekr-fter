import SchemaMarkup from './SchemaMarkup'

const faqs = [
  {
    q: 'Skal jeg kunne ride?',
    a: 'Nej, alt foregår fra jorden, ved siden af hesten, og mange af de ledere, der får mest ud af det, har aldrig rørt en hest før. Det, der kræves, er nysgerrighed på, hvordan du virker på andre, og lyst til at mærke det i stedet for kun at tale om det.'
  },
  {
    q: 'Hvad hvis jeg er bange for heste?',
    a: 'Så er du ikke alene, og det er ingen hindring. Mine heste er rolige og vant til mennesker, og du bestemmer selv afstanden. Ofte bliver netop frygten et af dagens mest brugbare øjeblikke, fordi den viser, hvad der sker i dig, når du står i noget, der er svært.'
  },
  {
    q: 'Hvordan adskiller det sig fra coaching?',
    a: 'I coaching taler vi om noget, der skal ske senere, og du går hjem med en plan. Med hesten sker det her og nu, og du får svar på få sekunder, så samtalen bagefter tager udgangspunkt i noget, du har mærket i kroppen, og ikke i noget, du husker eller forestiller dig.'
  },
  {
    q: 'Er det terapi?',
    a: 'Nej, vi arbejder ikke med din fortid eller din barndom, men med det, der sker i mødet med hesten her og nu. Min uddannelse som psykoterapeut betyder, at jeg kan gå i dybden og holde et trygt rum, hvis der rører sig noget undervejs.'
  },
  {
    q: 'Hvor foregår det?',
    a: 'Ved hestene i Hørsholm i Nordsjælland, cirka 25 minutter fra København. Online-sessionerne i de personlige forløb foregår på video, og alle forløb starter med en gratis afklaringssamtale på telefon eller video.'
  },
  {
    q: 'Hvem tilbyder lederudvikling med heste i Nordsjælland?',
    a: 'Christina Borreby, cand.negot., certificeret ID-psykoterapeut og stresscoach, tilbyder lederudvikling, teamudvikling og personlige forløb med heste ved Hørsholm i Nordsjælland, cirka 25 minutter fra København. Hun har arbejdet med heste i over 30 år og holder også åbne workshops i Autentisk Indflydelse sammen med Pernille Gram Bentsen.'
  },
  {
    q: 'Hvad er forskellen på lederudvikling, teamudvikling og de personlige forløb?',
    a: 'Lederudvikling er en workshop for en ledergruppe eller en gruppe ledere på op til 6, hvor I arbejder med det, I signalerer som ledere. Teamudvikling er en teamdag for op til 8, hvor I ser jeres samarbejde udefra. De personlige forløb er 1:1 over 12 uger: ét med fokus på lederskab og ét med fokus på stress.'
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
}

export default function FAQ() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <SchemaMarkup data={faqSchema} />
      <div className="faq-container">
        <p className="section-label">Ofte stillede spørgsmål</p>
        <h2 id="faq-title" className="section-title">
          Det spørger ledere og teams <em>om, før de starter</em>
        </h2>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <span>{f.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
