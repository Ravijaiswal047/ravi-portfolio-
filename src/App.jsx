import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import SkillsGrid from './Components/Architecture/SkillsGrid';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <CaseStudies />
        <SkillsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
