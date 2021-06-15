import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo2.png"


const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="ul"> 
          <li><NavLink exact to="/" activeClassName="nav-active">Acceuil</NavLink> </li>
          <li><NavLink exact to="/tienda" activeClassName="nav-active">Tienda</NavLink> </li>
         <li> <img src={logo} alt="logo"></img> </li>
          <li><NavLink exact to="/contact" activeClassName="nav-active">Contact</NavLink> </li>
          <li><NavLink exact to="/à-propos" activeClassName="nav-active">About</NavLink> </li>
        </ul>
      </nav> 
    </div>
  );
};

export default Header;