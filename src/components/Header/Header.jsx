// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import Logo from "../../assets/logo2.png";

import './_header.scss'; // Make sure the file path is correct

function Header() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = React.useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x0,
        points: 12.00,
        maxDistance: 23.00,
        spacing: 18.00
        // customize these options to suit your style
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header-title">
        DÉVELOPPEUR FULLSTACK
        </div>
        <div className="header-subtitle">
        Sara Branco        </div>
      </div>
    </div>
  );
}

export default Header;