import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import logoYafo from '../../assets/Logo Yafo JPG_grises 300 dpi.jpg';

const Footer = () => {
  return (
    <footer className="footer-container" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-content">
        <div className="footer-logo-section" itemScope itemType="https://schema.org/Organization">
          <a 
            href="https://yafoconsultora.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visitar sitio de Yafo Consultora"
          >
            <img 
              src={logoYafo} 
              alt="Logo Yafo Consultora" 
              className="info-logo" 
              itemProp="logo"
              loading="lazy"
            />
          </a>
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/company/yafo-consultora-srl/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visitar nuestro perfil de LinkedIn" 
              className="social-icon"
              itemProp="sameAs"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn de Yafo Consultora</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p itemProp="copyrightYear">
          &copy; {new Date().getFullYear()} <span itemProp="copyrightHolder">YAFO CONSULTORA S.R.L</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;