import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="/images/home-banner.png" />
      <div className="banner-content">
        <div className="banner-heading">This is my favorite</div>
        <button>Browse categories</button>
      </div>
    </div>
  );
};

export default Banner;
