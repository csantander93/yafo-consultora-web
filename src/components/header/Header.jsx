import { useState, useEffect } from "react";
import logo from '../../assets/Logo Yafo PNG.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const menuSectionIds = ["inicio", "servicios", "productos", "soluciones", "nosotros", "clientes", "contacto"];
      const sections = Array.from(document.querySelectorAll('section[id]'))
        .filter(section => menuSectionIds.includes(section.id));
      
      let current = activeSection;
      const viewportMiddle = window.innerHeight / 2;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionId = `#${section.id}`;
        
        // Verificar si la sección está en el área central del viewport
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          current = sectionId;
          break;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    // Ejecutar al montar para detectar la sección inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#inicio" className="logo-link">
          <img src={logo} alt="YAFO Consultora" className="header-logo" />
        </a>

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
                  {activeSection === item.href && (
                    <span className="active-indicator"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;