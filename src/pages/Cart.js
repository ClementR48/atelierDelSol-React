import React, { useEffect, useState } from 'react'
import CartItem from '../components/cart/CartItem'
import CartList from '../components/cart/CartList'
import Footer from '../components/header-footer/Footer'
import Header from '../components/header-footer/Header'

const Cart = ({ color, selecProduits, setSelecProduits }) => {

  

  return (
    <div className="cartpage">
      <Header />
      <CartList selecProduits={selecProduits} setSelecProduits={setSelecProduits} />
      <Footer color={color} />
    </div>
  )
}

export default Cart
