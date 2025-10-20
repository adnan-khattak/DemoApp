import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b-[1.5px] border-[#2699FB] py-1">
      <div className="max-w-7xl mx-auto px-4 flex gap-4 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12">
        <span
          className={`text-gray-500 px-4 py-2 rounded-md transition-all duration-300 font-medium`}
        >
          Home
        </span>
        <span 
          className={`text-black px-4 py-2 rounded-md transition-all duration-300 font-bold`}
        >
          My Business
        </span>
        <span
          className={`text-gray-500 px-4 py-2 rounded-md transition-all duration-300 font-medium `}
        >
          Map
        </span>
      </div>
    </nav>
  );
};

export default Navigation;