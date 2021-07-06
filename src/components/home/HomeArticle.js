import{ Link } from "react-router-dom";

import articles_home from "../../utils/articles_home";
import picture1 from '../../images/homeImage1ter.jpg'




const HomeArticle = () => {
  return (
    <main className="home-article">
      <div className="article">
        <div className="informations">
          <h2 className="title">{articles_home[0].titre}</h2>
          <p className="text">{articles_home[0].description}</p>
          <Link to="/tienda">Acceder au shop</Link> 
          
        </div>
        <div className="picture">
          <img src={articles_home[0].image} alt="vase"></img>
        </div>
      </div>

      <div className="article2">
        <div className="informations">
          <h2 className="title">{articles_home[1].titre}</h2>
          <p className="text">{articles_home[1].description}</p>
          <Link to="/tienda">Acceder au shop</Link>
        </div>
        <div className="picture">
          <img src={picture1} alt="vase"></img>
        </div>
      </div>
    </main>
  );
};

export default HomeArticle;