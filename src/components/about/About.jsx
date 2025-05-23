import React, { useEffect, useRef, useCallback } from 'react';
import teamImage from '../../assets/development.webp';
import alephabout from '../../assets/aleph-about.webp';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
  const observerRef = useRef(null);

  // Precarga de imágenes y recursos
  useEffect(() => {
    // Preload images
    [teamImage, alephabout].forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Schema Markup
    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "headline": "Sobre YAFO Consultora - Expertos en ciberseguridad y compliance",
      "description": "Conozca nuestro equipo de expertos en sistemas financieros, ciberseguridad y continuidad del negocio",
      "image": [teamImage, alephabout],
      "publisher": {
        "@type": "Organization",
        "name": "YAFO Consultora",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.yafo-consultora.com/logo.webp"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(aboutSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const addToRefs = useCallback((el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);

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
    currentElements.forEach(el => observerRef.current.observe(el));

    return () => {
      currentElements.forEach(el => observerRef.current?.unobserve(el));
    };
  }, []);

  const approachData = [
    {
      name: "Enfoque personalizado",
      description: "Soluciones adaptadas a las necesidades específicas de cada cliente",
      keywords: ["personalización", "soluciones a medida", "enfoque cliente"]
    },
    {
      name: "Tecnología de vanguardia",
      description: "Implementamos herramientas líderes del mercado para máxima eficacia",
      keywords: ["innovación tecnológica", "herramientas avanzadas", "tecnología punta"]
    },
    {
      name: "Equipo multidisciplinario",
      description: "Expertos en seguridad, fintech y gestión de riesgos trabajando en conjunto",
      keywords: ["equipo experto", "multidisciplinario", "conocimiento integrado"]
    },
    {
      name: "Metodología probada",
      description: "Procesos validados con más de 50 clientes en Latinoamérica",
      keywords: ["metodología", "procesos validados", "experiencia comprobada"]
    },
    {
      name: "Soporte continuo",
      description: "Acompañamiento en todas las etapas de implementación y operación",
      keywords: ["soporte técnico", "acompañamiento", "servicio continuo"]
    },
    {
      name: "Visión estratégica",
      description: "Soluciones alineadas con los objetivos de negocio de cada organización",
      keywords: ["estrategia", "alineación negocios", "visión integral"]
    }
  ];

  return (
    <section 
      id="nosotros" 
      className="about-section" 
      ref={sectionRef}
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <meta itemProp="name" content="Sobre YAFO Consultora" />
      <meta itemProp="description" content="Expertos en ciberseguridad, compliance y gestión de riesgos" />
      
      <div className="about-background-tech" aria-hidden="true">
        <div className="tech-grid-animated"></div>
      </div>
      
      <div className="about-container">
        {/* Mission Section */}
        <div className="about-header" ref={addToRefs}>
          <h2 id="about-heading" className="about-title" itemProp="headline">
            <span className="title-highlight" itemProp="keywords">TRANSFORMAMOS</span> LA GESTIÓN DE <span itemProp="keywords">COMPLIANCE</span> Y <span itemProp="keywords">SEGURIDAD</span> CON TECNOLOGÍA
          </h2>
          <p className="about-description" itemProp="description">
            Somos un equipo de <strong itemProp="keywords">expertos en sistemas financieros</strong>, <strong itemProp="keywords">ciberseguridad</strong> y <strong itemProp="keywords">continuidad del negocio</strong>. Más de 50 clientes en <strong>Argentina y Latinoamérica</strong> confían en nuestras <strong>soluciones tecnológicas</strong> para proteger y optimizar sus operaciones críticas.
          </p>
          <div className="divider-line" ref={addToRefs}></div>
        </div>

        {/* Team Section */}
        <div className="about-row" ref={addToRefs} itemScope itemType="https://schema.org/Organization">
          <div className="about-image-wrapper">
            <div className="image-tech-border image-left-border">
              <div className="image-blue-frame">
                <img
                  src={teamImage}
                  alt="Equipo multidisciplinario de YAFO Consultora trabajando en proyectos de ciberseguridad"
                  className="about-image"
                  width="600"
                  height="400"
                  loading="eager"
                  ref={addToRefs}
                  itemProp="image"
                />
              </div>
            </div>
            <p className="image-caption" ref={addToRefs}>Equipo de consultores especializados en <span itemProp="keywords">gestión de riesgos</span></p>
          </div>
          <div className="about-content">
            <h2 className="content-title" ref={addToRefs}>
              <span className="title-decoration">Quiénes somos</span>
            </h2>
            <p className="content-text" ref={addToRefs} itemProp="description">
              En <span itemProp="name">YAFO Consultora</span>, combinamos <strong>experiencia técnica</strong> y <strong>visión estratégica</strong> para ofrecer soluciones integrales en <span itemProp="keywords">gestión de riesgos</span>, <span itemProp="keywords">ciberseguridad</span> y <span itemProp="keywords">cumplimiento normativo</span>.
            </p>
            <p className="content-text" ref={addToRefs} itemProp="description">
              Desde <strong>startups</strong> hasta <strong>grandes empresas</strong>, ayudamos a nuestros clientes a navegar entornos complejos con <strong>herramientas innovadoras</strong> y un compromiso inquebrantable con la calidad.
            </p>
          </div>
        </div>

        {/* Approach Section */}
        <div className="about-row reverse-row" ref={addToRefs}>
          <div className="about-image-wrapper">
            <div className="image-tech-border image-right-border">
              <div className="image-blue-frame">
                <img
                  src={alephabout}
                  alt="Plataforma Aleph Manager de YAFO Consultora para gestión de riesgos y compliance"
                  className="about-image"
                  width="600"
                  height="400"
                  loading="lazy"
                  ref={addToRefs}
                  itemProp="image"
                />
              </div>
            </div>
            <p className="image-caption" ref={addToRefs}>Soluciones tecnológicas innovadoras para <span itemProp="keywords">gestión de compliance</span></p>
          </div>
          <div className="about-content">
            <h2 className="content-title" ref={addToRefs}>
              <span className="title-decoration">Nuestro enfoque</span>
            </h2>
            <ul className="services-list">
              {approachData.map((item, index) => (
                <li 
                  className="service-item" 
                  key={index}
                  ref={addToRefs}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <span className="service-icon">⟫</span>
                  <span itemProp="name">{item.name}</span>
                  <meta itemProp="description" content={item.description} />
                  <meta itemProp="provider" content="YAFO Consultora"/>
                  {item.keywords.map((keyword, i) => (
                    <meta key={i} itemProp="keywords" content={keyword} />
                  ))}
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