import Thumbnail from "../thumbnail/thumbnail.component";
import "./main-content.styles.scss";
import { useContext } from "react";
import { PhotosContext } from "../../context/photos.context";
import ShowPhoto from "../show-photo/show-photo.component";

const MainContent = () => {
  const { setEnableModal, enableModal } = useContext(PhotosContext);

  return (
    <main className="maincontent-container">
      <section className="photo-container">
        <ShowPhoto />
        <Thumbnail />
      </section>
    </main>
  );
};

export default MainContent;
