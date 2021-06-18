import React from 'react';
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';
import Introduction from '../components/contact/Introduction';
import Formulaire from '../components/contact/Formulaire';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <Introduction />
      <Formulaire />
      <Footer />
    </div>
  );
};

export default Contact;