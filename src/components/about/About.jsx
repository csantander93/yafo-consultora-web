import React, { useEffect } from 'react';
import teamImage from '../../assets/aleph-about.png';
import mockupImage from '../../assets/mockuper.png';
import './About.css';

const About = () => {
  useEffect(() => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      setTimeout(() => {
        aboutSection.classList.add('loaded');
      }, 100);
    }
  }, []);

  return (
    <section id="nosotros"  className="about-section">
      <div className="cyber-grid-overlay"></div>
      <div className="particle-background"></div>
      
      <div className="about-container">
        <div className="about-content">
          {/* Primera fila con título y descripción */}
          <div className="about-header">
            <h2 className="about-title">
              <span className="text-highlight">Transformamos</span> la gestión
              <br />de compliance con
              <br />tecnología disruptiva
            </h2>
            
            <p className="about-description">
              Expertos en sistemas financieros complejos donde la precisión y adaptabilidad son clave
            </p>
          </div>

          {/* Segunda fila con imagen del equipo y características */}
          <div className="about-row">
            <div className="about-image-wrapper">
              <img 
                src={teamImage} 
                alt="Equipo de Aleph" 
                className="about-image about-image-team"
              />
              <div className="image-caption">Equipo de consultores financieros</div>
            </div>
            
            <div className="about-features">
              <div className="feature-card">
                <h3 className="feature-title">
                  <span className="feature-icon">🔒</span>
                  Equipo especializado
                </h3>
                <p className="feature-text">
                  Profesionales calificados en la industria financiera, caracterizada por su complejidad y competitividad.
                </p>
              </div>
              
              <div className="feature-card">
                <h3 className="feature-title">
                  <span className="feature-icon">🛡️</span>
                  Servicio personalizado
                </h3>
                <p className="feature-text">
                  Flexible y profesional adaptado a cada necesidad.
                </p>
              </div>
            </div>
          </div>

          {/* Tercera fila con imagen de la plataforma y servicios */}
          <div className="about-row reverse-row">
            <div className="about-image-wrapper">
              <img 
                src={mockupImage} 
                alt="Plataforma Aleph Manager" 
                className="about-image about-image-platform"
              />
              <div className="image-caption">Plataforma Aleph Manager</div>
            </div>
            
            <div className="about-services">
              <h3 className="services-title">Nuestra tecnología</h3>
              <ul className="services-list">
                <li className="service-item">
                  <span className="service-icon">💼</span>
                  <span>Consultoría</span>
                </li>
                <li className="service-item">
                  <span className="service-icon">📊</span>
                  <span>Metodologías testeadas y verificadas en el mercado</span>
                </li>
                <li className="service-item">
                  <span className="service-icon">🌐</span>
                  <span>Gestión integrada</span>
                </li>
                <li className="service-item">
                  <span className="service-icon">🔄</span>
                  <span>Implantación y despliegue de normas internacionales</span>
                </li>
                <li className="service-item">
                  <span className="service-icon">🔧</span>
                  <span>Servicios con enfoque práctico y didáctico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;