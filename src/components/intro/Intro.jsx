import React, { useEffect, useState } from 'react';
import './Intro.css';

// Importamos las imágenes nuevas
import padlockImg from '../../assets/padlock.png';
import shieldImg from '../../assets/shield.png';
import firewall from '../../assets/firewall.png';

const Intro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentHologram, setCurrentHologram] = useState(0);

  const holograms = [
    { icon: firewall, label: 'Defensa Proactiva Digital' },
    { icon: padlockImg, label: 'Seguridad Avanzada' },
    { icon: shieldImg, label: 'Protección Integral' }
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Efecto de partículas para el fondo
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
      initParticles(canvas);
    }

    // Rotación de hologramas
    const hologramInterval = setInterval(() => {
      setCurrentHologram((prev) => (prev + 1) % holograms.length);
    }, 5000); // Changed from 3000ms to 5000ms

    return () => clearInterval(hologramInterval);
  }, []);

  const initParticles = (canvas) => {
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

      requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <section id="inicio" className={`intro-hero ${isLoaded ? 'loaded' : ''}`}>
      <canvas id="particle-canvas" className="particle-background"></canvas>

      <div className="cyber-grid-overlay"></div>

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
                    <span className="word-container">
                      <span className="word-mask">
                        <span className="word">Protección </span>
                      </span>
                    </span>
                    <span className="word-container">
                      <span className="word-mask">
                        <span className="word text-highlight">Avanzada </span>
                      </span>
                    </span>
                    <span className="word-container">
                      <span className="word-mask">
                        <span className="word"> para tus </span>
                      </span>
                    </span>
                    <span className="word-container">
                      <span className="word-mask">
                        <span className="word">Activos </span>
                      </span>
                    </span>
                    <span className="word-container">
                      <span className="word-mask">
                        <span className="word">Digitales </span>
                      </span>
                    </span>
                  </span>
                </span>
              </h2>

              <h3 className="hero-subtitle">
                Soluciones proactivas de identidad y prevención de ciberamenazas
              </h3>

              <div className="hero-cta">
                <button className="cyber-button">
                  <span className="cyber-button-text">Conoce Nuestros Servicios</span>
                  <span className="cyber-button-glitch"></span>
                </button>
              </div>
            </div>
          </div>

          <div className="hologram-container">
            <div className="hologram-display">
              <div className="hologram-base"></div>
              <div className="hologram-light-rays"></div>
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
                    />
                    <div className="hologram-grid"></div>
                    <div className="hologram-particles">
                      <div className="hologram-particle"></div>
                      <div className="hologram-particle"></div>
                      <div className="hologram-particle"></div>
                      <div className="hologram-particle"></div>
                      <div className="hologram-particle"></div>
                    </div>
                    <div className="hologram-rising-particles">
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
                      <div className="rising-particle"></div>
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

      <div className="scrolling-indicator">
        <span className="scroll-text">Descubre Más</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Intro;