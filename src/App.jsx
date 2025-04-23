import About from "./components/about/About"
import Clients from "./components/clients/Clients"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Intro from "./components/intro/Intro"
import CurvedDivider from "./components/section/CurvedDivider"

function App() {

  return (
    <>
      <Header />


        <Intro id="inicio"/>

        <CurvedDivider position="bottom" />
        <About id="nosotros"/>
        <CurvedDivider position="top" />

        <Clients id="clientes"/>

      <Footer />
    </>
  )
}

export default App
