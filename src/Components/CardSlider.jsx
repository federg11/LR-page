import Slider from "react-slick";
import Card from "./Card";


const cardsData = [
  { id: 1, imageUrl: '/olr-cp.webp', subtitle: 'C.P.N López Ríos, Osvaldo' },
  { id: 2, imageUrl: '/olr-cp.webp', subtitle: 'CPN, López Ríos, Franco' },
  { id: 3, imageUrl: '/olr-cp.webp', subtitle: 'Dr. López Ríos, Héctor Osvaldo' },
  { id: 4, imageUrl: '/olr-cp.webp', subtitle: 'CPN Gómez, Javier' }
];


const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Pantallas de laptops y grandes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Pantallas de tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Desactiva los puntos en pantallas pequeñas
        }
      },
    ]
  };

  return (
    <div id='nosotros' className="w-full px-2 py-8 bg-gray-10">
        <div><h1 className='text-center text-3xl font-bold py-10'>Nuestro Equipo</h1></div>
      <Slider {...settings} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cardsData.map(card => (
          <div key={card.id} className="px-2 cursor-pointer"> {/* Agrega padding horizontal para espacio entre cards */}
            <Card imageUrl={card.imageUrl} subtitle={card.subtitle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
