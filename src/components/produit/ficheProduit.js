import React from 'react';
import image1 from "../../images/testImageShop1Bis.jpg"

const ficheProduit = () => {
  return (
    <main className="fiche-produit">
      <div className="images">
        <img src={image1} alt="illustration produit"></img>
        <div className="photo-mini">
          <img src={image1}></img>
          <img src={image1}></img>
          <img src={image1}></img>
        </div>
      </div>
      <div className='informations'>
        <h2>
          Vase aux petits bras
        </h2>
        <p className="description">
          vase modelé à la main avec la technique du colombin. 
          Faïence blanche texturée
          Email transparent et turquoise
        </p>
        <div className="dimensions">
          <p>hauteur: 25cm</p> 
          <p>largeur: 48cm</p>
        </div>
        <p className="prix">48€</p>
        <button>Ajouter au panier </button>
      </div>


      
    </main>
  );
};

export default ficheProduit;