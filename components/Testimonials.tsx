const testimonials = [
  {
    quote: '"I samarbejdet med hesten lærte jeg at være HELT tilstede. Og konsekvensen af ikke at være det. Hestens adfærd hjalp mig til at fokusere på og forstå min adfærd. På godt og ondt. Og det var det hele værd."',
    initials: 'KH',
    name: 'Kim Høgh',
    role: 'Tidl. CEO, Hjerteforeningen'
  },
  {
    quote: '"Det befriende ved denne metode er, at man kan øve sig på at være 100% autentisk uden at der går rollespil i den. At arbejde med min egen kontakt via en hest var en fantastisk mulighed for at reflektere over min kommunikation."',
    initials: 'ME',
    name: 'Mads Elk',
    role: 'CEO, Mind Balance System ApS'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="resultater">
      <div className="testimonials-header">
        <p className="section-label">Resultater</p>
        <h2 className="section-title">Oplevelser fra ledere</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.initials}</div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
