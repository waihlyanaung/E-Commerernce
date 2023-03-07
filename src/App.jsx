import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Guard from "./Component/Guard"
import AddProduct from "./Pages/AddProduct";
import Dashboard from "./Pages/Dashboard";

import Cart from "./Pages/Cart";
// 1
import Register from "./Pages/Register";
// import Login from "./Pages/Login";
import Login1 from "./Pages/Login1";
import Products from "./Pages/Products";
import Edit from "./Pages/Edit";
import Details from "./Pages/Details";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/products"
          element={
            <Guard>
              <Products />
            </Guard>
          }
        />

        <Route
          path="/cart"
          element={
            <Guard>
              <Cart />
            </Guard>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Guard>
              <AddProduct />
            </Guard>
          }
        />

        <Route
          path="/products/edit/:id"
          element={
            <Guard>
              <Edit />
            </Guard>
          }
        />



        <Route
          path="/products/details/:id"
          element={
            <Guard>
              <Details />
            </Guard>
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login1" element={<Login1 />} />
      </Routes>
    </>
  );
};
export default App;