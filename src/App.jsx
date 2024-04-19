
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import PageError from './components/PageError/error';
import 'animate.css/animate.min.css';

import "../src/style/_main.scss";

import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 70; // Use the height of your header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<MainContent />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  );
}

export default App;
