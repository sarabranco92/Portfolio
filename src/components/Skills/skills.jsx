
import 'aos/dist/aos.css'; 
import skillsData from "../../data/skills.json"; 
import './_skills.scss'; 

function Skills() {
 

  return (
    <section id="skills" className="skills skills-container">
<div className="skills__header" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100">
        <h2 className="skills__title">Mes Compétences</h2>
        <div className="skills__underline"></div>
      </div>
      <div className="skills-layout">
        <div className="skills__image" data-aos="fade-up">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJvemVyenFjeHB0ejNreHZsa2wyaXBiajlwM2RtNHNuZHhxdzJlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9yRMxLuRqyQ0x3jJXD/giphy.gif" alt="Skills" />
        </div>
        <div className="skills-layout__list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skills-layout__item" data-aos="fade-up" data-aos-delay={`${index * 500}`}>
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
