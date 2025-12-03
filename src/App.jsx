import Button from "./Components/Button/Button"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar"
import Card from "./Components/Card"
//import Nosotros from "./Components/Nosotros"
import RSSReader from "./Components/RSSReader"
import Services from "./Components/Servicios/Services"


function App() {


  return (
   <div className="font-sans text-gray-900">
    <Button />
    <NavBar />
    <Hero />
    <Services />
     <RSSReader /> 
    <Card />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
