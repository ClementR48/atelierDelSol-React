import imageTest1 from '../../images/testImageShop1Bis.jpg'

const Produit = ({ titre, categorie, prix }) => {
  return (
    <div className="produit">
      <img src={imageTest1} alt="produit-vase"></img>
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
