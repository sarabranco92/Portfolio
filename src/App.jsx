// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent'; 
import PageError from './components/PageError/error';
import 'animate.css/animate.min.css';

import "../src/style/_main.scss";

function App() {
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
