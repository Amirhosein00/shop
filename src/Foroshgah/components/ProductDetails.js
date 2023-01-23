import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = (Product) => {
  const { id } = useParams();
  const ids = id;
  const data = useContext(ProductsContext);
  const product = data.find((a) => (a.id = ids));

  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}>
          <span>Category:</span> {product.category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{product.price} $</span>
          <Link to="/products">Back to Shop</Link>D
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
