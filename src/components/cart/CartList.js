import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';


const CartList = ({selecProduits, setSelecProduits}) => {

  
  
  const [sum, setSum] = useState()
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const local = localStorage.getItem('produit')
console.log(local);
  
  const prix = []
  
  useEffect(() => {
    
    setSum(prix.reduce(reducer, 0))
  }, [selecProduits])

  
  console.log(prix);

  
  return (
    <div className="cartlist">
      <h2>Mon panier</h2>
      <div className="list">
        {selecProduits.map((produit, index) => {
           prix.push(produit.prix)
          
          return <CartItem {...produit} index={index} selecProduits={selecProduits} setSelecProduits={setSelecProduits} />
        })}
       
       
      </div>
      <div className="total">
        <p>Sous-total: {sum}</p>
        <p>Nombre d'article:{selecProduits.length}</p>
        <Link to='/checkout'>Time to pay amigo</Link>
      </div>
    </div>
  );
};

export default CartList;