import { createContext, useState } from "react";

export const MenuContext = createContext({
  activeMenu: false,
});

export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const value = { activeMenu, setActiveMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
