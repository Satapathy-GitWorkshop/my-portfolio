import React, { useState } from 'react'
import twitter from '../assets/twitter-icon.svg'
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import hashnode from '../assets/hashnode-icon.svg'

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <footer id="footer">
      <div className="container">
        <a href="mailto:communitypro47@gmail.com">saurav.satpathy98@gmail.com</a>
        <div className="social">
          <a href="https://www.linkedin.com/in/saurav-satpathy-612ba21a3"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/Satapathy-GitWorkshop"><img src={github} alt="GitHub" /></a>
        </div>
        <p>Built with ❤️ by Saurav Satpathy • {year}</p>
      </div>
    </footer>
  )
}

export default Footer
