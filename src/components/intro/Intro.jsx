import React, { useEffect, useState, useCallback } from 'react';
import './Intro.css';

// Importamos las imágenes optimizadas (convertir a WebP previamente)
import padlockImg from '../../assets/padlock.webp';
import shieldImg from '../../assets/shield.webp';
import firewall from '../../assets/firewall.webp';

// Precargamos las imágenes críticas
const preloadImages = [firewall, padlockImg, shieldImg];

const Intro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentHologram, setCurrentHologram] = useState(0);

  const holograms = [
    { icon: firewall, label: 'Defensa Proactiva Digital' },
    { icon: padlockImg, label: 'Seguridad Avanzada' },
    { icon: shieldImg, label: 'Protección Integral' }
  ];

  // Memoizamos la función de partículas
  const initParticles = useCallback((canvas) => {
    if (!canvas) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `rgba(0, 174, 239, ${Math.random() * 0.7 + 0.3})`
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Optimización: dibujamos solo conexiones visibles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 174, 239, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    // Precargamos imágenes
    preloadImages.forEach(img => {
      const image = new Image();
      image.src = img;
    });

    setIsLoaded(true);
    const canvas = document.getElementById('particle-canvas');
    const cleanUpParticles = initParticles(canvas);

    // Rotación de hologramas con setTimeout en lugar de setInterval
    let timeoutId;
    const rotateHologram = () => {
      setCurrentHologram(prev => (prev + 1) % holograms.length);
      timeoutId = setTimeout(rotateHologram, 5000);
    };
    timeoutId = setTimeout(rotateHologram, 5000);

    return () => {
      clearTimeout(timeoutId);
      cleanUpParticles && cleanUpParticles();
    };
  }, [initParticles, holograms.length]);

  const scrollToServices = () => {
  const servicesSection = document.getElementById('servicios');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section id="inicio" className={`intro-hero ${isLoaded ? 'loaded' : ''}`}>
      <canvas 
        id="particle-canvas" 
        className="particle-background"
        aria-hidden="true" // Mejora accesibilidad
      ></canvas>

      <div className="cyber-grid-overlay" aria-hidden="true"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-content">
            <div className="hero-titles">
              <h1 className="hero-main-title">
                <span className="yafo-text">YAFO</span>
                <span className="consultora-sub">
                  CONSULTORA
                  <span className="cyber-line"></span>
                </span>
              </h1>

              <h2 className="hero-tagline">
                <span className="tagline-wrapper">
                  <span className="tagline-words">
                    {['Protección ', 'Avanzada ', ' para tus ', 'Activos ', 'Digitales '].map((word, index) => (
                      <span key={index} className="word-container">
                        <span className="word-mask">
                          <span className={`word ${index === 1 ? 'text-highlight' : ''}`}>
                            {word}
                          </span>
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h2>

              <h3 className="hero-subtitle">
                Soluciones proactivas de identidad y prevención de ciberamenazas
              </h3>

              <div className="hero-cta">
                <button 
                  className="cyber-button" 
                  aria-label="Conoce nuestros servicios"
                  onClick={scrollToServices}
                >
                  <span className="cyber-button-text">Conoce Nuestros Servicios</span>
                  <span className="cyber-button-glitch"></span>
                </button>
              </div>
            </div>
          </div>

          <div className="hologram-container">
            <div className="hologram-display">
              <div className="hologram-base" aria-hidden="true"></div>
              <div className="hologram-light-rays" aria-hidden="true"></div>
              <div className="hologram-icon-container">
                {holograms.map((hologram, index) => (
                  <div
                    key={index}
                    className={`hologram-icon ${index === currentHologram ? 'fade' : ''}`}
                  >
                    <img
                      src={hologram.icon}
                      alt={hologram.label}
                      className="hologram-image"
                      width="200"  // Dimensiones explícitas
                      height="200" // Evita layout shifts
                      loading={index === 0 ? 'eager' : 'lazy'} // Priorizamos la primera imagen
                    />
                    <div className="hologram-grid" aria-hidden="true"></div>
                    <div className="hologram-particles" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="hologram-particle"></div>
                      ))}
                    </div>
                    <div className="hologram-rising-particles" aria-hidden="true">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="rising-particle"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`hologram-label ${currentHologram === currentHologram ? 'fade' : ''}`}>
                {holograms[currentHologram].label}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scrolling-indicator" aria-label="Desplázate hacia abajo">
        <span className="scroll-text">Descubre Más</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default React.memo(Intro);