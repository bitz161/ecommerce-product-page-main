import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItem: [],
  itemQuantity: 0,
  AddCartItems: () => {},
  RemoveCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const AddCartItems = (data, quantity) => {
    setCartItem([
      ...cartItem,
      {
        ...data,
        quantity: quantity,
        actualPrize: (data.discount / 100) * data.prize,
        totalPrize: (data.discount / 100) * data.prize * quantity,
      },
    ]);
  };

  const RemoveCartItem = (idx) => {
    const newItems = cartItem.filter((data, index) => index !== idx);
    return setCartItem(newItems);
  };

  const value = {
    cartItem,
    setCartItem,
    AddCartItems,
    RemoveCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
