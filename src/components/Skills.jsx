import { Code2 } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section className="skills-section bg-blue py-[clamp(76px,9vw,125px)] border-b-[3px] border-ink" id="kemampuan" aria-labelledby="skills-title">
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px]">
        <div className="section-heading heading-inline">
          <div>
            <p className="section-index">02 <span>/</span> TEKNOLOGI</p>
            <h2 id="skills-title">Yang pernah<br /><span className="highlight highlight-blue">saya gunakan.</span></h2>
          </div>
          <p className="heading-note">
            Daftar ini menunjukkan teknologi yang pernah saya pakai dalam proses belajar dan mengerjakan proyek. Bukan penilaian tingkat kemahiran.
          </p>
        </div>

        <div className="tool-list">
          {portfolio.skills.map((group) => (
            <article className="tool-row" key={group.letter}>
              <div className="tool-heading">
                <span className="tool-number">{group.letter}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="tool-content">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="skills-footnote">
          <Code2 className="icon" aria-hidden="true" />
          Hal yang masih ingin saya dalami: perancangan perangkat lunak, pengelolaan database, dan pengembangan aplikasi yang lebih rapi.
        </p>
      </div>
    </section>
  )
}
