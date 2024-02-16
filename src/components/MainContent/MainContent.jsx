import Navbar from '../navbar/navbar';
import Presentation from '../Presentation/presentation';
import Portfolio from '../Portfolio/portfolio';
import Skills from '../Skills/skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/footer';
import "../../style/_main.scss";
import React, { useState, useEffect } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

function MainContent() {
  const [selectedProject] = useState(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = React.useRef(null);

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
        backgroundAlpha: 0,
        backgroundColor: 0x0, 
        color1: 0xdbdbdb,
        color2: 0xe0e0e0,
        birdSize: 0.20,
        wingSpan: 5.00,
        speedLimit: 2.00,
        separation: 100.00,
        alignment: 50.00,
        cohesion: 100.00,
      }));
      
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

 
  return (
    <> 
     <div className={`background ${selectedProject ? 'modal-open' : ''}`} ref={vantaRef}>
    <div ref={vantaRef} className='background'>
      <Navbar />
      <Presentation />
       <Portfolio />
       <Skills />
      <Contact />
      </div>
      </div>
      <Footer />
    </>
  );
}

export default MainContent;