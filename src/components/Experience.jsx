// src/components/Experience.jsx
import React, { useState } from 'react'

const experienceList = [
  {
    title: 'DevOps & Fullstack Engineering Intern',
    company: 'Flipr Innovations Pvt. Ltd.',
    duration: 'Aug 2023 – July 2023',
    description: 'Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.',
    skills: ['Docker', 'Terraform', 'AWS', 'EC2', 'Portainer', 'Nginx', 'JavaScript', 'TypeScript', 'Node Js', 'Next Js'],
    logo: '/assets/flipr.png'
  },
  {
    title: 'Frontend Engineer Intern',
    company: 'Neurobit',
    duration: 'June 2023 – Present',
    description: 'Working on the frontend of the web application using ReactJS, Redux, and Material UI.',
    skills: ['ReactJS', 'Redux', 'NodeJs', 'Material UI', 'HTML', 'CSS', 'JavaScript'],
    logo: '/assets/neurobit.png'
  },
  {
    title: 'Fullstack Externship',
    company: 'Flipr',
    duration: 'June 2023 – July 2023',
    description: 'Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.',
    skills: ['ReactJS', 'Redux', 'NodeJs', 'Material UI', 'HTML', 'CSS', 'JavaScript', 'Docker', 'AWS', 'MongoDB'],
    logo: '/assets/flipr.png'
  },
  {
    title: 'Open Source Contributor',
    company: 'GirlScript Summer of Code',
    duration: 'May 2023 – Present',
    description: 'Contributing to different open-source projects and learn from industry experts',
    skills: [],
    logo: '/assets/gsoc.png'
  },
  {
    title: 'Android Developer',
    company: 'DSC KIIT',
    duration: 'Nov 2021 – Present',
    description: 'As an Android developer at the Google Developers Student Club (GDCS)...',
    skills: ['Leadership', 'Mobile Application Development', 'Kotlin', 'XML', 'Figma'],
    logo: '/assets/dsc.png'
  }
]

function Experience() {
  const [showExperience, setShowExperience] = useState(false)

  return (
    <section id="experience" className="experience-container container">
      <div className="content-text">
        <h2>Experience</h2>
        <p>My work experience as a software engineer and working on different companies and projects.</p>
        <button
          className="btn btn-secondary"
          onClick={() => setShowExperience(prev => !prev)}
          style={{ marginTop: '1rem' }}
        >
          {showExperience ? 'Hide Experience' : 'Show Experience'}
        </button>
      </div>

      {showExperience && (
        <div className="experience-list">
          {experienceList.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <img src={exp.logo} alt={exp.company} className="experience-logo" />
                <div>
                  <h3>{exp.title}</h3>
                  <p>{exp.company}</p>
                  <span>{exp.duration}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              {exp.skills.length > 0 && (
                <div className="experience-skills">
                  <strong>Skills:</strong> {exp.skills.join(' • ')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Experience
