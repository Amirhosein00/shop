import React from "react";
import style from "./Home.module.css";
import Banner from "./Banner";
import Cards from "./Cards";
import Navbar from "./shared/Navbar";

import ProductContextProvider from "../context/ProductContextProvider";
const Home = () => {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <div className={style.aa}>
          <Banner />
          <Cards />
        </div>
      </ProductContextProvider>
    </div>
  );
};

export default Home;
