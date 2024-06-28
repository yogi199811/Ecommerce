import React, { useContext, useState } from "react";
import Cart from "./Cart";
import style from "./CartItems.module.css";
import cartContext from "../context/cartContext";


  

const CartItems = () => {
  const { open, value } = useContext(cartContext);
  




  return (
    <div className={`${style.contain} ${!open ? "hidden" : "block"}`}>
      {open &&
        value.map((item) => {
          return (
            <Cart
              key={item.id}
              imgurl={item.imageUrl}
              quantity={item.quantity}
              price={item.price}
              title={item.title}
              id={item.id}
            />
          );
        })}
    </div>
  );
};

export default CartItems;
