// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent'; // You'll create this component
import "../public/assets/_main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
