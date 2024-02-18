
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import BIRDS from 'vanta/dist/vanta.birds.min';
import Logo from '../../../public/assets/logo.webp'; 
import "../../style/_main.scss"
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
     
      <div className="header-content">
        <div className="intro-text">
        <h1 >Hi, je m'appelle Sara</h1> 
    <h2>Junior Developer</h2>
    <p>Concevoir l'exceptionnel, au carrefour de la technologie et de la créativité <br/> chaque pixel de mes créations numériques raconte une histoire. <br/> Plongez dans l'univers de mon portfolio et découvrez la symphonie de mes réalisations.</p>
  </div>
        <div className="logo-container" onClick={handleEnterClick}>
          <img src={Logo} loading="lazy" alt="Logo" className="rotating-logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
