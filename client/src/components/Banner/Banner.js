import React from "react";
import Button from "../Button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="/images/home-banner.png" />
      <div className="banner-content">
        <div className="banner-heading">
          Bring new fragrances into your life
        </div>

        <a href="#browse-categories">
          <Button variant="ghost-dark">Browse categories</Button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
