// src/components/Product.js
import React from "react";

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-xl bg-gray-400 m-4">
      <div className="  w-64 h-56 bg-red-400  bg-cover bg-center text-center items-center overflow-hidden ">
      <img className=" w-64 h-56 object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">Price: ${price}</p>
      </div>
      <button className=" text-center p-3 m-5 rounded-xl bg-blue-50">Add to cart</button>
    </div>
  );
};

export default Product;
