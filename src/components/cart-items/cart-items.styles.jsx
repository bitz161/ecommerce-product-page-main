import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 1rem 0;
  background-color: white;
  position: absolute;
  top: 110px;
  right: 150px;
  width: 18rem;
  height: min-content;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    top: 5rem;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

export const CartFirstSection = styled.section`
  width: 100%;
  font-size: 0.9em;
  font-weight: 700;
  border-bottom: 1px solid gray;
  & > p {
    margin: 0 1rem 1rem 1rem;
  }
`;
export const CartItemsContainer = styled.section`
  margin: 1rem 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  & > div {
    width: 100%;
    margin: 0 0 0.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > img {
      width: 50px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      justify-content: center;
      align-self: stretch;
      & > p {
        color: gray;
      }
      & > div {
        color: gray;
        & > span {
          color: black;
          font-weight: 700;
        }
      }
    }
  }
  & > div:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  & > span {
    font-weight: 700;
    color: gray;
  }
`;

export const LastCartSection = styled.section`
  height: max-content;
  width: 90%;

  & > button {
    height: 2.5rem;
    width: 100%;
    border-radius: 10px;
    border: none;
    font-weight: 700;
  }
`;
