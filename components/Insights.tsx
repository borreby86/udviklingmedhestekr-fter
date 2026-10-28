const steps = [
  {
    numeral: 'I',
    short: 'Erfaring',
    inner: 'Du handler, hesten svarer',
    title: 'Erfaring med hesten',
    text: 'Erfaringsbaseret lederskabstræning med hesten. Gennem øvelser sammen med hesten træner du dit lederskab i praksis, og hesten reagerer med det samme på, hvor stærkt du står i det, du gør.'
  },
  {
    numeral: 'II',
    short: 'Refleksion',
    inner: 'Mønstrene bliver synlige',
    title: 'Refleksion over mønstre',
    text: 'Sammen ser vi på, hvad der skete: Hvornår fulgte hesten med, hvornår blev den stående, og hvad var det, der var anderledes i dig? Her bliver dine mønstre synlige, også dem, du ikke selv havde lagt mærke til.'
  },
  {
    numeral: 'III',
    short: 'Hverdag',
    inner: 'Hvor kender du det fra?',
    title: 'Parallel til hverdagen',
    text: 'Så kobler vi oplevelsen til din hverdag. Hvor kender du det fra, i mødet, i den svære samtale eller i dit team? Det er her, det, der skete ved hesten, begynder at give mening i dit eget liv.'
  },
  {
    numeral: 'IV',
    short: 'Ledelse',
    inner: 'Du ved, hvad du vil gøre',
    title: 'Autentisk ledelse i praksis',
    text: 'Til sidst ser vi på, hvordan erfaringen kan omsættes til mere autentisk ledelse, så du ved, hvad du konkret vil gøre anderledes, og kan mærke, hvordan det føles, når det lykkes.'
  }
]

// Ring: centrum (160,160), radius 128. Noderne ligger oppe, til hojre, nede og til venstre.
const C = 160
const R = 128
const NODE = 24
const GAP_DEG = Math.asin((NODE + 7) / (2 * R)) * 2 * (180 / Math.PI)
const nodeAngles = [-90, 0, 90, 180]

const pt = (deg: number) => {
  const a = (deg * Math.PI) / 180
  return { x: C + R * Math.cos(a), y: C + R * Math.sin(a) }
}

const arcs = nodeAngles.map((deg) => {
  const from = pt(deg + GAP_DEG)
  const to = pt(deg + 90 - GAP_DEG)
  return `M ${from.x.toFixed(2)} ${from.y.toFixed(2)} A ${R} ${R} 0 0 1 ${to.x.toFixed(2)} ${to.y.toFixed(2)}`
})

export default function Insights() {
  return (
    <section className="insights-section lm-section" id="indsigter">
      <div className="insights-container">
        <div className="lm-top">
          <div className="lm-copy">
            <p className="section-label">Sådan arbejder jeg</p>
            <h2 className="insights-title lm-title">
              Fra erfaring til <em>autentisk ledelse</em>
            </h2>
            <p className="lm-lead">
              Heste har et sensitivt nervesystem, der reagerer på energi, nærvær og kropssprog.
              De giver en direkte feedback-loop og ærlig spejling af din ledelsesenergi.
            </p>
            <p className="lm-body">
              Hos mig arbejder du med dit lederskab helt kropsligt. Undervejs får du paralleller til din hverdag,
              som giver afsæt til refleksion, og det er i samspillet mellem oplevelsen med hesten og refleksionen
              bagefter, at erfaringen bliver til noget, du kan tage med dig og bruge.
            </p>
          </div>

          <div className="lm-ring" role="img" aria-label="Feedback-loop i fire trin: erfaring, refleksion, hverdag og ledelse">
            <span className="lm-ring-label lm-ring-top">{steps[0].title}</span>
            <span className="lm-ring-label lm-ring-left">{steps[3].title}</span>
            <div className="lm-ring-stage">
            <svg viewBox="0 0 320 320" className="lm-ring-svg" aria-hidden="true">
              <defs>
                <marker id="lm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 1.5 1.5 L 8 5 L 1.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              <circle cx={C} cy={C} r={R + 30} className="lm-halo" />
              <circle cx={C} cy={C} r={R - 30} className="lm-disc" />
              <g className="lm-orbit">
                <circle cx={C} cy={C - R} r="5" className="lm-dot" />
              </g>
              {arcs.map((d, i) => (
                <path key={i} d={d} className="lm-arc" markerEnd="url(#lm-arrow)" />
              ))}
              {nodeAngles.map((deg, i) => {
                const p = pt(deg)
                return (
                  <g key={deg}>
                    <circle cx={p.x} cy={p.y} r={NODE} className="lm-node" />
                    <text x={p.x} y={p.y} className="lm-node-text" textAnchor="middle" dominantBaseline="central">
                      {steps[i].numeral}
                    </text>
                  </g>
                )
              })}
            </svg>
            <div className="lm-center" aria-hidden="true">
              {steps.map((step, i) => (
                <div key={step.title} className="lm-center-item" style={{ animationDelay: `${i * 4.6}s` }}>
                  <span className="lm-center-numeral">{step.numeral}</span>
                  <h3>{step.inner}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
            </div>
            <span className="lm-ring-label lm-ring-right">{steps[1].title}</span>
            <span className="lm-ring-label lm-ring-bottom">{steps[2].title}</span>
          </div>
        </div>

        <ol className="lm-steps" aria-label="De fire trin">
          {steps.map((step) => (
            <li key={step.title} className="lm-step">
              <span className="lm-step-numeral">{step.numeral}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="lm-closing">
          Det handler <strong>ikke</strong> om at være hesteinteresseret.
          Det handler om, hvad samspillet med hesten sætter i gang hos dig.
        </p>
      </div>
    </section>
  )
}
