import { createContext, useState } from "react";

const products = {
  sneaker: {
    id: 0,
    name: "Fall Limited Edition Sneakers",
    details:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everythingthe weather can offer.",
    discount: 50,
    prize: 250,
  },
};

export const ProductContext = createContext({
  product: {},
});

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    ...products,
  });

  const value = { productData, setProductData };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
