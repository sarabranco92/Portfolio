// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import projectData from '../../data/portfolio.json';
import './_portfolio.scss';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load the projects from the JSON file into state
    setProjects(projectData);
  }, []);

  // Function to open project modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="projects">
      <h2 className="projects__title">MES PROJETS</h2>
      {/* Optional: Filter buttons go here */}
      <div className="projects__grid">
        {projects.map((project) => (
          <div className="projects__item" key={project.id} onClick={() => openModal(project)}>
            {/* Make sure the `project.image` path is correct */}
            <img src={project.image} alt={project.title} className="projects__image" />
            <h3 className="projects__item-title">{project.title}</h3>
            {/* Add additional project info if needed */}
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="projects__modal">
          <div className="projects__modal-content">
            <span className="projects__modal-close" onClick={closeModal}>&times;</span>
            <h3>{selectedProject.title}</h3>
            {/* Make sure the `selectedProject.image` path is correct */}
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            {/* Add additional details and a link to the project if available */}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
