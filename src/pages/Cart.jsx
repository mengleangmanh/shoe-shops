import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";

export default function Cart() {
  const { items, removeItem, clearCart, totalQuantity, updateQuantity } =
    useCart();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some products to get started!
          </p>
          <Link
            to="/shop"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Shopping Cart ({totalQuantity})
        </h1>
        <p className="text-gray-600">
          Review your items and proceed to checkout
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                      <button
                        className="p-3 hover:bg-red-50 hover:text-red-600 rounded-l-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="px-4 py-3 bg-white border-x border-gray-200 min-w-[4rem] text-center">
                        <span className="font-bold text-gray-900 text-lg">
                          {item.quantity}
                        </span>
                      </div>
                      <button
                        className="p-3 hover:bg-green-50 hover:text-green-600 rounded-r-xl transition-all duration-200"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-bold text-lg text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clear Cart */}
          <div className="mt-6">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 font-medium flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All Items
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal ({totalQuantity} items)
                </span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">
                  ${(totalPrice * 0.08).toFixed(2)}
                </span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-blue-600">
                  ${(totalPrice * 1.08).toFixed(2)}
                </span>
              </div>
            </div>

            <a
              href="src/assets/aba.png"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Pay via ABA Bank</span>
            </a>

            <p className="text-xs text-gray-500 text-center mt-3">
              Secure payment powered by ABA Bank
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
