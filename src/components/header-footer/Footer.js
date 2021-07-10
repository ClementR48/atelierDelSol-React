

import logo from "../../images/logo2petit.png"

const Footer = ({ color }) => {

  return (
    <footer style={{backgroundColor: color}} className="footer">
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