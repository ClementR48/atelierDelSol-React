import React from 'react';
import { Facebook, Mail, Instagram } from 'react-feather';

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <a href="https://www.facebook.com/"><Facebook /></a>
      <a href="https://mail.google.com/"><Mail /></a>
      <a href="https://instagram.com/"><Instagram /></a>
 
    </div>
  );
};

export default SocialNetwork;