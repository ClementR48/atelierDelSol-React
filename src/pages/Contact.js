import React from 'react';
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';
import Introduction from '../components/contact/Introduction';
import Formulaire from '../components/contact/Formulaire';

const Contact = ({ color }) => {
  return (
    <div className="contact-page">
      <Header />
      <Introduction />
      <Formulaire />
      <Footer color={color} />
    </div>
  );
};

export default Contact;