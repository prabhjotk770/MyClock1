import React from "react";
import clock from "./images/clock.png";
import { Link } from "react-router-dom";
export default (Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <img src={clock} alt="Logo" className="logo" />;
        <Link to="/">
          <h3 style={{ color: "white", marginRight: "260px" }}> My Clock</h3>
        </Link>
        <Link to="/about">
          <h3 style={{ color: "white" }}>About</h3>
        </Link>
      </nav>
    </div>
  );
});
