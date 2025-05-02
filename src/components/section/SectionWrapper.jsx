import { useEffect, useRef, useState } from 'react';
import './SectionWrapper.css'; // Archivo CSS para las animaciones

const SectionWrapper = ({ id, children, animationType = 'fade', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconectar después de la primera animación
          // observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'slideUp':
        return isVisible ? 'slide-up-visible' : 'slide-up-hidden';
      case 'slideLeft':
        return isVisible ? 'slide-left-visible' : 'slide-left-hidden';
      case 'slideRight':
        return isVisible ? 'slide-right-visible' : 'slide-right-hidden';
      case 'zoom':
        return isVisible ? 'zoom-visible' : 'zoom-hidden';
      default: // fade
        return isVisible ? 'fade-visible' : 'fade-hidden';
    }
  };

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`section-wrapper ${getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;