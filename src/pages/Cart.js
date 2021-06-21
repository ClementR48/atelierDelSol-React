import React from 'react';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';

const Cart = ({ color }) => {
  return (
    <div>
      <Header />
      <Footer color={color}/>
      
    </div>
  );
};

export default Cart;