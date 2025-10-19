import React from 'react';

interface HeroProps {
  variant?: 'selling' | 'growing';
}

const Hero = ({ variant = 'selling' }: HeroProps) => {
  const content = variant === 'selling' 
    ? {
        title: 'Want customers\nin just 2 steps?',
        buttonText: 'Start Selling'
      }
    : {
        title: 'Ready to grow\nyour business online?',
        buttonText: 'Get Started'
      };

  return (
    <section className="max-w-7xl mx-auto my-8 px-4">
      <div className="grid grid-cols-2 gap-8 items-start">
        {/* Main visual area */}
        <div className="space-y-6">
          <div className="relative">
            <img 
              src="/src/assets/hero-meeting.jpg" 
              alt="Business professionals collaborating" 
              className="w-full h-80 object-cover rounded-xl shadow-lg" 
            />
            <button className="absolute bottom-4 right-4 bg-white bg-opacity-90 border-none rounded-full w-15 h-15 flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300" aria-label="Play video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </button>
          </div>
          
          {/* Text and button section below main image */}
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              {content.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              {content.buttonText}
            </button>
          </div>
        </div>

        {/* Secondary visual area */}
        <div className="relative">
          <img 
            src="/src/assets/women-entrepreneurs.jpg" 
            alt="Business growth and entrepreneurship" 
            className="w-full h-80 object-cover rounded-xl shadow-lg" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-medium">Ready to grow your business online?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;