import { useEffect, useState } from "react";
import { ThumbsUp } from "react-feather";



const FicheProduit = ({ product, cartItems, produitsSelectiones}) => {

  const [imagesOrder, setImagesOrder] = useState([])
  const [ buttonText, setButtonText ] = useState('')

  

  
    const time = () => {
      const timer = setTimeout(() => {
        setButtonText('Ajouter au panier')
      },1000 );
  
      return () => clearTimeout(timer);
    }
  

  
  

useEffect(() => {
  
  setImagesOrder([product.image, product.miniImage.first, product.miniImage.seconde, product.miniImage.third])
  setButtonText('Ajouter au panier')
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
        <button onClick={ (event) => {
         let localData = JSON.parse(localStorage.getItem('data'))
            if(localData){
              
              localData.push(product)
              localStorage.setItem('data',JSON.stringify(localData))

            }else {
              
              localData = [];
              localData.push(product);
              localStorage.setItem('data',JSON.stringify(localData))
            }
            setButtonText(<> <ThumbsUp  size={16}/> <ThumbsUp  size={16}/> <ThumbsUp  size={16}/> <ThumbsUp  size={16}/> </> )
            
            time()
            
            
            cartItems(product.id)}}
            >{buttonText}</button>
      </div>


      
    </main> 
  );   
};

export default FicheProduit;