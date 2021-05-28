import React from 'react';
import Categorie from '../components/Categorie';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Shop from '../components/Shop';

const Tienda = () => {
  return (
    <div>
      <Header />
      <Categorie />
      <Shop />
      <Footer />
    </div>
  );
};

export default Tienda;