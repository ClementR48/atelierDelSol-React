import React from 'react';
import Header from '../components/header-footer/Header';
import Image from '../components/home/Image';
import HomeArticle from '../components/home/HomeArticle';
import Footer from '../components/header-footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Image />
      <HomeArticle />
      <Footer />
    </div>
  );
};

export default Home;