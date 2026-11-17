import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className="path-section bg-yellow py-[clamp(76px,9vw,125px)] border-b-[3px] border-ink" id="perjalanan" aria-labelledby="path-title">
          <div className="mx-auto w-[calc(100%-2*var(--pad))] max-w-[1160px]">
            <div className="section-heading">
              <p className="section-index">04 <span>/</span> PENDIDIKAN &amp; PENGALAMAN</p>
              <h2 id="path-title">Perjalanan yang<br /><span className="highlight">membentuk saya.</span></h2>
            </div>
            <div className="path-grid">
              <Education />
              <Experience />
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
