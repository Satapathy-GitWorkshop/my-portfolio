import styles from './ProjectCard.module.css'

export default function ProjectCard({ num, name, short, tech, backTitle, backDesc, backTech, link, linkLabel }) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.front}>
          <div className={styles.num}>{num}</div>
          <div className={styles.name}>{name}</div>
          <p className={styles.short}>{short}</p>
          <div className={styles.tech}>{tech}</div>
          <div className={styles.hint}>Hover to flip</div>
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <div>
            <div className={styles.backTitle}>{backTitle}</div>
            <p className={styles.backDesc}>{backDesc}</p>
          </div>
          <div className={styles.backFooter}>
            <span className={styles.backTech}>{backTech}</span>
            <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
              {linkLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
