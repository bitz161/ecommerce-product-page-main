import "./cart-items.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as RemoveItem } from "../../assets/icons/icon-delete.svg";

const CartItems = () => {
  const { cartItems, RemoveCartItem } = useContext(CartContext);
  const handleRemove = (data) => {
    RemoveCartItem(data);
  };

  return (
    <div className="cart-container">
      <section>
        <p>Cart</p>
      </section>
      <section className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((data, idx) => {
            const { imageUrl, actualPrize, quantity, name, totalPrize } = data;
            return (
              <div key={idx}>
                <img src={imageUrl} alt={name} />
                <div>
                  <p>{name}</p>
                  <div>
                    {actualPrize.toFixed(2)} x {quantity}{" "}
                    <span>${totalPrize.toFixed(2)}</span>
                  </div>
                </div>
                <div onClick={() => handleRemove(idx)}>
                  <RemoveItem />
                </div>
              </div>
            );
          })
        ) : (
          <span>Your cart is empty</span>
        )}
      </section>
      {cartItems.length > 0 && (
        <section>
          <button>Checkout</button>
        </section>
      )}
    </div>
  );
};

export default CartItems;
