import React, { useEffect, useRef, useCallback } from 'react';
import teamImage from '../../assets/development.webp'; // Convertida a WebP
import alephabout from '../../assets/aleph-about.webp'; // Convertida a WebP
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
  const observerRef = useRef(null);

  // Precarga de imágenes
  useEffect(() => {
    const images = [teamImage, alephabout];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const addToRefs = useCallback((el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);

  // Observer optimizado
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    const currentElements = elementsRef.current;
    currentElements.forEach(el => {
      if (el) observerRef.current.observe(el);
    });

    return () => {
      currentElements.forEach(el => {
        if (el) observerRef.current?.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="nosotros" className="about-section" ref={sectionRef}>
      {/* Fondo optimizado con menos elementos animados */}
      <div className="about-background-tech" aria-hidden="true">
        <div className="tech-grid-animated"></div>
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
            <div className="image-tech-border image-left-border">
              <div className="image-blue-frame">
                <img
                  src={teamImage}
                  alt="Equipo de Yafo Consultora"
                  className="about-image"
                  width="600"
                  height="400"
                  loading="eager"
                  ref={addToRefs}
                />
              </div>
            </div>
            <p className="image-caption" ref={addToRefs}>Equipo de consultores especializados</p>
          </div>
          <div className="about-content">
            <h3 className="content-title" ref={addToRefs}>
              <span className="title-decoration">Quiénes somos</span>
            </h3>
            {[
              "En Yafo Consultora, combinamos experiencia técnica y estratégica para ofrecer soluciones integrales en gestión de riesgos, ciberseguridad y cumplimiento normativo.",
              "Desde startups hasta grandes empresas, ayudamos a nuestros clientes a navegar entornos complejos con herramientas innovadoras y un compromiso inquebrantable con la calidad."
            ].map((text, index) => (
              <p key={index} className="content-text" ref={addToRefs}>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="about-row reverse-row" ref={addToRefs}>
          <div className="about-image-wrapper">
            <div className="image-tech-border image-right-border">
              <div className="image-blue-frame">
                <img
                  src={alephabout}
                  alt="Plataforma Aleph Manager"
                  className="about-image"
                  width="600"
                  height="400"
                  loading="lazy"
                  ref={addToRefs}
                />
              </div>
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

export default React.memo(About);