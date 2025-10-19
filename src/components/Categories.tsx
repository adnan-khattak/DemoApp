import React from 'react';

interface CategoryCardProps {
  image: string;
  label: string;
  title: string;
}

const CategoryCard = ({ image, label, title }: CategoryCardProps) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
      <div className="text-sm opacity-90 mb-2">{label}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const Categories = () => {
  const categories = [
    {
      image: '/src/assets/local-digital.jpg',
      label: 'Local',
      title: 'to Digital'
    },
    {
      image: '/src/assets/women-entrepreneurs.jpg',
      label: 'Women',
      title: 'Entrepreneurs'
    },
    {
      image: '/src/assets/global-reach.jpg',
      label: 'Global',
      title: 'Reach'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        From <span className="text-blue-500">Home-Based Sellers to Global Suppliers</span> —
      </h2>
      <p className="text-lg text-gray-500 mb-8">Real Businesses Growing Every Day</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;