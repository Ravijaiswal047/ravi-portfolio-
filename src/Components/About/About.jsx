import React from "react";
import "./About.css";
import bg from "../../assets/bg.png";

function About() {
  return (
    <section id="about" className="about-section" aria-label="About and Approach">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-kicker">03 // Background & Verified Track Record</span>
          <h2 className="section-headline">
            Enterprise backend developer backed by 2 years of production delivery.
          </h2>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="about-grid">
          
          {/* Left Column: First-Person Narrative & Experience Timeline */}
          <div className="about-narrative">
            <p className="narrative-lead">
              I am Ravi Jaiswal—a Java Backend Developer based in New Delhi, India. I specialize in 
              building enterprise web services with Spring Boot, designing microservices with Spring Cloud, 
              optimizing relational and NoSQL databases, and delivering resilient, zero-defect APIs in Agile teams.
            </p>

            {/* Experience Timeline */}
            <div className="timeline-block">
              <h3 className="timeline-title">// PROFESSIONAL EXPERIENCE</h3>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-role">Java Developer</h4>
                      <span className="timeline-company">Cyber Impulses Software Solutions • Indore, MP</span>
                    </div>
                    <span className="timeline-date">Oct 2024 – Oct 2026</span>
                  </div>
                  <ul className="timeline-bullets">
                    <li>Engineered and shipped client-facing REST APIs, cutting integration effort by ~30% and streamlining data flow.</li>
                    <li>Architected microservices with Spring Cloud (Eureka Discovery, API Gateway), decoupling services for independent deployments.</li>
                    <li>Optimized SQL queries and redesigned schemas, slashing average API response times by ~40% under production loads.</li>
                    <li>Implemented stateless authentication and role-based authorization with Spring Security & JWT across 15+ secured endpoints.</li>
                    <li>Integrated third-party APIs, payment gateways, and raised system reliability with JUnit test suites.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-role">Java Developer Trainee</h4>
                      <span className="timeline-company">Tap Academy • Bengaluru, India</span>
                    </div>
                    <span className="timeline-date">Jan 2024 – Jul 2024</span>
                  </div>
                  <ul className="timeline-bullets">
                    <li>Built reliable RESTful APIs with Java and Spring Boot in a 4-developer Agile team.</li>
                    <li>Optimized MongoDB and MySQL queries to maximize scalability and secured endpoints via JWT.</li>
                    <li>Participated actively in daily stand-ups, sprint planning, and peer code reviews.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Block */}
            <div className="education-block">
              <h3 className="timeline-title">// EDUCATION & ACADEMIC CREDENTIALS</h3>
              <div className="education-cards">
                <div className="edu-card">
                  <div className="edu-year">2024</div>
                  <div className="edu-details">
                    <h4 className="edu-degree">Master of Computer Applications (MCA)</h4>
                    <span className="edu-school">Galgotias University, Greater Noida, UP</span>
                    <span className="edu-grade">GPA: 7.56 / 10 • Computer Science</span>
                  </div>
                </div>

                <div className="edu-card">
                  <div className="edu-year">2021</div>
                  <div className="edu-details">
                    <h4 className="edu-degree">Bachelor of Computer Applications (BCA)</h4>
                    <span className="edu-school">PDM University, Haryana</span>
                    <span className="edu-grade">Computer Science & Application Development</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Verified Human Card */}
          <div className="about-sidebar">
            <div className="portrait-frame">
              <div className="portrait-image-wrapper">
                <img src={bg} alt="Ravi Jaiswal - Java Backend Developer" className="portrait-image" />
              </div>
              <div className="portrait-caption">
                <div className="caption-top">
                  <span className="caption-name">Ravi Jaiswal</span>
                  <span className="caption-badge">ACTIVE CANDIDATE</span>
                </div>
                <p className="caption-role">
                  Java Backend Developer • Spring Boot & Microservices
                </p>
                <div className="caption-location">
                  📍 New Delhi, India • Open to Remote & Hybrid
                </div>
                <div className="caption-contact-links">
                  <a href="tel:+917042521638" className="caption-link">
                    📞 +91 70425 21638
                  </a>
                  <a href="mailto:javadeveloperravijaiswal@gmail.com" className="caption-link">
                    ✉️ javadeveloperravijaiswal@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions Card with Prominent Download Resume Button */}
            <div className="sidebar-action-card">
              <span className="action-card-label">// RESUME FOR CLIENTS & RECRUITERS</span>
              <p className="action-card-desc">
                Download the complete verified curriculum vitae with detailed project breakdowns, 
                architectural diagrams, and reference history.
              </p>
              <a 
                href="/Ravi_Jaiswal_Resume.pdf" 
                download="Ravi_Jaiswal_Resume.pdf"
                className="btn-sidebar-download"
                id="about-download-resume"
                title="Download Ravi Jaiswal's Full Resume (PDF)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume (PDF)
              </a>
            </div>

            {/* Profiles Cluster */}
            <div className="sidebar-profiles-cluster">
              <a 
                href="https://www.linkedin.com/in/ravi-jaiswal004/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sidebar-profile-btn linkedin"
              >
                LinkedIn: /in/ravi-jaiswal004 ↗
              </a>
              <a 
                href="https://github.com/Ravijaiswal047" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sidebar-profile-btn github"
              >
                GitHub: Ravijaiswal047 ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
