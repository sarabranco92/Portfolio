import React, { useEffect } from 'react';

const useAnimateOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // If the target has data-text, start typing animation
            if (entry.target.dataset.text) {
              typeText(entry.target, entry.target.dataset.text);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.text-animate');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};


const typeText = (element, text) => {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); 
    }
  }
  element.textContent = ''; 
  type();
};

export default useAnimateOnScroll;
