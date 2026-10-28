import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Insights from '@/components/Insights'
import { ArrowIcon } from '@/components/Icons'

const steps = [
  {
    number: '1',
    title: 'Mærk',
    text: 'Først lærer du at lægge mærke til, hvad der sker i dig lige nu: hvad du tænker, hvad du føler, og hvad du mærker i kroppen. Det kalder jeg kropskompasset, og mange opdager, at de faktisk mangler et sprog for det, kroppen siger.'
  },
  {
    number: '2',
    title: 'Genkend',
    text: 'Så ser vi på dit mønster under pres. Skruer du op, bliver mere insisterende og skubber på, eller lukker du ned og venter på, hvad de andre gør? Hesten viser det med det samme.'
  },
  {
    number: '3',
    title: 'Find roen',
    text: 'Bag reaktionen ligger et lag, hvor du kan se løsninger og muligheder i stedet for bare at gøre det, du plejer, og bag det igen en kerne af ro. Det er dén, vi arbejder hen imod.'
  },
  {
    number: '4',
    title: 'Vælg',
    text: 'Herfra kan du sætte en retning, som andre har lyst til at følge, og det er netop den tilstand, hesten følger mest villigt.'
  }
]

export default function MetodenPage() {
  return (
    <>
      <Navigation />
      <main className="home-typo">
        <section className="method-hero">
          <div className="method-hero-inner">
            <p className="section-label">Metoden</p>
            <h1>
              Sådan virker <em>lederudvikling med heste</em>
            </h1>
            <p className="method-hero-lead">
              Under pres reagerer de fleste af os på autopilot, og det er det, hesten reagerer på.
              Derfor arbejder jeg i fire trin, hvor hesten viser dig hvert skridt undervejs.
            </p>
          </div>
        </section>

        <Insights />

        <section className="method-steps-section" aria-labelledby="method-steps-title">
          <div className="method-steps-inner">
            <div className="method-steps-header">
              <p className="section-label">Fra reaktion til retning</p>
              <h2 id="method-steps-title" className="section-title">
                Fire trin, hvor <em>hesten viser vejen</em>
              </h2>
            </div>
            <ol className="method-steps">
              {steps.map((step) => (
                <li key={step.number} className="method-step">
                  <span className="method-step-number" aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="method-vulnerable" aria-labelledby="method-vulnerable-title">
          <div className="method-vulnerable-inner">
            <div className="method-rule" />
            <p className="section-label">Sårbarhed</p>
            <h2 id="method-vulnerable-title" className="section-title">
              Er du lidt bange for heste? <em>Godt.</em>
            </h2>
            <p>
              Mange af dem, der kommer til mig, er lidt bange for heste, når vi starter, og det ser jeg faktisk som en
              gevinst. For hvor tit er det lige, vi siger højt i vores professionelle virke, at der er noget, vi er
              bange for? Især som ledere forventes vi at være robuste og have styr på det hele.
            </p>
            <p>
              Ved hestene er det helt legitimt at være bange. Men hvis du er bange og ikke tager ejerskab over det, vil det
              vise sig i samspillet med hesten, og når du i stedet tør stå i det, sker der noget i relationen. Hesten
              slapper af, og det samme sker med mennesker, for det at stå i sin sårbarhed gør relationen stærkere, ikke
              svagere.
            </p>
            <a href="/kontakt" className="cta-button">
              <span>Book en uforpligtende samtale</span>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <Footer hideCta />
    </>
  )
}
