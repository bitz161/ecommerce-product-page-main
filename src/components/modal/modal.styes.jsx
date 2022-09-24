import styled from "styled-components";

export const BackgroundBlur = styled.div`
  backdrop-filter: blur(2px);
  height: 100vh;
  width: 100%;
  position: absolute;
  isolation: isolate;
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    display: none;
  }

  & > div {
    width: 100%;
  }
  & > div:nth-of-type(1) {
    height: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;

    @media (max-width: 900px) {
      & {
        width: 40rem;
      }
    }

    & > div {
      width: 35cqw;
      height: 35cqw;
      margin: 20px 0;

      @media (max-width: 900px) {
        & {
          height: 70cqw;
          width: 70cqw;
        }
      }

      .nextprevious-buttons {
        display: flex;
      }
    }
  }
`;
