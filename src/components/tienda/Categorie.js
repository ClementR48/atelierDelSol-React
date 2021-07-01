import React, { useEffect, useState } from 'react';


const Categorie = ({ categories, allProduits, displayList}) => {

  
  const [ selected, setSelected ]= useState('tout')

  return (
    <div className="categorie">
      <ul className="ul">
        {categories.map((categorie) => 
          <li onClick={(event) => {
            displayList(categorie)
            setSelected(categorie)
            
           
          }} key={categorie} data-value={categorie} className={selected === categorie ? "categ selected" : "categ"}>{categorie}</li>
        )}
        
        <li onClick={(event) => {
          allProduits()
          setSelected('tout')
         
          
          
        }} data-value="tout" className={selected === 'tout' ? "categ selected" : "categ"} >tout</li>
      </ul>
      
    </div>
  );
};

export default Categorie;