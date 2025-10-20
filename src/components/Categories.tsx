import React, { useState, useEffect } from 'react';
import categ1 from '../assets/catg1.jpg';
import categ2 from '../assets/catg2.png';
import categ3 from '../assets/catg3.jpg';

const categories = [
  { image: categ1, text: 'Local to Digital' },
  { image: categ2, text: 'Women Entrepreneurs' },
  { image: categ3, text: 'Global Reach' },
];

const Categories = () => {
  const [positions, setPositions] = useState(categories);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => [prev[1], prev[2], prev[0]]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTextPosition = (item, index) => {
    if (item.text === 'Women Entrepreneurs') {
      return 'bottom-center';
    } else {
      return 'top-left';
    }
  };

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 flex justify-center items-center gap-6 transition-all duration-700">
      {positions.map((item, index) => {
        const textPosition = getTextPosition(item, index);
        
        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out
              ${index === 1
                ? 'w-72 sm:w-80 md:w-96 h-64 sm:h-72 md:h-80 z-10'
                : 'w-52 sm:w-60 md:w-64 h-64 sm:h-72 md:h-80 opacity-80'}
            `}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.text}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out"
              style={{
                animation: 'slide-in 3s ease-in-out',
              }}
            />

            {/* Overlay */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              index === 1 ? 'bg-black/30' : 'bg-black/50'
            }`}></div>

            {/* Animated Text */}
            <div
              className={`absolute transition-all duration-700 text-white text-lg sm:text-xl md:text-2xl font-bold ${
                index === 1 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-70 scale-90'
              } ${
                textPosition === 'bottom-center'
                  ? 'bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full px-4'
                  : 'top-4 left-4 text-left max-w-[80%]'
              } ${
                index === 1 ? 'translate-y-0' : 'translate-y-4'
              }`}
            >
              {item.text}
              
              {index === 1 && textPosition === 'bottom-center' && (
                <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full transition-all duration-1000 delay-300"></div>
              )}
            </div>

            {index !== 1 && textPosition === 'top-left' && (
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-xl transition-all duration-500"></div>
            )}
          </div>
        );
      })}

      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateX(100%); opacity: 0; }
            20% { transform: translateX(0); opacity: 1; }
            80% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Categories;