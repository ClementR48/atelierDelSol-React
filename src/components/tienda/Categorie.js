import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Categorie = ({ categories, allProduits, choiceList }) => {

  const categs = useRef(null)
  const categ = useRef(null)
  

  useEffect(() => {
    gsap.from(categs.current , {duration: 1, y:-200, opacity:0 })
  }, [])



  const [selected, setSelected] = useState('tout')


  return (
    <div className="categorie">
      <ul className="ul" ref={categs}>
        {categories.map((categorie) => (
          <li
            onClick={(event) => {
              choiceList(categorie)
              setSelected(categorie)
              gsap.from(event.target, {duration: 0.5, y:-50, opacity:0, ease:'back'})
              
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
            gsap.from(categ.current, {duration: 1, y:-200, opacity:0 })
          }}
          data-value="tout"
          className={selected === 'tout' ? 'categ selected' : 'categ'} ref={categ}
        >
          Tout
        </li>
      </ul>
    </div>
  )
}

export default Categorie
