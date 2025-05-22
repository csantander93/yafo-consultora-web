import React, { useState, useEffect } from 'react';
import alephLogoGif from "../../assets/Gif-Aleph-una-vez.gif";
import ModulosPopup from './ModulosPopup';
import { modulesData } from './data/modulesData';
import "./Solutions.css";

const Solutions = () => {
  const [showModulesPopup, setShowModulesPopup] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentPopupTab, setCurrentPopupTab] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Efecto para Schema Markup (SEO)
  useEffect(() => {
    const tabs = [
      'Net Discovery',
      'GRC',
      'Continuidad de Negocio',
      'Pérdida Crediticia Esperada',
      'PLAFT'
    ];

    const tabMapping = {
      'Net Discovery': 'Net Discovery',
      'GRC': 'GRC (Gobierno, Riesgo y Cumplimiento)',
      'Continuidad de Negocio': 'Continuidad de Negocio',
      'Pérdida Crediticia Esperada': 'Pérdida Crediticia Esperada',
      'PLAFT': 'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)'
    };

    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": tabs.map((tab, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": tabMapping[tab] || tab,
        "description": `Solución ${tabMapping[tab] || tab} de YAFO Consultora`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based",
        "offers": {
          "@type": "Offer",
          "category": "SoftwareAsAService"
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(softwareSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Resto del código original sin cambios...
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (showModulesPopup) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [showModulesPopup]);

  const tabs = [
    'Net Discovery',
    'GRC',
    'Continuidad de Negocio',
    'Pérdida Crediticia Esperada',
    'PLAFT'
  ];

  const tabMapping = {
    'Net Discovery': 'Net Discovery',
    'GRC': 'GRC (Gobierno, Riesgo y Cumplimiento)',
    'Continuidad de Negocio': 'Continuidad de Negocio',
    'Pérdida Crediticia Esperada': 'Pérdida Crediticia Esperada',
    'PLAFT': 'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)'
  };

  const handleTabClick = (tab) => {
    const fullTabName = tabMapping[tab] || tab;
    setCurrentPopupTab(fullTabName);
    setShowModulesPopup(true);
    setSelectedModule(null);
  };

  const handleModuleSelect = (moduleName) => {
    setSelectedModule(moduleName);
  };

  const handleClosePopup = () => {
    setShowModulesPopup(false);
    setSelectedModule(null);
    setCurrentPopupTab(null);
  };

  const handleBack = () => {
    setSelectedModule(null);
  };

  useEffect(() => {
    const canvas = document.getElementById('partículas-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const partículas = [];
    const partículasCount = isMobile ? 30 : Math.min(Math.floor(window.innerWidth / 10), 100);

    class Partícula {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(0, 191, 255, ${Math.random() * 0.5 + 0.1})`;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      for (let i = 0; i < partículasCount; i++) {
        partículas.push(new Partícula());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < partículas.length; i++) {
        partículas[i].update();
        partículas[i].draw();
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <section 
      id='soluciones' 
      className='seccion-principal' 
      role="region" 
      aria-labelledby="main-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {/* Meta tags SEO invisibles */}
      <meta itemProp="name" content="Soluciones de Software YAFO" />
      <meta itemProp="description" content="Plataformas especializadas en GRC, continuidad de negocio y compliance financiero" />
      
      <canvas 
        id="partículas-canvas" 
        className="fondo-particulas"
        aria-hidden="true"
      ></canvas>
      <div className="encabezado-principal">
        <h1 id="main-heading" className="titulo-principal" itemProp="headline">SOLUCIONES DE SOFTWARE</h1>
      </div>
      <div className='contenedor-principal'>
        <div className='contenedor-pestanas' role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`boton-pestana ${currentPopupTab === tabMapping[tab] ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
              role="tab"
              aria-selected={currentPopupTab === tabMapping[tab]}
              aria-controls={`${tab.toLowerCase().replace(/\s+/g, '-')}-panel`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={tabs.indexOf(tab) + 1} />
              <span itemProp="name">{tab}</span>
              <span className="resalte-pestana" aria-hidden="true"></span>
            </button>
          ))}
        </div>
        
        <div className='contenido-principal'>
          <img 
            src={alephLogoGif} 
            alt="Plataforma Aleph Manager - Soluciones GRC y gestión de riesgos" 
            className="logo-principal" 
            loading="lazy"
            width="400"
            height="200"
            decoding="async"
            itemProp="image"
          />
        </div>
      </div>
  
      {showModulesPopup && currentPopupTab && (
        <ModulosPopup
          initialCategory={currentPopupTab}
          selectedModule={selectedModule}
          onModuleSelect={handleModuleSelect}
          onClose={handleClosePopup}
          onBack={handleBack}
          modulesData={modulesData}
          categoryMapping={tabMapping}
        />
      )}
    </section>
  );
};

export default Solutions;