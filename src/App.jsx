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
      <Footer />
    </>
  )
}

export default App
