//Components
import Header from '../components/header-footer/Header';
import Image from '../components/home/Image';
import HomeArticle from '../components/home/HomeArticle';
import Footer from '../components/header-footer/Footer';
import SocialNetwork from '../components/social_network/SocialNetwork';

const Home = ({ color, anim, itemCount }) => {
  
 
  return (
    <div className="home">
      <Header anim={anim} itemCount={itemCount}/>
      <Image />
      <HomeArticle />
      <Footer color={color} />
      <SocialNetwork anim={anim}/>
    </div>
  );
};

export default Home;