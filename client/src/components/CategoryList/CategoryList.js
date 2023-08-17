import React from "react";
import "./CategoryList.css";

const categories = [
  { name: "Candles", image: "Candle-bedroom.jpg" },
  { name: "Diffusers", image: "Candle-bedroom.jpg" },
  { name: "Oils", image: "Candle-bedroom.jpg" },
  { name: "Gifts", image: "Candle-bedroom.jpg" },
  { name: "Homewares", image: "Candle-bedroom.jpg" },
];

const CategoryList = () => {
  return (
    <div className="category-list-section-container">
      <h2 className="category-list-heading">Browse categories</h2>
      <div className="category-list-container">
        {categories.map((category) => {
          return (
            <div key={category.name} className="category">
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
