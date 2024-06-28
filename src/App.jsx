// src/App.js
import React from "react";
import Navbar from "./Components/Navbar";
import CartItems from "./Components/CartItems";
import ProductScreen from "./Components/ProductScreen";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default App;
