import React from 'react';


const Categorie = ({ categories, allProduits, displayList}) => {

  const cssClass = 'categ'
  
 
  
  return (
    <div className="categorie">
      <ul className="ul">
        {categories.map((categorie) => 
          <li onClick={(event) => {
            displayList(categorie)
            event.target.className = 'categ selected'
          }} key={categorie} value={categorie} className={cssClass}>{categorie}</li>
        )}
        
        <li onClick={() => {
          allProduits()
        }} value="tout" className={cssClass} >tout </li>
      </ul>
      
    </div>
  );
};

export default Categorie;