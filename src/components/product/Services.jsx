import './Services.css';

const Services = () => {
  return (
    <section id="servicios" className="products-section">
      <div className="products-background">
        <div className="products-gradient"></div>
        <div className="products-noise"></div>
        <div className="products-particle products-particle-1"></div>
        <div className="products-particle products-particle-2"></div>
        <div className="products-particle products-particle-3"></div>
        <div className="products-particle products-particle-4"></div>
      </div>

      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">
            <span className="title-word title-word-1">NUESTROS</span>
            <span> </span>
            <span className="title-word title-word-2">SERVICIOS</span>
          </h2>
          <p className="products-subtitle">
            Soluciones integrales para <span className="highlight">proteger</span>, <span className="highlight">evaluar</span> y <span className="highlight">desarrollar</span> tu infraestructura tecnológica
          </p>
        </div>

        <div className="products-grid">
          <div className="product-card" data-category="consulting">
            <div className="product-card-inner">
              <div className="product-badge">Consultoría</div>
              <div className="product-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="product-title">Consultoría Especializada</h3>
              <p className="product-description">
                Servicios expertos para gestionar riesgos, asegurar la continuidad del negocio y optimizar tu infraestructura tecnológica.
              </p>
              <div className="product-features">
                <span className="product-feature">Gestión de Riesgos de Tecnología y Seguridad de la Información</span>
                <span className="product-feature">Gestión de Tecnología y Seguridad de la Información</span>
                <span className="product-feature">Gestión de Continuidad del Negocio</span>
                <span className="product-feature">Infraestructura tecnológica y procesamiento</span>
                <span className="product-feature">Gestión de ciberincidentes</span>
                <span className="product-feature">Gestión de la relación con terceras partes</span>
                <span className="product-feature">Gestión de Servicios Financieros Digitales</span>
              </div>
              <div className="product-glow"></div>
            </div>
          </div>

          <div className="product-card" data-category="cybersecurity">
            <div className="product-card-inner">
              <div className="product-badge">Security</div>
              <div className="product-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="product-title">Cybersecurity Assessment</h3>
              <p className="product-description">
                Evaluaciones exhaustivas para identificar vulnerabilidades y fortalecer tus defensas contra amenazas cibernéticas.
              </p>
              <div className="product-features">
                <span className="product-feature">OSINT + Discovery Assessment</span>
                <span className="product-feature">Test de intrusión externo</span>
                <span className="product-feature">Web Application Assessment</span>
                <span className="product-feature">Test de Intrusión Interno</span>
                <span className="product-feature">Análisis de seguridad aplicaciones móviles</span>
                <span className="product-feature">Vulnerability Management</span>
              </div>
              <div className="product-glow"></div>
            </div>
          </div>

          <div className="product-card" data-category="development">
            <div className="product-card-inner">
              <div className="product-badge">Dev</div>
              <div className="product-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="product-title">Desarrollo de Software</h3>
              <p className="product-description">
                Soluciones tecnológicas personalizadas diseñadas para satisfacer las necesidades específicas de tu organización.
              </p>
              <div className="product-features">
                <span className="product-feature">Aplicaciones web</span>
                <span className="product-feature">Apps móviles</span>
                <span className="product-feature">Sistemas empresariales</span>
                <span className="product-feature">Integraciones</span>
                <span className="product-feature">Soluciones escalables</span>
                <span className="product-feature">Tecnologías modernas</span>
              </div>
              <div className="product-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;