import { ArrowIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/hero-eye.jpg" alt="Hestens øje" />
      </div>
      <div className="hero-content">
        <p className="hero-tagline">Lederudvikling i Nordsjælland</p>
        <h1>Udvikling med <em>hestekræfter</em></h1>
        <p className="hero-intro">
          Hestene spejler din måde at lede, samarbejde og være til stede på. 
          Et unikt rum til instant feedback og øget selvindsigt – uden ridning, uden hesteerfaring.
        </p>
        <a href="#kontakt" className="cta-button">
          <span>Book en samtale</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
