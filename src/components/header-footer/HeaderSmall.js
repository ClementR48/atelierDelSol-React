import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo2petit.png'
import { ShoppingCart, Menu } from 'react-feather'

const HeaderSmall = ({smallMenu, setSmallMenu, itemCount}) => {

  let cssClass = "header-small"

  if (smallMenu === true) {
    cssClass += " open"
  }
  return (
    <div className={cssClass}>
      <nav className="nav">
        <ul className="ul" >
          <li>
            {' '}
            <img src={logo} alt="logo"></img>{' '}
          </li>
          <li>
            <NavLink exact to="/" activeClassName="nav-active"   onClick={() => setSmallMenu(false)}>
              Acceuil
            </NavLink>{' '}
          </li>
          <li>
            <NavLink exact to="/tienda" activeClassName="nav-active"   onClick={() => setSmallMenu(false)}>
              Tienda
            </NavLink>{' '}
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="nav-active"   onClick={() => setSmallMenu(false)}>
              Contact
            </NavLink>{' '}
          </li>
          <li>
            <NavLink exact to="/à-propos" activeClassName="nav-active"   onClick={() => setSmallMenu(false)}>
              About
            </NavLink>{' '}
          </li>
          <li>
          <NavLink exact to="/panier" activeClassName="nav-active"   onClick={() => setSmallMenu(false)}>
            <ShoppingCart className="cart" size={22} />
            <span>{itemCount}</span>
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
