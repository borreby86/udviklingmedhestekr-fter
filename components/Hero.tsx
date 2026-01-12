import Image from 'next/image'
import { ArrowIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/hero-eye.jpg"
          alt="Hestens øje"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-content">
        <p className="hero-tagline">Leder- og teamudvikling i Nordsjælland</p>
        <h1>Udvikling med <em>hestekræfter</em></h1>
        <p className="hero-intro">
          Hestene spejler din måde at lede, samarbejde og være til stede på. 
          Et unikt rum til instant feedback og øget selvindsigt. Uden ridning, uden hesteerfaring.
        </p>
        <a href="/kontakt" className="cta-button">
          <span>Kontakt og hør mere</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
