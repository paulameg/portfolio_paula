import React from "react";
import styles from './About.module.css';
import { FaCss3Alt, FaHtml5, FaJs, FaFigma, FaReact } from 'react-icons/fa';
import { SiAngular } from 'react-icons/si';

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <h1>Sobre mim</h1>
            <p>Sou formada em Análise e Desenvolvimento de Sistemas pela FATEC de Ribeirão Preto, com uma paixão especial pela parte visual e estética dos projetos. Isso me levou a me especializar em front-end e UI/UX Design. Continuo desenvolvendo habilidades técnicas e adquirindo conhecimento em diversas tecnologias. Além da tecnologia, sou desenhista, o que complementa meu interesse por design.</p>
            <p>Abaixo, você pode conferir algumas das tecnologias com as quais já trabalhei.</p>
            <div className={styles.techIcons}>
                <div className={styles.icon}><FaCss3Alt /></div>
                <div className={styles.icon}><FaHtml5 /></div>
                <div className={styles.icon}><FaJs /></div>
                <div className={styles.icon}><FaFigma /></div>
                <div className={styles.icon}><FaReact /></div>
                <div className={styles.icon}><SiAngular /></div>
            </div>
        </section>
    );    
};

export default About;