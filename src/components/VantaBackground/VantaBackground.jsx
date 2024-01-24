import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import "./_vantaBackground.scss";


const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (window.VANTA) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE, // Use the imported THREE
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x252425
      });
    }
    return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, []);
  
    return <div ref={vantaRef} className="vantaBackground" />;
  };
  
  export default VantaBackground;
