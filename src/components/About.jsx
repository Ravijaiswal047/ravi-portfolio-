const About = () => {
  const skills = {
    Frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
    Backend: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Spring",
      "RESTful APIs",
    ],
    Database: ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools & Others": ["Git", "AWS", "Maven", "Postman", "IntelliJ", "Eclipse"],
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Java Full Stack Developer with expertise in
              building scalable web applications. With a strong foundation in
              both frontend and backend technologies, I enjoy creating seamless
              user experiences backed by robust server-side solutions.
            </p>
            <p>
              My journey in software development has led me to work with modern
              frameworks and technologies, always staying updated with the
              latest industry trends. I believe in writing clean, maintainable
              code and following best practices to deliver high-quality software
              solutions.
            </p>
            <div className="stats-grid">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skillList.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
