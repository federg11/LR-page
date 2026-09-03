import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const backgroundImages = [
  "/Sala1.webp",
  "/Entrada.webp",
  "/Sala2.webp",
  "/Recepcion.webp",
  "/Sala3.webp",
];

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[550px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="absolute inset-0 z-0 h-full w-full"
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-1000 relative"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60 z-0"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-center justify-center h-full text-center text-white px-4 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            López Rios & Asociados
          </h1>
          <p className="text-2xl sm:text-lg md:text-xl mb-8 font-semibold">
            Asesoramiento contable, impuestos y auditorías para empresas y
            profesionales.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-black hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Contactanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
