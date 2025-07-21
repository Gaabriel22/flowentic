import Footer from "./components/Footer"
import Header from "./components/Header"
import Preloader from "./components/Preloader"
import About from "./sections/About"
import ContactForm from "./sections/ContactForm"
import FinalCTA from "./sections/FinalCTA"
import Hero from "./sections/Hero"
import PainPoints from "./sections/PainPoints"
import Process from "./sections/Process"
import Services from "./sections/Services"

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Services />
      <PainPoints />
      <Process />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
