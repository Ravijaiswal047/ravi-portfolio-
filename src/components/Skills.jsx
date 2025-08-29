const Skills = () => {
  const skills = {
    "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs"],
    "Database": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "Tools & Others": ["Git", "Docker", "AWS", "Maven", "Postman", "VS Code"]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
