import React from 'react';
import styles from './Portfolio.module.css';

interface Project {
    id: number;
    name: string;
    type: string;
    image: string;
    projectLink: string;
    repoLink?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>
                    &times;
                </span>
                <h2>{project.name}</h2>
                <p>Breve descrição do projeto, suas funcionalidades, tecnologias utilizadas, etc.</p>
                <p>
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Link para o projeto</a>
                    {project.repoLink && (
                        <>
                        {' | '}
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repositório</a>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProjectModal;