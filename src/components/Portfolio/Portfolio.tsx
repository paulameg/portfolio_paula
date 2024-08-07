import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import { projects } from './projects';
import ProjectModal from './ProjectModal';

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) => selectedType === 'Todos' || project.type === selectedType
  );

  const openProject = (id: number) => {
    setSelectedProject(id);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.buttons}>
        {['Todos', 'Front-End', 'UI/UX'].map((type) => (
          <button
            key={type}
            className={selectedType === type ? styles.active : ''}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => openProject(project.id)}
          >
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.name} />
            </div>
            <h3>{project.name}</h3>
            <p>{project.type}</p>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject) || null}
          onClose={closeProject}
        />
      )}
    </section>
  );
};

export default Portfolio;
