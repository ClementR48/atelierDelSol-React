import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Tienda from './pages/Tienda'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Produit from './pages/Produit'
import { useEffect, useState } from 'react'
import produits from './utils/produits'
import ScrollToTop from './components/ScrollToTop'

function App() {

  const [listProduit, setListProduit] = useState([])
  const [anim] = useState(true)
  const [selecProduits, setSelecProduits] = useState([])
  const [itemCount, setItemCount] = useState(0)

 console.log(selecProduits);


  const color = {
    home: 'rgba(254,166,129,0.7)',
    tienda: 'rgba(227,240,185,0.7)',
    contact: 'rgba(255,239,168,0.7)',
    about: 'rgba(255,212,189,0.7)',
    cart: '',
    produit: 'rgba(255,239,168,0.7)',
  }

  const allCategories = produits.map((produit) => produit.categorie)
  const categories = allCategories.filter(
    (ele, pos) => allCategories.indexOf(ele) === pos,
  )

  const fetchProducts = async () => {
    const products = await produits
    setListProduit(products)
  }




  const cartItems = (id) => {
    const produit = produits.find((produit) => produit.id === id) 

    const array2 = [...selecProduits, produit]
    setSelecProduits(array2)
  }

  const displayList = (category) => {
    const produitsFilter = produits.filter(
      (produits) => produits.categorie === category,
    )
    setListProduit(produitsFilter)
  }

  const allProduits = () => {
    setListProduit(produits)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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
            listProduit={listProduit}
            displayList={displayList}
            categories={categories}
            allProduits={allProduits}
          />
        </Route>
        <Route path="/contact" exact>
          <Contact color={color.contact} />
        </Route>
        <Route path="/à-propos" exact>
          <About color={color.about} />
        </Route>
        <Route path="/panier" exact>
          <Cart color={color.tienda} selecProduits={selecProduits}/>
        </Route>
        <Route path="/produit/:id">
          <Produit
            color={color.produit}
            produits={produits}
            itemCount={itemCount}
            setItemCount={setItemCount}
            cartItems={cartItems}
                    />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
