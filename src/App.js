import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Components utils scroll haut de page
import ScrollToTop from './components/ScrollToTop'

// Components
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Produit from './pages/Produit'

// Utils
import color from './utils/color'
import produits from './utils/produits'

function App() {

  const [anim] = useState(true)
  const [produitsSelectiones, setProduitsSelectiones] = useState([])
  const [itemCount, setItemCount] = useState(0)
  
  
  

  const cartItems = (id) => {
    const produit = produits.find((produit) => produit.id === id)

    const array2 = [...produitsSelectiones, produit]
    setProduitsSelectiones(array2)
  }

  useEffect(() => {

    
    

  }, [])

  useEffect(() => {
     setItemCount(produitsSelectiones.length) 
    
  }, [produitsSelectiones])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home
            color={color.home}
            itemCount={itemCount}
            anim={anim}
          />
        </Route>
         <Route path="/tienda" exact>
          <Tienda
            color={color.tienda}
            itemCount={itemCount}
            produits={produits}
          />
        </Route>
        <Route path="/contact" exact>
          <Contact
            color={color.contact}
            itemCount={itemCount}
          />
        </Route>
         <Route path="/à-propos" exact>
          <About
            color={color.about}
            itemCount={itemCount}
          />
        </Route>
        <Route path="/panier" exact>
          <Cart
            color={color.cart}
            itemCount={itemCount}
            produitsSelectiones={produitsSelectiones}
            setProduitsSelectiones={setProduitsSelectiones}
            
          />
        </Route>
        <Route path="/produit/:id">
          <Produit
            color={color.produit}
            produits={produits}
            itemCount={itemCount}
            cartItems={cartItems}
            produitsSelectiones={produitsSelectiones}
            setProduitsSelectiones={setProduitsSelectiones}
             
          />
        </Route>  
      </Switch>
    </BrowserRouter>
  )
}

export default App
