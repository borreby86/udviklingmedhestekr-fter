'use client'

import { useState } from 'react'
import { ArrowIcon } from './Icons'

const levels = [
  {
    number: '1',
    title: 'At lede dig selv',
    teaser: 'Alt lederskab starter indefra: at mærke, hvad der sker i dig, og vælge, hvordan du handler.',
    forWhom: 'Unge, medarbejdere og ledere. Alle, der vil stå stærkere i sig selv under pres.',
    text: 'Alt lederskab starter indefra, med evnen til at mærke, hvad der sker i dig, og vælge, hvordan du vil handle, i stedet for at reagere på autopilot. Når du står ved siden af hesten, mærker den med det samme, om du er rolig og samlet, eller om du er urolig og et helt andet sted i tankerne, og den viser det ved at slappe af og komme tættere på eller ved at holde afstand.',
    horse: 'Hesten giver dig respons på din tilstand, før du selv har nået at sætte ord på den.',
    role: 'Jeg hjælper dig med at sætte ord på det, du mærker, gennem kropskompasset: hvad tænker du, hvad føler du, og hvad mærker du i kroppen lige nu? Og jeg holder rummet, også hvis noget bliver svært.',
    links: [
      { label: 'Recalibrate', href: '/recalibrate' },
      { label: 'Personligt lederforløb', href: '/kontakt' },
      { label: 'Unge og stress', href: '/kommuner-unge' }
    ]
  },
  {
    number: '2',
    title: 'At lede sammen med andre',
    teaser: 'Under pres falder de fleste tilbage på et mønster. Sammen med hesten ser I det med det samme.',
    forWhom: 'Teams og kolleger, der skal samarbejde og skabe resultater sammen, også når ingen har titlen.',
    text: 'I et team skal man både kunne tage føringen og følge med, og under pres falder de fleste tilbage på et mønster, hvor nogle skruer op og andre lukker ned. Når I løser en opgave sammen med hesten, ser I med det samme, hvordan I faktisk samarbejder: Hvem tager initiativet, hvem venter, og hvad sker der, når I ikke er enige om retningen?',
    horse: 'Hesten reagerer på den samlede stemning i gruppen og følger først med, når I er samlede om retningen.',
    role: 'Jeg stopper op i de øjeblikke, hvor noget sker, og hjælper jer med at sætte ord på det, så I kan tale om jeres mønstre, uden at det bliver personligt, og tage konkrete aftaler med hjem.',
    links: [{ label: 'Teamudvikling med heste', href: '/teams' }]
  },
  {
    number: '3',
    title: 'At lede andre',
    teaser: 'Hesten er ligeglad med din titel. Den følger kun, hvis det, du siger, og det, du udstråler, hænger sammen.',
    forWhom: 'Ledere og ledergrupper med ansvar for andre mennesker.',
    text: 'Som leder skal du sætte en retning, som andre har lyst til at følge, og det kræver, at det, du siger, og det, du udstråler, hænger sammen. Hesten er ligeglad med din titel og følger dig kun, hvis den mærker, at du helhjertet står bag den retning, du sætter, præcis som dine medarbejdere, selvom de sjældent siger det højt.',
    horse: 'Hesten viser dig, om du skaber følgeskab gennem tillid, eller om du skubber, holder igen eller er i tvivl.',
    role: 'Jeg hjælper dig med at koble det, der sker ved hesten, til din hverdag som leder: i mødet, i den svære samtale og i de beslutninger, hvor presset er størst.',
    links: [
      { label: 'Lederudvikling med heste', href: '/lederudvikling-nordsjaelland' },
      { label: 'Blinde vinkler i ledelse', href: '/lederworkshop-i-blinde-vinkler' }
    ]
  }
]

export default function LeadershipLevelsExplore() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="lvx-section" id="tre-niveauer" aria-labelledby="lvx-title">
      <div className="lvx-container">
        <div className="lvx-header">
          <p className="section-label">Tre niveauer</p>
          <h2 id="lvx-title" className="section-title">
            Hvor i dit lederskab vil du <em>arbejde</em>?
          </h2>
          <p className="lvx-intro">
            Uanset om du vil lede dig selv, dit team eller andre, kan du starte det sted, der passer til dig.
          </p>
        </div>

        <ol className={`lvx-list ${active ? 'has-active' : ''}`}>
          {levels.map((level) => {
            const open = active === level.number
            const panelId = `lvx-panel-${level.number}`
            return (
              <li key={level.number} className={`lvx-card ${open ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="lvx-trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setActive(open ? null : level.number)}
                >
                  <span className="lvx-number" aria-hidden="true">{level.number}</span>
                  <span className="lvx-kicker">Niveau {level.number}</span>
                  <span className="lvx-title">{level.title}</span>
                  <span className="lvx-teaser">{level.teaser}</span>
                  <span className="lvx-more">
                    <span className="lvx-more-label">{open ? 'Luk' : 'Læs mere'}</span>
                    <span className="lvx-plus" aria-hidden="true" />
                  </span>
                </button>

                <div id={panelId} className="lvx-panel" role="region" aria-label={level.title}>
                  <div className="lvx-panel-clip">
                    <div className="lvx-panel-inner">
                      <p className="lvx-for">{level.forWhom}</p>
                      <p className="lvx-text">{level.text}</p>
                      <p className="lvx-note"><strong>Hesten som sparringspartner</strong>{level.horse}</p>
                      <p className="lvx-note"><strong>Min rolle</strong>{level.role}</p>
                      <div className="lvx-links">
                        {level.links.map((link) => (
                          <a key={link.label} href={link.href} tabIndex={open ? 0 : -1}>
                            <span>{link.label}</span>
                            <ArrowIcon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <p className="lvx-closing">
          Uanset niveau gælder det samme: Hesten giver dig respons i øjeblikket, og jeg hjælper dig med at forstå den
          og omsætte den til noget, du kan bruge. <strong>Titlen er forskellig, men tilstanden er den samme.</strong>
        </p>
      </div>
    </section>
  )
}
