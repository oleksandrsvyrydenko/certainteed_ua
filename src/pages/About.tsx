import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About CertainTeed</h1>
          <p>Leading the industry with innovation and excellence since 1970</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                CertainTeed has been at the forefront of construction innovation for over five decades. 
                We've built our reputation on quality, reliability, and customer satisfaction, delivering 
                exceptional results across thousands of projects nationwide.
              </p>
              <p>
                Our team of experts combines traditional craftsmanship with cutting-edge technology 
                to create solutions that stand the test of time. We believe in sustainable practices 
                and environmentally responsible construction methods.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🏢</span>
                <p>Our Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We conduct business with honesty and transparency in all our dealings.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We strive for the highest standards in everything we do.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We continuously seek new and better ways to serve our customers.</p>
            </div>
            <div className="value-item">
              <h3>Safety</h3>
              <p>The safety of our team and clients is our top priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
