// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1 // This value triggers the callback when 10% of the target is visible
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Cleanup function to unobserve all elements
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

export default useScrollAnimation;
