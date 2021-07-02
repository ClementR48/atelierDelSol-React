
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import image1 from "../../images/testImageShop1Bis.jpg"

const FicheProduit = ({ produits, cartItems, selecProduits}) => {

  const { id } = useParams();
  const error = useHistory()
  let idNumber = parseInt(id);
  const [ product, setProduct ] = useState(null)
  
  useEffect(() => {
    const produit = produits.find(item => item.id === idNumber)
    if(!produit){
      return error.push('/tienda')
        
      
    }
    setProduct(produit)

  }, [product])

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
        <button onClick={() => {
            localStorage.setItem('produit', JSON.stringify(product))
            cartItems(product.id)}}
            >{ selecProduits.length > 0 ? 'Un de plus peut-etre ?' : 'Ajouter au panier' }</button>
      </div>


      
    </main> 
  );   
};

export default FicheProduit;