import { ArrowIcon } from './Icons'

const testimonials = [
  {
    quote: '"I samarbejdet med hesten lærte jeg at være HELT tilstede. Og konsekvensen af ikke at være det. Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd."',
    image: '/kim.jpeg',
    name: 'Kim Høgh',
    role: 'Tidl. CEO, Hjerteforeningen'
  },
  {
    quote: '"Det befriende ved denne metode er, at man kan øve sig på at være 100% autentisk uden at der går rollespil i den. At arbejde med min egen kontakt via en hest var en fantastisk mulighed for at reflektere over min kommunikation."',
    image: '/Mads.jpeg',
    name: 'Mads Elk',
    role: 'CEO, Mind Balance System ApS'
  },
  {
    quote: '"Noget af min ubevidste adfærd blev bevidst og det passer perfekt ind i mit arbejde med mig selv. Tak for en fantastisk session som jeg vil anbefale ALLE at investere i, hvis de vil øge indsigten i sig selv."',
    image: '/annemarie.jpg',
    name: 'Anne Marie Valentin',
    role: 'Indehaver, Icebreaker Academy'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="resultater">
      <div className="testimonials-header">
        <p className="section-label">Referencer</p>
        <h2 className="section-title">Hvad har tidligere deltagere oplevet</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-cta">
        <a href="/referencer" className="cta-button cta-button-outline">
          <span>Se flere referencer</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
