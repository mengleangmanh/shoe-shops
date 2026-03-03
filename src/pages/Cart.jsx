import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function Cart() {
  const { items, removeItem, clearCart, totalQuantity, updateQuantity } =
    useCart();

  // គណនាតម្លៃសរុប
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-400">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
        Shopping Cart ({totalQuantity})
      </h2>

      <ul className="space-y-4">
        {items.map((i) => (
          <li
            key={i.id}
            className="flex flex-wrap items-center justify-between border-b pb-4 gap-4"
          >
            <div className="flex items-center gap-4">
              {/* បើមានរូបភាព ដាក់ត្រង់នេះ */}
              <img
                src={i.image}
                alt={i.name}
                className="w-16 h-16 object-cover rounded bg-gray-100"
              />
              <div>
                <h3 className="font-bold text-lg">{i.name}</h3>
                <p className="text-blue-600 font-semibold">${i.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* ផ្នែក បូក/ដក ចំនួនទំនិញ */}
              <div className="flex items-center gap-3 border rounded-lg px-2 py-1 bg-white shadow-sm">
                <button
                  className="text-lg font-bold px-2 hover:bg-gray-100 rounded"
                  onClick={() => updateQuantity(i.id, i.quantity - 1)}
                >
                  -
                </button>
                <span className="font-bold w-4 text-center">{i.quantity}</span>
                <button
                  className="text-lg font-bold px-2 hover:bg-gray-100 rounded"
                  onClick={() => updateQuantity(i.id, i.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* បង្ហាញតម្លៃសរុបតាមមុខទំនិញ */}
              <span className="font-bold text-gray-800 w-16 text-right">
                ${(i.price * i.quantity).toFixed(2)}
              </span>

              <button
                className="text-red-500 hover:text-red-700 font-medium"
                onClick={() => removeItem(i.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* ផ្នែកសរុបលុយខាងក្រោម */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow-inner">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-600 text-lg">Total Amount:</span>
          <span className="text-3xl font-extrabold text-green-600">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="flex-1 bg-white border border-gray-300 text-gray-600 py-3"
            onClick={clearCart}
          >
            Clear All
          </Button>
          <Button className="flex-1 bg-black text-white py-3 shadow-lg hover:bg-gray-800">
            Checkout Now
          </Button>
        </div>
      </div>
    </div>
  );
}
