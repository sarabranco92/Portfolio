import React, { useState, useEffect, useRef } from 'react';
import './_skills.scss';
import skillsData from "../../data/skills.json";

function Skills() {
  const [skills, setSkills] = useState([]);
  const skillsImage = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJvemVyenFjeHB0ejNreHZsa2wyaXBiajlwM2RtNHNuZHhxdzJlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9yRMxLuRqyQ0x3jJXD/giphy.gif';
  const skillsRef = useRef(null);

  useEffect(() => {

    if (skillsRef.current) {
      skillsRef.current.style.zIndex = null;
    }

    setSkills(skillsData);

    const handleScroll = () => {
      const skillsSection = skillsContainerRef.current;
      const scrollPosition = window.scrollY + window.innerHeight;
    
      if (skillsSection && scrollPosition >= skillsSection.offsetTop) {
        skillsSection.querySelectorAll('.skills-layout__fill').forEach(fill => {
          fill.style.setProperty('animation-play-state', 'running');
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
<section id="skills" ref={skillsRef} className=" skills skills-container">
      <div className="skills__header">
        <h2 className="skills__title">Mes Compétences</h2>
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
    </section>
  );
}

export default Skills;
