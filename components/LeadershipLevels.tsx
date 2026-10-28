import { ArrowIcon } from './Icons'

const levels = [
  {
    number: '1',
    title: 'At lede dig selv',
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
    forWhom: 'Teams og kolleger, der skal samarbejde og skabe resultater sammen, også når ingen har titlen.',
    text: 'I et team skal man både kunne tage føringen og følge med, og under pres falder de fleste tilbage på et mønster, hvor nogle skruer op og andre lukker ned. Når I løser en opgave sammen med hesten, ser I med det samme, hvordan I faktisk samarbejder: Hvem tager initiativet, hvem venter, og hvad sker der, når I ikke er enige om retningen?',
    horse: 'Hesten reagerer på den samlede stemning i gruppen og følger først med, når I er samlede om retningen.',
    role: 'Jeg stopper op i de øjeblikke, hvor noget sker, og hjælper jer med at sætte ord på det, så I kan tale om jeres mønstre, uden at det bliver personligt, og tage konkrete aftaler med hjem.',
    links: [{ label: 'Teamudvikling med heste', href: '/teams' }]
  },
  {
    number: '3',
    title: 'At lede andre',
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

export default function LeadershipLevels() {
  return (
    <section className="levels-section" id="tre-niveauer" aria-labelledby="levels-title">
      <div className="levels-container">
        <div className="levels-header">
          <p className="section-label">Lederskab på tre niveauer</p>
          <h2 id="levels-title" className="section-title">
            Hos mig træner du lederskab <em>på 3 niveauer</em>
          </h2>
          <p className="levels-intro">
            Lederskab er evnen til at stå i sig selv og sætte en retning, som andre har lyst til at følge.
            Det begynder med at kunne lede sig selv, og derfor gælder det alle, uanset titel og alder: den unge,
            der skal finde sin plads, medarbejderen i et team og direktøren for en hel organisation.
          </p>
        </div>

        <ol className="levels-steps">
          {levels.map((level) => (
            <li key={level.number} className={`level-card level-card-${level.number}`}>
              <span className="level-number" aria-hidden="true">{level.number}</span>
              <span className="level-kicker">Niveau {level.number}</span>
              <h3 className="level-title">{level.title}</h3>
              <p className="level-for">{level.forWhom}</p>
              <p className="level-text">{level.text}</p>
              <p className="level-note"><strong>Hesten som sparringspartner</strong>{level.horse}</p>
              <p className="level-note"><strong>Min rolle</strong>{level.role}</p>
              <div className="level-links">
                {level.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    <span>{link.label}</span>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <p className="levels-closing">
          Uanset niveau gælder det samme: Hesten giver dig respons i øjeblikket, og jeg hjælper dig med at forstå den
          og omsætte den til noget, du kan bruge. <strong>Titlen er forskellig, men tilstanden er den samme.</strong>
        </p>
      </div>
    </section>
  )
}
