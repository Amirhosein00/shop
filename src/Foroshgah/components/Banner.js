import React, { Component } from "react";
import style from "./Banner.module.css";
import banner from "./mountains-7ddde89.jpg";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className={style.back}>
        <img src={banner} alt="untain" className={style.back} />
        <div className={style.text}>
          <h1> Welcome My</h1>
          <p>
             <span>Shop</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
