import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Make sure react-icons is installed
import sellingMain from '../assets/sellingheromain.png';
import sellingSec from '../assets/sellingherosec.png';
import growingMain from '../assets/growingmain.jpg';
import growingSec from '../assets/growingsec.png';

interface HeroProps {
  variant?: 'selling' | 'growing';
}

const Hero = ({ variant = 'selling' }: HeroProps) => {
  const content =
    variant === 'selling'
      ? {
          title: 'Want customers\nin just 2 steps?',
          buttonText: 'Start Selling',
          mainImage: sellingMain,
          secondaryImage: sellingSec,
        }
      : {
          title: 'Ready to grow\nyour business online?',
          buttonText: 'Get Started',
          mainImage: growingMain,
          secondaryImage: growingSec,
        };

  return (
    <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-4 sm:gap-6 lg:gap-7">
        {/* Left Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Main Image with Play Button */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm">
            <img
              src={content.mainImage}
              alt="Main showcase"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Play Button */}
            <button
              className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/80 hover:bg-white p-3 sm:p-4 rounded-full shadow-lg transition duration-200 flex items-center justify-center"
            >
              <FaPlay className="text-gray-800 text-sm sm:text-lg" />
            </button>
          </div>

          {/* Text and Button Below the Image */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight whitespace-pre-line">
              {content.title}
            </h1>
            <button className="bg-[#2699FB] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-200 shadow-md w-full sm:w-auto">
              {content.buttonText}
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
          <img
            src={content.secondaryImage}
            alt="Secondary"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
