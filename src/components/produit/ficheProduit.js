
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "../../images/testImageShop1Bis.jpg"

const FicheProduit = ({ produits }) => {

  const { id } = useParams();
  let idNumber = parseInt(id);
  const [ product, setProduct ] = useState(null)
  
  useEffect(() => {
    const produit = produits.find(item => item.id === idNumber)

    setProduct(produit)

  })

  if (!product){return null}

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
          {product.titre}
        </h2>
        <p className="description">
        {product.description}
        </p>
        <div className="dimensions">
          <p>hauteur: {product.dimensions.hauteur}cm</p> 
          <p>largeur: {product.dimensions.largeur}cm</p>
        </div>
        <p className="prix">{product.prix}€</p>
        <button>Ajouter au panier </button>
      </div>


      
    </main> 
  );   
};

export default FicheProduit;