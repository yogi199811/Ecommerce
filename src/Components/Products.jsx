// src/components/Product.js
import React from 'react';

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default Product;
