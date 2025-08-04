// src/components/Header.jsx
import React, { useState } from 'react'
import profileImage from '../assets/profile-image.svg'

function Header() {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <header id="hero">
      <section className="header-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h1>Hi I'm Saurav</h1>
        <div className="content-text">
          <h2>Full Stack Software Engineer</h2>
<h2>Specializing in AWS, React, Databases & Java</h2>
<p>Seasoned developer with a solid track record of delivering scalable web applications and digital products, combining deep technical expertise with creative problem-solving.</p>

        </div>
        <button className="btn btn-secondary" onClick={toggleForm}>CONNECT WITH ME</button>

        {showForm && (
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" />
            <textarea name="description" placeholder="How can I help you?" rows="4"></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        )}
      </section>
    </header>
  )
}

export default Header
