// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import projectData from '../../data/portfolio.json';
import './_portfolio.scss';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

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
        {projects.map((project) => (
          <div 
            className="projects__item" 
            onMouseEnter={(e) => e.currentTarget.classList.add('projects__item--rotating')}
            onMouseLeave={(e) => e.currentTarget.classList.remove('projects__item--rotating')}
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
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
