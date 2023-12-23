import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          Made with ❤️ by <NavLink to="/owner">BIGBEASTISHANK</NavLink>
        </p>
      </footer>
    </>
  );
};

export default Footer;
