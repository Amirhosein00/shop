import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

// Components
import Store from "./Foroshgah/components/Store";
import ProductDetails from "./Foroshgah/components/ProductDetails";
import ShopCart from "./Foroshgah/components/ShopCart";
import SignUp from "./login/components/SignUp";
import Login from "./login/components/Login";
import Home from "./Foroshgah/components/Home";

// Context
import ProductContextProvider from "./Foroshgah/context/ProductContextProvider";
import CartContextProvider from "./Foroshgah/context/CartContextProvider";
import Admin from "./Foroshgah/components/Admin";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} e />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
