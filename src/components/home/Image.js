import React from 'react';
import  ImageMain  from "../../images/homeMainImage2.jpg"

const Image = () => {
  return (
    <div className="image">
      <img src={ImageMain} alt="vases"></img>
      <p>La ceramique inspirée</p>
    </div>
  );
};

export default Image ;