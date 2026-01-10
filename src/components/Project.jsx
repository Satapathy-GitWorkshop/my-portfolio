import React, { useState } from 'react';

// IMPORT REAL IMAGES
import img1 from '../assets/project/project-one.png';
import img2 from '../assets/project/project-two.png';
import img3 from '../assets/project/project-three.png';
import img4 from '../assets/project/project-four.png';
import img5 from '../assets/project/project-five.png';
import img6 from '../assets/project/project-six.png';

const projectList = [
  { title: "Project One", stack: "React, Redux, SASS", description: "Detailed description for project one.", image: img1 },
  { title: "Project Two", stack: "React, Redux, SASS", description: "Detailed description for project two.", image: img2 },
  { title: "Project Three", stack: "React, Redux, SASS", description: "Detailed description for project three.", image: img3 },
  { title: "Project Four", stack: "React, Redux, SASS", description: "Detailed description for project four.", image: img4 },
  { title: "Project Five", stack: "React, Redux, SASS", description: "Detailed description for project five.", image: img5 },
  { title: "Project Six", stack: "React, Redux, SASS", description: "Detailed description for project six.", image: img6 }
];

function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>
      
      {/* This class MUST match the CSS grid selector */}
      <div className="project">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              {/* FRONT SIDE */}
              <div 
                className="flip-card-front" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="inner-content">
                  {/* <h3>{project.title}</h3>
                  <p className="stack-label">{project.stack}</p> */}
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="flip-card-back">
                <div className="inner-content">
                  <h3>{project.title}</h3>
                  <p className="desc">{project.description}</p>
                  <p className="tech"><strong>Stack:</strong> {project.stack}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;