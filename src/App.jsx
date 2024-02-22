
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent'; 
import PageError from './components/PageError/error';
import 'animate.css/animate.min.css';

import "../src/style/_main.scss";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false, 
      mirror: false,
   
    });
  }, []);

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
