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
      
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          setActiveSection(`#${section.id}`);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                >
                  {item.name}
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
                onClick={() => setMenuOpen(false)}
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