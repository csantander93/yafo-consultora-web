import React, { useEffect } from 'react';
import teamImage from '../../assets/aleph-about.png';
import mockupImage from '../../assets/mockuper.png';
import './About.css';

const About = () => {
  useEffect(() => {
    // Efecto de aparición suave sin complicaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre-nosotros" className="about-section">
      {/* Fondo con efecto de cuadrícula */}
      <div className="about-background">
        <div className="about-grid-pattern"></div>
        <div className="about-gradient-overlay"></div>
      </div>

      <div className="about-container">
        {/* Encabezado */}
        <div className="about-header" data-animate>
          <h1 className="about-title">
            <span className="title-line">Transformamos la gestión</span>
            <span className="title-line">de compliance con tecnología</span>
            <span className="title-line accent-line">de vanguardia</span>
          </h1>
          <p className="about-subtitle">
            Expertos en sistemas financieros complejos donde la precisión y adaptabilidad son clave
          </p>
        </div>

        {/* Sección 1 - Texto izquierda, imagen derecha */}
        <div className="about-content-block" data-animate>
          <div className="about-text-content">
            <h2 className="about-block-title">
              <span className="title-decoration"></span>
              Equipo especializado
            </h2>
            <div className="about-text-block">
              <p>
                Profesionales calificados en la industria financiera, caracterizada por su complejidad y competitividad.
              </p>
            </div>
            <div className="about-text-block accent-block">
              <p>
                Servicio personalizado, flexible y profesional adaptado a cada necesidad.
              </p>
            </div>
          </div>
          
          <div className="about-image-content">
            <div className="about-image-container">
              <img 
                src={teamImage} 
                alt="Equipo de consultores financieros" 
                className="about-image"
              />
              <div className="image-highlight"></div>
            </div>
          </div>
        </div>

        {/* Sección 2 - Imagen izquierda, texto derecha */}
        <div className="about-content-block reversed" data-animate>
          <div className="about-image-content">
            <div className="about-image-container">
              <img 
                src={mockupImage} 
                alt="Plataforma Aleph Manager" 
                className="about-image"
              />
              <div className="image-highlight reverse-highlight"></div>
            </div>
          </div>

          <div className="about-text-content">
            <h2 className="about-block-title">
              <span className="title-decoration"></span>
              Nuestra tecnología
            </h2>
            <div className="about-features">
              {[
                {
                  title: "Consultoría",
                  description: "Metodologías testeadas y verificadas en el mercado.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Gestión integrada",
                  description: "Implantación y despliegue de normas internacionales.",
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                },
                {
                  title: "Servicios",
                  description: "Enfoque práctico y didáctico en cada proyecto.",
                  icon: "M5 13l4 4L19 7"
                }
              ].map((item, index) => (
                <div key={index} className="about-feature">
                  <div className="feature-icon-container">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;