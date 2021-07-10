import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';

import picture from '../../images/aproposMarieBisPetite.jpg'

const AboutMe = () => {

  const pictureMarie = useRef(null)
  const text = useRef(null)
  const title = useRef(null)

  useEffect(() => {
    gsap.from(pictureMarie.current , {opacity: 0, scale:0, duration:1})
    gsap.from(text.current , { opacity:0,  duration:1, x:1000, delay:1})
    gsap.from(title.current , { opacity:0,  duration:1, y:-200, delay:1})
    
  }, [])

  return (
    <main className="about-me">
      
        <img src={picture} alt="Marie" ref={pictureMarie}></img>
      
        <h2 ref={title}>À propos</h2>
        <p ref={text}>
        Alberto Víctor de Clarence (8 de enero de 1864 - 14 de enero de 1892) fue el hijo mayor de Alberto Eduardo, príncipe de Gales —quien más tarde sería el rey Eduardo VII—, y de Alejandra, princesa de Gales y nieto de la monarca reinante, la reina Victoria del Reino Unido. Desde el momento de su nacimiento era el segundo en la línea de sucesión al trono, pero no llegó a ser rey porque murió antes que su padre y que su abuela. Alberto Víctor era conocido por su familia como «Eddy» y muchos biógrafos se han referido a él con este nombre coloquial.
        Alberto Víctor de Clarence (8 de enero de 1864 - 14 de enero de 1892) fue el hijo mayor de Alberto Eduardo, príncipe de Gales —quien más tarde sería el rey Eduardo VII—, y de Alejandra, princesa de Gales y nieto de la monarca reinante, la reina Victoria del Reino Unido. Desde el momento de su nacimiento era el segundo en la línea de sucesión al trono, pero no llegó a ser rey porque murió antes que su padre y que su abuela. Alberto Víctor era conocido por su familia como «Eddy» y muchos biógrafos se han referido a él con este nombre coloquial.
        </p>
      
      
    </main>
  );
};

export default AboutMe;