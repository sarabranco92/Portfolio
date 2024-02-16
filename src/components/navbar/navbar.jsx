import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "/assets/logo.webp";
import cvFile from '../../../public/assets/Sara_BrancoCV.pdf';
import './_navbar.scss';

const sections = ['#presentation', '#portfolio', '#skills', '#contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isAfterVanta, setIsAfterVanta] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      const el = document.querySelector(section);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.querySelector(section);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeFixed = window.scrollY > window.innerHeight;
      setIsAfterVanta(shouldBeFixed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle the mobile navigation
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };



    const handleClickScroll = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  

  return (
    <nav className={`navbar ${isAfterVanta ? 'is-after-vanta' : ''}`}>
      <Link to="/" className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <button className="navbar__toggle" onClick={toggleNav}>
        <i className="fas fa-bars"></i> 
      </button>
      <div className={`navbar__links ${isNavExpanded ? 'is-expanded' : ''}`}>
        {sections.map((section) => {
          const sectionId = section.replace('#', '');
          return (
            <div onClick={() => handleClickScroll(sectionId)} key={sectionId}>
            {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} 
          </div>
          );
        })}
        <a
          href={cvFile}
          className="navbar__link"
          target="_blank"
          rel="noopener noreferrer" // security reasons
          onClick={() => setIsNavExpanded(false)} // Close the navbar when the CV link is clicked
        >
          CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;