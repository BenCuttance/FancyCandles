import React, { useEffect } from "react";
import Auth from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useStoreContext } from "../../utils/GlobalState";
import {
  DECODE_TOKEN,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";

export default function Header(props) {
  const [state, dispatch] = useStoreContext();

  const navigate = useNavigate();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  const getToken = () => {
    const token = localStorage.getItem("id_token");
    let decoded = Auth.getDecodedToken(token);

    if (!state.user) {
      dispatch({
        type: DECODE_TOKEN,
        decoded,
      });
    }
    return true;
  };

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  const renderTopNav = () => {
    if (Auth.loggedIn() && getToken()) {
      return (
        <div className="header-top-nav">
          {state.user && state.user.isAdmin && (
            <Link to="/addproduct"> Add product </Link>
          )}
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
        <div>
          <Link to="/cart" className="header-cart-link">
            My Cart
          </Link>
        </div>
      </div>
      <div className="header-main">
        <div className="top">
          <Link to="/" className="logo-link">
            <div className="header-logo">Fancy Candles</div>
          </Link>
          {state.user && state.user.isAdmin && (
            <Link to="/admin"> Admin View </Link>
          )}
          {renderTopNav()}
        </div>
        <div className="bottom">
          {categories.map((category) => (
            <Link
              to={`/category/${category._id}`}
              className="category-link"
              onClick={() => handleClick(category._id)}
            >
              <div className="">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
