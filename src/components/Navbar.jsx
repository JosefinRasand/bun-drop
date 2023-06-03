import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo black.png";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to={"/home"}>
        <img className="logo" src={logo} alt="Bun Drop" />
      </Link>
      <div className="nav-center">
        <p className="title gold-text">BunDrop</p>
        <em className="black-text">Drop it like it's hot</em>
      </div>
      <div className="flex-container">
        <Link to={"/home"}>
          <p>Home</p>
        </Link>
        <Link to={"/menu"}>
          <p>Menu</p>
        </Link>
        <Link to={"/cart"}>
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
