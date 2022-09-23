import styled from "styled-components";

export const ThumnailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const ThumbnailImage = styled.img`
  width: 6cqw;
  border-radius: 10px;
  filter: ${({ selectPhoto, idx }) =>
    selectPhoto === idx ? "grayscale(2)" : "brightness(1)"};
  cursor: pointer;
  @media (max-width: 900px) {
    & {
      width: 15cqw;
    }
  }
`;
