import Home from "./pages/Home";
import{ BrowserRouter,Switch, Route } from "react-router-dom";
import Tienda from "./pages/Tienda";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Produit from "./pages/Produit";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tienda" exact component={Tienda} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/à-propos" exact component={About} />
        <Route path="/panier" exact component={Cart} />
        <Route path="/produit/" component={Produit} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
