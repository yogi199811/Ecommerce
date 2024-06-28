import React, { useContext } from "react";
import style from "./Cart.module.css";
import cartContext from "../context/cartContext";

const Cart = ({ title, price, quantity, imgurl, id }) => {
  const { remove } = useContext(cartContext);

  return (
    <>
      <div
        className={`${style.cart} rounded-badge mt-3 text-black font-bold flex-col flex justify-center items-center`}
      >
        <img src={imgurl} alt="" width={100} height={100} />
        <h1 className=" text-black text-xl">{title}</h1>
        <h3>Price :: ${price}</h3>
        <h3>quantity :: {quantity}</h3>
        <button
          className=" bg-blue-500 outline-none rounded px-6 mb-1 text-violet-50"
          onClick={() => remove(id)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Cart;
