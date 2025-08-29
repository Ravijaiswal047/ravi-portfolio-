const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Spring Boot, and cloud services."
    },
    {
      icon: "📱",
      title: "API Development",
      description: "RESTful APIs and microservices architecture for scalable and maintainable backend systems."
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description: "Efficient database design and optimization for MySQL, PostgreSQL, and NoSQL databases."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "AWS cloud deployment, containerization with Docker, and CI/CD pipeline implementation."
    },
    {
      icon: "🔧",
      title: "Code Review",
      description: "Code quality assessment, performance optimization, and best practices implementation."
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Application performance tuning, caching strategies, and scalability improvements."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
