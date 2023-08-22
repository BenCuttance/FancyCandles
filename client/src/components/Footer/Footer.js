import React from "react";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Twitter } from "../../icons/twitter.svg";
import "./Footer.css";

const paymentImages = [
  "mastercard",
  "visa",
  "amex",
  "paypal",
  "afterpay",
  "applepay",
  "googlepay",
];

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="footer-section">
          <h5 className="footer-section-heading">Connect With Us</h5>
          <div className="footer-section-content">
            <a href="/" target="_blank" rel="noreferrer">
              <Facebook className="icon first" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <Instagram className="icon" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <Twitter className="icon last" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h5 className="footer-section-heading">
            Flexible &amp; Secure Payment Options
          </h5>
          <div className="footer-section-content footer-section-payment">
            {paymentImages.map((image) => (
              <img src={`/images/${image}.png`} key={image} />
            ))}
          </div>
        </div>
      </div>

      <div className="bottom">Copyright © 2023 Fancy Candles Pty Ltd</div>
    </div>
  );
}
