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
    <section className="max-w-7xl mx-auto my-8 px-4 grid grid-cols-2 gap-8 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          {content.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <button className="bg-blue-500 text-white border-none px-8 py-4 rounded-lg text-lg font-semibold cursor-pointer hover:bg-blue-600 transition-all duration-300 self-start">
          {content.buttonText}
        </button>
      </div>
      
      <div className="flex flex-col gap-4">
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
      </div>
    </section>
  );
};

export default Hero;