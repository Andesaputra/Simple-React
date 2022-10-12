import React from "react";
import "../style.css";

function Header() {
  const logo = require("../img/logo192.png");
  return (
    <nav>
      <img src={logo} alt="logo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Header;
