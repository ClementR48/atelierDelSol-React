import React from 'react';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import FicheProduit from '../components/produit/ficheProduit';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Produit = () => {
  return (
    <div className="produit-page">
      <Header />
      <FicheProduit />
      <SocialNetwork />
      <Footer />
    </div>
  );
};

export default Produit;