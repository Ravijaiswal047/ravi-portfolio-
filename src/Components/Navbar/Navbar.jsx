import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        
        {/* Logo / Name — Locked Width, Never Shrinks */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-name">Ravi Jaiswal</span>
          <span className="brand-role">Java Backend Developer</span>
        </a>

        {/* Desktop Navigation Links — Centered, Standard Labels, Never Shrinks */}
        <nav className="navbar-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            <li>
              <a href="#work" className="nav-link">Work</a>
            </li>
            <li>
              <a href="#skills" className="nav-link">Stack</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a 
                href="/Ravi_Jaiswal_Resume.pdf" 
                download="Ravi_Jaiswal_Resume.pdf"
                className="nav-link nav-resume-link"
                title="Download Resume PDF"
              >
                Resume ↓
              </a>
            </li>
          </ul>
        </nav>

        {/* Single Standout Primary CTA — Pill Button */}
        <div className="navbar-cta-wrapper">
          <a href="#contact" className="btn-navbar-cta">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open-top' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open-bottom' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Menu Dropdown Panel — Vertically Stacked Links, 48px Tap Targets */}
      <div 
        className={`mobile-menu-panel ${mobileMenuOpen ? 'is-visible' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-list" aria-label="Mobile navigation">
          <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
            Work
          </a>
          <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>
            Stack
          </a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </a>
          <a 
            href="/Ravi_Jaiswal_Resume.pdf" 
            download="Ravi_Jaiswal_Resume.pdf" 
            className="mobile-nav-link mobile-resume-link"
            onClick={closeMenu}
          >
            Download Resume (PDF) ↓
          </a>
          <div className="mobile-cta-container">
            <a href="#contact" className="btn-mobile-primary-cta" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
