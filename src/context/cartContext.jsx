import { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
      id: Math.random().toLocaleString(),
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
      id: Math.random().toLocaleString(),
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,

      id: Math.random().toLocaleString(),
    },
  ]);

  const add = (id) => {
    value.filter((item) => item.id === id);
  };

  const remove = (id) => {
    setValue(value.filter((item) => item.id !== id));
  };

  return (
    <cartContext.Provider
      value={{ open, setOpen, remove, value, setValue, add }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
