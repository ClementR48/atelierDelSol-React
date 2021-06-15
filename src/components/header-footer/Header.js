import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo2.png";
import { ShoppingCart } from 'react-feather';


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="ul"> 
          <li><NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink> </li>
          <li><NavLink exact to="/tienda" activeClassName="nav-active">Tienda</NavLink> </li>
          <li> <img src={logo} alt="logo"></img> </li>
          <li><NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink> </li>
          <li><NavLink exact to="/à-propos" activeClassName="nav-active">About</NavLink> </li>
        </ul>
        <div>
          <NavLink exact to="/panier"><ShoppingCart className="cart" size={20} /></NavLink> 
        </div>   
      </nav> 
    </header>
  );
};

export default Header;