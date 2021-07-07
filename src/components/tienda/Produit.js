

const Produit = ({ titre, prix, image }) => {
  return (
    <div className="produit">
      <img src={image} alt="produit-vase"></img>
      <div className="caption">
        <div className="about">
          <h3>{titre}</h3>
          <p>Prix: {prix}€</p>
        </div>
      </div>
    </div>
  )
}

export default Produit
