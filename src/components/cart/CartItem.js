
import { Trash } from 'react-feather';
import { Link } from 'react-router-dom';
import  image  from "../../images/testImageShop2Bis.jpg"

const CartItem = ({
        id,
        titre,
        prix,
        index,
        produitsSelectiones,
        setProduitsSelectiones,
  }) => {



  const filteredProduit = (i) => {
    let newArray = produitsSelectiones.filter((item, index) => index !== i )
    setProduitsSelectiones(newArray)
    localStorage.setItem('data',JSON.stringify(newArray))
    return newArray
  }


  



  return (
    <div className="cartitem">
      <img src={image} alt="" ></img>
      <Link to={`/produit/${id}`}>{titre}</Link>
      <p>{prix}€</p>
      <Trash id={id} onClick={() =>{ 
        
        filteredProduit(index)} }/>
    </div>
  );
};

export default CartItem;