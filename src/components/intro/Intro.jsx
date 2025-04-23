import React, { useEffect } from 'react';
import './Intro.css';

const Intro = () => {
  useEffect(() => {
    document.querySelector('.intro-hero').classList.add('loaded');
  }, []);

  return (
    <section id="inicio" className="intro-hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-titles">
            <h1 className="hero-main-title">
              <span className="yafo-super">YAFO</span>
              <span className="consultora-sub">CONSULTORA</span>
            </h1>
            <h2 className="hero-tagline">
              Protección <span className="text-highlight">Avanzada</span> para tus Activos Digitales
            </h2>
            <h3 className="hero-subtitle">
              Soluciones proactivas de identidad y prevención de ciberamenazas
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;