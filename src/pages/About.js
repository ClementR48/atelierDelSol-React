import React from 'react';
import AboutMe from '../components/about/AboutMe';
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';

const About = () => {
  return (
    <div className="about">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;