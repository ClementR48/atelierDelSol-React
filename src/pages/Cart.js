
import CartList from '../components/cart/CartList'



const Cart = ({
        
       
        produitsSelectiones,
        setProduitsSelectiones,
        localData
}) => {

  
  return (
    <div className="cartpage">
      
      <CartList
        produitsSelectiones={produitsSelectiones}
        setProduitsSelectiones={setProduitsSelectiones}
        localData={localData}
      />
      
    </div>
  )
}

export default Cart
