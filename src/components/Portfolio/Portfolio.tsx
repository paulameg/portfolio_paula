import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const projects = [
  { id: 1, name: 'Projeto A', type: 'Front-End', image: 'placeholder.jpg' },
  { id: 2, name: 'Projeto B', type: 'UI/UX', image: 'placeholder.jpg' },
  { id: 3, name: 'Projeto C', type: 'Front-End', image: 'placeholder.jpg' },
  { id: 4, name: 'Projeto D', type: 'UI/UX', image: 'placeholder.jpg' },
  { id: 5, name: 'Projeto E', type: 'Front-End', image: 'placeholder.jpg' },
  { id: 6, name: 'Projeto F', type: 'UI/UX', image: 'placeholder.jpg' },
];

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedType === 'Todos' || project.type === selectedType
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
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeProject}>
              &times;
            </span>
            <h2>{projects.find((p) => p.id === selectedProject)?.name}</h2>
            <p>
              Breve descrição do projeto, suas funcionalidades, tecnologias
              utilizadas, etc.
            </p>
            <p>
              <a href="#">Link para o projeto</a> |{' '}
              <a href="#">Repositório</a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
