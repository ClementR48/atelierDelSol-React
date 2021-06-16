import{ Link } from "react-router-dom";

import picture1 from '../../images/homeImage1ter.jpg'
import picture2 from '../../images/homeImage2bis.jpg'

import React from 'react';

const HomeArticle = () => {
  return (
    <div className="home-article">
      <div className="article">
        <div className="informations">
          <h2 className="title">Parler avec la Terre</h2>
          <p className="text">Alberto Víctor de Clarence (8 de enero de 1864 - 14 de enero de 1892) fue el hijo mayor de Alberto Eduardo, príncipe de Gales —quien más tarde sería el rey Eduardo VII—, y de Alejandra, princesa de Gales y nieto de la monarca reinante, la reina Victoria del Reino Unido. Desde el momento de su nacimiento era el segundo en la línea de sucesión al trono, pero no llegó a ser rey porque murió antes que su padre y que su abuela. Alberto Víctor era conocido por su familia como «Eddy» y muchos biógrafos se han referido a él con este nombre coloquial.</p>
          <Link to="/tienda">Acceder au shop</Link> 
        </div>
        <div className="picture">
          <img src={picture1} alt="vase"></img>
        </div>
      </div>

      <div className="article2">
        <div className="informations">
          <h2 className="title">Revaloriser l'artisanat</h2>
          <p className="text">Alberto Víctor de Clarence (8 de enero de 1864 - 14 de enero de 1892) fue el hijo mayor de Alberto Eduardo, príncipe de Gales —quien más tarde sería el rey Eduardo VII—, y de Alejandra, princesa de Gales y nieto de la monarca reinante, la reina Victoria del Reino Unido. Desde el momento de su nacimiento era el segundo en la línea de sucesión al trono, pero no llegó a ser rey porque murió antes que su padre y que su abuela. Alberto Víctor era conocido por su familia como «Eddy» y muchos biógrafos se han referido a él con este nombre coloquial.</p>
          <Link to="/tienda">Acceder au shop</Link> 
        </div>
        <div className="picture">
          <img src={picture2} alt="vase"></img>
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;