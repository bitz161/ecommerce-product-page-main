import "./details.styles.scss";
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
      <section className="inner-details-container">
        <h1>Sneaker Company</h1>
        <h2>{name}</h2>
        <p>{details}</p>
      </section>
      <section className="price-container">
        <div>
          <h2>${((discount / 100) * prize).toFixed(2)}</h2>
          <p>{discount}%</p>
        </div>
        <p>${prize.toFixed(2)}</p>
      </section>
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
