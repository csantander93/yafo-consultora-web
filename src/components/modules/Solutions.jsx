import React, { useState, useEffect, useRef } from 'react';
import alephLogoGif from "../../assets/Gif-Aleph-una-vez.gif";
import ModulosPopup from './ModulosPopup';
import { modulesData } from '../modules/data/modulesData';
import "./Solutions.css";

const Solutions = () => {
  const [showModulesPopup, setShowModulesPopup] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentPopupTab, setCurrentPopupTab] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const section = document.querySelector('.software-section');
    const logo = document.querySelector('.software-logo');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logo.classList.add('animate');
        } else {
          logo.classList.remove('animate');
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = isMobile ? 50 : 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

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
    <section id='soluciones' className='software-section' role="region" aria-labelledby="software-heading">
      <canvas ref={canvasRef} className="software-particles" />
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
              aria-label={`Open ${tab} modules`}
              data-animation-delay={`${0.1 * index}s`}
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
            width="500"
            height="250"
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