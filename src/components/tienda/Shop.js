import { Link } from 'react-router-dom'

// Components
import Produit from './Produit'

const Shop = ({ listProduit }) => {
  
  return (
    <div className="shop">
      <div className="galerie">
        {listProduit.map((produit) => (
          <Link key={produit._id} to={`/produit/${produit._id}`}>
            <Produit {...produit} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop
