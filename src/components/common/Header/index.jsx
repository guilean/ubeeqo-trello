import React from "react";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Ubeeqo Branding" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
