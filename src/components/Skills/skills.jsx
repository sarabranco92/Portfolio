import React, { useState, useEffect, useRef } from 'react';
import './_skills.scss';
import skillsData from "../../data/skills.json";

function Skills() {
  const [skills, setSkills] = useState([]);
  const skillsContainerRef = useRef(null); // Reference to the skills container
  const skillsImage = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJvemVyenFjeHB0ejNreHZsa2wyaXBiajlwM2RtNHNuZHhxdzJlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9yRMxLuRqyQ0x3jJXD/giphy.gif';


  useEffect(() => {
    setSkills(skillsData);

    // Function to handle scroll event
    const handleScroll = () => {
      const skillsSection = skillsContainerRef.current;
      const scrollPosition = window.scrollY + window.innerHeight;
    
      // Check if the skills section is visible
      if (skillsSection && scrollPosition >= skillsSection.offsetTop) {
        skillsSection.querySelectorAll('.skills-layout__fill').forEach(fill => {
          fill.style.setProperty('animation-play-state', 'running');
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<div id="skills" className="skills-container animate-on-scroll">
      <div className="skills__header">
        <h2 className="skills__title text-animate" data-text="Compétences"></h2>
        <div className="skills__underline"></div>
      </div>
      <div className="skills-layout">
        <div className="skills__image">
          <img src={skillsImage} alt="Skills" />
        </div>
        <div className="skills-layout__list">
          {skills.map((skill, index) => (
            <div key={index} className="skills-layout__item">
              <div className="skills-layout__bar">
                <div
                  className="skills-layout__fill"
                  style={{ backgroundColor: skill.color, maxWidth: skill.level }}
                  >
                  <span className="skills-layout__name">{skill.name}</span>
                  <span className="skills-layout__level">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;