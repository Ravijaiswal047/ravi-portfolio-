const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <div className="experience-header">
            <h3>Java Full Stack Developer Trainee</h3>
            <span className="experience-company">Tap Academy</span>
            <span className="experience-duration">2025 - Present</span>
          </div>
          
          <div className="experience-achievements">
            <div className="achievement-item">
              <span className="achievement-metric">15%</span>
              <p className="achievement-desc">Improved user engagement through optimized UI/UX design</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-metric">20%</span>
              <p className="achievement-desc">Enhanced database query performance</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-metric">500+</span>
              <p className="achievement-desc">API endpoints developed and maintained</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-metric">99.9%</span>
              <p className="achievement-desc">Application uptime achieved</p>
            </div>
          </div>

          <div className="experience-skills">
            <span className="skill-badge">Java</span>
            <span className="skill-badge">Spring Boot</span>
            <span className="skill-badge">React</span>
            <span className="skill-badge">MySQL</span>
            <span className="skill-badge">AWS</span>
            <span className="skill-badge">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
