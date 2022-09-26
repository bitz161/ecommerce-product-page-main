import {
  AddtoCartContainer,
  AddMinusContainer,
  AddMinusButton,
  AddToCartButton,
} from "./add-cart.styles.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as MinusIcon } from "../../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/icon-plus.svg";
import { ReactComponent as CartLogo } from "../../assets/icons/icon-cart.svg";
const AddCart = ({ cartProduct }) => {
  const { AddCartItems } = useContext(CartContext);
  const handleAddItems = (cartProduct, quantity) => {
    AddCartItems(cartProduct, quantity);
    setItemQuantity(0);
  };
  const [itemQuantity, setItemQuantity] = useState(0);

  const handleAddQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleMinusQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <AddtoCartContainer>
      <AddMinusContainer>
        <AddMinusButton onClick={handleMinusQuantity}>
          <MinusIcon />
        </AddMinusButton>
        <p>{itemQuantity}</p>
        <AddMinusButton onClick={handleAddQuantity}>
          <PlusIcon />
        </AddMinusButton>
      </AddMinusContainer>
      <AddToCartButton
        onClick={() => handleAddItems(cartProduct, itemQuantity)}
      >
        <CartLogo /> <span>Add to cart</span>
      </AddToCartButton>
    </AddtoCartContainer>
  );
};

export default AddCart;
