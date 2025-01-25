import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import './App.css'; // Add your CSS styling here or use a library like TailwindCSS or Bootstrap

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">salahni</div>
        <nav className="nav">
          <a href="#">Interior</a>
          <a href="#">Exterior</a>
          <a href="#">Lawn & Garden</a>
          <a href="#">More</a>
        </nav>
        <div className="auth-buttons">
          
          <button>Log In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Find top-rated certified pros in your area.</h1>
          <div className="search-bar">
            <input type="text" placeholder="How can we help?" />
            <input type="text" placeholder="Zip code" />
            <button>Search</button>
          </div>
        </section>

        <section className="services">
          <h2>Recommended for you</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Handyman for Multiple Small Projects</h3>
              <button>Get quotes</button>
            </div>
            <div className="service-card">
              <h3>One Time Interior House Cleaning</h3>
              <button>Get quotes</button>
            </div>
            <div className="service-card">
              <h3>Plumbing</h3>
              <button>Get quotes</button>
            </div>
          </div>
        </section>

        <section className="popular-projects">
          <h2>Popular projects near you</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Decks & Porches</h3>
              <p>3.7 (1k) | from $1,890</p>
            </div>
            <div className="project-card">
              <h3>Home Cleaning</h3>
              <p>4.5 (314k) | from $85</p>
            </div>
            <div className="project-card">
              <h3>Roof Repair</h3>
              <p>4.7 (613k) | from $594</p>
            </div>
            <div className="project-card">
              <h3>Fence Repair</h3>
              <p>4.2 (4.8k) | from $380</p>
            </div>
          </div>
        </section>

        <section className="additional-services">
          <h2>Popular home projects</h2>
          <div className="home-projects-grid">
            <div className="project-card">
              <h3>Holiday Light Hanging</h3>
              <p>4.5 (6k) | from $195</p>
            </div>
            <div className="project-card">
              <h3>Handyperson for Small Projects</h3>
              <p>4.6 (599k) | from $158</p>
            </div>
            <div className="project-card">
              <h3>One-time Cleaning Service</h3>
              <p>4.5 (314k) | from $102</p>
            </div>
          </div>
        </section>

        <section className="maintenance">
          <h2>Keep your home in tip-top shape</h2>
          <div className="maintenance-grid">
            <div className="service-card">
              <h3>Faucet & Plumbing Repair Services</h3>
              <p>4.6 (568k) | from $226</p>
            </div>
            <div className="service-card">
              <h3>Roof Installation & Repair</h3>
              <p>4.7 (325k) | from $471</p>
            </div>
            <div className="service-card">
              <h3>Bathroom Remodel</h3>
              <p>4.4 (180k) | from $2,500</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright © 2025. Angi Clone by React</p>
      </footer>
    </div>
  );
}

export default App;
