import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="experience">
      <div className="sw">
        <div className={styles.grid}>
          <div ref={leftRef} className={`${styles.sticky} reveal`}>
            <div className="slabel">03 — Experience</div>
            <h2 className="stitle">
              Where I've<br />Worked
            </h2>
            <p className={styles.desc}>
              Building production-grade systems in enterprise environments while
              continuously expanding into AI and intelligent application development.
            </p>
          </div>

          <div ref={rightRef} className="reveal d2">
            <div className={styles.timeline}>
              {experience.map(({ date, role, company, desc, tags }) => (
                <div key={role} className={styles.item}>
                  <div className={styles.date}>{date}</div>
                  <div className={styles.role}>{role}</div>
                  <div className={styles.company}>{company}</div>
                  <p className={styles.itemDesc}>{desc}</p>
                  <div className={styles.tags}>
                    {tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
