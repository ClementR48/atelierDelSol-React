import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';



import  ImageMain  from "../../images/homeMainImage2.jpg";


const Image = () => {
  let Image = useRef(null) ;
  const els = useRef([])
  
  const textImage = "La céramique inspirée"

  const textImageSplit = textImage.split("")
  
  


   useEffect(() => {
    const timeLine = gsap.timeline({delay:0});
    timeLine.from(Image.current, {y:400, duration: 1, opacity:0})
    
    gsap.to(els.current[0], {y:-100 , duration:0.6, delay: 1, opacity:1,ease:'power4' })
    gsap.to(els.current[1], {y:-110 , duration:0.6, delay: 1.1, opacity:1,ease:'power4' })
    gsap.to(els.current[2], {y:-120 , duration:0.6, delay: 1.2, opacity:1,ease:'power4' })
    gsap.to(els.current[3], {y:-130 , duration:0.6,delay: 1.3, opacity:1,ease:'power4' })
    gsap.to(els.current[4], {y:-130 , duration:0.6,delay: 1.4, opacity:1,ease:'power4' })
    gsap.to(els.current[5], {y:-120 , duration:0.6,delay: 1.5, opacity:1,ease:'power4' })
    gsap.to(els.current[6], {y:-110 , duration:0.6,delay: 1.6, opacity:1,ease:'power4' })
    gsap.to(els.current[7], {y:-100 , duration:0.6,delay: 1.7, opacity:1,ease:'power4' })
    gsap.to(els.current[8], {y:-90 , duration:0.6,delay: 1.8, opacity:1, ease:'power4' })
    gsap.to(els.current[9], {y:-80 , duration:0.6,delay: 1.9,opacity:1, ease:'power4' })
    gsap.to(els.current[10], {y:-80 , duration:0.6,delay: 2, opacity:1,ease:'power4' })
    gsap.to(els.current[11], {y:-90 , duration:0.6,delay: 2.1, opacity:1,ease:'power4' })
    gsap.to(els.current[12], {y:-100 , duration:0.6,delay: 2.2, opacity:1,ease: "power4" })
    gsap.to(els.current[13], {y:-110 , duration:0.6,delay: 2.3, opacity:1,ease: "power4" })
    gsap.to(els.current[14], {y:-120 , duration:0.6,delay: 2.4, opacity:1,ease: "power4" })
    gsap.to(els.current[15], {y:-130 , duration:0.6,delay: 2.5, opacity:1,ease: "power4" })
    gsap.to(els.current[16], {y:-130 , duration:0.6,delay: 2.6, opacity:1,ease: "power4" })
    gsap.to(els.current[17], {y:-120 , duration:0.6,delay: 2.7, opacity:1,ease: "power4" })
    gsap.to(els.current[18], {y:-110 , duration:0.6,delay: 2.8, opacity:1,ease: "power4" })
    gsap.to(els.current[19], {y:-100 , duration:0.6,delay: 2.9, opacity:1,ease: "power4" })
    gsap.to(els.current[20], {y:-90 , duration:0.6,delay: 3, opacity:1,ease: "power4" })
    
    
  
  },[])  

  return (
    <div className="image" >
      <img ref={Image} src={ImageMain} alt="vases"></img>
      <div className="text">
        {textImageSplit.map((letter, index) => 
           <li ref={(element) => els.current[index] = element}  key={index}>{letter}</li>
        
        )}
      </div>
      
    </div>
  );
};

export default Image ;