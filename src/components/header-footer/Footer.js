import color from '../../utils/color'

import logo from "../../images/logo2petit.png"
import { useLocation } from 'react-router-dom';

const Footer = () => {

  let location = useLocation()
  let style = ''

  if(location.pathname.startsWith('/produit/')){
    style = {backgroundColor: color[/produit/]}
  }else {
    style = {backgroundColor : color[location.pathname]}
  }

  return (
    <footer style={style} className="footer">
      <img src={logo} alt="logo"></img>
      <ul className="listSocialNetwork">
        <li><span>Email:</span> atelierDelSol@gmail.com</li>
        <li><span>Instagram:</span> @atelierDelSol</li>
        <li><span>Facebook:</span> Atelier Del Sol</li>
      </ul>
    </footer>
  );
};

export default Footer;