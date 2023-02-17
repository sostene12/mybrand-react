import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage" id="landingpage">
        <div className="nav-container">
            <nav>
              <div className="logo">
                <h2><span>NG</span><span>SO</span></h2>
              </div>
              <div className="nav-contents"></div>
              <div className="nav-items phone">
                <ul className="nav-links">
                  <li><a href="#landingpage" className="active">Home</a></li>
                  <li><a href="#about-me">About Me</a></li>
                  <li><a href="#services-section">Services</a></li>
                  <li><a href="#portifolio-section">Projects</a></li>
                  <li><a href="#blog-section">My Blog</a></li>
                  <li><a href="#contact-section">Contact Me</a></li>
                  <li><a className="button" href="accounts.html">Login</a></li>
                </ul>
              </div>
              <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
        </div>  
        <main>
        <div className="intro-word">
          <h1><span>Welcome to My</span><span>Portifolio.</span></h1>
          <div className="name">
            <span>I'm</span>
            <span><span className="s-name">SOSTENE</span>NGARUKIYIMANA</span>
          </div>
          <div className="small">
            A pationate Self taught <span>Full-stack</span> developer , Graphic
            Designer and UI/Ux designer based in rwanda .
          </div>
          <button className="button">
            <a href="https://mycv-sostene.netlify.app/" target="_blank"
              >My CV</a
            >
          </button>
        </div>
        </main>
    </div>
  )
}

export default LandingPage