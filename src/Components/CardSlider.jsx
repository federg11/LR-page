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
        breakpoint: 1280, // <= 1280px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // <= 768px (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // Desactiva los puntos en pantallas pequeñas
        }
      },
      {
        breakpoint: 640, // <= 640px (móviles)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  };

  return (
    <div id='nosotros' className="w-full px-2 py-8 bg-gray-10">
        <div><h1 className='text-center text-3xl font-bold py-10'>Nuestro Equipo</h1></div>
      <Slider {...settings} className=''>
        {cardsData.map(card => (
          <div key={card.id} className="px-0 sm:px-2 md:px-3 lg:px-4 cursor-pointer">
            <Card imageUrl={card.imageUrl} subtitle={card.subtitle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
