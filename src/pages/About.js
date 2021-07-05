import React from 'react';
import AboutMe from '../components/about/AboutMe';
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';

const About = ({ color, itemCount }) => {
  return (
    <div className="about-page">
      <Header itemCount={itemCount} />
      <AboutMe />
      <Footer color={color}/>
    </div>
  );
};

export default About;