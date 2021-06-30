import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import FicheProduit from '../components/produit/FicheProduit';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Produit = ({ color, produits }) => {



  
  
  return (
    <div className="produit-page">
      <Header />
      <FicheProduit  produits={produits}  />
      <SocialNetwork />
      <Footer color={color}/>
    </div>
  );
};

export default Produit;