import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 80%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    & {
      width: 100%;
    }
  }
`;
