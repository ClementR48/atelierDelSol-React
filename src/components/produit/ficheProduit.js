import React from 'react';
import image1 from "../../images/testImageShop1Bis.jpg"

const ficheProduit = ({ oneProduit }) => {
  
  return (
    <main className="fiche-produit">
      <div className="images">
        <img src={image1} alt="illustration produit"></img>
        <div className="photo-mini">
          <img src=''></img>
          <img src=''></img>
          <img src=''></img>
        </div>
      </div>
      <div className='informations'>
        <h2>
          {oneProduit.titre}
        </h2>
        <p className="description">
        {oneProduit.description}
        </p>
        <div className="dimensions">
          <p>hauteur: {oneProduit.dimensions.hauteur}cm</p> 
          <p>largeur: {oneProduit.dimensions.largeur}cm</p>
        </div>
        <p className="prix">{oneProduit.prix}€</p>
        <button>Ajouter au panier </button>
      </div>


      
    </main>
  );
};

export default ficheProduit;