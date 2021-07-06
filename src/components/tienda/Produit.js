

const Produit = ({ titre, categorie, prix, image }) => {
  return (
    <div className="produit">
      <img src={image} alt="produit-vase"></img>
      <div className="caption">
        <div className="about">
          <h2>{titre}</h2>
          <p> {categorie}</p>
          <p> {prix}€</p>
        </div>
      </div>
    </div>
  )
}

export default Produit
