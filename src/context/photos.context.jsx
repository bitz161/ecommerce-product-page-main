import { createContext, useState } from "react";
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import Photo1 from "../assets/images/image-product-1.jpg";
import Photo2 from "../assets/images/image-product-2.jpg";
import Photo3 from "../assets/images/image-product-3.jpg";
import Photo4 from "../assets/images/image-product-4.jpg";

export const PhotosContext = createContext({
  thumbnail: [],
  photosList: [],
  selectPhoto: 0,
  enableModal: false,
});

export const PhotosProvider = ({ children }) => {
  const [thumbnail, setThumbnail] = useState([
    Thumbnail1,
    Thumbnail2,
    Thumbnail3,
    Thumbnail4,
  ]);
  const [photosList, setPhotoList] = useState([Photo1, Photo2, Photo3, Photo4]);
  const [selectPhoto, setSelectPhoto] = useState(0);
  const [enableModal, setEnableModal] = useState(false);
  const value = {
    photosList,
    thumbnail,
    selectPhoto,
    setSelectPhoto,
    enableModal,
    setEnableModal,
  };
  return (
    <PhotosContext.Provider value={value}>{children}</PhotosContext.Provider>
  );
};
