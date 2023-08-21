import React from 'react';
import "./AddProduct.css";

import {
  ADD_PRODUCT,
} from "../utils/actions";

export default function Contact() {
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

              <form className="contact-form" id="contactForm">
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Product name" required />
                  <label htmlFor="name">Product name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Description" required />
                  <label htmlFor="description">Description</label>
                </div>
                
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Price" required />
                  <label htmlFor="price">Price</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Quantity" required />
                  <label htmlFor="quantity">Quantity</label>
                </div>

                <label for="category">Choose a category:</label>
                <select id="catergory">
                  <option value="volvo">Candles</option>
                  <option value="saab">Diffusers</option>
                  <option value="fiat">Oils</option>
                  <option value="audi">Gifts</option>
                  <option value="audi">Homewares</option>
                </select>



                <hr className="divider" />

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
