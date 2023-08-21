
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { useMutation, useQuery } from "@apollo/client"; 
import { useStoreContext } from "../utils/GlobalState"; 
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_CURRENT_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../utils/actions";
import { idbPromise } from "../utils/helpers"; 
import Auth from "../utils/auth";
import Button from "../components/Button/Button";
import "./ProductDetail.css";
import { QUERY_PRODUCT } from "../utils/queries";

const ProductDetail = () => {
  const { id } = useParams();
  const [cartMessage, setCartMessage] = useState("");
  const { loading, data: { product: productData } = {} } = useQuery(
    QUERY_PRODUCT,
    {
      variables: {
        id,
      },
    }
  );
  const [state, dispatch] = useStoreContext();

  // const [deleteProductMutation] = useMutation(DELETE_PRODUCT);

  // const deleteProduct = async () => {
  //   try {
  //     await deleteProductMutation({
  //       variables: {
  //         productId: id,
  //       },
  //     });

  //     dispatch({
  //       type: DELETE_PRODUCT,
  //       productId: id,
  //     });

  //     idbPromise("products", "delete", id);
  //   } catch (error) {
  //     console.error("Error deleting product:", error.message);
  //   }
  // }; 

  useEffect(() => {
    if (productData) {
      dispatch({
        type: UPDATE_CURRENT_PRODUCT,
        currentProduct: productData,
      });
    }
  }, [productData, dispatch]);

  const { currentProduct, cart } = state;
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
      idbPromise("cart", "put", {
        ...currentProduct,
        purchaseQuantity: 1,
      });
    }
    setCartMessage("Your item has been added to cart.");
  };

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    const decoded = Auth.getDecodedToken(token);
    if (!state.user) {
      dispatch({
        type: "DECODE_TOKEN", // Replace with your actual action type
        decoded,
      });
    }
  }, [dispatch, state.user]);

  useEffect(() => {
    console.log("state", state);
  }, [state]);
  
  const getToken = () => {
    const token = localStorage.getItem("id_token");
    const decoded = Auth.getDecodedToken(token);
    return !!decoded;
  };

  return (
    <div className="product-detail-page">
      <img src={`/images/${currentProduct.image}`} alt={currentProduct.name} />
      <div className="product-detail-content">
        <div className="product-name">
          {currentProduct.name && currentProduct.name.toUpperCase()}
        </div>
        <p className="product-description">{currentProduct.description}</p>
        <div className="product-price">AUD {currentProduct.price}</div>
        <Button
          variant="ghost"
          style={{ width: "100%" }}
          onClick={addToCart}
        >
          ADD TO CART
        </Button>
        {state.user && state.user.isAdmin && <Button variant="ghost"> Delete Item </Button>}
        <br></br>
        {state.user && state.user.isAdmin && <Button variant="ghost"> Edit Item </Button>}
        <p>{cartMessage}</p>
      </div>
    </div>
  );
};

export default ProductDetail;