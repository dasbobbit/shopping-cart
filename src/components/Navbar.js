import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartQuantity }) => {
  return (
    <nav className="nav-container">
      <h3>The Olive Shack</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart ({cartQuantity})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
