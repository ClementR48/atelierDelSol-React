import Home from "./pages/Home";
import{ BrowserRouter,Switch, Route } from "react-router-dom";
import Tienda from "./pages/Tienda";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Produit from "./pages/Produit";
import { useEffect, useState } from "react";
import produits from "./utils/produits";


function App() {
  const [ listProduit, setListProduit ] = useState(produits);
  const [ selected, setSelected ] = useState();
  const [ oneProduit, setOneProduit] = useState([])

  const color = {
    home: 'rgba(254,166,129,0.7)',
    tienda: 'rgba(227,240,185,0.7)',
    contact: 'rgba(255,239,168,0.7)',
    about: 'rgba(255,212,189,0.7)',
    cart: '',
    produit: 'rgba(255,239,168,0.7)',
  };

  const displayProduit = (id) => {
    const produit = produits.filter(produit => produit.id === id);
    setOneProduit(produit) 
  }
  
  const allCategories = produits.map((produit) => produit.categorie);
  const categories = allCategories.filter((ele, pos) => allCategories.indexOf(ele) === pos)
  
 
  const displayList = ((category) => {
    const produitsFilter = produits.filter(produits => produits.categorie === category);
    setListProduit(produitsFilter)
  });
  const allProduits = (() => {
    setListProduit(produits)
  })

  






  

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home color={color.home} />
        </Route>
        <Route path="/tienda" exact >
          <Tienda color={color.tienda}
            listProduit={listProduit}
            displayList={displayList}
            categories={categories}
            allProduits={allProduits}
            displayProduit={displayProduit}
            
          />
        </Route>
        <Route path="/contact" exact >
          <Contact color={color.contact}/>
        </Route>
        <Route path="/à-propos" exact  >
          <About color={color.about}/>
        </Route>
        <Route path="/panier" exact  >
          <Cart color={color.tienda}/>
        </Route>
        <Route path={`/produit/`} >
          <Produit color={color.produit}  oneProduit={oneProduit[0]} />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
