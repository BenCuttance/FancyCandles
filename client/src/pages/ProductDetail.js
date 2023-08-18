

import Button from "../components/Button/Button";
import Cart from "../components/Cart";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { DECODE_TOKEN } from "../utils/actions";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";


import "./ProductDetail.css";

const product = {
  name: "Bianco Bergamot Candle",
  description:
    "Elevate your senses with the luxurious Bianco Bergamot Candle. Infused with the invigorating essence of bergamot oranges, this exquisite soy candle fills your space with a refreshing and uplifting aroma. The sleek and elegant design complements any decor, making it a perfect addition to your home. Light up the Bianco Bergamot Candle to create an inviting atmosphere that revitalizes your surroundings and leaves a lasting impression.",
  image: "Candle-bianco-bergamot.png",
  category: 1,
  price: 11.99,
  quantity: 500,
};

const ProductDetail = () => {

  
    let [state, dispatch] = useStoreContext();
  
  useEffect(() => {
    const token = localStorage.getItem("id_token");
    let decoded = Auth.getDecodedToken(token);

    if (!state.user) {
        dispatch({
          type: DECODE_TOKEN,
          decoded
        });
      }
  
  }, [])
  
  useEffect(() => {
    console.log("state", state)
  }, [state])

  const getToken = () => {
    const token = localStorage.getItem("id_token");
    let decoded = Auth.getDecodedToken(token);

    if (decoded) {
      return true;
    } else {
      return false
    }
  }


  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };


  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };



  return (
    <div className="product-detail-page">
      <img src={`/images/${product.image}`} />
      <div className="product-detail-content">
        <div className="product-name">{product.name.toUpperCase()}</div>
        <p className="product-description">{product.description}</p>

 {state.user && state.user.isAdmin && <p> ADMIN VIEW </p>}
        <div className="product-price">AUD {product.price}{' '}</div>

        <Button onClick={addToCart} variant="ghost" style={{ width: "100%" }}>

          ADD TO CART
        </Button>
         {state.user && state.user.isAdmin &&<Button variant="plain" > Delete Item</Button> }
        <br></br>
        {state.user && state.user.isAdmin && <Button variant="plain" > Edit Item</Button> }

      </div>
      <Cart />
    </div>
  );
};

export default ProductDetail;


