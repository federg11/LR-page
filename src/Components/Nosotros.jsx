import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [

    {
        title: "C.P.N López Ríos, Osvaldo",
        description: "Soluciones contables personalizadas para empresas y profesionales.",
        image: "/olr-cp.webp",
    },
    {
        title: "C.P.N, Franco López Ríos",
        description: "Evaluamos la salud financiera de tu organización.",
        image: "/olr-cp.webp",
    },
    {
        title: "C.P.N Javier Gómez",
        description: "Optimiza tus impuestos cumpliendo con la normativa vigente.",
        image: "/olr-cp.webp",
    },
    {
        title: "Dr. Héctor Osvaldo López Ríos",
        description: "Decisiones estratégicas basadas en información sólida.",
        image: "/olr-cp.webp",
    },
];

const Nosostros = () => {
    return (
        <div className="w-full py-12 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestro Equipo</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                        <a href="#" className="block">
                            <img
                                alt={card.title}
                                src={card.image}
                                className="mx-auto h-64 w-64 object-contain sm:h-80 lg:h-96 rounded-2xl"
                            />

                            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">{card.title}</h3>

                        </a>
                        {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="mt-auto bg-black text-white px-4 py-2 rounded-xl hover:bg-red-700 transition">
                  Saber más
                </button>
              </div>
            </div> */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Nosostros;
