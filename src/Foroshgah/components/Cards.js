/* eslint-disable no-const-assign */
import React, { useContext, useState } from "react";
import styles from "./Store.module.css";

import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";

import { ProductsContext } from "../context/ProductContextProvider";
import Card from "./Card";

const Cards = () => {
  let searchProduct = "";
  const products = useContext(ProductsContext);
  const [handler1, sethandler1] = useState("jewelery");

  const [numberMustShow, setnumberMustShow] = useState(5);
  const [numberFewShow, setnumberFewShow] = useState(0);
  console.log(products);
  const leftHandler = () => {
    setnumberMustShow((prevNumber) => prevNumber - 4);
    setnumberFewShow((prevNumber) => prevNumber - 4);
    if (numberFewShow <= 0) {
      setnumberMustShow(5);
      setnumberFewShow(0);
    }
  };
  const rightHandler = () => {
    setnumberMustShow((prevNumber) => prevNumber + 4);
    setnumberFewShow((prevNumber) => prevNumber + 4);
    if (numberMustShow >= 21) {
      setnumberMustShow(21);
      setnumberFewShow(16);
    }
  };

  searchProduct = products.filter(
    (x) => numberFewShow < x.id && x.id < numberMustShow
  );

  const categoryHandler1 = () => {
    sethandler1("men's clothing");
    searchProduct = products.filter((x) => x.category.includes(handler1));
  };
  const categoryHandler2 = () => {
    sethandler1("jewelery");
    searchProduct = products.filter((x) => x.category.includes(handler1));
  };
  const categoryHandler3 = () => {
    sethandler1("electronics");
    searchProduct = products.filter((x) => x.category.includes(handler1));
    console.log(products);
  };
  const categoryHandler4 = () => {
    sethandler1("women's clothing");
    searchProduct = products.filter((x) => x.category.includes(handler1));
  };
  const categoryHandler5 = () => {
    sethandler1("");
  };

  return (
    <div>
      <div className={styles.category}>
        <button onClick={categoryHandler1}>men's clothing</button>
        <button onClick={categoryHandler2}>jewelery</button>
        <button onClick={categoryHandler3}>electronics</button>
        <button onClick={categoryHandler4}>women's clothing</button>
        <button onClick={categoryHandler5}>All</button>
      </div>

      <div className={styles.container}>
        <button className={styles.arrow} onClick={leftHandler}>
          <img src={left} alt="left" />
        </button>

        {searchProduct.map((product) => (
          <Card key={product.id} productData={product} />
        ))}
        <button className={styles.arrow}>
          <img src={right} alt="right" onClick={rightHandler} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
