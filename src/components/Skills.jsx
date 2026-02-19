import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="skills">
      <div className="sw">
        <div ref={headerRef} className="reveal">
          <div className="slabel">02 — Tech Stack</div>
          <h2 className="stitle">What I Work With</h2>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal d1`}>
          {skills.map(({ icon, title, items }) => (
            <div key={title} className={styles.card}>
              <div className={styles.catTitle}>
                <span>{icon}</span> {title}
              </div>
              <div className={styles.badges}>
                {items.map((item) => (
                  <span key={item} className={styles.badge}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
