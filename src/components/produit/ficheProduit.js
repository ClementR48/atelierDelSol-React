

import image1 from "../../images/testImageShop1Bis.jpg"

const FicheProduit = ({ product, cartItems, produitsSelectiones}) => {


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
         let localData = JSON.parse(localStorage.getItem('data'))
            if(localData){
              
              localData.push(product)
              localStorage.setItem('data',JSON.stringify(localData))

            }else {
              
              localData = [];
              localData.push(product);
              localStorage.setItem('data',JSON.stringify(localData))
            }
            
            
            cartItems(product.id)}}
            >{ produitsSelectiones.length > 0 ? 'Un de plus peut-etre ?' : 'Ajouter au panier' }</button>
      </div>


      
    </main> 
  );   
};

export default FicheProduit;