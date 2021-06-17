
import Categorie from '../components/tienda/Categorie';
import Footer from '../components/header-footer/Footer';
import Header from '../components/header-footer/Header';
import Shop from '../components/tienda/Shop';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Tienda = () => {
  console.log();

  return (
    <div className="tienda">
      <Header />
      <Categorie />
      <Shop />
      <Footer />
      <SocialNetwork />
    </div>
  );
};

export default Tienda;