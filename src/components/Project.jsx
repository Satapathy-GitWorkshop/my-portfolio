// src/components/Projects.jsx
import React, { useState } from 'react'


const projectList = [
  {
    title: "Project One",
    stack: "React, Redux, SASS",
    description: "This is a short description about project one."
  },
  {
    title: "Project Two",
    stack: "React, Redux, SASS",
    description: "This is a short description about project two."
  },
  {
    title: "Project Three",
    stack: "React, Redux, SASS",
    description: "This is a short description about project three."
  },
  {
    title: "Project Four",
    stack: "React, Redux, SASS",
    description: "This is a short description about project four."
  },
  {
    title: "Project Five",
    stack: "React, Redux, SASS",
    description: "This is a short description about project five."
  },
  {
    title: "Project Six",
    stack: "React, Redux, SASS",
    description: "This is a short description about project six."
  }
]

function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null)

  const handleFlip = (index) => {
    setFlippedIndex(prev => (prev === index ? null : index))
  }

  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>
      <article className="project">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front card">
                <div className="project-info">
                  <div className="project-bio">
                    <h3>{project.title}</h3>
                    <p>{project.stack}</p>
                  </div>
                </div>
              </div>
              <div className="flip-card-back card">
                <div className="project-info">
                  <div className="project-bio">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Stack:</strong> {project.stack}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Projects
