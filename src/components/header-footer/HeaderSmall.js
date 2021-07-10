import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo2petit.png'
import { ShoppingCart, Menu } from 'react-feather'

const HeaderSmall = () => {
  return (
    <div className="header-small">
      <nav className="nav">
        <ul className="ul">
          <li>
            {' '}
            <img src={logo} alt="logo"></img>{' '}
          </li>
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              Acceuil
            </NavLink>{' '}
          </li>
          <li>
            <NavLink exact to="/tienda" activeClassName="nav-active">
              Tienda
            </NavLink>{' '}
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="nav-active">
              Contact
            </NavLink>{' '}
          </li>
          <li>
            <NavLink exact to="/à-propos" activeClassName="nav-active">
              About
            </NavLink>{' '}
          </li>
          <li>
          <NavLink exact to="/panier" activeClassName="nav-active">
            <ShoppingCart className="cart" size={22} />
            <span></span>
          </NavLink>
          </li>
        </ul>
        
          
        

        <div className="ham__menu">
          <Menu size={36} />
        </div>
      </nav>
    </div>
  )
}

export default HeaderSmall
