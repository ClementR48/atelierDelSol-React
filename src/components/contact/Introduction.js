import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";


const Introduction = () => {
  const intro = useRef(null)

  useEffect(() => {
    gsap.from(intro.current , { duration: 0.8, x:-300, opacity:0})
  }, [])

  return (
    <div className="introduction" ref={intro}>
      <h2>Demande de contact</h2>
      <p>Que vous soyez un particulier ou un professionnel, si vous avez une demande particulière ou besoin d’informations, n’hésitez pas à me contacter via ce formulaire et j’y répondrai avec plaisir.</p>
    </div>
  );
};

export default Introduction;