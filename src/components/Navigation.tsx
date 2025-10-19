import React from 'react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-50 py-2 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex gap-8">
        <a 
          href="/" 
          className={`text-gray-500 px-4 py-2 rounded-md transition-all duration-300 font-medium ${
            location.pathname === '/' ? 'text-blue-500 bg-black-50' : 'hover:text-black-500 hover:bg-blue-50'
          }`}
        >
          Home
        </a>
        <a 
          href="/business" 
          className={`text-gray-500 px-4 py-2 rounded-md transition-all duration-300 font-medium ${
            location.pathname === '/business' ? 'text-black-500 bg-black-50' : 'hover:text-black-500 hover:bg-blue-50'
          }`}
        >
          My Business
        </a>
        <a 
          href="/" 
          className={`text-gray-500 px-4 py-2 rounded-md transition-all duration-300 font-medium ${
            location.pathname === '/business' ? 'text-black-500 bg-black-50' : 'hover:text-black-500 hover:bg-blue-50'
          }`}
        >
          Map
        </a>
      </div>
    </nav>
  );
};

export default Navigation;