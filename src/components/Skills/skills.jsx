// src/components/Skills.jsx
import React, { useState, useEffect } from 'react'; 
import './_skills.scss';
import skillsData from "../../data/skills.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faSass, faReact, faGitAlt, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


const iconMap = {
  html5: faHtml5,
  css3: faCss3Alt,
  js: faJs,
  sass: faSass,
  react: faReact,
  "git-alt": faGitAlt,
  nodejs: faNodeJs,
  database: faDatabase,
};

function Skills() {
 
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    const loadedSkills = skillsData.map(skill => ({
      ...skill, 

      icon: iconMap[skill.icon]

    }));
    setSkills(loadedSkills);
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">My Skill Set</h2>
      <div className="skills__underline"></div>
      <div className='skill__total'>
      <div className="skills__container">
        {skills.map((skill) => (
          <div key={skill.name} className="skills__item">
      <FontAwesomeIcon icon={skill.icon} className="skills__logo" style={{ color: skill.color }} />
            <div className="skills__progress">
              <div className="skills__progress-bar" style={{ width: skill.level, backgroundColor: skill.color }}></div>
            </div>
            <span className="skills__level">{skill.level}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Skills;
