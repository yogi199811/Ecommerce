import React, { useContext } from "react";
import style from "./Navbar.module.css";
import cartContext from "../context/cartContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { open, setOpen } = useContext(cartContext);
  const clickHandle = () => {
    setOpen(!open);
    console.log("hi");
  };
  return (
    <div
      style={{ fontFamily: "gilroy" }}
      className="  px-28  text-white font-bold font-serif hover:underline  uppercase text-xl w-full flex items-center justify-evenly max-h-20 bg-black"
    >
      <h1 className={`${style.one}`}>home</h1>
      <h1>
        <NavLink
          className={({ isActive }) => (isActive ? " text-red-600" : undefined)}
          to={"/about"}
        >
          {" "}
          about
        </NavLink>
      </h1>
      <h1>contact</h1>

      <button onClick={clickHandle}>❌</button>
    </div>
  );
};

export default Navbar;
