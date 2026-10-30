import React from 'react';
import './SkillsGrid.css';

function SkillsGrid() {
  return (
    <section id="skills" className="skills-section" aria-label="Technical Architecture & Skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-kicker">02 // Technical Domain & Competencies</span>
          <h2 className="section-headline">
            Production-proven tech stack, not arbitrary percentage bars.
          </h2>
          <p className="section-lead">
            Senior engineering is about picking the right architectural pattern for the concurrency, latency, 
            and maintenance profile of the problem.
          </p>
        </div>

        {/* Intentional Bento Arrangement */}
        <div className="bento-grid">
          
          {/* Bento Cell 1: Core Backend & Microservices (Hero Bento Item) */}
          <div className="bento-card bento-card-large">
            <div className="bento-header">
              <span className="bento-tag">// CORE SYSTEMS & MICROSERVICES</span>
              <h3 className="bento-title">Java Backend & Distributed Architecture</h3>
            </div>
            <p className="bento-desc">
              Extensive hands-on experience developing enterprise web applications, microservices, 
              and stateless REST APIs using Spring Boot and Spring Cloud.
            </p>
            <div className="skill-pills-cluster">
              <div className="skill-pill primary">Core Java (8+)</div>
              <div className="skill-pill primary">Spring Boot 3 / 2</div>
              <div className="skill-pill primary">Spring Cloud</div>
              <div className="skill-pill primary">Eureka Discovery</div>
              <div className="skill-pill primary">API Gateway</div>
              <div className="skill-pill">WebClient</div>
              <div className="skill-pill">Spring Security (JWT)</div>
              <div className="skill-pill">Spring MVC</div>
              <div className="skill-pill">Spring Data JPA</div>
              <div className="skill-pill">Hibernate ORM</div>
              <div className="skill-pill">Jakarta Bean Validation</div>
              <div className="skill-pill">JUnit 5 Testing</div>
            </div>
            <div className="bento-footer-note">
              <span>Production Scope:</span> 2 years enterprise experience (Cyber Impulses Software Solutions + Tap Academy) shipping resilient backend services.
            </div>
          </div>

          {/* Bento Cell 2: Persistence & Data Modeling */}
          <div className="bento-card">
            <div className="bento-header">
              <span className="bento-tag">// PERSISTENCE & DATA</span>
              <h3 className="bento-title">Databases & Query Tuning</h3>
            </div>
            <p className="bento-desc">
              Relational schema design, query optimization reducing latency by ~40%, and polyglot persistence.
            </p>
            <div className="skill-pills-cluster">
              <div className="skill-pill primary">MySQL</div>
              <div className="skill-pill primary">PostgreSQL</div>
              <div className="skill-pill primary">MongoDB</div>
              <div className="skill-pill">Redis (Cache & TTL)</div>
              <div className="skill-pill">Flyway Migrations</div>
              <div className="skill-pill">Index Optimization</div>
              <div className="skill-pill">ACID Concurrency Locks</div>
            </div>
          </div>

          {/* Bento Cell 3: Tools & Testing Ecosystem */}
          <div className="bento-card">
            <div className="bento-header">
              <span className="bento-tag">// TOOLING & TESTING</span>
              <h3 className="bento-title">Development & Test Tools</h3>
            </div>
            <p className="bento-desc">
              Comprehensive API contract testing, build automation, and version control workflows.
            </p>
            <div className="skill-pills-cluster">
              <div className="skill-pill primary">Git & GitHub</div>
              <div className="skill-pill primary">Postman</div>
              <div className="skill-pill primary">Bruno API Client</div>
              <div className="skill-pill">Apache Maven</div>
              <div className="skill-pill">IntelliJ IDEA</div>
              <div className="skill-pill">Docker Containers</div>
              <div className="skill-pill">Agile / Scrum</div>
            </div>
          </div>

          {/* Bento Cell 4: Human Intent & Engineering Philosophy */}
          <div className="bento-card bento-card-wide">
            <div className="bento-header">
              <span className="bento-tag">// ARCHITECTURAL NON-NEGOTIABLES</span>
              <h3 className="bento-title">How I Approach Production Code</h3>
            </div>
            <div className="tradeoff-principles-grid">
              <div className="principle-item">
                <span className="principle-number">01</span>
                <div>
                  <h4 className="principle-title">Stateless Security at the Gateway</h4>
                  <p className="principle-body">
                    Harden endpoints with Spring Security and JWT role-based access control. Let the API Gateway validate claims once and propagate headers safely downstream.
                  </p>
                </div>
              </div>
              <div className="principle-item">
                <span className="principle-number">02</span>
                <div>
                  <h4 className="principle-title">SQL Profiling Over Lazy Band-Aids</h4>
                  <p className="principle-body">
                    Analyze execution plans, eradicate N+1 join cascades, and index foreign keys properly. Caching in Redis complements a well-tuned schema—it doesn't excuse a bad one.
                  </p>
                </div>
              </div>
              <div className="principle-item">
                <span className="principle-number">03</span>
                <div>
                  <h4 className="principle-title">Clean DTO Contracts</h4>
                  <p className="principle-body">
                    Never expose database entities to the client. Enforce Jakarta Bean Validation, map DTOs explicitly, and return consistent RFC-7807 problem payloads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 5: Frontend & Integrations */}
          <div className="bento-card">
            <div className="bento-header">
              <span className="bento-tag">// CLIENT INTEGRATION</span>
              <h3 className="bento-title">Frontend & Web Tech</h3>
            </div>
            <p className="bento-desc">
              Bridging backend APIs with responsive, accessible user interfaces.
            </p>
            <div className="skill-pills-cluster">
              <div className="skill-pill primary">React.js</div>
              <div className="skill-pill">JavaScript (ES6+)</div>
              <div className="skill-pill">HTML5 & Semantic DOM</div>
              <div className="skill-pill">CSS3 & Flex/Grid</div>
              <div className="skill-pill">Bootstrap</div>
              <div className="skill-pill">Vite Modern Tooling</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SkillsGrid;
