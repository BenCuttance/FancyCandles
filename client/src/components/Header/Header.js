import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const renderTopNav = () => {
    if (Auth.loggedIn()) {
      return (
        <div className="header-top-nav">
          <Link to="/orderHistory">Order History</Link>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </div>
      );
    } else {
      return (
        <div className="header-top-nav">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  };

  return (
    <div className="header-container">
      <div className="header-cart-bar">
        <div>Free standard delivery on orders over $79</div>
        <div>My Cart</div>
      </div>
      <div className="header-main">
        <div className="top">
          <Link to="/" className="logo-link">
            <div className="header-logo">Fancy Candles</div>
          </Link>

          {renderTopNav()}
        </div>
      </div>
    </div>
  );
}
