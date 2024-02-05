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
    <section id="portfolio" className="projects">
      <h2 className="projects__title">MES PROJETS</h2>
      <div className="projects__grid">
        {projectData.map((project) => (
          <div
            className="projects__item"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="projects__image" />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="projects__modal">
          <div className="projects__modal-content">
            <span className="projects__modal-close" onClick={closeModal}>&times;</span>
            <div className="projects__modal-column">
              <img src={selectedProject.modalImage} alt={selectedProject.title} className="projects__modal-img" />
              <ul className="projects__modal-technologies">
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
