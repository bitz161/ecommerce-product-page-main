import {
  InnerDetailsContainer,
  PriceContainer,
  FirstDivPrice,
  PriceParagraph,
} from "./details.styles.jsx";
import { useContext } from "react";
import { ProductContext } from "../../context/product-details.context";
import AddCart from "../add-cart/add-cart.component";
import { PhotosContext } from "../../context/photos.context";

const Details = () => {
  const { productData } = useContext(ProductContext);
  const { thumbnail, selectPhoto } = useContext(PhotosContext);
  const { name, details, discount, prize } = productData.sneaker;
  return (
    <>
      <InnerDetailsContainer>
        <h1>Sneaker Company</h1>
        <h2>{name}</h2>
        <p>{details}</p>
      </InnerDetailsContainer>
      <PriceContainer>
        <FirstDivPrice>
          <h2>${((discount / 100) * prize).toFixed(2)}</h2>
          <p>{discount}%</p>
        </FirstDivPrice>
        <PriceParagraph>${prize.toFixed(2)}</PriceParagraph>
      </PriceContainer>
      <AddCart
        cartProduct={{
          ...productData.sneaker,
          imageUrl: thumbnail[selectPhoto],
        }}
      />
    </>
  );
};

export default Details;

//  Sneaker Company

//   Fall Limited Edition Sneakers
