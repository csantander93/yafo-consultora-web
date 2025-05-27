import { useEffect } from "react"

import About from "./components/about/About"
import Clients from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Services from "./components/product/Services"
import Solutions from "./components/modules/Solutions"
import AnimatedSection from './components/section/AnimatedSection';
import Seo from "./components/seo/Seo"

function App() {

   useEffect(() => {
    // Deshabilitar el scroll restoration del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Asegurar que la página comience en el top al recargar
    window.scrollTo(0, 0);

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <>

      <Seo
        title="Yafo Consultora"
        description="Protección proactiva de activos digitales con soluciones integrales de ciberseguridad, gestión de riesgos y desarrollo seguro."
        keywords="ciberseguridad, protección digital, consultoría IT, YAFO, seguridad avanzada, pentesting, desarrollo seguro, compliance"
        image="https://yafoconsultora.com/assets/Logo Yafo JPG_grises 300 dpi.jpg"
        url="https://yafoconsultora.com"
      />
      
      <Header />

        <AnimatedSection id="inicio" aria-label="Sección de inicio">
          <Intro />
        </AnimatedSection>
        
        <AnimatedSection id="nosotros" aria-label="Sobre nosotros">
          <About />
        </AnimatedSection>
        
        <AnimatedSection id="servicios" aria-label="Nuestros servicios">
          <Services />
        </AnimatedSection>
        
        <AnimatedSection id="soluciones" aria-label="Soluciones tecnológicas">
          <Solutions />
        </AnimatedSection>
        
        <AnimatedSection id="clientes" aria-label="Casos de éxito">
          <Clients />
        </AnimatedSection>
        
        <AnimatedSection id="contacto" aria-label="Contacto">
          <ContactForm />
        </AnimatedSection>
      
      <Footer />
    </>
  );
}

export default App;