import Thumbnail from "../thumbnail/thumbnail.component";
import {
  MainContentContainer,
  PhotoContainer,
  DetailsContainer,
} from "./main-content.styles.jsx";
import { useContext } from "react";
import { PhotosContext } from "../../context/photos.context";
import ShowPhoto from "../show-photo/show-photo.component";
import Details from "../details/details.component";
import AddCart from "../add-cart/add-cart.component";

const MainContent = () => {
  const { setEnableModal, enableModal } = useContext(PhotosContext);

  return (
    <MainContentContainer>
      <PhotoContainer>
        <ShowPhoto />
        <Thumbnail />
      </PhotoContainer>
      <DetailsContainer>
        <Details />
        <AddCart />
      </DetailsContainer>
    </MainContentContainer>
  );
};

export default MainContent;
