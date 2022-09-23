import styled from "styled-components";

export const NextPreviousContainer = styled.div`
  background-color: white;
  width: 3cqw;
  height: 3cqw;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  display: none;

  @media (max-width: 900px) {
    & {
      background-color: transparent;
    }
  }
  @media (max-width: 500px) {
    & {
      display: flex;
    }
  }
`;

export const ShowphotoContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border-radius: 20px;
  margin: 2rem 0;
  height: 28cqw;
  width: 28cqw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: url(${({ photoSrc }) => photoSrc});
  background-size: cover;
  @media (max-width: 900px) {
    & {
      height: 50cqw;
      width: 50cqw;
    }
  }
  @media (max-width: 500px) {
    & {
      height: 20rem;
      width: 100%;
      border-radius: 0;
      margin: 0;
    }
  }
`;

export const OuterNextPreviousContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
