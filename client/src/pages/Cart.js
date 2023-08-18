import React from "react";
import CartTable from "../components/Cart/CartTable";
import Checkout from "../components/Checkout/Checkout";
import Auth from "../utils/auth";

import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-page-container">
      <h1 className="cart-page-heading">My cart</h1>
      <CartTable />

      <div className="cart-page-checkout">
        {Auth.loggedIn() ? (
          <Checkout />
        ) : (
          <div className="cart-page-login-text">
            Login to complete checkout.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
