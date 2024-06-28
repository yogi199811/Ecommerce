import React, { useContext } from "react";
import style from "./Navbar.module.css";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { open, setOpen } = useContext(cartContext);
  const clickHandle = () => {
    
    setOpen(!open)
    console.log("hi");
  };
  return (
    <div
      style={{ fontFamily: "gilroy" }}
      className="  px-28 font-bold font-serif hover:underline  uppercase text-xl w-full flex items-center justify-evenly max-h-20 bg-black"
    >
      <h1 className={`${style.one}`}>home</h1>
      <h1><Link to={"/about"}>about</Link></h1>
      <h1>contact</h1>

      <button onClick={clickHandle}>❌</button>
    </div>
  );
};

export default Navbar;