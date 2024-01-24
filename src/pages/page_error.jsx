import React from 'react';
import Navbar from '../components/navbar/navbar';
import Error from '../components/error/error_comp';
import Footer from '../components/footer/footer';

import "../styles/App.scss"


function PageError() {
  return (
    <div>
      
        <Navbar />
        <Error/>
     
      <Footer/>
    </div>
  );
}

export default PageError;
