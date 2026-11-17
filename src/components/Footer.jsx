import { portfolio } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px] footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">AR<span>.</span></span>
          <span className="brand-name">{portfolio.personal.fullName}</span>
        </a>
        <p>Mahasiswa Teknik Informatika · Sedang terus belajar.</p>
        <a className="back-top" href="#home">Kembali ke atas ↑</a>
      </div>
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px] footer-bottom">
        <span>© {year} {portfolio.personal.fullName}</span>
        <span>Dikembangkan dengan React, Vite, dan Tailwind CSS.</span>
      </div>
    </footer>
  )
}
