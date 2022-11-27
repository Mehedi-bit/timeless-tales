import React from "react";
import Logo from "../img/talesLogo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <p>
        Made with ❤️ and <strong>React.js</strong>
      </p>
    </footer>
  );
};

export default Footer;
