import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ goToShop }) => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h3>The Olive Shack</h3>
        <p>
          Order fresh Olives via the online store, and have it prepared and
          delivered to your door next day. We have a superb range of
          mouth-watering Mediterranean Olives available, sourced from Greece,
          Italy and Spain and regularly visited by us to ensure you only receive
          top quality ingredients.
        </p>
        <p>
          We also have the option for you to book regular deliveries, have the
          products you want, delivered to your door at regular intervals that
          suit you.
        </p>
        <Link to="/shop">
          <button className="button">See Our Olives</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
