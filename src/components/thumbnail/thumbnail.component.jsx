import { ThumnailContainer, ThumbnailImage } from "./thumbnail.styles.jsx";
import { useContext } from "react";
import { PhotosContext } from "../../context/photos.context";

const Thumbnail = () => {
  const { thumbnail, setSelectPhoto, selectPhoto } = useContext(PhotosContext);

  const handlePhoto = (idx) => {
    setSelectPhoto(idx);
  };
  return (
    <ThumnailContainer>
      {thumbnail.map((data, idx) => {
        return (
          <ThumbnailImage
            selectPhoto={selectPhoto}
            idx={idx}
            src={data}
            alt=""
            key={idx}
            onClick={() => handlePhoto(idx)}
          />
        );
      })}
    </ThumnailContainer>
  );
};

export default Thumbnail;
