import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation(props) {
  const renderNavContent = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/orderHistory">Order History</Link>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      );
    }
  };

  return <div className="nav-container">{renderNavContent()}</div>;
}
