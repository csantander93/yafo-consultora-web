import React, { useEffect } from 'react';
import teamImage from '../../assets/development.jpg';
import alephabout from '../../assets/aleph-about.png';
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
    <section id="nosotros" className="about-section">
      <div className="about-background-curves">
        <div className="curve curve-1"></div>
        <div className="curve curve-2"></div>
        <div className="curve curve-3"></div>
        <div className="curve curve-4"></div>
        <div className="tech-dots"></div>
        <div className="tech-grid"></div>
      </div>
      <div className="about-container">
        {/* Mission Section */}
        <div className="about-header">
          <h2 className="about-title">
            <span className="title-highlight">TRANSFORMAMOS</span> LA GESTIÓN DE COMPLIANCE Y SEGURIDAD CON TECNOLOGÍA
          </h2>
          <p className="about-description">
            Somos un equipo de expertos en sistemas financieros, ciberseguridad y continuidad del negocio. Más de 50 clientes en Argentina y el mundo confían en nuestras soluciones para proteger y optimizar sus operaciones.
          </p>
        </div>

        {/* Team Section */}
        <div className="about-row">
          <div className="about-image-wrapper">
            <div className="image-tech-border">
              <img
                src={teamImage}
                alt="Equipo de Yafo Consultora"
                className="about-image"
              />
            </div>
            <p className="image-caption">Nuestro equipo de consultores especializados</p>
          </div>
          <div className="about-content">
            <h3 className="content-title">
              <span className="title-decoration">Quiénes somos</span>
            </h3>
            <p className="content-text">
              En Yafo Consultora, combinamos experiencia técnica y estratégica para ofrecer soluciones integrales en gestión de riesgos, ciberseguridad y cumplimiento normativo. Nuestro enfoque está alineado con estándares internacionales, garantizando resultados confiables y adaptados a las necesidades de cada cliente.
            </p>
            <p className="content-text">
              Desde startups hasta grandes empresas, ayudamos a nuestros clientes a navegar entornos complejos con herramientas innovadoras y un compromiso inquebrantable con la calidad.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="about-row reverse-row">
          <div className="about-image-wrapper">
            <div className="image-tech-border">
              <img
                src={alephabout}
                alt="Plataforma de Yafo Consultora"
                className="about-image"
              />
            </div>
            <p className="image-caption">Soluciones tecnológicas innovadoras</p>
          </div>
          <div className="about-content">
            <h3 className="content-title">
              <span className="title-decoration">Lo que ofrecemos</span>
            </h3>
            <ul className="services-list">
              <li className="service-item">
                <span className="service-icon">⟫</span> Consultoría en gestión de riesgos y continuidad del negocio
              </li>
              <li className="service-item">
                <span className="service-icon">⟫</span> Penetration Testing y simulaciones de adversarios (Red Team)
              </li>
              <li className="service-item">
                <span className="service-icon">⟫</span> Plataformas SIEM para monitoreo de eventos de seguridad
              </li>
              <li className="service-item">
                <span className="service-icon">⟫</span> Identity & Access Management (IAM) para datos críticos
              </li>
              <li className="service-item">
                <span className="service-icon">⟫</span> Desarrollo de software y soluciones personalizadas
              </li>
              <li className="service-item">
                <span className="service-icon">⟫</span> Productos líderes como Core Impact y Cobalt Strike
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;