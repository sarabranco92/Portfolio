// src/components/Skills.jsx
import React from 'react';
import './_Skills.scss';

function Skills() {
  // Define your skills data
  const skills = [
    { name: 'HTML5', level: '98%' },
    { name: 'CSS', level: '94%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'SASS', level: '90%' },
    { name: 'React', level: '92%' },
  
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">MES COMPÉTENCES</h2>
      <div className="skills__container">
        {skills.map((skill) => (
          <div key={skill.name} className="skills__item">
            <span className="skills__name">{skill.name}</span>
            <div className="skills__progress">
              <div className="skills__progress-bar" style={{ width: skill.level }}></div>
            </div>
            <span className="skills__level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
