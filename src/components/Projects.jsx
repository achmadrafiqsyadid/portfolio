import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art border-[3px] border-ink rounded-editorial shadow-hard art-${project.visual}`} aria-hidden="true">
      <div className="art-label"><span>{project.category}</span><span>{project.number} / 04</span></div>

      {project.visual === 'rental' && (
        <>
          <div className="art-stack"><span>PYTHON</span><i /><span>PYSIDE6</span><i /><span>MYSQL</span></div>
          <div className="art-caption">SEWA<br />PERTAMBANGAN</div>
          <div className="art-foot">DATA · LOGIKA · DATABASE</div>
        </>
      )}

      {project.visual === 'orphan' && (
        <>
          <div className="uml-mark"><span>USE CASE</span><span>ACTIVITY</span><span>SEQUENCE</span><span>CLASS</span></div>
          <div className="art-caption">PANTI<br />ASUHAN</div>
          <div className="art-foot">TUGAS KELOMPOK</div>
        </>
      )}

      {project.visual === 'java' && (
        <>
          <div className="math-card"><span>12</span><b>+</b><span>08</span><i /><strong>20</strong></div>
          <div className="art-foot">LATIHAN PEMROGRAMAN</div>
        </>
      )}

      {project.visual === 'weather' && (
        <>
          <div className="weather-symbol"><span /><i /></div>
          <div className="art-caption">CEK<br />CUACA</div>
          <div className="art-foot">DATA CUACA · API</div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="work-section bg-paper py-[clamp(76px,9vw,125px)] border-b-[3px] border-ink" id="karya" aria-labelledby="work-title">
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px]">
        <div className="section-heading heading-inline">
          <div>
            <p className="section-index">03 <span>/</span> PILIHAN KARYA</p>
            <h2 id="work-title">Beberapa hal yang<br /><span className="outline-text">pernah saya kerjakan.</span></h2>
          </div>
          <a
            className="all-repos"
            href={portfolio.contact.repositories}
            target="_blank"
            rel="noopener noreferrer"
          >
            Semua repository <ArrowUpRight className="icon" aria-hidden="true" />
          </a>
        </div>

        <div className="project-list">
          {portfolio.projects.map((project) => {
            const repositoryUrl = project.repository ?? project.repositoryFallback
            return (
              <article className={`project ${project.featured ? 'project-featured' : ''}`} key={project.number}>
                <ProjectArtwork project={project} />
                <div className="project-info">
                  <p className="project-type">{project.number} — {project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack" aria-label={`Teknologi: ${project.technologies.join(', ')}`}>
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <a className="project-link" href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                    {project.linkLabel} <ArrowUpRight className="icon" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <p className="project-note">
          Tampilan ilustrasi pada panel proyek merupakan elemen grafis buatan CSS, bukan screenshot aplikasi. Screenshot asli dapat ditambahkan setelah aset proyek tersedia.
        </p>
      </div>
    </section>
  )
}
