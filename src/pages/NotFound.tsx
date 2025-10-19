import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const NotFound = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="text-center py-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-8xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold no-underline transition-all duration-300 hover:bg-blue-600 hover:transform hover:-translate-y-1"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;