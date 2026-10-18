'use client'

export default function HeroVideo() {
  return (
    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-horse-eye.jpg"
      aria-hidden="true"
    >
      <source src="/hestevideo-hero-mobil.mp4" type="video/mp4" media="(max-width: 768px)" />
      <source src="/hestevideo-hero.mp4" type="video/mp4" />
    </video>
  )
}
