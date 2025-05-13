import React, { useEffect, useRef } from 'react';
import teamImage from '../../assets/development.jpg';
import alephabout from '../../assets/aleph-about.png';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementsRef.current.length > 0) {
      elementsRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      if (elementsRef.current.length > 0) {
        elementsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="nosotros" className="about-section" ref={sectionRef}>
      <div className="about-background-tech">
        <div className="tech-grid-animated"></div>
        <div className="tech-dots-animated"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="about-container">
        {/* Mission Section */}
        <div className="about-header" ref={addToRefs}>
          <h2 className="about-title">
            <span className="title-highlight">TRANSFORMAMOS</span> LA GESTIÓN DE COMPLIANCE Y SEGURIDAD CON TECNOLOGÍA
          </h2>
          <p className="about-description">
            Somos un equipo de expertos en sistemas financieros, ciberseguridad y continuidad del negocio. 
            Más de 50 clientes en Argentina y el mundo confían en nuestras soluciones para proteger y optimizar sus operaciones.
          </p>
          <div className="divider-line" ref={addToRefs}></div>
        </div>

        {/* Team Section */}
        <div className="about-row" ref={addToRefs}>
          <div className="about-image-wrapper">
            <div className="image-tech-border">
              <img
                src={teamImage}
                alt="Equipo de Yafo Consultora"
                className="about-image"
                ref={addToRefs}
              />
            </div>
            <p className="image-caption" ref={addToRefs}>Nuestro equipo de consultores especializados</p>
          </div>
          <div className="about-content">
            <h3 className="content-title" ref={addToRefs}>
              <span className="title-decoration">Quiénes somos</span>
            </h3>
            <p className="content-text" ref={addToRefs}>
              En Yafo Consultora, combinamos experiencia técnica y estratégica para ofrecer soluciones integrales en gestión de riesgos, 
              ciberseguridad y cumplimiento normativo.
            </p>
            <p className="content-text" ref={addToRefs}>
              Desde startups hasta grandes empresas, ayudamos a nuestros clientes a navegar entornos complejos con herramientas innovadoras 
              y un compromiso inquebrantable con la calidad.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="about-row reverse-row" ref={addToRefs}>
          <div className="about-image-wrapper">
            <div className="image-tech-border">
              <img
                src={alephabout}
                alt="Plataforma de Yafo Consultora"
                className="about-image"
                ref={addToRefs}
              />
            </div>
            <p className="image-caption" ref={addToRefs}>Soluciones tecnológicas innovadoras</p>
          </div>
          <div className="about-content">
            <h3 className="content-title" ref={addToRefs}>
              <span className="title-decoration">Lo que ofrecemos</span>
            </h3>
            <ul className="services-list">
              {[
                "Consultoría en gestión de riesgos y continuidad del negocio",
                "Penetration Testing y simulaciones de adversarios (Red Team)",
                "Plataformas SIEM para monitoreo de eventos de seguridad",
                "Identity & Access Management (IAM) para datos críticos",
                "Desarrollo de software y soluciones personalizadas",
                "Productos líderes como Core Impact y Cobalt Strike"
              ].map((service, index) => (
                <li 
                  className="service-item" 
                  key={index}
                  ref={addToRefs}
                >
                  <span className="service-icon">⟫</span> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;