import React from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const { addItem } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addItem} />
        ))}
      </div>
    </div>
  );
}
