import { useEffect, useState } from "react";




const FicheProduit = ({ product, cartItems, produitsSelectiones}) => {

  const [imagesOrder, setImagesOrder] = useState([])
  

useEffect(() => {
  
  setImagesOrder([product.image, product.miniImage.first, product.miniImage.seconde, product.miniImage.third])
  
}, [])


     return (
     <main className="fiche-produit">
      <div className="images">
        <img src={imagesOrder[0]} alt="illustration produit"></img>
        <div className="photo-mini">
          <img src={imagesOrder[1]} alt='' onClick={() => {
            setImagesOrder([imagesOrder[1],imagesOrder[0],  imagesOrder[2], imagesOrder[3]])
            
          }}
          ></img>
          <img src={imagesOrder[2]} alt='' onClick={() => {
            setImagesOrder([imagesOrder[2],imagesOrder[1],  imagesOrder[0], imagesOrder[3]])
            
          }}></img>
          <img src={imagesOrder[3]} alt=''onClick={() => {
            setImagesOrder([imagesOrder[3],imagesOrder[1],  imagesOrder[2], imagesOrder[0]])
            
          }}></img>
     

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
          <p>Hauteur: {product.dimensions.hauteur}cm</p> 
          <p>Largeur: {product.dimensions.largeur}cm</p>
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