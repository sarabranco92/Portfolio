import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/home';
import Portfolio from './pages/portfolio/portfolio';
import PageError from './pages/page_error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
