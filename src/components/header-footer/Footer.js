import React from 'react';

import logo from "../../images/logo2.png"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo"></img>
      <ul className="listSocialNetwork">
        <li><span>Email:</span> atelierDelSol@gmail.com</li>
        <li><span>Instagram:</span> @atelierDelSol</li>
        <li><span>Facebook:</span> Atelier Del Sol</li>
      </ul>
    </footer>
  );
};

export default Footer;