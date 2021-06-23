
import Categorie from '../components/tienda/Categorie';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import Shop from '../components/tienda/Shop';
import SocialNetwork from '../components/social_network/SocialNetwork';
import produits from '../utils/produits';

import { useEffect, useState } from 'react';

const Tienda = ({ color, displayProduit }) => {


  const [ listProduit, setListProduit ] = useState([]);
  const [ selected, setSelected ] = useState([{ boolean: true, element: 'tout'}]);

  const allCategories = produits.map((produit) => produit.categorie);
  const categories = allCategories.filter((ele, pos) => allCategories.indexOf(ele) === pos)
  
 
  const displayList = ((category) => {
    const produitsFilter = produits.filter(produits => produits.categorie === category);
    setListProduit(produitsFilter)
  });
  const allProduits = (() => {
    setListProduit(produits)
  })
  
  useEffect(() => {
    setListProduit(produits)
  },[])


 

  return (
    <div className="tienda">
      <Header />
      <Categorie
        categories={categories}
        selected={selected}
        setSelected={setSelected}
        setListProduit={displayList}
        allProduits={allProduits}
      />

     <Shop listProduit={listProduit} setListProduit={displayList}  />
      <Footer color={color}/>
      <SocialNetwork />
    </div>
  );
};

export default Tienda;