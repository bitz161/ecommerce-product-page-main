import {
  HeaderContainer,
  NavlinksContainer,
  PageIcon,
  InnerLinksContainer,
  CartAndProfileContainer,
  CartIcon,
} from "./header.styles.jsx";

import { ReactComponent as MenuIcon } from "../../assets/icons/icon-menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/icon-close.svg";
import ProfileImg from "../../assets/images/image-avatar.png";

import { useContext } from "react";
import { MenuContext } from "../../context/menu.context.jsx";
import CartItems from "../cart-items/cart-items.component.jsx";
import { useState } from "react";

const HeaderPage = () => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const [openCart, setCartOpen] = useState(false);

  const handleSidebar = () => {
    setActiveMenu(!activeMenu);
  };

  const handleCartItems = () => {
    setCartOpen(!openCart);
  };

  return (
    <>
      <HeaderContainer activeMenu={activeMenu}>
        <NavlinksContainer>
          {activeMenu ? (
            <CloseIcon onClick={handleSidebar} className="menuoption" />
          ) : (
            <MenuIcon onClick={handleSidebar} className="menuoption" />
          )}
          <PageIcon />
          <InnerLinksContainer activeMenu={activeMenu}>
            <button>Collections</button>
            <button>Men</button>
            <button>Women</button>
            <button>About</button>
            <button>Contact</button>
          </InnerLinksContainer>
        </NavlinksContainer>
        <CartAndProfileContainer>
          <CartIcon onClick={handleCartItems} />

          <img src={ProfileImg} alt="" />
        </CartAndProfileContainer>
      </HeaderContainer>
      {openCart && <CartItems />}
    </>
  );
};

export default HeaderPage;
