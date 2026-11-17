import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function Hero() {
  const { personal } = portfolio

  return (
    <section className="hero border-b-[3px] border-ink" id="home" aria-labelledby="hero-title">
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px] hero-layout">
        <div className="hero-copy">
          <p className="kicker">
            <span className="kicker-line" aria-hidden="true" />
            PORTOFOLIO PRIBADI
            <span className="kicker-year">{new Date().getFullYear()} / ID</span>
          </p>
          <h1 id="hero-title">
            Saya Rafiq.<br />
            Sedang belajar <span className="highlight">membangun aplikasi.</span>
          </h1>
          <p className="hero-intro">
            Mahasiswa Teknik Informatika yang tertarik pada pengembangan aplikasi web dan desktop.
            Saya belajar paling banyak dengan mencoba, menyusun, lalu memperbaiki proyek yang sedang dikerjakan.
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-5">
            <a className="button button-primary border-[3px] border-ink shadow-hard rounded-editorial" href="#karya">
              Lihat karya <ArrowRight className="icon" aria-hidden="true" />
            </a>
            <a className="text-link" href="#kontak">
              Kenalan lebih lanjut <ArrowUpRight className="icon" aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta" aria-label="Informasi pendidikan singkat">
            <span>Teknik Informatika</span>
            <span>UNISKA MAB</span>
            <span>Semester {personal.semester}</span>
          </div>
        </div>

        <aside className="identity-board border-[3px] border-ink bg-white rounded-editorial" aria-label="Ringkasan profil">
          <div className="board-top"><span>CATATAN / 001</span><span>AR—{String(new Date().getFullYear()).slice(-2)}</span></div>
          <div className="identity-monogram" aria-hidden="true">AR<span>.</span></div>
          <div className="identity-name">Achmad Rafiq<br />Syaddid</div>
          <div className="identity-rule" />
          <div className="identity-detail">
            <span>SEDANG MENEMPUH</span>
            <strong>{personal.major}</strong>
          </div>
          <div className="identity-detail">
            <span>MINAT</span>
            <strong>Web · Desktop · Database</strong>
          </div>
          <div className="board-bottom">
            <span>MAHASISWA / DEVELOPER PEMULA</span>
            <span className="board-stamp">{personal.semester.padStart(2, '0')}</span>
          </div>
        </aside>
      </div>
      <div className="hero-index" aria-hidden="true">
        <span>01</span><span>PORTOFOLIO RAFIQ</span><span>SCROLL UNTUK MELIHAT</span>
      </div>
    </section>
  )
}
