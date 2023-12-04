import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "./style.js";

const Header = () => {
  return (
    <Navbar style={{}}>
      <h1><NavLink to="/">Website Page</NavLink></h1>
      <ul>
        <NavLink to="/admin">Admin</NavLink>
       
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </ul>
    </Navbar>
  );
};

export default Header;
