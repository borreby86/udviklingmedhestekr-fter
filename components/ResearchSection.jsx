'use client';

import { useState } from 'react';

// Featured research studies data
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
];

const categoryLabels = {
  'all': 'Alle studier',
  'emotionel-intelligens': 'Emotionel intelligens',
  'lederskab': 'Lederskab & Teams'
};

export default function ResearchSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredStudies = activeCategory === 'all' 
    ? featuredStudies 
    : featuredStudies.filter(study => study.category === activeCategory);

  return (
    <section className="research-section" id="forskning">
      {/* Header */}
      <div className="research-header">
        <span className="research-label">Evidensbaseret praksis</span>
        <h2 className="research-title">Forskningen bag metoden</h2>
        <p className="research-intro">
          Hesteassisteret udvikling er ikke bare en oplevelse – det er en metode med 
          dokumenteret effekt. Her er et udvalg af de mest relevante peer-reviewed studier, 
          der understøtter arbejdet med heste som katalysator for personlig og professionel udvikling.
        </p>
      </div>

      {/* Key findings highlight */}
      <div className="key-findings">
        <div className="finding-card finding-card-wide">
          <span className="finding-number">Dokumenteret forbedring i EQ</span>
          <span className="finding-text">selvbevidsthed, selvledelse, social bevidsthed og relationsledelse</span>
        </div>
        <div className="finding-card">
          <span className="finding-number">Nonverbal kommunikation</span>
          <span className="finding-text">øget bevidsthed dokumenteret i flere studier</span>
        </div>
        <div className="finding-card">
          <span className="finding-number">Teamsamarbejde</span>
          <span className="finding-text">forbedret tillid og samarbejde rapporteret af deltagere</span>
        </div>
      </div>

      {/* Category filter */}
      <div className="category-filter">
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

      {/* Studies grid */}
      <div className="studies-grid">
        {filteredStudies.map((study) => (
          <article key={study.id} className="study-card">
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
              <span className="highlight-icon">✦</span>
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
          </article>
        ))}
      </div>

      {/* CTA for full PDF */}
      <div className="research-cta">
        <div className="cta-content">
          <h3>Vil du dykke dybere?</h3>
          <p>
            Download den fulde forskningsoversigt med 100+ studier om hesteassisteret 
            udvikling, emotionel intelligens og lederskabsudvikling.
          </p>
          <a href="/forskning-oversigt.pdf" className="cta-button" download>
            Download forskningsoversigt (PDF)
          </a>
        </div>
      </div>

      {/* Honest note */}
      <div className="research-note">
        <p>
          <strong>En ærlig bemærkning:</strong> Forskningen i hesteassisteret udvikling er 
          et voksende felt med lovende resultater. De fleste studier er stadig af mindre skala, 
          og flere randomiserede kontrollerede studier er nødvendige. Det vigtigste er, at 
          hestene giver øjeblikkelig, ærlig feedback på din autenticitet – noget ingen lærebog kan.
        </p>
      </div>

      <style jsx>{`
        .research-section {
          padding: 6rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          background-color: #FDFBF7;
        }

        .research-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .research-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #8B5A3C;
          display: block;
          margin-bottom: 1rem;
        }

        .research-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.75rem;
          font-weight: 500;
          color: #2C2C2C;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }

        .research-intro {
          font-family: 'Jost', sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #5A5A5A;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Key findings */
        .key-findings {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #F5EDE4 0%, #EDE5DA 100%);
          border-radius: 12px;
        }

        .finding-card {
          text-align: center;
          padding: 1rem;
        }

        .finding-card-wide {
          grid-column: 1 / -1;
          background: rgba(139, 90, 60, 0.08);
          border-radius: 8px;
          padding: 1.25rem;
        }

        @media (min-width: 768px) {
          .finding-card-wide {
            grid-column: span 1;
          }
          
          .key-findings {
            grid-template-columns: 1.5fr 1fr 1fr;
          }
        }

        .finding-number {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: #8B5A3C;
          margin-bottom: 0.5rem;
        }

        .finding-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: #5A5A5A;
        }

        /* Category filter */
        .category-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          padding: 0.75rem 1.5rem;
          border: 1px solid #D4C4B5;
          background: transparent;
          color: #5A5A5A;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: #8B5A3C;
          color: #8B5A3C;
        }

        .filter-btn.active {
          background: #8B5A3C;
          border-color: #8B5A3C;
          color: #fff;
        }

        /* Studies grid */
        .studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .study-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.75rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .study-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        .study-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .study-year {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          color: #8B5A3C;
          font-weight: 500;
        }

        .study-category {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          background: #F5EDE4;
          color: #7A6855;
        }

        .study-category.lederskab {
          background: #E8EDE4;
          color: #5A6B4A;
        }

        .study-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #2C2C2C;
          margin: 0 0 0.75rem 0;
          line-height: 1.35;
        }

        .study-authors {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          color: #7A7A7A;
          margin: 0 0 0.5rem 0;
        }

        .study-journal {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          color: #5A5A5A;
          margin: 0 0 1rem 0;
        }

        .study-highlight {
          display: flex;
          gap: 0.75rem;
          padding: 1rem;
          background: #FDFBF7;
          border-radius: 8px;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .highlight-icon {
          color: #8B5A3C;
          flex-shrink: 0;
        }

        .study-highlight p {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: #5A5A5A;
          margin: 0;
          line-height: 1.5;
        }

        .study-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: #8B5A3C;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
          margin-top: auto;
        }

        .study-link:hover {
          color: #6B4A2C;
          text-decoration: underline;
        }

        /* CTA section */
        .research-cta {
          background: linear-gradient(135deg, #2C2C2C 0%, #3D3D3D 100%);
          border-radius: 16px;
          padding: 3rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .cta-content h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.75rem;
          color: #fff;
          margin: 0 0 1rem 0;
        }

        .cta-content p {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.8);
          margin: 0 0 1.5rem 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 1rem 2rem;
          background: #8B5A3C;
          color: #fff;
          text-decoration: none;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #A66B4A;
          transform: translateY(-2px);
        }

        /* Honest note */
        .research-note {
          padding: 1.5rem 2rem;
          background: #F5EDE4;
          border-left: 4px solid #8B5A3C;
          border-radius: 0 8px 8px 0;
        }

        .research-note p {
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          color: #5A5A5A;
          margin: 0;
          line-height: 1.6;
        }

        .research-note strong {
          color: #2C2C2C;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .research-section {
            padding: 4rem 1rem;
          }

          .research-title {
            font-size: 2rem;
          }

          .studies-grid {
            grid-template-columns: 1fr;
          }

          .key-findings {
            padding: 1.5rem;
          }

          .finding-number {
            font-size: 2rem;
          }

          .research-cta {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
