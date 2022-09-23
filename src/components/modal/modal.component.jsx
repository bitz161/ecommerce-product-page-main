import Thumbnail from "../thumbnail/thumbnail.component";
import { BackgroundBlur, ModalContainer } from "./modal.styes.jsx";
import ShowPhoto from "../show-photo/show-photo.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/icon-close.svg";
import { useContext } from "react";
import { PhotosContext } from "../../context/photos.context";

const ModalComponent = () => {
  const { setEnableModal } = useContext(PhotosContext);

  const handleModal = () => {
    setEnableModal(false);
  };

  return (
    <>
      <BackgroundBlur />
      <ModalContainer>
        <CloseIcon className="close-icon" onClick={handleModal} />
        <div>
          <ShowPhoto />
        </div>

        <Thumbnail />
      </ModalContainer>
    </>
  );
};

export default ModalComponent;
