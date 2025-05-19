import { useState, useEffect } from "react";
import logo from '../../assets/yafo_invert_logo.png';
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

  // Items del menú
  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a 
          href="#inicio" 
          className="logo-link"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("#inicio");
            smoothScroll("#inicio");
          }}
        >
          <div className="logo-glow"></div>
          <img src={logo} alt="YAFO Consultora" className="header-logo" />
        </a>

        {/* Navegación desktop */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.href);
                    smoothScroll(item.href);
                  }}
                >
                  {item.name}
                  <span className="nav-link-glow"></span>
                  {activeSection === item.href && (
                    <span className="active-indicator"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menú móvil */}
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.href ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  setActiveSection(item.href);
                  smoothScroll(item.href);
                }}
              >
                {item.name}
                {activeSection === item.href && (
                  <span className="mobile-active-indicator"></span>
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