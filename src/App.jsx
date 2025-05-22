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
  return (
    <>

      <Seo
        title="YAFO Consultora - Ciberseguridad Avanzada"
        description="Protección proactiva de activos digitales con soluciones de ciberseguridad de YAFO Consultora."
        keywords="ciberseguridad, protección digital, consultoría, YAFO, seguridad avanzada"
        image="https://yafoconsultora.com/assets/Logo Yafo JPG_grises 300 dpi.jpg"
        url="https://yafoconsultora.com"
      />
      
      <Header />

      <AnimatedSection id="inicio">
        <Intro />
      </AnimatedSection>
      
      <AnimatedSection id="nosotros">
        <About />
      </AnimatedSection>
      
      <AnimatedSection id="servicios">
        <Services />
      </AnimatedSection>
      
      <AnimatedSection id="soluciones">
        <Solutions />
      </AnimatedSection>
      
      <AnimatedSection id="clientes">
        <Clients />
      </AnimatedSection>
      
      <AnimatedSection id="contacto">
        <ContactForm />
      </AnimatedSection>
      
      <Footer />
    </>
  );
}

export default App;