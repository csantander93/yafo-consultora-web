import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './SectionWrapper.css';

const SectionWrapper = ({ children, id, alternate = false, fullWidth = false }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  useEffect(() => {
    if (sectionRef.current) {
      inViewRef(sectionRef.current);
    }
    
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
      className={`section-wrapper ${isVisible ? 'visible' : ''} ${alternate ? 'alternate' : ''} ${fullWidth ? 'full-width' : ''}`}
      aria-hidden={!isVisible}
    >
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;