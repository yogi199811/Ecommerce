import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/cartContext.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Review from "./Components/Review/Review.jsx";
import Signup from "./Components/Signup/Signup.jsx";

//  install above 4 pacakage and make routing

// const routerElements = createRoutesFromElements(
//   <Route path="/" element={<App />}>
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//   </Route>
// );

// const router = createBrowserRouter(routerElements);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/review/:reviweid" element={<Review />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
