import React from "react";
//import ProductList from "../components/ProductList";
//import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Banner from "../components/Banner/Banner";
import CategoryList from "../components/CategoryList/CategoryList";

const Home = () => {
  return (
    <div className="page-container">
      <Banner />
      <CategoryList />
      <Cart />
    </div>
  );
};

export default Home;
