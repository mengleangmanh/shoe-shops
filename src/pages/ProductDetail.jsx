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
      <div className="p-4">
        <h2>Product not found</h2>
        <Link to="/shop" className="text-blue-600">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="mb-4">Price: ${product.price.toFixed(2)}</p>
      <Button onClick={() => addItem(product)}>Add to cart</Button>
      <div className="mt-4">
        <Link to="/shop" className="text-blue-600">
          ← Back to shop
        </Link>
      </div>
    </div>
  );
}
