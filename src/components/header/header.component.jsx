import {
  HeaderContainer,
  NavlinksContainer,
  PageIcon,
  InnerLinksContainer,
  CartAndProfileContainer,
} from "./header.styles.jsx";
import { ReactComponent as CartLogo } from "../../assets/icons/icon-cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/icon-menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/icon-close.svg";
import ProfileImg from "../../assets/images/image-avatar.png";

import { useContext } from "react";
import { MenuContext } from "../../context/menu.context.jsx";

const HeaderPage = () => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  const handleSidebar = () => {
    setActiveMenu(!activeMenu);
  };

  return (
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
        <CartLogo />
        <img src={ProfileImg} alt="" />
      </CartAndProfileContainer>
    </HeaderContainer>
  );
};

export default HeaderPage;
