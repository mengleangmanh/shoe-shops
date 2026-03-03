import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function Cart() {
  const { items, removeItem, clearCart, totalQuantity } = useCart();

  if (items.length === 0) {
    return <div className="p-4">Your cart is empty</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart ({totalQuantity})</h2>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.id} className="flex justify-between items-center">
            <span>
              {i.name} x {i.quantity}
            </span>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() => removeItem(i.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <Button className="mt-4 bg-gray-200 text-black" onClick={clearCart}>
        Clear Cart
      </Button>
    </div>
  );
}
