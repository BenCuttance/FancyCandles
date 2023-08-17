import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryList.css";

const categories = [
  { id: 1, name: "Candles", image: "Candle-bedroom.jpg" },
  { id: 2, name: "Diffusers", image: "Candle-bedroom.jpg" },
  { id: 3, name: "Oils", image: "Candle-bedroom.jpg" },
  { id: 4, name: "Gifts", image: "Candle-bedroom.jpg" },
  { id: 5, name: "Homewares", image: "Candle-bedroom.jpg" },
];

const CategoryList = () => {
  const navigate = useNavigate();
  return (
    <div className="category-list-section-container">
      <h2 className="category-list-heading">Browse categories</h2>
      <div className="category-list-container">
        {categories.map((category) => {
          return (
            <div
              key={category.name}
              className="category"
              onClick={() => navigate(`/category/${category.id}`)}
            >
              <img src={`/images/${category.image}`} />
              <div className="category-name">{category.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
