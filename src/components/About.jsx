import { useScrollReveal } from '../hooks/useScrollReveal'
import { facts, aboutRows } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="about">
      <div className="sw">
        <div className={styles.grid}>
          <div ref={leftRef} className="reveal">
            <div className="slabel">01 — About Me</div>
            <h2 className="stitle">
              Logic meets<br />Intelligence 🚀
            </h2>
            <p className={styles.p}>
              I'm a Software Developer at Infosys with a focus on enterprise backend
              systems — building scalable, secure APIs and cloud-native microservices
              in Java and Spring Boot.
            </p>
            <p className={styles.p}>
              Beyond my day job, I'm deep in the world of AI: exploring deep learning,
              neural networks, and LLM applications. Actively building intelligent
              systems and contributing to open-source AI projects.
            </p>
            <p className={styles.p}>
              Always open to discussing innovative tech, best practices, or potential
              collaborations on AI-powered systems.
            </p>

            <div className={styles.facts}>
              {facts.map(({ num, label }) => (
                <div key={label} className={styles.fact}>
                  <div className={styles.factNum}>{num}</div>
                  <div className={styles.factLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="reveal d2">
            <div className={styles.card}>
              <p className={styles.quote}>
                "J2EE programmers count bytes the way a super-model counts calories."
              </p>
              <ul className={styles.rows}>
                {aboutRows.map(({ key, val }) => (
                  <li key={key}>
                    <span className={styles.rowKey}>{key}</span>
                    <span className={styles.rowVal}>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
