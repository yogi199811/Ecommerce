import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/cartContext.jsx";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";

//  install above 4 pacakage and make routing


import About from "./Components/About/About.jsx";

const routerElements = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<About />} />
  </Route>
);

const router = createBrowserRouter(routerElements);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
