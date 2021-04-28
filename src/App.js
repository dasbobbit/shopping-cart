import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./items.json";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cartpage from "./components/Cartpage";
import Product from "./components/Product";
import Shop from "./components/Shop";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState();
  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    updateCartQuantity();
    updateTotalCost();
  }, [cartItems]);

  const findItem = (name) => data.products.find((item) => item.name === name);

  const addCartItem = (newItem) => {
    if (cartItems.some((element) => element.name === newItem.name)) {
      cartItems.forEach((item) => {
        if (item.name === newItem.name) {
          item.quantity += newItem.quantity;
          setCartItems([...cartItems]);
        }
      });
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeCartItem = (itemToRemove) =>
    setCartItems(cartItems.filter((item) => item.name !== itemToRemove));

  const updateCartQuantity = () => {
    setCartQuantity(cartItems.length);
  };

  const updateTotalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalCost(total);
  };

  const updateCartItems = (name, newQuantity) => {
    cartItems.forEach((item) => {
      if (item.name === name) {
        item.quantity = newQuantity;
        setCartItems([...cartItems]);
      }
    });
    console.log(totalCost);
  };

  const formatCurrency = (num) =>
    num.toLocaleString("en-UK", { style: "currency", currency: "GBP" });

  return (
    <Router>
      <div className="App">
        <Navbar cartQuantity={cartQuantity} />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/shop">
            <Shop formatCurrency={formatCurrency} />
          </Route>
          <Route
            exact
            path="/shop/:id"
            render={(routeProps) => (
              <Product
                product={findItem(routeProps.match.params.id)}
                addCartItem={addCartItem}
                formatCurrency={formatCurrency}
              />
            )}
          />
          <Route exact path="/cart">
            <Cartpage
              items={cartItems}
              totalCost={totalCost}
              findItem={findItem}
              formatCurrency={formatCurrency}
              updateCartItems={updateCartItems}
              subTotal={totalCost}
              removeItem={removeCartItem}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
