
import React, { useState } from 'react'

import infosysLogo from '../assets/Experience/Infosys.png';
import  teckvalley from '../assets/Experience/teckvalley.png';
import  technoLabs from '../assets/Experience/Technolabs.png';
const experienceList = [
  {
    title: 'DevOps & Fullstack Engineering Intern',
    company: 'Infosys Limited.',
    duration: 'April 2024 – Present',
    description: 'Currently serving as a Java Consultant for a multinational e-commerce leader, I deliver robust, high-performance code and scalable cloud services. I am deeply exploring AWS to optimize architecture and drive career growth, ensuring the delivery of cutting-edge solutions within a complex, high-traffic global retail environment',
    skills: ['Docker', 'Terraform', 'AWS', 'EC2', 'Portainer', 'Nginx', 'JavaScript', 'TypeScript', 'Node Js', 'Next Js'],
    logo: infosysLogo
  },
  {
    title: 'Fullstack Java devloper',
    company: 'TeckValley India Pvt. Ltd.',
    duration: 'February 2022 – February 2024',
    description: 'I have delivered diverse high-impact projects, specializing in building scalable React applications and robust Java backend systems. My experience as a Full-Stack Engineer focuses on optimizing performance and gathering deep technical insights to solve complex problems, ensuring high-quality, end-to-end solutions that meet modern business needs.',
    skills: ['Java','Spring Boot & Microservices','Mongo DB','SQL','ReactJS','NodeJs',  'HTML', 'CSS', 'JavaScript','AWS'],
    logo: teckvalley
  },
  {
    title: 'Java Developer',
    company: 'TechnoLabs Software Pvt Ltd.',
    duration: 'February 2021 – February 2022',
    description: 'Developed robust Java backend services for a high-performance POS system, seamlessly integrated with an Angular frontend. I optimized SQL queries to ensure rapid transaction processing and leveraged Docker and AWS for streamlined deployment. Collaborating in Agile teams, I delivered scalable billing and payment solutions tailored for reliability',
    skills: ['Java', 'Spring Boot & Microservices', 'SQL', 'Jenkins', 'Git', 'AWS'],
    logo: technoLabs
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
