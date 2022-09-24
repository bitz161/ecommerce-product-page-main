import styled from "styled-components";

export const MainContentContainer = styled.main`
  margin: 3rem 0;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const PhotoContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    & {
      width: 100%;
      flex-direction: column;
    }
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const DetailsContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    width: 90%;
    margin: 2rem 0;
  }
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;
