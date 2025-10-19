import React from 'react';
import categ1 from '../assets/catg1.jpg';
import categ2 from '../assets/catg2.png';
import categ3 from '../assets/catg3.jpg';

interface CategoryCardProps {
  image: string;
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-center';
}

const overlayPositions: Record<string, string> = {
  'top-left': 'top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4',
  'top-right': 'top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4',
  'bottom-center': 'bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2',
};

const CategoryCard = ({ image, text, position }: CategoryCardProps) => (
  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt="Category"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Overlay Text */}
    <div
      className={`absolute text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold drop-shadow-lg ${overlayPositions[position]}`}
    >
      {text}
    </div>
  </div>
);

const Categories = () => {
  const categories = [
    { image: categ1, text: 'Local to Digitize', position: 'top-left' },
    { image: categ2, text: 'Women Entrepreneurs', position: 'bottom-center' },
    { image: categ3, text: 'Global Reach', position: 'top-left' },
  ];

  return (
    <section className="max-w-7xl mx-auto my-8 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((c, i) => (
          <CategoryCard key={i} image={c.image} text={c.text} position={c.position} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
