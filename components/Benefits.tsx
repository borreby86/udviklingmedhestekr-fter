import { CheckIcon } from './Icons'

const personalBenefits = [
  'En kropslig oplevelse af, hvornår du står stærkt i dit autentiske lederskab.',
  'Øjeblikkelig og ærlig feedback fra hesten på din kommunikation.',
  'Større bevidsthed om dit nærvær og din evne til at skabe tillid.'
]

const businessBenefits = [
  'Ledelse der hviler på autenticitet og skaber større tillid og følgeskab.',
  'Mere klare og nærværende beslutningstagere.',
  'En leder der kan regulere sit nervesystem og styrke arbejdsmiljøet.'
]

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <p className="section-label">Udbytte</p>
        <h2 className="section-title">Hvad du og din virksomhed får</h2>
        <div className="benefits-grid">
          <div className="benefits-column">
            <h3>Dit personlige udbytte</h3>
            {personalBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <CheckIcon />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
          <div className="benefits-column">
            <h3>Virksomhedens udbytte</h3>
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  <CheckIcon />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
