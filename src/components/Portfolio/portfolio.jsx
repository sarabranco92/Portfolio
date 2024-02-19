// Importações necessárias
import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Importe o AOS
import 'aos/dist/aos.css'; // Importe o CSS do AOS
import projectData from '../../data/portfolio.json';
import './_portfolio.scss'; // Certifique-se de que o caminho está correto

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Inicialize o AOS quando o componente montar
    AOS.init({
      duration: 1000, // Configura a duração das animações para 1 segundo
      once: true, // As animações só acontecem uma vez ao fazer scroll
    });
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Impede o scroll quando o modal está aberto
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Permite o scroll quando o modal é fechado
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title" data-aos="fade-up">Mes Projets</h2>
      <div className="portfolio__underline" data-aos="fade-up"></div>
      <div className="portfolio__grid">
        {projectData.map((project, index) => (
          <div key={project.id} className="portfolio__item" data-aos="fade-up" data-aos-delay={`${index * 100}`} onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="portfolio__image" />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <span className="portfolio__modal-close" onClick={closeModal}>&times;</span>
            <div className="portfolio__modal-column">
              <img src={selectedProject.modalImage} alt={selectedProject.title} className="portfolio__modal-img" />
              <a href={selectedProject.url} className="portfolio__modal-visit" target="_blank" rel="noopener noreferrer">VISITER LE SITE</a>
            </div>
            <div className="portfolio__modal-center">
              <h3 className="portfolio__modal-title">{selectedProject.title}</h3>
              <p className="portfolio__modal-description">{selectedProject.description}</p>
              <ul className="portfolio__modal-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index} className="portfolio__tech-item">
                    <img src={tech.image} alt={tech.name} className="portfolio__tech-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
