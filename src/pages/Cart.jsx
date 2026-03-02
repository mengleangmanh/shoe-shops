import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ${item.price}
        </p>
      ))}
    </div>
  );
}

export default Cart;
