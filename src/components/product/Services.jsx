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
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 15L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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