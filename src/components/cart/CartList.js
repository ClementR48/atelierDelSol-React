import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';


const CartList = ({selecProduits, setSelecProduits, localData}) => {

  
  const [sum, setSum] = useState()
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  
  
  const prix = []
  
  useEffect(() => {
    setSum(prix.reduce(reducer, 0))
  }, [selecProduits])

const affichage =() => {
  if(selecProduits.length === 0) {
    return <p> le panier est vide </p>
  }else {
    return(
    selecProduits.map((produit, index) => {
      prix.push(produit.prix)
      return (
      <CartItem
        key={index}
        localData={localData}
        {...produit}
        index={index}
        selecProduits={selecProduits}
        setSelecProduits={setSelecProduits} />)
      }))
  }
}

  
  return (
    <div className="cartlist">
      <h2>Mon panier</h2>
      <div className="list">

        {affichage()}
        
      </div>
      {selecProduits.length === 0 ? '' :(
      <div className="total">
        <p>Sous-total: {sum}</p>
        <p>Nombre d'article:{selecProduits.length}</p>
        <Link to='/checkout'>Time to pay amigo</Link>
      </div>)}
    </div>
  );
};

export default CartList;