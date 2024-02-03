// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate here
import BIRDS from 'vanta/dist/vanta.birds.min';
import Logo from "../../assets/logo2.png";

import './_header.scss';


function Header() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = React.useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
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
        speedLimit: 2.00,
        separation: 11.00,
        alignment: 50.00,
        cohesion: 100.00
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleEnterClick = () => {
    navigate('/main'); // Use navigate function here
  };

  return (
    <div id="home" ref={vantaRef} className="header">
      <div className="header-content">

        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="intro-text">
          <h1>Hello, i m Sara</h1>
          <h2>Full-Stack Developer</h2>
          <p>Engineering seamless solutions and memorable digital experiences.</p>
        </div>
        <button onClick={handleEnterClick} className="button">
          Discover My Work
        </button>
      </div>
    </div>
  );
}

export default Header;
