import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';


const CartList = ({produitsSelectiones, setProduitsSelectiones, localData}) => {

  
  const [sum, setSum] = useState()
  const reducer = (accumulator, currentValue) => accumulator + currentValue
console.log(produitsSelectiones);
  const prix = []
  


  const affichage =() => {
    if(produitsSelectiones.length === 0) {
      return <p> le panier est vide </p>
    }else {
      return(
        produitsSelectiones.map((produit, index) => {
        prix.push(produit.prix)
        return (
        <CartItem
          key={index}
          {...produit}
          index={index}
          produitsSelectiones={produitsSelectiones}
          setProduitsSelectiones={setProduitsSelectiones} />)
        }))
    }
  }

  useEffect(() => {
    setSum(prix.reduce(reducer, 0))
  }, [produitsSelectiones])

  
  return (
    <div className="cartlist">
      <h2>Mon panier</h2>
      <div className="list">

        {affichage()}
        
      </div>
      {produitsSelectiones.length === 0 ? '' :(
      <div className="total">
        <p>Sous-total: {sum}€</p>
        <p>Nombre d'article:{produitsSelectiones.length}</p>
        <Link to='/checkout'>Time to pay amigo</Link>
      </div>)}
    </div>
  );
};

export default CartList;