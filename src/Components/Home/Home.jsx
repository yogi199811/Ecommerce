import React from "react";
import Navbar from "../Navbar";
import CartItems from "../CartItems";
import ProductScreen from "../ProductScreen";

const Home = () => {

    return (
        <div>
          <h1 className=" w-fit mx-auto h-20  mt-6 p-5  items-center  flex justify-center font-bold  text-2xl">
            {" "}
            Hey ! welcome to world of shopping
          </h1>
    
          <main>
            <ProductScreen/>
            <CartItems/>
          </main>
        </div>
      );
 
};

export default Home;
