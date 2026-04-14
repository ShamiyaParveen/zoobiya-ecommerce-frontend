import React from "react";
import HomeBanner from "../Component/HomeBanner/HomeBanner";
import Products from "../Component/ProductItem/Products";
import Categories from "../Component/CategoryItems/Categories";
import BestSeller from "../Component/BestSeller/BestSeller";
import About from "../Component/About/About";

const Home = () => {
  return (
    <>
      <HomeBanner />
   <Categories />

      <About />

      <Products />

      <BestSeller />

   
    </>
  );
};

export default Home;
