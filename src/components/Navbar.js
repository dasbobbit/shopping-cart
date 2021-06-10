import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartQuantity }) => {
  return (
    <nav className="nav-container">
      <h3>Olive Hut</h3>
      <ul className="nav-links">
        <Link to={process.env.PUBLIC_URL + '/'}>
          <li>Home</li>
        </Link>
        <Link to={process.env.PUBLIC_URL + '/shop'}>
          <li>Shop</li>
        </Link>
        <Link to={process.env.PUBLIC_URL + '/cart'}>
          <li>Cart ({cartQuantity})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
