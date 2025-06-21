 

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-26 sm:py-32 flex items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/oficina3.webp')" }} // Asegúrate de colocar esta imagen en /public/oficina.jpg
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-red-500 typing-effect text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mx-auto">
          López Ríos & Asociados
        </h1>
        <p className="text-2xl sm:text-lg md:text-xl mb-8 font-semibold">
          Asesoramiento contable, impuestos y auditorías para empresas y profesionales.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-black hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;