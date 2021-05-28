import React from 'react'

const Produit = ({ data }) => {
  
  return (
    <div className="produit">
      <img src={data.flag} alt="produit-vase"></img>
      <div className="caption">
        <div className="about">
          <h2>{data.name}</h2>
          <p>{data.capital}</p>
          <p> {data.region}</p>
          <p> {data.population} </p>
        </div>
      </div>
    </div>
  )
}

export default Produit
