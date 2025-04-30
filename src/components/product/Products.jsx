import './Products.css';

const Products = () => {
  return (
    <section id="productos" className="products-section">
      <div className="products-background">
        <div className="products-gradient"></div>
        <div className="products-noise"></div>
        <div className="products-particle products-particle-1"></div>
        <div className="products-particle products-particle-2"></div>
        <div className="products-particle products-particle-3"></div>
      </div>

      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Nuestros Servicios</h2>
          <p className="products-subtitle">Soluciones tecnológicas diseñadas para proteger y potenciar tu negocio</p>
        </div>

        <div className="products-grid">
          <div className="product-card" data-category="cybersecurity">
            <div className="product-card-inner">
              <div className="product-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="product-title">Ciberseguridad</h3>
              <p className="product-description">
                Ofrecemos un amplio conjunto de servicios de seguridad de la información, incluyendo revisiones de seguridad de aplicaciones/servicios/software de caja negra, caja gris y caja blanca, así como pruebas de penetración de red y escaneo de vulnerabilidades.
              </p>
              <div className="product-features">
                <span className="product-feature">Pruebas de penetración</span>
                <span className="product-feature">Análisis de vulnerabilidades</span>
                <span className="product-feature">Auditorías de seguridad</span>
              </div>
              <div className="product-glow"></div>
            </div>
          </div>

          <div className="product-card" data-category="consulting">
            <div className="product-card-inner">
              <div className="product-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="product-title">Consultoría</h3>
              <div className="product-description">
                <p><strong>Gestión de riesgos:</strong> Servicios integrales de gestión de riesgos operacionales y TI alineados a estándares internacionales.</p>
                <p><strong>Continuidad del Negocio:</strong> Elaboración de planes que permitan a las organizaciones recuperar y restaurar la funcionalidad durante una contingencia.</p>
              </div>
              <div className="product-features">
                <span className="product-feature">Análisis de impacto</span>
                <span className="product-feature">Planificación estratégica</span>
                <span className="product-feature">Cumplimiento normativo</span>
              </div>
              <div className="product-glow"></div>
            </div>
          </div>

          <div className="product-card" data-category="development">
            <div className="product-card-inner">
              <div className="product-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="product-title">Desarrollo de Aplicaciones</h3>
              <p className="product-description">
                Construimos soluciones tecnológicas a través del desarrollo de sistemas personalizados que se adaptan a las necesidades específicas de tu negocio.
              </p>
              <div className="product-features">
                <span className="product-feature">Software a medida</span>
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

export default Products;