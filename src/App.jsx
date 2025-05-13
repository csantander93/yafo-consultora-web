import About from "./components/about/About"
import Clients from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import Services from "./components/product/Services"
import Solutions from "./components/modules/Solutions"
import AnimatedSection from './components/section/AnimatedSection';

function App() {
  return (
    <>
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

export default App
