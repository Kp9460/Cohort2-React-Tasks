import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Navbar</h1>
      </div>
      <div className="nav">
        <NavLink style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}  to="/" end > Home </NavLink>

        <NavLink style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}  to="/About" > About </NavLink>

        <NavLink style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}  to="/Courses"> Courses  </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
