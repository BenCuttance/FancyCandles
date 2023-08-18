import React, { useEffect } from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useStoreContext } from '../utils/GlobalState';
import { DECODE_TOKEN } from "../utils/actions";



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

  
  return (
    <div className="product-detail-page">
      <img src={`/images/${product.image}`} />
      <div className="product-detail-content">
        <div className="product-name">{product.name.toUpperCase()}</div>
        <p className="product-description">{product.description}</p>
        <div className="product-price">AUD {product.price}</div>
      {state.user && state.user.isAdmin && <p> ADMIN VIEW </p>}
         <Button variant="ghost" style={{ width: "100%" }}>
          ADD TO CART
        </Button>
         {state.user && state.user.isAdmin &&<Button variant="plain" > Delete Item</Button> }
        <br></br>
        {state.user && state.user.isAdmin && <Button variant="plain" > Edit Item</Button> }

      </div>
    </div>
  );
};

export default ProductDetail;
