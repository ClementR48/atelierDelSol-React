
import Categorie from '../components/tienda/Categorie';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import Shop from '../components/tienda/Shop';
import SocialNetwork from '../components/social_network/SocialNetwork';



const Tienda = ({ color, listProduit, displayList, categories, allProduits ,displayProduit, itemCount }) => {

  
  return (
    <div className="tienda">
      <Header itemCount={itemCount}/>
      <Categorie
        categories={categories}
        allProduits={allProduits}
        displayList={displayList}
       
      />

      <Shop listProduit={listProduit} setListProduit={displayList} displayProduit={displayProduit}  />
      <Footer color={color}/>
      <SocialNetwork />
    </div>
  );
};

export default Tienda;