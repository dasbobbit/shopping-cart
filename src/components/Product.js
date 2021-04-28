import React, { useState, useEffect } from "react";
import data from "../items.json";
import { Link } from "react-router-dom" 

const Product = (props) => {
  const item = (data.products.filter(item => props.product.name === item.name))[0]
  console.log(item)

  const handleAdd = () => {
    let _quantity = parseInt(document.getElementById("quantity").value);

    const itemToAdd = {
      name: item.name,
      quantity: _quantity,
      price: item.price100g,
    };

    props.addCartItem(itemToAdd);
  };

  return (
    <div className="product-container">
      <div className="left-col">
        <img src={item.img_url} alt={item.name} />
      </div>
      <div className="right-col">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="product-add">
          <div>{props.formatCurrency(item.price100g)} (100g)</div>
          Quanitity:
          <select name="" id="quantity" className="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {/* <input defaultValue="1" id="quantity" type="number" min="1"></input> */}
          <div>
            <Link to="/cart">
              <button className="button" onClick={handleAdd}>Add to Basket</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
