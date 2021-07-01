import React, { useEffect, useState } from 'react';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';

const Cart = ({ color, selecProduits }) => {

  const [ prices, setPrices ] = useState([])
  const [ sum, setSum ] = useState()

  
  useEffect(() => {
    

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setSum(prices.reduce(reducer,0))
    
    
   
  }, [prices])
  console.log(sum);
  

  
  

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
      <div>{sum}</div>
      <Footer color={color}/>
      
    </div>
  );
};

export default Cart;