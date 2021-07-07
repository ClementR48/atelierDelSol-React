
import CartList from '../components/cart/CartList'
import Footer from '../components/header-footer/Footer'
import Header from '../components/header-footer/Header'

const Cart = ({
        color,
        itemCount,
        produitsSelectiones,
        setProduitsSelectiones,
        localData
}) => {

  
  return (
    <div className="cartpage">
      <Header itemCount={itemCount} />
      <CartList
        produitsSelectiones={produitsSelectiones}
        setProduitsSelectiones={setProduitsSelectiones}
        localData={localData}
      />
      <Footer color={color} />
    </div>
  )
}

export default Cart
