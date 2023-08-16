import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div className="page-container">
      <Banner />
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
