import WhatsAppButton from "./components/ui/WhatsAppButton/WhatsAppButton";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import NavBar from "./components/layout/NavBar/NavBar";
import Team from "./components/sections/Team/Team";
import News from "./components/sections/News/News";
import Services from "./components/sections/Services/Services";
import ScrollAnimation from "./components/ui/ScrollAnimation/ScrollAnimation";

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
          <News />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" threshold={0.1} delay={0.2}>
          <Team />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" threshold={0.1} delay={0.2}>
          <Contact />
        </ScrollAnimation>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
