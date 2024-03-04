// ErrorPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BIRDS from 'vanta/dist/vanta.birds.min';
import Logo from '../../../public/assets/logo.webp'; 
import "../../style/_main.scss";
import "./_error.scss"; // Make sure the path is correct and contains the necessary styles similar to _header.scss
import AOS from 'aos';

function PageError() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 200,
    });
    
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0xff001a,
        color2: 0xb10000,
        birdSize: 0.50,
        wingSpan: 10.00,
        speedLimit: 1.00,
        separation: 11.00,
        alignment: 50.00,
        cohesion: 100.00,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div ref={vantaRef} className="error-page">
      <div className="error-content" data-aos="fade-up">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn&apos;t exist or another error occurred.</p>
        <button onClick={handleGoHome} className="home-button">Go back to homepage</button>
      </div>
    </div>
  );
}

export default PageError;
