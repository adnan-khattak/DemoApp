import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';

const Index = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Hero variant="selling" />
      <Stats variant="selling" />
      <Categories />
    </div>
  );
};

export default Index;