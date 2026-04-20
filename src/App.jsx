import Button from "./Components/Button/Button"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import Card from "./Components/Card/Card"
import RSSReader from "./Components/RSSReader/RSSReader"
import Services from "./Components/Servicios/Services"
import ScrollAnimation from "./Components/ScrollAnimation/ScrollAnimation"


function App() {


   return (
     <div className="font-sans text-gray-900">
      <NavBar />
      {/* Spacer para el navbar fijo - misma altura que NavBar */}
      <div className="h-14 sm:h-16 lg:h-18"></div>
      {/* Contenido principal */}
      <main>
      <Hero />
     <ScrollAnimation animation="fadeInUp" threshold={0.1}>
       <Services />
     </ScrollAnimation>
     <ScrollAnimation animation="fadeInUp" threshold={0.1} delay={0.2}>
       <RSSReader /> 
     </ScrollAnimation>
     <ScrollAnimation animation="fadeInUp" threshold={0.1} delay={0.2}>
       <Card />
     </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp" threshold={0.1} delay={0.2}>
        <Contact />
      </ScrollAnimation>
      </main>
      <Footer />
     <Button />
    </div>
   )
}

export default App
