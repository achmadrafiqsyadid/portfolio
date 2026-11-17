import { portfolio } from '../data/portfolio.js'

export default function About() {
  const { about, personal, education } = portfolio
  const highSchool = education.find((item) => item.title === 'MAN 1 Barito Timur')

  return (
    <section className="about-section bg-paper py-[clamp(76px,9vw,125px)] border-b-[3px] border-ink" id="tentang" aria-labelledby="about-title">
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px]">
        <div className="section-heading">
          <p className="section-index">01 <span>/</span> TENTANG SAYA</p>
          <h2 id="about-title">Masih bertumbuh,<br /><span className="outline-text">terus mencoba.</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            {about.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'about-lead' : undefined}>{paragraph}</p>
            ))}
          </div>

          <div className="about-facts">
            <div className="fact fact-school">
              <span className="fact-label">PENDIDIKAN SEBELUMNYA</span>
              <strong>{highSchool.title}</strong>
              <span>Lulus · 2023</span>
            </div>
            <div className="fact fact-study">
              <span className="fact-label">SAAT INI</span>
              <strong>UNISKA MAB</strong>
              <span>{personal.major} · Semester {personal.semester}</span>
            </div>
            <div className="fact fact-note">
              <span className="fact-label">CARA BELAJAR</span>
              <strong>Belajar dengan praktik.</strong>
              <span>Mencoba hal baru lewat proyek dan evaluasi dari hasilnya.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
