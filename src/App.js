import Home from "./pages/Home";
import{ BrowserRouter,Switch, Route } from "react-router-dom";
import Tienda from "./pages/Tienda";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Produit from "./pages/Produit";
import { useState } from "react";


function App() {


  const color = {
    home: 'rgb(254,166,129)',
    tienda: 'rgb(227,240,185)',
    contact: 'rgb(255,239,168)',
    about: 'rgb(255,212,189)',
    cart: '',
    produit: 'rgb(255,239,168)',
  };




  

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home color={color.home} /></Route>
        <Route path="/tienda" exact ><Tienda color={color.tienda}/> </Route>
        <Route path="/contact" exact ><Contact color={color.contact}/> </Route>
        <Route path="/à-propos" exact  ><About color={color.about}/> </Route>
        <Route path="/panier" exact  ><Cart color={color.tienda}/> </Route>
        <Route path="/produit/" ><Produit color={color.produit}/> </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
