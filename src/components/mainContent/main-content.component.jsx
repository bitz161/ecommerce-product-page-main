import Thumbnail from "../thumbnail/thumbnail.component";
import {
  MainContentContainer,
  PhotoContainer,
} from "./main-content.styles.jsx";
import { useContext } from "react";
import { PhotosContext } from "../../context/photos.context";
import ShowPhoto from "../show-photo/show-photo.component";

const MainContent = () => {
  const { setEnableModal, enableModal } = useContext(PhotosContext);

  return (
    <MainContentContainer>
      <PhotoContainer>
        <ShowPhoto />
        <Thumbnail />
      </PhotoContainer>
    </MainContentContainer>
  );
};

export default MainContent;
