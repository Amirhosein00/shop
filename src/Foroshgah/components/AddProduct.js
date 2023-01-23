import React, { useState } from "react";
import style from "./AddProduct.Module.css";

const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    number: 0,
    detail: "",
    img: [],
  });
  const submitHandler = (e) => {
    e.preventDefault();
    let file = e.target.img.files[0];
    setData({ img: file });
    console.log(data);
  };
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className={style.main}>
      <form onSubmit={submitHandler}>
        <p>image:</p>
        <input type="file" name="img" accept=".jpg,.png" />
        <br></br>
        <p>name:</p>
        <input
          type="text"
          name="name"
          value={data.name || ""}
          onChange={changeHandler}
          className={style.forms}
        />
        <br></br>
        <p>price:</p>
        <input
          type="number"
          name="number"
          value={data.number || ""}
          onChange={changeHandler}
          className={style.forms}
        />
        <span>$</span><br></br>
        <p>detail:</p>
        <input
          type="text"
          name="detail"
          value={data.detail || ""}
          onChange={changeHandler}
          className={style.forms}
        />
        <br></br>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default AddProduct;
