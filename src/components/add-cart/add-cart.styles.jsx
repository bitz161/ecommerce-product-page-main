import styled from "styled-components";

export const AddtoCartContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;

  @media (max-width: 500px) {
    flex-direction: column;
    height: 8rem;
  }
`;
export const AddMinusContainer = styled.section`
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(223, 223, 223, 0.493);
  justify-content: space-between;
  width: 40%;
  border-radius: 10px;
  & > p {
    font-weight: 700;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const AddMinusButton = styled.div`
  width: 30%;
  height: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddToCartButton = styled.div`
  height: 3.5rem;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: 700;
  color: white;
  background-color: hsl(26, 100%, 55%);
  border-radius: 10px;
  letter-spacing: 1px;
  font-size: 1.01rem;
  & > * {
    fill: white;
    margin-right: 1rem;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
