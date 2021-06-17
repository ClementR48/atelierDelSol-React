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
import Produit from './Produit';



const Shop = () => {
  return (
    <div className="shop">
      <div className="galerie">
        <Produit />
      </div>
      
    </div>
  );
};

export default Shop;
