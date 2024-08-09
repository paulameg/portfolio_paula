import React from "react";
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Perfil from '../../../public/perfil.png';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>Paula Takahashi</h1>
                    <h2>Desenvolvedora Front-End | UI/UX Designer</h2>
                    <div className={styles.line}></div>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/paulameg" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/paula-takahashi-065527158/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://wa.me/16982372094" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src={Perfil} alt="Paula Takahashi" />
                </div>
            </div>
        </section>
        
    );
};

export default Hero;