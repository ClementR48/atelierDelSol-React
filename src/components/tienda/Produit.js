import React from 'react'

import imageTest1 from '../../images/testImageShop1Bis.jpg'
import imageTest2 from '../../images/testImageShop2Bis.jpg'
import imageTest3 from '../../images/testImageShop3Bis.jpg'
import imageTest4 from '../../images/testImageShop4Bis.jpg'
import imageTest5 from '../../images/testImageShop5Bis.jpg'


const Produit = () => {
  return (
    <>
    <div className="produit">
      <img src={imageTest1} alt="produit-vase"></img>
        <div className="caption">
        <div className="about">
          <h2>Vase aux petits bras</h2>
          <p> Vase</p>
          <p> 39€</p>
        </div> 
      </div> 
    </div>
    <div className="produit">
      <img src={imageTest2} alt="produit-vase"></img>
      <div className="caption">
        <div className="about">
          <h2>Titre</h2>
          <p> Categorie</p>
          <p> Prix</p>
        </div> 
      </div> 
    </div>
    <div className="produit">
      <img src={imageTest3} alt="produit-vase"></img>
        <div className="caption">
        <div className="about">
          <h2>Titre</h2>
          <p> Categorie</p>
          <p> Prix</p>
        </div> 
      </div> 
    </div>
    <div className="produit">
      <img src={imageTest4} alt="produit-vase"></img>
        <div className="caption">
        <div className="about">
          <h2>Titre</h2>
          <p> Categorie</p>
          <p> Prix</p>
        </div> 
      </div> 
    </div>
    <div className="produit">
      <img src={imageTest5} alt="produit-vase"></img>
        <div className="caption">
        <div className="about">
          <h2>Titre</h2>
          <p> Categorie</p>
          <p> Prix</p>
        </div> 
      </div> 
    </div>
    </>
  )
}



export default Produit
