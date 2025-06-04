import React from 'react';
import './Footer.css';
import logoYafo from '../../assets/Logo-Yafo-JPG_grises-150dpi.webp';

const Footer = () => {
  return (
    <footer className="footer-container" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-content">
        <div className="footer-logo-section" itemScope itemType="https://schema.org/Organization">
          <a 
            href="#" 
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