import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/presentation';
import Portfolio from './components/Portfolio/portfolio';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import "./assets/_main.scss";


function App() {
  return (
    <>
    <Header />
      <Navbar />
      <Presentation />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

