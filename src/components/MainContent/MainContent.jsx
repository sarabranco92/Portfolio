// src/components/MainContent.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Presentation from '../Presentation/Presentation';
import Portfolio from '../Portfolio/portfolio';
import Skills from '../Skills/skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/footer';

function MainContent() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default MainContent;
