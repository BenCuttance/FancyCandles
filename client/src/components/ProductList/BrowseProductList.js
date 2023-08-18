import React from "react";
import Button from "../Button/Button";

import "./BrowseProductList.css";

const BrowseProductList = (props) => {
  const { products } = props;

  return (
    <div className="browse-products-container">
      {products.map((product) => {
        return (
          <div className="product-item">
            <img src={`/images/${product.image}`} />
            <div className="product-name">{product.name.toUpperCase()}</div>
            <div className="product-price">AUD {product.price}</div>
            <Button
              variant="plain"
              onClick={() => {
                props.handleClickProduct(product);
              }}
            >
              View details {">"}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default BrowseProductList;
