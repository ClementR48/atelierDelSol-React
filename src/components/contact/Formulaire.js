import React from 'react';
import { Instagram, Facebook, Mail } from 'react-feather';
import logo from "../../images/logo2.png"

const Formulaire = () => {
  return (
    <div className="formulaire">
      <div className="left">
        <div className="hello">
          <p className="just">just</p>
          <p className="say-hi">say hi !</p>
        </div>
        <div className="contact">
          <a href="http://www.google.com"><Instagram /></a>
          <a href="http://www.google.com"><Facebook /></a>
          <a href="http://www.google.com"><Mail /></a>
          
        </div>
        <img src={logo} alt="logo"></img>
      </div>
      <form className="right">
        
          <input type="text" placeholder="Nom"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Objet"></input>
          <textarea  placeholder="Votre message"></textarea>
          <button type="submit" >Envoyer</button>
        
      </form>
      
      
    </div>
  );
};

export default Formulaire;