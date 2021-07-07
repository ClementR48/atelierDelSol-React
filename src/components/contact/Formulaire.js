
import gsap from 'gsap/gsap-core';
import { useEffect, useRef } from 'react';
import { Instagram, Facebook, Mail } from 'react-feather';
import logo from "../../images/logo2.png"

const Formulaire = () => {

  const hello = useRef(null)
  const contact = useRef(null) 
  const right = useRef(null) 
  const pictureLogo = useRef(null) 

  useEffect(() => {
    gsap.from(hello.current, {x:-500,y:-500, duration:1, opacity:0})
    gsap.from(contact.current, {x:-500,y:500, duration:1,opacity:0})
    gsap.from(right.current, {y:500, duration:1,opacity:0})
    gsap.from(pictureLogo.current, {opacity:0, duration:1})
  }, [])

  return (
    <div className="formulaire">
      <div className="left">
        <div className="hello" ref={hello}>
          <p className="just">just</p>
          <p className="say-hi">say hi !</p>
        </div>
        <div className="contact" ref={contact}>
          <a href="http://www.google.com"><Instagram /></a>
          <a href="http://www.google.com"><Facebook /></a>
          <a href="http://www.google.com"><Mail /></a>
          
        </div>
        <img src={logo} alt="logo" ref={pictureLogo}></img>
      </div>
      <form className="right" ref={right}>
        
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