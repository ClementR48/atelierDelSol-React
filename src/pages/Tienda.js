import { useEffect, useState } from 'react'
import axios from 'axios'


import Categorie from '../components/tienda/Categorie'


import Shop from '../components/tienda/Shop'


const Tienda = ({ produits, setProduits }) => {

 

  const [listProduit, setListProduit] = useState([])


  
  // recuperation des catégories
  const allCategoriesAvecDoublon = produits.map((produit) => produit.categorie)

  // eviter doublons des categories
  const categories = allCategoriesAvecDoublon.filter(
    (ele, pos) => allCategoriesAvecDoublon.indexOf(ele) === pos,
  )

  //Liste des produits en fonction de la catégorie
  const choiceList = (category) => {
    const produitsFilter = produits.filter(
      (produits) => produits.categorie === category,
    )
    setListProduit(produitsFilter)
  }

  const allProduits = () => {
    setListProduit(produits)
  }

  useEffect(() => {
    
    const loadData =  async () => {
      const result = await axios('http://localhost:5500/products')
      setProduits(result.data)
      setListProduit(result.data)
    }
    loadData()
    
    
    
  }, [])

  return (
    <div className="tienda">
      
      <Categorie
        categories={categories}
        allProduits={allProduits}
        choiceList={choiceList}
      />
      <Shop listProduit={listProduit} />
      
    </div>
  )
}

export default Tienda
