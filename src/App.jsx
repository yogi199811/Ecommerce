// src/App.js
import React from "react";
import Navbar from "./Components/Navbar";
import CartItems from "./Components/CartItems";
import ProductScreen from "./Components/ProductScreen";

function App() {
  return (
    
    <div className="App">
      <header className=" p-2">
        <Navbar />
        <h1 className=" w-fit mx-auto h-20  mt-6 p-5  items-center  flex justify-center font-bold  text-2xl">
          {" "}
          Hey ! welcome to world of shopping
        </h1>
      </header>
      
      <main>
        <ProductScreen/>
        <CartItems />
        
      </main>
    </div>
  );
}

export default App;
