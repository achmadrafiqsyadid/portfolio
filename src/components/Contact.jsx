import { useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Code2 } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function InstagramMark() {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  )
}

export default function Contact() {
  const [copyState, setCopyState] = useState('idle')
  const fallbackRef = useRef(null)
  const { email, github, instagram, instagramHandle } = portfolio.contact

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
        setCopyState('success')
        return
      }
    } catch {
      // Gunakan fallback lokal saat Clipboard API tidak tersedia atau ditolak.
    }

    if (fallbackRef.current) {
      const textarea = fallbackRef.current
      textarea.focus()
      textarea.select()
      let copied = false
      try {
        copied = document.execCommand('copy')
      } catch {
        copied = false
      }
      setCopyState(copied ? 'success' : 'fallback')
    } else {
      setCopyState('fallback')
    }
  }

  return (
    <section className="contact-section bg-ink text-paper py-[clamp(75px,9vw,120px)]" id="kontak" aria-labelledby="contact-title">
      <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px] contact-layout">
        <div>
          <p className="section-index section-index-light">05 <span>/</span> HUBUNGI SAYA</p>
          <h2 id="contact-title">Ada yang ingin<br />dibangun atau<br /><span>dibicarakan?</span></h2>
          <p className="contact-intro">
            Terbuka untuk bertukar ide, berdiskusi soal teknologi, atau membicarakan kesempatan kolaborasi.
          </p>
        </div>

        <div className="contact-details">
          <a className="contact-email" href={`mailto:${email}`}>
            <span>EMAIL</span><strong>{email}</strong><ArrowUpRight className="icon" aria-hidden="true" />
          </a>
          <button className={`copy-button ${copyState === 'success' ? 'is-copied' : ''}`} type="button" onClick={copyEmail}>
            {copyState === 'success' ? <Check className="icon" aria-hidden="true" /> : <Copy className="icon" aria-hidden="true" />}
            <span>{copyState === 'success' ? 'Email berhasil disalin' : 'Salin alamat email'}</span>
          </button>
          <textarea
            ref={fallbackRef}
            className="visually-hidden-copy"
            value={email}
            readOnly
            aria-hidden="true"
            tabIndex={-1}
          />
          <p className="copy-status" role="status" aria-live="polite">
            {copyState === 'success' ? 'Alamat email sudah disalin.' : copyState === 'fallback' ? `Tidak dapat menyalin otomatis. Email: ${email}` : ''}
          </p>
          <div className="social-links">
            <a href={github} target="_blank" rel="noopener noreferrer"><Code2 className="icon" aria-hidden="true" /> GitHub</a>
            <a href={instagram} target="_blank" rel="noopener noreferrer"><InstagramMark /> Instagram <span className="social-handle">{instagramHandle}</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
