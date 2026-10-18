import Image from 'next/image'
import { ArrowIcon } from './Icons'
import HeroVideo from './HeroVideo'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/hero-horse-eye.jpg"
          alt="Hestens øje"
          fill
          priority
          sizes="100vw"
          quality={80}
        />
        <HeroVideo />
      </div>
      <div className="hero-content">
        <p className="hero-tagline">Leder- og teamudvikling i Nordsjælland</p>
        <h1>Udvikling med<br /><em>hestekræfter</em></h1>
        <p className="hero-intro">
          Hestene spejler din måde at lede, samarbejde og være til stede på. Kombineret med coaching og refleksion
          undervejs, bliver hestens respons til indsigt, du kan mærke i kroppen og tage med dig: hvordan det føles,
          når du brænder igennem – og når du ikke gør.
        </p>
        <div className="hero-buttons">
          <a href="#ydelser" className="cta-button">
            <span>Se hvad jeg tilbyder</span>
            <ArrowIcon />
          </a>
          <a href="/om-mig" className="cta-button-secondary">
            <span>Om mig</span>
          </a>
        </div>
      </div>
    </section>
  )
}
