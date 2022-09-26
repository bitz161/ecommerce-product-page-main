import "./add-cart.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as MinusIcon } from "../../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/icon-plus.svg";
import { ReactComponent as CartLogo } from "../../assets/icons/icon-cart.svg";
const AddCart = ({ cartProduct }) => {
  const { AddCartItems } = useContext(CartContext);
  const handleAddItems = (data, quantity) => {
    AddCartItems(data, quantity);
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
    <div className="addtocart-container">
      <section className="addminus-container">
        <button onClick={handleMinusQuantity}>
          <MinusIcon />
        </button>
        <p>{itemQuantity}</p>
        <button onClick={handleAddQuantity}>
          <PlusIcon />
        </button>
      </section>
      <button onClick={() => handleAddItems({ ...cartProduct }, itemQuantity)}>
        <CartLogo /> <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddCart;
