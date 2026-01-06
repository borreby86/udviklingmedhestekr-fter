'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

const featuredStudies = [
  {
    id: 1,
    authors: "Pendry, P., Carr, A.M., Smith, A.N., & Roeter, S.M.",
    year: 2014,
    title: "Improving adolescent social competence and behavior: A randomized trial of an 11-week equine facilitated learning prevention program",
    journal: "Journal of Primary Prevention",
    volume: "35(4), 281-293",
    highlight: "Randomiseret kontrolleret studie med 131 deltagere. Signifikante forbedringer i social kompetence.",
    category: "emotionel-intelligens",
    link: "https://pubmed.ncbi.nlm.nih.gov/24898318/"
  },
  {
    id: 2,
    authors: "Dyk, P., Cheung, R., Pohl, L., Lindgreen, J., & Noriega, C.",
    year: 2012,
    title: "The Effectiveness of Equine Guided Leadership Education to Develop Emotional Intelligence in Expert Nurses",
    journal: "University of Kentucky Center for Leadership Development",
    volume: "Pilot Research Study",
    highlight: "Forbedringer i alle fire EQ-områder: selvbevidsthed, selvledelse, social bevidsthed og relationsledelse.",
    category: "lederskab",
    link: "https://www.researchgate.net/publication/282670770"
  },
  {
    id: 3,
    authors: "Stock, K.L. & Kolb, D.A.",
    year: 2016,
    title: "Equine-Assisted Experiential Learning",
    journal: "OD Practitioner",
    volume: "48(2), 43-47",
    highlight: "Dokumenterer forbedret selvbevidsthed og varige adfærdsændringer hos ledere efter hesteassisteret læring.",
    category: "lederskab",
    link: "https://www.researchgate.net/publication/327762710"
  },
  {
    id: 4,
    authors: "Smith, A.V., Proops, L., Grounds, K., Wathan, J., & McComb, K.",
    year: 2016,
    title: "Functionally relevant responses to human facial expressions of emotion in the domestic horse",
    journal: "Biology Letters",
    volume: "12(2)",
    highlight: "Banebrydende forskning der viser, at heste kan aflæse og reagere på menneskelige følelsesudtryk.",
    category: "emotionel-intelligens",
    link: "https://pubmed.ncbi.nlm.nih.gov/26864784/"
  },
  {
    id: 5,
    authors: "Sivagurunathan, M. et al.",
    year: 2025,
    title: "Equine-Assisted Experiential Learning: A Literature Review of Embodied Leadership Development",
    journal: "Administrative Sciences (MDPI)",
    volume: "15(8), 298",
    highlight: "Omfattende review der konkluderer, at EAL forbedrer selvbevidsthed, emotionel intelligens og tillidsopbygning.",
    category: "lederskab",
    link: "https://www.mdpi.com/2076-3387/15/8/298"
  },
  {
    id: 6,
    authors: "Provan, M., Ahmed, Z. & Stevens, A.",
    year: 2024,
    title: "Are equine-assisted services beneficial for military veterans with PTSD? A systematic review and meta-analysis",
    journal: "BMC Psychiatry",
    volume: "24, 544",
    highlight: "Meta-analyse: Signifikant reduktion i PTSD-scores (p<0.00001) med gennemsnitlig forbedring på 22,6%.",
    category: "emotionel-intelligens",
    link: "https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-024-05984-w"
  },
  {
    id: 7,
    authors: "Bilginoglu, E.",
    year: 2021,
    title: "Equine-Assisted Experiential Learning on Leadership Development",
    journal: "International Journal of Organizational Leadership",
    volume: "10(3-16)",
    highlight: "Detaljeret gennemgang af hvordan hesteassisteret læring udvikler kritiske lederskabskompetencer.",
    category: "lederskab",
    link: "https://ijol.cikd.ca/article_60581"
  },
  {
    id: 8,
    authors: "Frontiers in Public Health",
    year: 2022,
    title: "Use of Equine-Assisted Services to Improve Outcomes Among At-Risk Youth: A Scoping Review",
    journal: "Frontiers in Public Health",
    volume: "10, 730644",
    highlight: "Scoping review der viser effektiv opbygning af selvtillid, sociale færdigheder og øget selvbevidsthed.",
    category: "emotionel-intelligens",
    link: "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2022.730644/full"
  },
  {
    id: 9,
    authors: "Pentecost, L.A.",
    year: 2017,
    title: "The Effects of Equine Assisted Leadership Programs on Perceived Professional Development Outcomes",
    journal: "Liberty University Doctoral Dissertation",
    volume: "",
    highlight: "Signifikante forbedringer i professionel udvikling, motivation og kommunikation blandt ledere.",
    category: "lederskab",
    link: "https://digitalcommons.liberty.edu/doctoral/1619/"
  },
  {
    id: 10,
    authors: "Sivagurunathan, M. et al.",
    year: 2025,
    title: "Equine-Assisted Learning and Leadership Transformation: An Exploratory Qualitative Study",
    journal: "Frontiers in Veterinary Science",
    volume: "",
    highlight: "12 måneders opfølgning viser vedvarende transformation i lederes selvbevidsthed og relationelle lederskab.",
    category: "lederskab",
    link: "https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2025.1700029/abstract"
  }
]

const categoryLabels: Record<string, string> = {
  'all': 'Alle studier',
  'emotionel-intelligens': 'Emotionel intelligens',
  'lederskab': 'Lederskab & Teams'
}

export default function ResearchSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredStudies = activeCategory === 'all'
    ? featuredStudies
    : featuredStudies.filter(study => study.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="research-hero">
        <div className="research-hero-bg">
          <img src="/hero-eye.jpg" alt="Forskning" />
        </div>
        <div className="research-hero-overlay"></div>
        <motion.div
          className="research-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Evidensbaseret praksis</p>
          <h1>Forskningen bag <em>metoden</em></h1>
          <p className="research-hero-intro">
            Hesteassisteret udvikling er ikke bare en oplevelse - det er en metode med
            dokumenteret effekt. Her er et udvalg af de mest relevante peer-reviewed studier.
          </p>
        </motion.div>
      </section>

      {/* Key findings */}
      <section className="research-findings">
        <div className="research-container">
          <div className="findings-grid">
            <motion.div
              className="finding-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Dokumenteret forbedring i EQ</h3>
              <p>Selvbevidsthed, selvledelse, social bevidsthed og relationsledelse</p>
            </motion.div>
            <motion.div
              className="finding-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Nonverbal kommunikation</h3>
              <p>Øget bevidsthed dokumenteret i flere studier</p>
            </motion.div>
            <motion.div
              className="finding-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Teamsamarbejde</h3>
              <p>Forbedret tillid og samarbejde rapporteret af deltagere</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="research-studies">
        <div className="research-container">
          {/* Filter */}
          <div className="research-filter">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                className={`filter-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="studies-grid">
            {filteredStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className="study-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="study-meta">
                  <span className="study-year">{study.year}</span>
                  <span className={`study-category ${study.category}`}>
                    {categoryLabels[study.category]}
                  </span>
                </div>
                <h3 className="study-title">{study.title}</h3>
                <p className="study-authors">{study.authors}</p>
                <p className="study-journal">
                  <em>{study.journal}</em>
                  {study.volume && `, ${study.volume}`}
                </p>
                <div className="study-highlight">
                  <p>{study.highlight}</p>
                </div>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="study-link"
                >
                  Læs studiet →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="research-note-section">
        <div className="research-container">
          <div className="research-note">
            <p>
              <strong>En ærlig bemærkning:</strong> Forskningen i hesteassisteret udvikling er
              et voksende felt med lovende resultater. De fleste studier er stadig af mindre skala,
              og flere randomiserede kontrollerede studier er nødvendige. Det vigtigste er, at
              hestene giver øjeblikkelig, ærlig feedback på din autenticitet - noget ingen lærebog kan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <p className="section-label">Næste skridt</p>
          <h2 className="section-title">Oplev det selv</h2>
          <p>Book en uforpligtende samtale og hør mere om, hvordan hesteassisteret udvikling kan gavne dig.</p>
          <a href="/kontakt" className="cta-button">
            <span>Kontakt mig</span>
          </a>
        </div>
      </section>
    </>
  )
}
