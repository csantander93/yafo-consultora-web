import { useState, useEffect } from "react";
import logo from '../../assets/yafo_invert_logo.webp';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  // Función para scroll suave
  const smoothScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };

  // Efecto para detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const menuSectionIds = ["inicio", "servicios", "soluciones", "nosotros", "clientes", "contacto"];
      const sections = Array.from(document.querySelectorAll('section[id]'))
        .filter(section => menuSectionIds.includes(section.id));
      
      const viewportMiddle = window.innerHeight / 2;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Items del menú con atributos ARIA mejorados
  const menuItems = [
    { 
      name: "Inicio", 
      href: "#inicio",
      ariaLabel: "Ir a la sección de inicio de YAFO Consultora" 
    },
    { 
      name: "Nosotros", 
      href: "#nosotros",
      ariaLabel: "Conocer sobre YAFO Consultora" 
    },
    { 
      name: "Servicios", 
      href: "#servicios",
      ariaLabel: "Ver nuestros servicios profesionales" 
    },
    { 
      name: "Soluciones", 
      href: "#soluciones",
      ariaLabel: "Explorar nuestras soluciones empresariales" 
    },
    { 
      name: "Clientes", 
      href: "#clientes",
      ariaLabel: "Conocer nuestros casos de éxito" 
    },
    { 
      name: "Contacto", 
      href: "#contacto",
      ariaLabel: "Contactar a YAFO Consultora" 
    }
  ];

  // Inyectar datos estructurados en el head
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "YAFO Consultora",
      "url": "https://yafoconsultora.com",
      "logo": "https://yafoconsultora.com" + logo,
      "sameAs": [
        "https://www.linkedin.com/company/yafo-consultora",
        "https://twitter.com/yafoconsultora"
      ],
      "description": "Soluciones profesionales integrales para tu empresa"
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-container">
        {/* Logo con atributos SEO optimizados */}
        <a 
          href="#inicio" 
          className="logo-link"
          aria-label="YAFO Consultora - Inicio"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("#inicio");
            smoothScroll("#inicio");
          }}
        >
          <div className="logo-glow" aria-hidden="true"></div>
          <img 
            src={logo} 
            alt="Logo de YAFO Consultora - Soluciones profesionales" 
            className="header-logo"
            width="150" 
            height="50"
            loading="eager"
          />
        </a>

        {/* Navegación principal con semántica mejorada */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                  aria-current={activeSection === item.href ? "page" : null}
                  aria-label={item.ariaLabel}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.href);
                    smoothScroll(item.href);
                  }}
                >
                  {item.name}
                  <span className="nav-link-glow" aria-hidden="true"></span>
                  {activeSection === item.href && (
                    <span className="active-indicator" aria-hidden="true"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón del menú móvil accesible */}
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú de navegación"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-content"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      {/* Menú móvil con accesibilidad mejorada */}
      <div 
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        id="mobile-menu-content"
        role="navigation"
        aria-label="Menú de navegación móvil"
      >
        <ul className="mobile-nav-list">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.href ? 'active' : ''}`}
                aria-current={activeSection === item.href ? "page" : null}
                aria-label={item.ariaLabel}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  setActiveSection(item.href);
                  smoothScroll(item.href);
                }}
              >
                {item.name}
                {activeSection === item.href && (
                  <span className="mobile-active-indicator" aria-hidden="true"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;