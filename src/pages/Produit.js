import React from 'react';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import FicheProduit from '../components/produit/ficheProduit';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Produit = ({ color, oneProduit }) => {
  return (
    <div className="produit-page">
      <Header />
      <FicheProduit oneProduit={oneProduit}/>
      <SocialNetwork />
      <Footer color={color}/>
    </div>
  );
};

export default Produit;