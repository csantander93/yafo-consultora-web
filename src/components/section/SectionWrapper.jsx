import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './SectionWrapper.css';

const SectionWrapper = ({ children, id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px' // Compensa el header
  });

  // Combina las refs y maneja el estado de visibilidad
  useEffect(() => {
    if (sectionRef.current) {
      inViewRef(sectionRef.current);
    }
    
    // Retraso mínimo para asegurar que la animación se vea bien
    if (inView && !isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView, inViewRef, isVisible]);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`section-wrapper ${isVisible ? 'visible' : ''}`}
      aria-hidden={!isVisible}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;