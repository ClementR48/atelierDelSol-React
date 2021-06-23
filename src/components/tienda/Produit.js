import React from 'react'

import imageTest1 from '../../images/testImageShop1Bis.jpg'
import imageTest2 from '../../images/testImageShop2Bis.jpg'
import imageTest3 from '../../images/testImageShop3Bis.jpg'
import imageTest4 from '../../images/testImageShop4Bis.jpg'
import imageTest5 from '../../images/testImageShop5Bis.jpg'


const Produit = ({produit, setListProduit}) => {
  

  return (
    <div className="produit">
      <img src={imageTest1} alt="produit-vase"></img>
        <div className="caption">
        <div className="about">
          <h2>{produit.titre}</h2>
          <p onClick={() => {
            setListProduit(produit.categorie)
          }}> {produit.categorie}</p>
          <p> {produit.prix}</p>
        </div> 
      </div> 
    </div>
    
  )
}



export default Produit
