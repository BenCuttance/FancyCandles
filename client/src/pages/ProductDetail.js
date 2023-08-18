import Button from "../components/Button/Button";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { useStoreContext } from "../utils/GlobalState";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_CURRENT_PRODUCT,
} from "../utils/actions";
import { QUERY_PRODUCT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

import "./ProductDetail.css";

const ProductDetail = () => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [cartMessage, setCartMessage] = useState();

  const { loading, data: productData } = useQuery(QUERY_PRODUCT, {
    variables: {
      id,
    },
  });

  const { currentProduct, cart } = state;

  useEffect(() => {
    if (productData) {
      dispatch({
        type: UPDATE_CURRENT_PRODUCT,
        currentProduct: productData.product,
      });
    }
  }, [productData, loading, dispatch]);

  const addToCart = () => {
    setCartMessage("");
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
    setCartMessage("Your item has been added to cart.");
  };

  return (
    <div className="product-detail-page">
      <img src={`/images/${currentProduct.image}`} />
      <div className="product-detail-content">
        <div className="product-name">{currentProduct.name?.toUpperCase()}</div>
        <p className="product-description">{currentProduct.description}</p>
        <div className="product-price">AUD {currentProduct.price} </div>

        <Button
          onClick={() => {
            addToCart();
          }}
          variant="ghost"
          style={{ width: "100%" }}
        >
          ADD TO CART
        </Button>
        {cartMessage && (
          <div className="product-detail-cart-message">{cartMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
