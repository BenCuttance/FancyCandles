import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { QUERY_CATEGORIES } from "../../utils/queries";
import "./CategoryList.css";

const CategoryList = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

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

  const handleClick = (id) => {
    navigate(`/category/${id}`);
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="category-list-section-container">
      <h2 className="category-list-heading">Browse categories</h2>
      <div className="category-list-container">
        {categories.map((category) => {
          return (
            <div
              key={category._id}
              className="category"
              onClick={() => handleClick(category._id)}
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
