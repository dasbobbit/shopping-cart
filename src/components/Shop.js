import React, { useEffect } from "react";
import Shopitem from "./Shopitem";
import data from "../items.json";

const Productspage = ({ formatCurrency }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    console.log(data);
  };

  return (
    <div className="shop-container">
      <h4 className="center">Olives</h4>
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
