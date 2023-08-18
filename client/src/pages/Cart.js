import React from "react";
import CartTable from "../components/Cart/CartTable";

import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-page-container">
      <h1 className="cart-page-heading">My cart</h1>
      <CartTable />
    </div>
  );
};

export default Cart;
