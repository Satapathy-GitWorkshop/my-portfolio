import { useTheme } from './hooks/useTheme'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <div className="section-divider" />
}

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <>
      <Cursor />
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
