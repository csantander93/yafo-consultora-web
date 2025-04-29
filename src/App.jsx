import About from "./components/about/About"
import Clients from "./components/clients/Clients"
import ContactForm from "./components/contact/ContactForm"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import CurvedDivider from "./components/section/CurvedDivider"

function App() {

  return (
    <>
      <Header />


        <Intro id="inicio"/>

        <About id="nosotros"/>

        <Clients id="clientes"/>

        <ContactForm id="contacto"/>

      <Footer />
    </>
  )
}

export default App
