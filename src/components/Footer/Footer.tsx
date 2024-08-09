import React from 'react';
import styles from './Footer.module.css';

import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

import Logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <div className={styles.socialMedia}>
            <a href="https://github.com/paulameg" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/paula-takahashi-065527158/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/by_megu/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://wa.me/16982372094" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
          </div>
          <div className={styles.contact}>
            <FaEnvelope /> paulatakahashi4@gmail.com
          </div>
          
        </div>
        
      </div>
      <div className={styles.copyright}>
            <p>&copy; 2024 Paula Takahashi. Todos os direitos reservados.</p>
          </div>
    </footer>
  );
};

export default Footer;
