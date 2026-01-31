const tags = [
  { label: 'Ledere', highlighted: false },
  { label: 'Ledergrupper', highlighted: false },
  { label: 'Teams', highlighted: false },
  { label: 'HR & Udvikling', highlighted: true },
  { label: 'Executive coaching', highlighted: false },
  { label: 'Teambuilding', highlighted: false }
]

export default function Audience() {
  return (
    <section className="audience-section audience-solid">
      <div className="audience-content">
        <p className="audience-label">Hvem er det for?</p>
        <h2 className="audience-title">
          Dig og dit team, der ønsker ledelse<br />
          med nærvær og ægte følgeskab
        </h2>
        <div className="audience-tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`audience-tag ${tag.highlighted ? 'highlighted' : ''}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
