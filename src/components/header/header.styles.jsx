import styled from "styled-components";
import { ReactComponent as PageLogo } from "../../assets/icons/logo.svg";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 7rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsl(220, 14%, 75%);

  @media (max-width: 500px) {
    & {
      width: 90%;
      align-items: flex-start;
      padding-top: 20px;
      height: ${({ activeMenu }) => (activeMenu ? "18rem" : "5rem")};
      transition: height 1s;
    }
  }
`;

export const NavlinksContainer = styled.nav`
  width: 80%;
  display: flex;
  flex-direction: row;

  .menuoption {
    display: none;
    height: 40px;
  }
  @media (max-width: 500px) {
    & {
      height: 40px;
      align-items: center;
      justify-content: space-between;
      width: 70%;
      .menuoption {
        display: block;
        margin-top: 30px;
      }
    }
  }
`;
export const PageIcon = styled(PageLogo)`
  width: 200px;
  cursor: pointer;
  @media (max-width: 500px) {
    & {
      margin-top: 20px;
      width: 180px;
      height: 40px;
    }
  }
`;

export const InnerLinksContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
    color: hsl(219, 9%, 45%);
    margin: 0 3%;
  }

  @media (max-width: 500px) {
    & {
      flex-direction: column;
      display: ${({ activeMenu }) =>
        activeMenu
          ? "flex"
          : setTimeout(() => {
              "none";
            }, 2000)};
      opacity: ${({ activeMenu }) => (activeMenu ? "1" : "0")};
      align-items: flex-start;
      height: 40px;
      position: absolute;
      top: 5rem;
      transition: opacity 0.1s linear
        ${({ activeMenu }) => (activeMenu ? ".5s" : "0s")};
      & > button {
        margin: 0.5rem 0;
        letter-spacing: 1px;
      }
    }
  }
`;

export const CartAndProfileContainer = styled.section`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 40px;
  }

  @media (max-width: 500px) {
    & {
      width: 25%;
    }
  }
`;
