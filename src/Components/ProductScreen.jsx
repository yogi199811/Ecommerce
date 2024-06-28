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
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1718988056007-c85a778d33e9?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },


  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },

  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1718988056007-c85a778d33e9?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    title: 'Blue Color',
    price: 100,
    imageUrl: "https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
