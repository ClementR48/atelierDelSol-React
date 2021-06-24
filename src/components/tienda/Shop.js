/* import React, { Component } from 'react'
import Produit from './Produit'

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  

  render() {
    var { isLoaded, items } = this.state

    if (!isLoaded) {
      return <div> Chargement ...</div>
    } else {
      return (
        <div className="shop">
          <div className="galerie">
            {items.map((item) => (
              <div key={item.name} className="box">
                <Produit data={item} />
              </div>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default Shop */

import React from 'react';
import { Link } from 'react-router-dom';
import Produit from './Produit';



const Shop = ({ listProduit, setListProduit, displayProduit }) => {
  
  return (
    <div className="shop">
      <div className="galerie">
        {listProduit.map((produit) => 

          <Link key={produit.id} to={`/produit/${produit.id}`} onClick={() => displayProduit(produit.id)}>
            <Produit  produit={produit} setListProduit={setListProduit} displayProduit={displayProduit}/>
          </Link>
        )}
        
      </div>
      
    </div>
  );
};

export default Shop;
