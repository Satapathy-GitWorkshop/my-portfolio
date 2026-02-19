import { useState, useEffect } from 'react'
import { stackPills } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % stackPills.length)
    }, 900)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.left}>
        <div className={styles.eyebrow}>
          Software Developer · Infosys · Bhubaneswar 🇮🇳
        </div>

        <h1 className={styles.name}>
          <span className={styles.filled}>Saurav</span>
          <span className={styles.stroke}>Satpathy</span>
        </h1>

        <p className={styles.sub}>
          Backend engineer rooted in Java &amp; Spring Boot microservices. On a
          mission to merge enterprise-grade systems with the intelligence of AI
          and LLMs.
        </p>

        <div className={styles.btns}>
          <a href="#projects" className={styles.btnP}
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
          <a href="https://linkedin.com/in/saurav-satpathy-612ba21a3" target="_blank" rel="noreferrer" className={styles.btnO}>
            LinkedIn ↗
          </a>
          <a href="https://github.com/Satapathy-GitWorkshop" target="_blank" rel="noreferrer" className={styles.btnO}>
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={styles.right}>
        {stackPills.map((pill, i) => (
          <span key={pill} className={`${styles.pill} ${i === activeIdx ? styles.on : ''}`}>
            {pill}
          </span>
        ))}
      </div>

      <div className={styles.scrollInd}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
