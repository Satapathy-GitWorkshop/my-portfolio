import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section id="projects">
      <div className="sw">
        <div ref={headerRef} className="reveal">
          <div className="slabel">04 — Projects</div>
          <h2 className="stitle">What I've Built</h2>
          <p className={styles.hint}>✦ Hover cards to flip and see full details</p>
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal d1`}>
          {projects.map((project) => (
            <ProjectCard key={project.num} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
