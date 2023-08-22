
import React, { useState } from 'react';
import "./AddProduct.css";

import {
  ADD_PRODUCT,
} from "../utils/actions";

const categoriesData = {
  candle: "Candles",
  diffuser: "Diffusers",
  oil: "Oils",
  gift: "Gifts",
  homeware: "Homewares",
};

export default function AddProduct() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setProductDescription(event.target.value);
  };
  
  const handleProductPriceChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductDescription(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      category: selectedCategory,
      name: productName,
      description: productDescription,
      image: productImage,
      price: productPrice,
      quantity: productQuantity,
    };
    console.log("New product:", newProduct);
  };

  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container-contact">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h2 className="heading">ADD Product</h2>
                <hr className="divider" />
              </div>

              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Product name" required onChange={handleProductNameChange} />
                  <label htmlFor="name">Product name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="description" type="text" placeholder="Description" required onChange={handleProductDescriptionChange} />
                  <label htmlFor="description">Description</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Image" required onChange={handleProductImageChange} />
                  <label htmlFor="image">Image</label>
                </div>
                
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Price" required onChange={handleProductPriceChange} />
                  <label htmlFor="price">Price</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Quantity" required onChange={handleProductQuantityChange} />
                  <label htmlFor="quantity">Quantity</label>
                </div>

                <div className="form-floating mb-3">
                  <label htmlFor="category">Choose a category:</label>
                  <select
                    id="category"
                    className="form-control"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="">Select a category</option>
                    {Object.keys(categoriesData).map((categoryId) => (
                      <option key={categoryId} value={categoryId}>
                        {categoriesData[categoryId]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}