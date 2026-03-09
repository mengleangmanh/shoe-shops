import React from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const { addItem } = useCart();

  return (
    <div className="p-11">
      <h2 className="text-2xl font-bold mb-6">Shop</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addItem} />
        ))}
      </div>
    </div>
  );
}
