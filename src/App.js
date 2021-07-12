import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Components utils scroll haut de page
import ScrollToTop from './components/ScrollToTop'

// Components
import HeaderSmall from './components/header-footer/HeaderSmall'
import Header from './components/header-footer/Header'
import Footer from './components/header-footer/Footer'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Produit from './pages/Produit'

// Utils

import produits from './utils/produits'
import SocialNetwork from './components/social_network/SocialNetwork'


function App() {

  
  const [produitsSelectiones, setProduitsSelectiones] = useState([])
  const [itemCount, setItemCount] = useState(0)
  const [ smallMenu , setSmallMenu ] =useState(false)


 

  
  let localData = JSON.parse(localStorage.getItem('data'))
 
  

  const cartItems = (id) => {
    const produit = produits.find((produit) => produit.id === id)

    const array2 = [...produitsSelectiones, produit]
    setProduitsSelectiones(array2)
  }

  useEffect(() => {
    if (localData) {
      setProduitsSelectiones(localData)
    }
  }, [])



  useEffect(() => {
     setItemCount(produitsSelectiones.length) 
    
  }, [produitsSelectiones])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header setSmallMenu={setSmallMenu} smallMenu={smallMenu} itemCount={itemCount} />
      <HeaderSmall setSmallMenu={setSmallMenu}  smallMenu={smallMenu} itemCount={itemCount}/> 
      <SocialNetwork />
      

      <Switch>
        <Route path="/" exact >
          <Home
            
          />
        </Route>
         <Route path="/tienda" exact>
          <Tienda
            
            produits={produits}
          />
        </Route>
        <Route path="/contact" exact>
          <Contact
            
            
          />
        </Route>
         <Route path="/à-propos" exact>
          <About
            
           
          />
        </Route>
        <Route path="/panier" exact>
          <Cart
            
            
            produitsSelectiones={produitsSelectiones}
            setProduitsSelectiones={setProduitsSelectiones}
            
          />
        </Route>
        <Route path="/produit/:id">
          <Produit
            
            produits={produits}
            
            cartItems={cartItems}
            produitsSelectiones={produitsSelectiones}
            setProduitsSelectiones={setProduitsSelectiones}
             
          />
        </Route>  
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
