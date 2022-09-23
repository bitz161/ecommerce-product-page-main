import Thumbnail from "../thumbnail/thumbnail.component";
import "./modal.styes.scss";
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
      <div className="background-blur" />
      <div className="modal-container">
        <CloseIcon className="close-icon" onClick={handleModal} />
        <div>
          <ShowPhoto />
        </div>

        <Thumbnail />
      </div>
    </>
  );
};

export default ModalComponent;
