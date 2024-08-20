import React, { useEffect } from "react";
import Info from "../component/Info";
import Categories from "../component/Categories";

import Hero from "../component/Hero";
import CategoriesTab from "../component/CategoriesTab";
import TopProducts from "../component/TopProducts";
import ProductFilter from "../component/ProductFilter";


const Home = () => {
 

  return (
    <div className="lg:mx-[100px] px-4 lg:px-0 ">
      <Hero/>
      
      <Categories/>
      <TopProducts/>
      <Info/>
    </div>
  );
};

export default Home;
