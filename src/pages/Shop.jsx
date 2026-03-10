import React from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Shop All Products
        </h1>
        <p className="text-gray-600">
          Discover our complete collection of premium footwear
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}
