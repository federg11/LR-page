import CardSlider from './CardSlider';

const Card = ({ imageUrl, subtitle }) => {
  return (
      <>
      <div 
      className="relative mx-auto w-full max-w-xs h-80 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center rounded-lg shadow-2xl overflow-hidden flex"
      style={{ backgroundImage: `url(${imageUrl})` }}
      >
      <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-red-800 bg-opacity-60 text-white">
        <h3 className="text-lg font-bold text-center">{subtitle}</h3>
      </div>
    </div>
    </>
  );
};

export default Card;