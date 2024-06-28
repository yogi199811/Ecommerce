// src/screens/ProductsScreen.js
import React from 'react';
import Products  from "./Products"

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductScreen = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {productsArr.map((product, index) => (
          <Products key={index} title={product.title} price={product.price} imageUrl={product.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ProductScreen;