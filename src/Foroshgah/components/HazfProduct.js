import React, { useState } from "react";

import styles from "./shared/Product.module.css";

import axios from "axios";

const HazfProduct = ({ productData }) => {
  const [del, setDel] = useState(productData);
  const delProduct = async () => {
    const delData = await axios.delete(
      `https://shoping-cart.iran.liara.run/products/${productData._id}`
    );
    setDel({ delData });
  };

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={del.image} alt="product" />
      <h3>{del.title}</h3>
      <p>{`${del.price} $`}</p>
      <div className={styles.linkContainer}>
        <div className={styles.buttonHazfContainer}>
          <button onClick={delProduct}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HazfProduct;
