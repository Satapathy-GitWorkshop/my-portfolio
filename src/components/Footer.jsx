import React, { useEffect, useState } from 'react'
import facebook from '../assets/facebook-icon.svg'
import twitter from '../assets/twitter-icon.svg'
import linkedin from '../assets/linkedin-icon.svg'
import github from '../assets/github-icon.svg'
import hashnode from '../assets/hashnode-icon.svg'

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <footer id="footer">
      <div className="container">
        <a href="mailto:communitypro47@gmail.com">communitypro47@gmail.com</a>
        <div className="social">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="#"><img src={github} alt="GitHub" /></a>
          <a href="#"><img src={hashnode} alt="Hashnode" /></a>
        </div>
        <div className="attribution">
          <a href="https://github.com/CommunityPro/portfolio-html" target="_blank">
            <img src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg" alt="attribution" width="150px" />
          </a>
        </div>
        <p>Copyright &copy; Communitypro {year}, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
