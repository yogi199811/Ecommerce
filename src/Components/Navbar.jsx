import React, { useContext } from "react";
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
      className="  py-5 px-28  text-white font-bold font-serif hover:underline  uppercase text-xl w-full flex items-center justify-evenly max-h-28 bg-black"
    >
      <h1>
        <NavLink
          className={({ isActive }) => (isActive ? " text-red-600" : undefined)}
          to={"/"}
        >
          home
        </NavLink>
      </h1>
      <h1>
        <NavLink
          className={({ isActive }) => (isActive ? " text-red-600" : undefined)}
          to={"/about"}
        >
          {" "}
          about
        </NavLink>
      </h1>
      <h1>
        <NavLink
          className={({ isActive }) => (isActive ? " text-red-600" : undefined)}
          to={"/contact"}
        >
          contact
        </NavLink>
      </h1>



      <h1>
        <NavLink
          className={({ isActive }) => (isActive ? " text-red-600" : undefined)}
          to={"/help"}
        >
          help
        </NavLink>
      </h1>

      <button onClick={clickHandle}>❌</button>
    </div>
  );
};

export default Navbar;
