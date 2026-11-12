import React, { useRef, useEffect } from "react";
import "./Hero.css";
import Typed from "typed.js";
import bg from "../../assets/bg.png";

function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Spring Boot 3 & Microservices Architecture",
        "Labrox LIMS (9 Domain Microservices)",
        "Spring Cloud (Eureka & API Gateway)",
        "OpenSearch 8 & Keyset Pagination",
        "Kafka Event Streams & Redis Caching",
        "React 18 & Redux Toolkit Web Apps"
      ],
      typeSpeed: 45,
      backSpeed: 25,
      startDelay: 400,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        
        {/* Left Column — Editorial Hierarchy & Value Proposition */}
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="kicker-tag">// JAVA BACKEND DEVELOPER • MICROSERVICES • REST APIs</span>
            <span className="kicker-location">NEW DELHI, INDIA • +91 70425 21638</span>
          </div>

          <h1 className="hero-title">
            Architecting robust enterprise microservices & high-performance backend systems.
          </h1>

          <div className="hero-typed-wrapper">
            <span className="typed-prefix">Specializing in:&nbsp;</span>
            <span ref={typedEl} className="typed-text" />
          </div>

          <p className="hero-description">
            I am Ravi Jaiswal, a <strong>Java Backend Developer with 2 years of enterprise experience</strong> building 
            scalable microservices, high-throughput REST APIs, and event-driven architectures. Proven track record 
            at <em>Cyber Impulses Software Solutions</em> reducing API latency by ~40% through SQL query optimization, 
            hardening 15+ secured endpoints with JWT role-based access control, and engineering <strong>Labrox LIMS</strong>—an 
            enterprise platform of 9 domain-driven microservices with clinical workflow automation and search across 10M+ records.
          </p>

          {/* Primary Action — Prominent Download Resume Button for Clients */}
          <div className="hero-cta-group">
            <a 
              href="/Ravi_Jaiswal_Resume.pdf" 
              download="Ravi_Jaiswal_Resume.pdf"
              className="btn-primary-cta btn-download-resume"
              id="hero-download-resume"
              title="Download Client Copy of Ravi Jaiswal's Resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
            
            <a href="#work" className="btn-secondary-cta">
              Explore Shipped Work →
            </a>

            <a href="tel:+917042521638" className="btn-phone-cta" title="Call directly">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 70425 21638
            </a>
          </div>

          {/* Proof of Human Intent — Production Metrics Bento */}
          <div className="hero-metrics-grid" role="region" aria-label="Engineering metrics">
            <div className="metric-cell">
              <span className="metric-number">2+ Yrs</span>
              <span className="metric-label">Enterprise Java Development</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">~40%</span>
              <span className="metric-label">API Latency Reduction Under Load</span>
            </div>
            <div className="metric-cell">
              <span className="metric-number">15+</span>
              <span className="metric-label">Hardened Microservices Endpoints</span>
            </div>
          </div>
        </div>

        {/* Right Column — Asymmetric Architecture Console & Identity */}
        <div className="hero-aside">
          <div className="console-window">
            <div className="console-header">
              <div className="console-controls" aria-hidden="true">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
              <span className="console-title">ravi-jaiswal // production.env</span>
            </div>
            
            <div className="console-body">
              <div className="console-line">
                <span className="c-dim">01</span>
                <span className="c-key">developer:</span> <span className="c-str">"Ravi Jaiswal"</span>
              </div>
              <div className="console-line">
                <span className="c-dim">02</span>
                <span className="c-key">role:</span> <span className="c-str">"Java Backend Developer"</span>
              </div>
              <div className="console-line">
                <span className="c-dim">03</span>
                <span className="c-key">site:</span> <a href="https://ravi-portfolio-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="c-link">"ravi-portfolio-theta.vercel.app"</a>
              </div>
              <div className="console-line">
                <span className="c-dim">04</span>
                <span className="c-key">email:</span> <a href="mailto:javadeveloperravijaiswal@gmail.com" className="c-link">"javadeveloperravijaiswal@gmail.com"</a>
              </div>
              <div className="console-line">
                <span className="c-dim">05</span>
                <span className="c-key">phone:</span> <a href="tel:+917042521638" className="c-link">"+91 70425 21638"</a>
              </div>
              <div className="console-line">
                <span className="c-dim">06</span>
                <span className="c-key">linkedin:</span> <a href="https://www.linkedin.com/in/ravi-jaiswal004/" target="_blank" rel="noopener noreferrer" className="c-link">"in/ravi-jaiswal004"</a>
              </div>
              <div className="console-line">
                <span className="c-dim">07</span>
                <span className="c-key">github:</span> <a href="https://github.com/Ravijaiswal047" target="_blank" rel="noopener noreferrer" className="c-link">"github.com/Ravijaiswal047"</a>
              </div>
              <div className="console-line">
                <span className="c-dim">08</span>
                <span className="c-key">stack:</span> <span className="c-val">["Java 21", "Spring Boot 3", "Kafka", "PostgreSQL 16", "OpenSearch 8"]</span>
              </div>
              <div className="console-line">
                <span className="c-dim">09</span>
                <span className="c-key">availability:</span> <span className="c-highlight">"Available for Full-Time Roles"</span>
              </div>
            </div>

            <div className="console-snapshot">
              <div className="snapshot-avatar-wrapper">
                <img src={bg} alt="Ravi Jaiswal Profile Preview" className="snapshot-avatar" />
              </div>
              <div className="snapshot-info">
                <span className="snapshot-name">Ravi Jaiswal</span>
                <span className="snapshot-caption">MCA • Galgotias Univ | BCA • PDM Univ</span>
                <span className="snapshot-commit">
                  <a href="/Ravi_Jaiswal_Resume.pdf" download="Ravi_Jaiswal_Resume.pdf" className="snapshot-download-link">
                    📄 Download Resume (PDF)
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
