import { portfolio } from '../data/portfolio.js'

export default function Experience() {
  return (
    <div className="path-column experience-column">
      <p className="path-label">PENGALAMAN KERJA</p>
      {portfolio.experience.map((item) => (
        <article className="path-entry" key={item.title}>
          <span className="path-year">{item.period}</span>
          <h3>{item.title}</h3>
          <p>{item.organization}</p>
          <p className="entry-detail">{item.description}</p>
        </article>
      ))}
    </div>
  )
}
