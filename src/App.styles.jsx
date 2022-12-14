import styled from "styled-components";

export const AppContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    & {
      width: 100%;
    }
  }
`;
