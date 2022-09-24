import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItem: {},
});

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  const value = { cartItem, setCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
