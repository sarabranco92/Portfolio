
import skillsData from "../../data/skills.json"; 
import './_skills.scss'; 
import gifSkills from '../../../public/assets/gif.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,

    });
  }, []);


  return (
    <section id="skills" className="skills skills-container">
<div className="skills__header">
        <h2 className="skills__title" data-aos="fade-up">My Skills</h2>
        <div className="skills__underline"data-aos="fade-up"></div>
      </div>
      <div className="skills-layout">
        <div className="skills__image" data-aos="fade-up">
<img src={gifSkills} loading="lazy" alt="Skills" />        </div>
        <div className="skills-layout__list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skills-layout__item" data-aos="fade-up" data-aos-delay={`${index * 50}`}>
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
