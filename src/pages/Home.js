import React from 'react';
import Header from '../components/header-footer/Header';
import Image from '../components/home/Image';
import HomeArticle from '../components/home/HomeArticle';
import Footer from '../components/header-footer/Footer';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Home = () => {
  
  return (
    <div className="home">
      <Header />
      <Image />
      <HomeArticle />
      <Footer />
      <SocialNetwork />
    </div>
  );
};

export default Home;