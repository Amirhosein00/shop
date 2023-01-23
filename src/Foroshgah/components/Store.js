import React, { useContext, useState } from "react";

// Components
import Product from "./shared/Product";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./Store.module.css";
import Navbar from "./shared/Navbar";

const Store = () => {
  const products = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [handler1, sethandler1] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  let searchProduct = "";
  if (search === "") {
    searchProduct = products.filter((x) => x.category.includes(handler1));
  } else {
    searchProduct = products.filter((x) => x.title.includes(search));
  }

  const categoryHandler1 = () => {
    sethandler1("men's clothing");
    searchProduct = products.filter((x) => x.category.includes(handler1));
  };
  const categoryHandler2 = () => {
    sethandler1("jewelery");
  };
  const categoryHandler3 = () => {
    sethandler1("electronics");
  };
  const categoryHandler4 = () => {
    sethandler1("women's clothing");
  };
  const categoryHandler5 = () => {
    sethandler1("");
  };
  return (
    <div>
      <Navbar />

      <input
        className={styles.search}
        type="text"
        placeholder="search"
        value={search}
        onChange={searchHandler}
      />

      <br></br>
      <div className={styles.category}>
        <button onClick={categoryHandler1}>men's clothing</button>
        <button onClick={categoryHandler2}>jewelery</button>
        <button onClick={categoryHandler3}>electronics</button>
        <button onClick={categoryHandler4}>women's clothing</button>
        <button onClick={categoryHandler5}>All</button>
      </div>

      <div className={styles.container}>
        {searchProduct.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
