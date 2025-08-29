const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Book Finder Application",
      description: "A comprehensive book search application with user authentication, favorites, and detailed book information using Google Books API.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Ravijaiswal047/Book-Finder-Application-",
      demo: "https://github.com/Ravijaiswal047/Book-Finder-Application-",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&auto=format",
      icon: "📚"
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "Real-time currency conversion application with historical data visualization and multiple currency support.",
      technologies: ["JavaScript", "Chart.js", "REST API", "CSS3"],
      github: "https://github.com/Ravijaiswal047/Currency_Converter",
      demo: "https://github.com/Ravijaiswal047/Currency_Converter",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&auto=format",
      icon: "💱"
    },
    {
      id: 3,
      title: "Journal Entry App",
      description: "Personal journal application with rich text editor, mood tracking, and secure cloud storage.",
      technologies: ["Java", "Spring Boot", "MySQL", "React"],
      github: "https://github.com/Ravijaiswal047/Journal_Entry_Application",
      demo: "https://github.com/Ravijaiswal047/Journal_Entry_Application",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop&auto=format",
      icon: "📝"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-image-fallback">
                  <span className="project-image-icon">{project.icon}</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
