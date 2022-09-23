import {
  NextPreviousContainer,
  ShowphotoContainer,
  OuterNextPreviousContainer,
} from "./show-photo.styles.jsx";
import { useContext } from "react";
import { PhotosContext } from "../../context/photos.context";
import { ReactComponent as PreviousIcon } from "../../assets/icons/icon-previous.svg";
import { ReactComponent as NextIcon } from "../../assets/icons/icon-next.svg";
import { ScreenContext } from "../../context/screenSize.content.jsx";
const ShowPhoto = () => {
  const { screenSize } = useContext(ScreenContext);

  const {
    photosList,
    selectPhoto,
    setSelectPhoto,
    enableModal,
    setEnableModal,
  } = useContext(PhotosContext);

  const handleModal = () => {
    if (enableModal === false && screenSize > 500) {
      setEnableModal(true);
    }
  };

  const handleNext = () => {
    if (selectPhoto === photosList.length - 1) {
      setSelectPhoto(0);
    } else {
      setSelectPhoto(selectPhoto + 1);
    }
  };

  const handlePrevious = () => {
    if (selectPhoto === 0) {
      setSelectPhoto(photosList.length - 1);
    } else {
      setSelectPhoto(selectPhoto - 1);
    }
  };

  return (
    <ShowphotoContainer
      photoSrc={photosList[selectPhoto]}
      onClick={handleModal}
    >
      <OuterNextPreviousContainer>
        <NextPreviousContainer
          className="nextprevious-buttons"
          onClick={handlePrevious}
        >
          <PreviousIcon />
        </NextPreviousContainer>

        <NextPreviousContainer
          className="nextprevious-buttons"
          onClick={handleNext}
        >
          <NextIcon />
        </NextPreviousContainer>
      </OuterNextPreviousContainer>
    </ShowphotoContainer>
  );
};

export default ShowPhoto;
