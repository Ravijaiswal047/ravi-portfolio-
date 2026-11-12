import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container footer-container">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-name">Ravi Jaiswal</span>
            <span className="footer-tagline">Java Backend Developer • Spring Boot & Microservices</span>
          </div>

          <button 
            type="button" 
            onClick={scrollToTop} 
            className="btn-back-to-top"
            aria-label="Scroll back to top of page"
          >
            <span>Top</span> ↑
          </button>
        </div>

        {/* Middle Metadata Block: Proof of Human Intent */}
        <div className="footer-meta-block">
          <div className="meta-col">
            <span className="meta-label">// DIRECT CONTACT</span>
            <a href="mailto:javadeveloperravijaiswal@gmail.com" className="meta-link">
              ✉️ javadeveloperravijaiswal@gmail.com
            </a>
            <a href="tel:+917042521638" className="meta-link">
              📞 +91 70425 21638
            </a>
          </div>
          <div className="meta-col">
            <span className="meta-label">// ENTERPRISE STACK</span>
            <span className="meta-value">Java 21 • Spring Boot 3 • Spring Cloud</span>
            <span className="meta-value">Kafka • Redis • OpenSearch 8 • PostgreSQL 16</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">// LOCATION & STATUS</span>
            <span className="meta-value">New Delhi, India (UTC+05:30)</span>
            <span className="meta-value">Ready for Full-Time Backend Roles</span>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="footer-bottom-row">
          <p className="colophon-text">
            © {new Date().getFullYear()} Ravi Jaiswal. Engineered with human intent. 
            Source code and microservices architectures available on GitHub.
          </p>
          <div className="footer-links">
            <a 
              href="/Ravi_Jaiswal_Resume.pdf" 
              download="Ravi_Jaiswal_Resume.pdf" 
              className="footer-resume-link"
              title="Download Ravi Jaiswal's Resume (PDF)"
            >
              Download Resume (PDF) ↓
            </a>
            <a href="https://www.linkedin.com/in/ravi-jaiswal004/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com/Ravijaiswal047" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="mailto:javadeveloperravijaiswal@gmail.com">
              Direct Mail ↗
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
