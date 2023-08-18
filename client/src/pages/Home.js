import React from "react";
import Banner from "../components/Banner/Banner";
import CategoryList from "../components/CategoryList/CategoryList";

const Home = () => {
  return (
    <div className="page-container">
      <Banner />
      <CategoryList />
    </div>
  );
};

export default Home;
