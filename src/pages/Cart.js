import React from 'react';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';

const Cart = ({ color, selecProduits }) => {

  const prices = [0]
  console.log(prices);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(prices.reduce(reducer,0));

  console.log(prices[0]);
  

  return (
    <div>
      <Header />
      <ul>
        {selecProduits.map((produit) => {
          prices.push(produit.prix)
          return (<li>{produit.prix}</li> )}
          
          // eslint-disable-next-line no-lone-blocks
          
          
        )}
      </ul>
      <div></div>
      <Footer color={color}/>
      
    </div>
  );
};

export default Cart;