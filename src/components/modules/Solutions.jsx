import React, { useState, useEffect } from 'react';
import alephLogoGif from "../../assets/Gif-Aleph-una-vez.gif";
import ModulosPopup from './ModulosPopup';
import { modulesData } from '../modules/data/modulesData';
import "./Solutions.css";

const Solutions = () => {
  const [showModulesPopup, setShowModulesPopup] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentPopupTab, setCurrentPopupTab] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section id='software' className='software-section' role="region" aria-labelledby="software-heading">
      <div className="software-backdrop">
        <div className="software-gradient"></div>
        <div className="tech-grid"></div>
        <div className="software-orb software-orb-1"></div>
        <div className="software-orb software-orb-2"></div>
        <div className="software-orb software-orb-3"></div>
        <div className="software-orb software-orb-4"></div>
      </div>
      
      <div className="software-wrapper">
        <header className="software-header">
          <h1 id="software-heading" className="software-title">
            <span className="title-segment title-segment-1">SOLUCIONES</span>
            <span className="title-segment title-segment-2">DE SOFTWARE</span>
          </h1>
        </header>
        
        <div className='software-nav' role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`software-nav-item ${currentPopupTab === tabMapping[tab] ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
              role="tab"
              aria-selected={currentPopupTab === tabMapping[tab]}
              aria-controls={`${tab.toLowerCase().replace(/\s+/g, '-')}-panel`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {tab}
              <span className="software-nav-glow"></span>
            </button>
          ))}
        </div>
        
        <div className='software-main'>
          <img 
            src={alephLogoGif} 
            alt="Aleph Logo" 
            className="software-logo" 
            loading="lazy"
            width="400"
            height="200"
            decoding="async"
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