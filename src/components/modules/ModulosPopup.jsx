import React, { useState, useEffect, useRef } from 'react';
import './ModulosPopup.css';

const ModulosPopup = ({
  initialCategory,
  selectedModule,
  onModuleSelect,
  onClose,
  onBack,
  modulesData,
  categoryMapping
}) => {
  const [animate, setAnimate] = useState(false);
  const [isPanelAnimated, setIsPanelAnimated] = useState(false);
  const descriptionPanelRef = useRef(null);

  const getShortCategoryName = (category) => {
    return category.includes('(') ? category.split('(')[0].trim() : category;
  };

  useEffect(() => {
    if (descriptionPanelRef.current) {
      descriptionPanelRef.current.scrollTop = 0;
    }
  }, [selectedModule]);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (selectedModule) {
      setTimeout(() => setIsPanelAnimated(true), 50);
    } else {
      setIsPanelAnimated(false);
    }
  }, [selectedModule]);

  // Efecto para controlar el scroll dentro del popup
  useEffect(() => {
    const handleWheel = (e) => {
      if (!descriptionPanelRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = descriptionPanelRef.current;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      
      if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
        e.stopPropagation();
      }
    };

    const panel = descriptionPanelRef.current;
    if (panel) {
      panel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (panel) {
        panel.removeEventListener('wheel', handleWheel);
      }
    };
  }, [selectedModule]);

  const handleModuleClick = (moduleName) => {
    onModuleSelect(moduleName);
  };

  if (!modulesData[initialCategory]) {
    console.error(`La categoría "${initialCategory}" no existe en modulesData`);
    return null;
  }

  return (
    <div className="popup-modulos-popup-overlay">
      <div className={`popup-modulos-popup-container ${animate ? 'animate-in' : ''}`}>
        <div className="popup-header">
          <div className="breadcrumbs">
            <span className="breadcrumb">
              {categoryMapping[initialCategory] || initialCategory}
            </span>
            {selectedModule && (
              <>
                <span className="breadcrumb-divider">/</span>
                <span className="breadcrumb active">{selectedModule}</span>
              </>
            )}
          </div>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Cerrar popup"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className={`popup-modulos-popup-content ${isPanelAnimated ? 'panel-animated' : ''}`}>
          <div className="popup-modules-panel">
            <div className="panel-header popup-modulos-header-container">
              <h3>Módulos</h3>
              <span className="popup-modulos-count">
                {Object.keys(modulesData[initialCategory]).length} módulos
              </span>
              <p>Seleccione un módulo para ver detalles</p>
            </div>
            
            <div className="popup-modules-list">
              {Object.keys(modulesData[initialCategory]).map((moduleName, index) => (
                <div
                  key={moduleName}
                  className={`popup-module-item ${selectedModule === moduleName ? 'selected' : ''}`}
                  onClick={() => handleModuleClick(moduleName)}
                  style={{ '--delay': `${index * 0.05 + 0.1}s` }}
                >
                  <div className="popup-module-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4>{moduleName}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="popup-module-detail-panel" ref={descriptionPanelRef}>
            {selectedModule && (
              <>
                <div className="popup-module-detail-header">
                  <div className="popup-mobile-back-button-container">
                    <button 
                      className="popup-mobile-back-button"
                      onClick={onBack}
                      aria-label="Volver a módulos"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Volver
                    </button>
                  </div>
                  <h3 title={selectedModule}>{selectedModule}</h3>
                  <div className="popup-module-category-badge">
                    {getShortCategoryName(initialCategory)}
                  </div>
                </div>
                
                <div className="popup-module-detail-content">
                  <p className="popup-module-description">
                    {modulesData[initialCategory][selectedModule].description}
                  </p>
                  
                  {modulesData[initialCategory][selectedModule].features && (
                    <div className="popup-module-features">
                      <h4>Características principales:</h4>
                      <ul>
                        {modulesData[initialCategory][selectedModule].features.map((feature, i) => (
                          <li key={i}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulosPopup;