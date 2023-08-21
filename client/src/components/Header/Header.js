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
<<<<<<< HEAD
  let [state, dispatch] = useStoreContext();
=======
  const [state, dispatch] = useStoreContext();

  const navigate = useNavigate();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

>>>>>>> bb2ccf90f1d69d727b38aef03995f306082fca9a
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
<<<<<<< HEAD

    return true;
  };
=======
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
>>>>>>> bb2ccf90f1d69d727b38aef03995f306082fca9a

  const renderTopNav = () => {
    if (Auth.loggedIn() && getToken()) {
      return (
        <div className="header-top-nav">
          {state.user && state.user.isAdmin && (
<<<<<<< HEAD
            <Link to="/admin"> Admin View </Link>
=======
            <Link to="/addproduct"> Add product </Link>
>>>>>>> bb2ccf90f1d69d727b38aef03995f306082fca9a
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
        <div className="header-promotion">
          Free standard delivery on orders over $79
        </div>
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
<<<<<<< HEAD

=======
          {state.user && state.user.isAdmin && (
            <Link to="/admin"> Admin View </Link>
          )}
>>>>>>> bb2ccf90f1d69d727b38aef03995f306082fca9a
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
