import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import { Facebook, Mail, Instagram } from 'react-feather';
import { useLocation } from 'react-router-dom';

const SocialNetwork = () => {

  const el = useRef(null);

 let location = useLocation()



  useEffect(() => {
    
      gsap.from(el.current, {opacity:0,x:-100, duration:1})
    
      
    
    
  }, [location])

  return (
    <div className="social-network" ref={el}>
      <div>
        <a  href="https://www.facebook.com/"><Facebook className="facebook" /></a>
        <a  href="https://mail.google.com/"><Mail className="gmail" /></a>
        <a  href="https://instagram.com/"><Instagram className="instagram"/></a>
      </div>
    </div>
  );
};

export default SocialNetwork;