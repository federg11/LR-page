import Slider from 'react-slick';
import Card from './Card'; // Asegúrate de que la ruta sea correcta

// Datos de ejemplo para las cards
const cardsData = [
  { id: 1, imageUrl: '/olr-cp.webp', subtitle: 'C.P.N López Ríos, Osvaldo' },
  { id: 2, imageUrl: '/olr-cp.webp', subtitle: 'CPN, López Ríos, Franco - Auditoría' },
  { id: 3, imageUrl: '/olr-cp.webp', subtitle: 'Dr. López Ríos, Héctor Osvaldo - Legales' },
  { id: 4, imageUrl: '/olr-cp.webp', subtitle: 'CPN Gómez, Javier - Gerencia' },
  { id: 5, imageUrl: '/olr-cp.webp', subtitle: 'CPN Cudugnello, Patricia - Laboral' },
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
    <div id='nosotros' className="w-full max-w-7xl mx-auto px-4 py-18 bg-gray-10">
        <div><h1 className='text-center text-3xl font-bold py-10'>Nuestro Equipo</h1></div>
      <Slider {...settings}>
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