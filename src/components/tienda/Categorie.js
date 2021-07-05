import React, { useEffect, useState } from 'react'

const Categorie = ({ categories, allProduits, choiceList }) => {
  const [selected, setSelected] = useState('tout')

  return (
    <div className="categorie">
      <ul className="ul">
        {categories.map((categorie) => (
          <li
            onClick={() => {
              choiceList(categorie)
              setSelected(categorie)
            }}
            key={categorie}
            className={selected === categorie ? 'categ selected' : 'categ'}
          >
            {categorie}
          </li>
        ))}

        <li
          onClick={() => {
            allProduits()
            setSelected('tout')
          }}
          data-value="tout"
          className={selected === 'tout' ? 'categ selected' : 'categ'}
        >
          tout
        </li>
      </ul>
    </div>
  )
}

export default Categorie
