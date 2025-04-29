import { useState, useEffect } from "react";
import logo from '../../assets/Logo Yafo JPG_grises 300 dpi.jpg';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el umbral a 0 para que se active inmediatamente al hacer scroll
      setIsScrolled(window.scrollY > 0);
      
      const menuSectionIds = ["inicio", "servicios", "productos", "soluciones", "nosotros", "clientes", "contacto"];
      const sections = Array.from(document.querySelectorAll('section[id]'))
        .filter(section => menuSectionIds.includes(section.id));
      
      let current = activeSection;
      const viewportMiddle = window.innerHeight / 2;
  
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionId = `#${section.id}`;
        
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          current = sectionId;
          break;
        }
      }
  
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo con fondo claro para mejor contraste */}
        <a href="#inicio" className="logo-link">
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
                  onClick={() => setActiveSection(item.href)}
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

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.href ? 'active' : ''}`}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection(item.href);
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