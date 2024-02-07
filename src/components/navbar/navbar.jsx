
import React, { useState, useEffect } from 'react';
import Logo from "/assets/logo.png";
import { Link } from 'react-router-dom';
import './_Navbar.scss';

const sections = ['#presentation', '#portfolio', '#skills', '#contact', '#cv'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isAfterVanta, setIsAfterVanta] = useState(false);



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


  return (
    <nav className={`navbar ${isAfterVanta ? 'is-after-vanta' : ''}`}>
      <Link to="/" className="navbar__logo"> <img src={Logo} alt="Logo" /></Link>
      <div className="navbar__links">
        {sections.map((section) => {
          const sectionId = section.replace('#', '');
          return (
            <a
              href={section}
              key={sectionId}
              className={`navbar__link ${activeSection === sectionId ? 'active' : ''}`}
            >
              {sectionId.toUpperCase()}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
