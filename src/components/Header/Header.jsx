
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BIRDS from 'vanta/dist/vanta.birds.min';
import Logo from '../../../public/assets/logo.webp'; 
import "../../style/_main.scss"
import './_header.scss';
import AOS from 'aos';

function Header() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 200,
    });
  }, []);

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
        speedLimit: 1.00,
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
    navigate('/main'); 
  };

  return (
    <div id="home" ref={vantaRef} className="header">
     
      <div className="header-content" data-aos="fade-up">
        <div className="intro-text" data-aos="fade-up">
        <h1>Hi, I&apos;m Sara</h1>
<h2>Junior Developer</h2>
<p>Designing the exceptional, at the crossroads of technology and creativity<br/> every pixel of my digital creations tells a story.<br/> Dive into the universe of my portfolio and discover the symphony of my achievements.</p>

  </div>
        <div className="logo-container" onClick={handleEnterClick}>
          <img src={Logo} loading="lazy" alt="Logo" className="rotating-logo"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
