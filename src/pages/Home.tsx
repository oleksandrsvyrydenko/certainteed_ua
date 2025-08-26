import React from 'react'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to CertainTeed</h1>
          <p>Building excellence through innovation and quality</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Quality Construction</h3>
              <p>Premium materials and expert craftsmanship for lasting results.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>Cutting-edge solutions that push the boundaries of possibility.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Environmentally conscious practices for a better future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
