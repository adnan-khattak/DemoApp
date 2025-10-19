import React from 'react';

interface CategoryCardProps {
  image: string;
  label: string;
  title: string;
}

const CategoryCard = ({ image, label, title }: CategoryCardProps) => (
  <div className="category-card">
    <img src={image} alt={title} className="category-image" />
    <div className="category-overlay">
      <div className="category-label">{label}</div>
      <h3 className="category-title">{title}</h3>
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
    <section className="categories">
      <h2 className="section-title">
        From <span className="section-title-highlight">Home-Based Sellers to Global Suppliers</span> —
      </h2>
      <p className="section-subtitle">Real Businesses Growing Every Day</p>
      
      <div className="category-grid">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;