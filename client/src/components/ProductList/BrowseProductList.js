import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import "./BrowseProductList.css";

const BrowseProductList = (props) => {
  const { products } = props;
  const navigate = useNavigate();

  return (
    <div className="browse-products-container">
      {products.map((product) => {
        return (
          <div className="product-item">
            <img src={`/images/${product.image}`} />
            <div className="product-name">{product.name.toUpperCase()}</div> 
            <div className="product-price">AUD {product.price}</div>
            {/* TODO: replace 1 with actual id */}
            <Button variant="plain" onClick={() => navigate(`/products/1`)}>
              View details {">"}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default BrowseProductList;
