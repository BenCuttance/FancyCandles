import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ADD_MULTIPLE_TO_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import Button from "../Button/Button";

import "./CartTable.css";

const CartTable = () => {
  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  const addToCart = (product) => {
    const itemInCart = cart.find((cartItem) => cartItem._id === product._id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...product, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...product, purchaseQuantity: 1 });
    }
  };

  const reduceInCart = (product) => {
    const itemInCart = cart.find((cartItem) => cartItem._id === product._id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) - 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) - 1,
      });
    }
  };

  const removeFromCart = (product) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: product._id,
    });

    idbPromise("cart", "delete", { ...product });
  };

  const renderCartItems = () => {
    if (!cart.length) {
      return <div>Your cart is empty.</div>;
    }

    return cart.map((product) => {
      return (
        <React.Fragment key={product._id}>
          <div className="cart-item-product-left">
            <img src={`/images/${product.image}`} />
            <Link
              to={`/products/${product._id}`}
              className="cart-item-product-name"
            >
              {product.name}
            </Link>
          </div>
          <div className="cart-item-product-right">
            <div className="cart-item-product-quantity">
              <Button
                variant="ghost"
                onClick={() => {
                  reduceInCart(product);
                }}
                className="cart-item-quantity-btn"
              >
                -
              </Button>
              <div className="cart-item-product-quantity-value">
                {product.purchaseQuantity}
              </div>
              <Button
                variant="ghost"
                onClick={() => addToCart(product)}
                className="cart-item-quantity-btn"
              >
                +
              </Button>
            </div>
            <div className="cart-item-product-price">
              USD {product.price * product.purchaseQuantity}
            </div>
            <div className="cart-item-product-remove">
              <Button
                onClick={() => {
                  removeFromCart(product);
                }}
                variant="plain"
              >
                Remove
              </Button>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return <div className="cart-table-container">{renderCartItems()}</div>;
};

export default CartTable;
