import React from "react";
import { Link } from "react-router-dom";

const Shopitem = (props) => {
  return (
    <div className="item-container">
      <Link to={process.env.PUBLIC_URL + `/shop/${props.name}`}>
        <img src={props.img_url} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <p>{props.formatCurrency(props.price100g)}</p>

      <Link to={process.env.PUBLIC_URL + `/shop/${props.name}`}>
        <button className="button">View Product</button>
      </Link>
    </div>
  );
};
export default Shopitem;
