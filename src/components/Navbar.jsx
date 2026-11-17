import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, portfolio } from '../data/portfolio.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    if (!('IntersectionObserver' in window) || sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -58% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex min-h-[76px] max-[700px]:min-h-[68px] w-[calc(100%-2*var(--pad))] max-w-[1160px] items-center justify-between gap-7" ref={navRef}>
        <a className="brand" href="#home" aria-label={`${portfolio.personal.preferredName}, ke halaman awal`} onClick={closeMenu}>
          <span className="brand-mark">AR<span>.</span></span>
          <span className="brand-name">Rafiq Syaddid</span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`nav-panel ${menuOpen ? 'is-open' : ''}`}
          id="site-nav"
          aria-label="Navigasi utama"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={item.contact ? 'nav-contact' : undefined}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {item.label}
              {item.contact && <ArrowUpRight className="icon" aria-hidden="true" />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
