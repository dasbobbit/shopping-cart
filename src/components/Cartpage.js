import React from "react";
import CartItem from "./CartItem";
import data from "../items.json"
import { Link } from "react-router-dom";

const Cartpage = ({ items, findItem, updateCartItems, subTotal, formatCurrency, removeItem, handlePayment }) => {

  if (items.length < 1) {
    return (
      <div>

        <p>It's looking a little empty in here... Add some olives to your cart!</p>
        <Link to={process.env.PUBLIC_URL + '/shop'}>
          <button className="button">View Our Olives</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="cart-container">
        
        <div className="cart-grid-header">
          <div></div>
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {items.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            findItem={findItem}
            updateCartItems={updateCartItems}
            formatCurrency={formatCurrency}
            removeItem={removeItem}
          />
        ))}
        <div className="cart-grid">
          <h3 className="text">Subtotal</h3>
          <div className="amount">{formatCurrency(subTotal)}</div>
          <h3 className="text">Delivery</h3>
          <div className="amount">{formatCurrency(data.delivery_fee)}</div>
          <h3 className="text">Total</h3>
          <div className="amount">{formatCurrency(subTotal + data.delivery_fee)}</div>
          <Link to={process.env.PUBLIC_URL + '/'}>
            <button className="button" onClick={handlePayment}>Checkout and Pay</button>
          </Link>
          <Link to={process.env.PUBLIC_URL + '/shop'}>
            <button className="button">Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

};

export default Cartpage;
