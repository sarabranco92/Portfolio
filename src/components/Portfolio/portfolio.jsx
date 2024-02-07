import React, { useState } from 'react';
import projectData from '../../data/portfolio.json';
import './_portfolio.scss';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title">Project Highlights</h2>
      <div className="portfolio__underline"></div>
      <div className="portfolio__grid">
        {projectData.map((project) => (
          <div key={project.id} className="portfolio__item" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="portfolio__image" />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <span className="portfolio__modal-close" onClick={closeModal}>&times;</span>
            <div className="portfolio__modal-column">
              <img src={selectedProject.modalImage} alt={selectedProject.title} className="projects__modal-img" />
              <ul className="portfolio__modal-technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="projects__modal-center">
              <h3 className="projects__modal-title">{selectedProject.title}</h3>
              <p className="projects__modal-description">{selectedProject.description}</p>
              <a href={selectedProject.url} className="projects__modal-visit" target="_blank" rel="noopener noreferrer">VISITER LE SITE</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
