import Button from "./Components/Button/Button"
import CardSlider from "./Components/CardSlider"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar"
import Nosostros from "./Components/Nosotros"
import Red from "./Components/Red"
import Services from "./Components/Servicios/Services"


function App() {


  return (
   <div className="font-sans text-gray-900">
    <Button />
    <NavBar />
    <Hero />
    {/* <Red /> */}
    <Services />
    <CardSlider />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
