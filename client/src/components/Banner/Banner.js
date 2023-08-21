import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
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
