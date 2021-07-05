import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import FicheProduit from '../components/produit/FicheProduit';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Produit = ({
          color,
          produits,
          itemCount,
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
      <Header itemCount={itemCount} />
      <FicheProduit
        product={product}
        cartItems={cartItems}
        setItemCount={setItemCount}
        produitsSelectiones={produitsSelectiones}
        setProduitsSelectiones={setProduitsSelectiones}
        localData={localData}
        
       />
      <SocialNetwork />
      <Footer color={color}/>
    </div>
  );
};

export default Produit;