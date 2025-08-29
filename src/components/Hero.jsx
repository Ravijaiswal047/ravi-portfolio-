import { useState, useEffect } from 'react';
import profileImage from '../assets/20943979.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Ravi Jaiswal";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="typing-animation">
              {displayText}
              <span className="highlight">{currentIndex >= fullText.length ? '' : '|'}</span>
            </h1>
            <p className="hero-subtitle">
              Java Full Stack Developer passionate about creating scalable web applications and innovative solutions
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/ravijaiswal47" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ravi-jaiswal004/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:jravi047@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Ravi Jaiswal" 
                className="profile-image"
                onError={(e) => {
                  console.error('Error loading image:', e);
                  e.target.style.display = 'none';
                }}
              />
              <div className="profile-frame"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
