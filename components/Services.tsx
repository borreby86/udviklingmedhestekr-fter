import { ArrowIcon } from './Icons'

const services = [
  {
    tag: 'For ledere',
    title: 'Lederudvikling',
    text: 'Læring der mærkes, ikke forklares. Hestens umiddelbare reaktioner spejler din adfærd og giver ærlig, kropslig feedback. Resultatet er dyb indsigt i, hvordan tillid og følgeskab skabes i praksis.'
  },
  {
    tag: 'For teams',
    title: 'Teamudvikling',
    text: 'Hestene giver et levende spejl af jeres samarbejde og teamdynamik. Ubevidste mønstre og kommunikationsvaner bliver synlige, og det tydeliggør hvad der styrker, og hvad der spænder ben.'
  },
  {
    tag: '1:1',
    title: 'Samtaler & coaching',
    text: 'Individuelle forløb i Hørsholm eller online. Fokus på at forstå dine tanke- og adfærdsmønstre, regulere stress og finde ro, nærvær og retning.'
  }
]

export default function Services() {
  return (
    <section className="services-section" id="ydelser">
      <div className="services-header">
        <p className="section-label">Ydelser</p>
        <h2 className="section-title">Hesteassisteret udvikling for ledere og teams</h2>
      </div>
      <div className="bento-grid">
        {services.map((service, index) => (
          <a key={index} href="#kontakt" className="bento-card">
            <span className="bento-tag">{service.tag}</span>
            <h3 className="bento-title">{service.title}</h3>
            <p className="bento-text">{service.text}</p>
            <div className="bento-arrow">
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
