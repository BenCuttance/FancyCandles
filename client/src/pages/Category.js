import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BrowseProductList from "../components/ProductList/BrowseProductList";
import "./Category.css";
import Cart from "../components/Cart";
import { QUERY_CATEGORIES, QUERY_PRODUCTS } from "../utils/queries";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_PRODUCT,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { idbPromise } from "../utils/helpers";
import { useQuery } from "@apollo/client";

const Category = () => {
  const { id: categoryId } = useParams();
  const navigate = useNavigate();

  const [state, dispatch] = useStoreContext();

  const { products, categories } = state;
  const category = categories.find((cat) => cat._id === categoryId);

  const { loading: loadingProducts, data: productsData } = useQuery(
    QUERY_PRODUCTS,
    {
      variables: {
        category: categoryId,
      },
    }
  );

  const { loading: loadingCategories, data: categoryData } =
    useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loadingCategories) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loadingCategories, dispatch]);

  useEffect(() => {
    if (productsData) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: productsData.products,
      });
      productsData.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loadingProducts) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [productsData, loadingProducts, dispatch]);

  const handleClick = (product) => {
    navigate(`/products/${product._id}`);
    dispatch({
      type: UPDATE_CURRENT_PRODUCT,
      currentProduct: product,
    });
  };

  return (
    <div>
      <div className="category-page-container">
        <img
          className="category-banner"
          src={`/images/${category?.imageBanner}`}
        />
        <h1 className="category-page-heading">{category?.name}</h1>
        <BrowseProductList
          products={products}
          handleClickProduct={handleClick}
        />
      </div>
      <Cart />
    </div>
  );
};

export default Category;
