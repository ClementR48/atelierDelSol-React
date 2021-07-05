import { Link } from 'react-router-dom'

// Components
import Produit from './Produit'

const Shop = ({ listProduit }) => {
  return (
    <div className="shop">
      <div className="galerie">
        {listProduit.map((produit) => (
          <Link key={produit.id} to={`/produit/${produit.id}`}>
            <Produit {...produit} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop
