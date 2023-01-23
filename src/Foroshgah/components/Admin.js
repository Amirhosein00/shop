import React, { useContext, useState } from "react";
import style from "./Admin.module.css";
import { ProductsContext } from "../context/ProductContextProvider";
import styles from "./Store.module.css";
import HazfProduct from "./HazfProduct";
import AddProduct from "./AddProduct";
import axios from "axios";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Admin = () => {
  let del = "";
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);
  const [mem, setMem] = useState(false);
  const products = useContext(ProductsContext);
  const [member, setMember] = useState([]);
  const [visibleRight, setVisibleRight] = useState(false);
  const delHandler = () => {
    setShow(!show);
    setMem(false);
    setAdd(false);
    setVisibleRight(false);
  };
  const addHandler = () => {
    setShow(false);
    setMem(false);
    setAdd(!add);
    setVisibleRight(false);
  };
  const memHandler = async () => {
    setShow(false);
    setMem(!mem);
    setAdd(false);
    setVisibleRight(false);
    const members = await axios.get(
      "https://shoping-cart.iran.liara.run/users"
    );
    setMember(members.data);
  };

  return (
    <div className="card">
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <div className={style.admin}>
          <p> Admin</p>
        </div>
        <button className={style.button} onClick={addHandler}>
          Add Product
        </button>
        <button className={style.button} onClick={delHandler}>
          Delete Product
        </button>
        <button className={style.button} onClick={memHandler}>
          Users
        </button>
      </Sidebar>
      <button
        className={style.menuButton}
        icon="pi pi-arrow-left"
        onClick={() => setVisibleRight(true)}
      >
        Menu
      </button>
      <div className={style.Continer}>
        <div className={styles.container}>
          {products.map(
            (product) =>
              show === true && (
                <HazfProduct key={product.id} productData={product} />
              )
          )}

          {add === true && <AddProduct />}

          {mem === true &&
            member.map((a) => (
              <div key={a._id}>
                <ul>
                  <li>{a._id}</li>
                  <li>{a.name}</li>
                  <li>{a.email}</li>
                  <li>{a.password}</li>

                  <button
                    className={style.b}
                    onClick={async () => {
                      del = a._id;
                      await axios.delete(
                        `https://shoping-cart.iran.liara.run/users/${del}`
                      );
                      window.location.reload();
                    }}
                  >
                    Delete
                  </button>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <button className={style.c}>
        <Link to="/login"> Login </Link>
      </button>
    </div>
  );
};

export default Admin;
