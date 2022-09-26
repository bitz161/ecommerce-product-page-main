import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  itemQuantity: 0,
  AddCartItems: () => {},
  RemoveCartItem: () => {},
});

const AddCartItem = (cartItems, productToAdd, quantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return (
        cartItem.id === productToAdd.id && {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
          actualPrize: (cartItem.discount / 100) * cartItem.prize,
          totalPrize: (cartItem.discount / 100) * cartItem.prize * quantity,
        }
      );
    });
  } else {
    return [
      {
        ...productToAdd,
        quantity: quantity,
        actualPrize: (productToAdd.discount / 100) * productToAdd.prize,
        totalPrize:
          (productToAdd.discount / 100) * productToAdd.prize * quantity,
      },
    ];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const AddCartItems = (productToAdd, quantity) => {
    setCartItems(AddCartItem(cartItems, productToAdd, quantity));
  };

  const RemoveCartItem = (idx) => {
    setCartItems(cartItems.filter((_, index) => index !== idx));
  };

  const value = {
    cartItems,
    setCartItems,
    AddCartItems,
    RemoveCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
