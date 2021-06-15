import React from "react";

const CartItem = ({ name, quantity, findItem, updateCartItems, formatCurrency, removeItem }) => {
  const item = findItem(name);

  const handleChange = (name) => {
    const newQuantity = parseInt(document.getElementById(item.id).value);
    updateCartItems(item.name, newQuantity);
  };

  const handleRemove = () => removeItem(name)

  return (
    <div className="cart-item-container" >
      <div className="cart-item-img">
        <img src={item.img_url} alt={item.name} />
      </div>
      <div className="cart-item-name">{name}</div>
      <div className="cart-item-price">{formatCurrency(item.price100g)}</div>
      <div className="cart-quantity">
        <input
          onChange={handleChange}
          defaultValue={quantity}
          className="amount"
          id={item.id}
          type="number"
          min="1"
        ></input>
        <div onClick={handleRemove} className="remove">remove</div>
      </div>
      <div className="cart-item-total">{formatCurrency(quantity * item.price100g)}</div>
    </div>
  );
};

export default CartItem;
