import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();

  const product = products.find((p) => p.id === parseInt(id, 10));
  if (!product) {
    return (
      <div className="p-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link
          to="/shop"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl text-gray-600 mb-6">
          Price: ${product.price.toFixed(2)}
        </p>
        <Button onClick={() => addItem(product)} className="mb-6">
          Add to cart
        </Button>
      </div>

      <div className="text-center">
        <Link
          to="/shop"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition"
        >
          ← Back to shop
        </Link>
      </div>
    </div>
  );
}
