import About from "./components/about/About"
import Clients from "./components/clients/Clients"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import SectionWrapper from "./components/section/SectionWrapper"

function App() {

  return (
    <>
      <Header />

      <SectionWrapper id="inicio">
        <Intro />
      </SectionWrapper>

      <SectionWrapper id="nosotros">
        <About />
      </SectionWrapper>

      <SectionWrapper id="clientes">
        <Clients />
      </SectionWrapper>

      <Footer />
    </>
  )
}

export default App
