import React, { useEffect } from "react";
import Shopitem from "./Shopitem";
import data from "../items.json";

const Productspage = ({ formatCurrency }) => {

  return (
    <div className="shop-container">
      <h2 className="center">Olives</h2>
      <p>Take your pick from our wide selection of whole or pitted olives.</p>
      <div className="shop-items">
        {data.products.map((item) => (
            <Shopitem
              key={item.id}
              name={item.name}
              price100g={item.price100g}
              img_url={item.img_url}
              formatCurrency={formatCurrency}
            />
        ))}
      </div>
    </div>
  );
};

export default Productspage;
