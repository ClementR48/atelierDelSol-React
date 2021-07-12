import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


import FicheProduit from '../components/produit/FicheProduit';


const Produit = ({
          
          produits,
          setItemCount,
          cartItems,
          produitsSelectiones,
          setProduitsSelectiones,
          localData
  }) => {

    const [ product, setProduct ] = useState(null)
  
    //recuperation de l'id dans l'URL 
    const { id } = useParams();
    let idNumber = parseInt(id);
  
    const error = useHistory()
    
    
    const produit = produits.find(item => item.id === idNumber)
    
    
    
    useEffect(() => {
      
      if(!produit){
        return error.push('/tienda')
          
      }
      setProduct(produit)
      
  
    }, [product])

  return (
    <div className="produit-page">
      
      {product && <FicheProduit
        product={product}
        cartItems={cartItems}
        setItemCount={setItemCount}
        produitsSelectiones={produitsSelectiones}
        setProduitsSelectiones={setProduitsSelectiones}
        localData={localData}
        
       />}
      
     
    </div>
  );
};

export default Produit;