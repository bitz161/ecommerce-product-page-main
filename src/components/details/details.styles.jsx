import styled from "styled-components";

export const InnerDetailsContainer = styled.section`
  & > h1 {
    color: hsl(26, 100%, 55%);
    font-size: 14px;
    text-transform: uppercase;
  }
  & > h2 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  & > p {
    color: gray;
  }
`;

export const PriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
  }
`;

export const FirstDivPrice = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;

  & > p {
    margin: 0 10px;
    padding: 2px;
    font-size: 0.9em;
    border-radius: 5px;
    color: orange;
    background-color: rgba($color: rgb(224, 224, 224), $alpha: 1);
  }
`;

export const PriceParagraph = styled.p`
  width: 50%;
  font-size: 0.9em;
  color: rgb(180, 180, 180);
  text-decoration: line-through;
  @media (max-width: 500px) {
    text-align: right;
  }
`;
