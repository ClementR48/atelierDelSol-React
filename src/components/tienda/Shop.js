import React, { Component } from 'react'
import Produit from './Produit'

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;population;flag;region;capital',
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          isLoaded: true,
          items: data,
        }),
      )
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

export default Shop
