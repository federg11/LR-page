import React from 'react';

const Card = ({ imageUrl, subtitle }) => {
  return (
      <>
      <div 
      className="relative w-full h-[28rem] bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
      >
      <div className="absolute bottom-0 left-0 w-full p-4 bg-red-800 bg-opacity-50 text-white">
        <h3 className="text-lg font-bold text-center">{subtitle}</h3>
      </div>
    </div>
    </>
  );
};

export default Card;