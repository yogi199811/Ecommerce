// src/components/Product.js
import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

const Product = ({ title, price, imageUrl,id }) => {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-xl bg-gray-400 m-4">
      <div className="  w-64 h-56 bg-red-400  bg-cover bg-center text-center items-center overflow-hidden ">
      <img className=" w-64 h-56 object-covercls" src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Price: ${price}</p>
        <Link to={`/review/${title}`}><p className="text-gray-700 text-base underline"> Review: </p></Link>
      </div>
      <button  className=" text-center p-3 m-5 rounded-xl bg-blue-50">Add to cart {id}</button>
    </div>
  );
};

export default Product;
