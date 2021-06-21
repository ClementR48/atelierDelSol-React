import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo2.png";
import { ShoppingCart, Menu } from 'react-feather';
import gsap from 'gsap/gsap-core';


const Header = ({ anim }) => {

  console.log(anim);
  const ul = useRef(null) ;
  const image = useRef(null) ;
  const cart = useRef(null) ;

  useEffect(() => {
    if(anim === true){
      gsap.from(ul.current, {x:500, duration: 1, opacity:0, })
      gsap.from(image.current, {x:-200 , duration:1, opacity:0, delay:1})
      gsap.from(cart.current, {y:100 , duration:1, opacity:0, })
    }
  })
  
  return (
    <header className="header">
      <nav className="nav">
        <ul className='ul' ref={ul}> 
          <li ref={image}> <img src={logo} alt="logo"></img> </li>
          <li><NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink> </li>
          <li><NavLink exact to="/tienda" activeClassName="nav-active">Tienda</NavLink> </li>
          <li><NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink> </li>
          <li><NavLink exact to="/à-propos" activeClassName="nav-active">About</NavLink> </li>
        </ul>
        <div ref={cart}>
          <NavLink exact to="/panier" activeClassName="nav-active"><ShoppingCart className="cart"  size={22} /></NavLink> 
        </div>   

        <ul className="nav-small">
          <li><NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink> </li>
          <li><NavLink exact to="/tienda" activeClassName="nav-active">Tienda</NavLink> </li>
          <li><NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink> </li>
          <li><NavLink exact to="/à-propos" activeClassName="nav-active">About</NavLink> </li>
        </ul> 
        <div className="hamburger">
          <Menu size={22} />
        </div>
      </nav> 
    </header>
  );
};

export default Header;