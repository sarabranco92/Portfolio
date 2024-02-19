import React, {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import skillsData from "../../data/skills.json"; // Asume-se que você tem seus dados aqui
import './_skills.scss'; // Seu arquivo de estilos

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // Animação só acontece uma vez por elemento
    });
  }, []);

  return (
    <section id="skills" className="skills skills-container">
      <div className="skills__header" data-aos="fade-up">
        <h2 className="skills__title">Mes Compétences</h2>
        <div className="skills__underline"></div>
      </div>
      <div className="skills-layout">
        <div className="skills__image" data-aos="fade-right">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJvemVyenFjeHB0ejNreHZsa2wyaXBiajlwM2RtNHNuZHhxdzJlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9yRMxLuRqyQ0x3jJXD/giphy.gif" alt="Skills" />
        </div>
        <div className="skills-layout__list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skills-layout__item" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
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
