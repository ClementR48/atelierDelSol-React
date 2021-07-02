import React, { useEffect } from 'react';
import { Trash } from 'react-feather';
import { Link } from 'react-router-dom';
import  image  from "../../images/testImageShop2Bis.jpg"

const CartItem = ({ id, titre, prix, index, selecProduits, setSelecProduits}) => {

console.log(selecProduits);

const filteredProduit = (id) => {
  let newArray = selecProduits.filter((item, index) => index !== id )
  setSelecProduits(newArray)
  return newArray
}




  return (
    <div className="cartitem">
      <img src={image} alt="" ></img>
      <Link to={`/produit/${id}`}>{titre}</Link>
      <p>{prix}</p>
      <Trash id={id} onClick={() =>{ 
        localStorage.removeItem(titre)
        filteredProduit(index)} }/>
    </div>
  );
};

export default CartItem;