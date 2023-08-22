import React, { useEffect, useState } from "react";
import "./AddProduct.css";

import { UPDATE_CATEGORIES } from "../utils/actions";
import { QUERY_CATEGORIES } from "../utils/queries";
import { ADD_PRODUCT as ADD_PRODUCT_MUTATION } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { useMutation, useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import Button from "../components/Button/Button";

export default function AddProduct() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const [addProduct] = useMutation(ADD_PRODUCT_MUTATION);

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

  const [selectedCategory, setSelectedCategory] = useState(
    categories?.[0]?._id || ""
  );
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  // const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const [formMessage, setFormMessage] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  // const handleProductImageChange = (event) => {
  //   setProductDescription(event.target.value);
  // };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newProduct = {
        category: selectedCategory,
        name: productName,
        description: productDescription,
        // use a default image for now
        image: "Diffuser-botanical.jpg",
        price: Number.parseFloat(productPrice),
        quantity: Number.parseInt(productQuantity),
      };
      await addProduct({
        variables: newProduct,
      });
      setFormMessage("Product has been added.");
    } catch (err) {
      setFormMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="add-product-heading">Add Product</h1>

      <form
        className="add-product-form"
        id="contactForm"
        onSubmit={handleSubmit}
      >
        <div className="add-product-form-field">
          <label htmlFor="name">Product name</label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Product name"
            required
            onChange={handleProductNameChange}
          />
        </div>

        <div className="add-product-form-field">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            id="description"
            type="text"
            placeholder="Description"
            required
            onChange={handleProductDescriptionChange}
          />
        </div>

        <div className="add-product-form-field">
          <label htmlFor="price">Price</label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Price"
            required
            onChange={handleProductPriceChange}
          />
        </div>

        <div className="add-product-form-field">
          <label htmlFor="quantity">Quantity</label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Quantity"
            required
            onChange={handleProductQuantityChange}
          />
        </div>

        <div className="add-product-form-field">
          <label htmlFor="category">Choose a category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit">Submit</Button>

        {formMessage && <div className="form-message">{formMessage}</div>}
      </form>
    </div>
  );
}
