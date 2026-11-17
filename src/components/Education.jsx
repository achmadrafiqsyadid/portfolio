import { portfolio } from '../data/portfolio.js'

export default function Education() {
  return (
    <div className="path-column">
      <p className="path-label">PENDIDIKAN</p>
      {portfolio.education.map((item) => (
        <article className="path-entry" key={item.title}>
          <span className="path-year">{item.period}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.status && <span className="path-status">{item.status}</span>}
        </article>
      ))}
    </div>
  )
}
