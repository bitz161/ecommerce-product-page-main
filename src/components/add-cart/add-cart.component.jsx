import "./add-cart.styles.scss";
import { ReactComponent as MinusIcon } from "../../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/icon-plus.svg";
import { ReactComponent as CartLogo } from "../../assets/icons/icon-cart.svg";
const AddCart = () => {
  return (
    <div className="addtocart-container">
      <section className="addminus-container">
        <button>
          <MinusIcon />
        </button>
        <p>0</p>
        <button>
          <PlusIcon />
        </button>
      </section>
      <button>
        <CartLogo /> <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddCart;
