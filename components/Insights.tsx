import { EyeIcon, HeartIcon, SunIcon, ClockIcon } from './Icons'

const insights = [
  {
    icon: EyeIcon,
    title: 'Blinde vinkler',
    text: 'Adfærd og mønstre du ikke ser i dig selv, men som påvirker alle omkring dig.'
  },
  {
    icon: HeartIcon,
    title: 'Emotionel intelligens',
    text: 'At mærke hvad der sker i dig selv, før du reagerer på andre.'
  },
  {
    icon: SunIcon,
    title: 'Autenticitet',
    text: 'Når dit indre og ydre matcher – og hvad der sker, når det ikke gør.'
  },
  {
    icon: ClockIcon,
    title: 'Nærvær',
    text: 'At være 100% til stede – og mærke konsekvensen, når du ikke er.'
  }
]

export default function Insights() {
  return (
    <section className="insights-section" id="indsigter">
      <div className="insights-container">
        <h2 className="insights-title">
          Hvad afslører <em>hesten</em> om dit lederskab?
        </h2>
        <div className="insights-content-grid">
          <div className="insights-text">
            <p className="insights-intro">
              Hestene mærker den del af os, vi ikke altid selv er bevidste om.<br />
              De reagerer ikke på det, vi siger, men på det, vi udstråler. Derfor bliver mødet med en hest
              en direkte vej til at forstå, hvordan vi påvirker andre gennem vores energi, vores grænser og vores nærvær.
            </p>
            <p className="insights-intro">
              Gennem strukturede øvelser får du alene eller med dit team et unikt spejl, der med sin
              instante feedback bidrager med indsigter, der gennem refleksion og dialog omsættes til hverdagsbrug.
            </p>
            <p className="insights-intro insights-highlight">
              Det handler altså <strong>ikke</strong> om at være hesteinteresseret.
              Det handler om hvad samspillet med hesten sætter i gang hos dig.
            </p>
          </div>
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className="insight-item">
                <div className="insight-icon">
                  <insight.icon />
                </div>
                <div className="insight-content">
                  <h3>{insight.title}</h3>
                  <p>{insight.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
