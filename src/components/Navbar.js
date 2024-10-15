import React from "react";
import "./Navbar.css";
import home from "../img/Frame-6.svg";
import pro from "../img/Frame-9.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <img src={home} alt="home" />
      </div>
      <div className="navbar-item">
        <img src={pro} alt="pro" />
      </div>
    </div>
  );
};

export default Navbar;
